/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 37.1984, "KoPercent": 62.8016};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.005529, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.005529, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 500000, 314008, 62.8016, 4751.183477999954, 0, 30686, 2274.0, 2848.0, 2908.0, 2999.9900000000016, 949.0565428907124, 1462.8060014094674, 72.11442101500647], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 500000, 314008, 62.8016, 4751.183477999954, 0, 30686, 2274.0, 2848.0, 2908.0, 2999.9900000000016, 949.0565428907124, 1462.8060014094674, 72.11442101500647], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 199, 0.06337418154951466, 0.0398], "isController": false}, {"data": ["The operation lasted too long: It took 30,017 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,033 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,068 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,008 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 21, 0.006687727701205065, 0.0042], "isController": false}, {"data": ["The operation lasted too long: It took 30,018 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 296389, 94.38899645868895, 59.2778], "isController": false}, {"data": ["The operation lasted too long: It took 30,043 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,011 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 9.553896716007236E-4, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,001 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 21, 0.006687727701205065, 0.0042], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1522, 0.48470102672543375, 0.3044], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 15744, 5.013884996560598, 3.1488], "isController": false}, {"data": ["The operation lasted too long: It took 30,005 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 25, 0.007961580596672697, 0.005], "isController": false}, {"data": ["The operation lasted too long: It took 30,009 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 6.369264477338157E-4, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,073 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,025 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,028 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,012 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 9.553896716007236E-4, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,002 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 22, 0.007006190925071973, 0.0044], "isController": false}, {"data": ["The operation lasted too long: It took 30,015 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,034 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 6.369264477338157E-4, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,006 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,019 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,021 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 9.553896716007236E-4, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,070 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,040 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,013 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 6.369264477338157E-4, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,016 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 9.553896716007236E-4, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,045 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 6.369264477338157E-4, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,095 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,048 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,022 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 6.369264477338157E-4, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,003 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 26, 0.008280043820539604, 0.0052], "isController": false}, {"data": ["The operation lasted too long: It took 30,054 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 3.1846322386690787E-4, 2.0E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 500000, 314008, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 296389, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 15744, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1522, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 199, "The operation lasted too long: It took 30,003 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 26], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 500000, 314008, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 296389, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 15744, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1522, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 199, "The operation lasted too long: It took 30,003 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 26], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
