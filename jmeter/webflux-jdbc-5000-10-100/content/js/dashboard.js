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

    var data = {"OkPercent": 98.7238, "KoPercent": 1.2762};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.011826, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.011826, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 500000, 6381, 1.2762, 2290.777873999996, 1, 5450, 1700.0, 1959.0, 2000.0, 2065.0, 2107.58816041275, 307.61891226452974, 424.75748081831324], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 500000, 6381, 1.2762, 2290.777873999996, 1, 5450, 1700.0, 1959.0, 2000.0, 2065.0, 2107.58816041275, 307.61891226452974, 424.75748081831324], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 5,015 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,008 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,335 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,120 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,119 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,066 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,347 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,196 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1246, 19.52671994985112, 0.2492], "isController": false}, {"data": ["The operation lasted too long: It took 5,022 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,027 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,005 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 6, 0.09402914903620123, 0.0012], "isController": false}, {"data": ["The operation lasted too long: It took 5,325 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,049 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 5, 0.07835762419683436, 0.001], "isController": false}, {"data": ["The operation lasted too long: It took 5,253 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,277 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,039 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,344 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,006 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,177 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,117 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,091 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,020 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,029 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,031 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,042 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,345 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,319 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,198 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,018 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,007 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.047014574518100614, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,378 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,076 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 3, 0.047014574518100614, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,197 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,045 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,023 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,026 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,001 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11, 0.17238677323303558, 0.0022], "isController": false}, {"data": ["The operation lasted too long: It took 5,004 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 5, 0.07835762419683436, 0.001], "isController": false}, {"data": ["The operation lasted too long: It took 5,305 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,048 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,033 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,011 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,009 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.047014574518100614, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,317 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,052 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 5028, 78.79642689233663, 1.0056], "isController": false}, {"data": ["The operation lasted too long: It took 5,125 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,002 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 5, 0.07835762419683436, 0.001], "isController": false}, {"data": ["The operation lasted too long: It took 5,013 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,024 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,035 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.047014574518100614, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,057 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,230 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,084 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,362 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,014 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.03134304967873374, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,003 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 5, 0.07835762419683436, 0.001], "isController": false}, {"data": ["The operation lasted too long: It took 5,036 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,025 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,284 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.01567152483936687, 2.0E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 500000, 6381, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 5028, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1246, "The operation lasted too long: It took 5,001 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11, "The operation lasted too long: It took 5,005 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 6, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 5], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 500000, 6381, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 5028, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1246, "The operation lasted too long: It took 5,001 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11, "The operation lasted too long: It took 5,005 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 6, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 5], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
