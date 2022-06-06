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

    var data = {"OkPercent": 97.9204, "KoPercent": 2.0796};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.008061, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.008061, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 500000, 10398, 2.0796, 2462.3193559999663, 0, 5513, 1774.0, 4378.0, 4469.0, 4537.0, 1962.9859371687462, 514.8329351743524, 392.4071573595778], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 500000, 10398, 2.0796, 2462.3193559999663, 0, 5513, 1774.0, 4378.0, 4469.0, 4537.0, 1962.9859371687462, 514.8329351743524, 392.4071573595778], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 5,078 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,012 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,059 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,037 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,075 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1724, 16.58011155991537, 0.3448], "isController": false}, {"data": ["The operation lasted too long: It took 5,022 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,005 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 7, 0.06732063858434315, 0.0014], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1087, 10.453933448740143, 0.2174], "isController": false}, {"data": ["The operation lasted too long: It took 5,041 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,032 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,017 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,021 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,054 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 4, 0.03846893633391037, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,006 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.028851702250432775, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,088 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,080 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,031 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.028851702250432775, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,053 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,042 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,007 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.028851702250432775, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,087 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 3, 0.028851702250432775, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,076 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,098 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,090 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 243, 2.336987882285055, 0.0486], "isController": false}, {"data": ["The operation lasted too long: It took 5,089 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 4, 0.03846893633391037, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,004 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 9, 0.08655510675129832, 0.0018], "isController": false}, {"data": ["The operation lasted too long: It took 5,001 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11, 0.10578957491825351, 0.0022], "isController": false}, {"data": ["The operation lasted too long: It took 5,064 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,093 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,055 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,077 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,016 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,009 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,074 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 7231, 69.54221965762646, 1.4462], "isController": false}, {"data": ["The operation lasted too long: It took 5,096 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,002 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11, 0.10578957491825351, 0.0022], "isController": false}, {"data": ["The operation lasted too long: It took 5,051 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,079 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,095 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,003 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 9, 0.08655510675129832, 0.0018], "isController": false}, {"data": ["The operation lasted too long: It took 5,061 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 6, 0.05770340450086555, 0.0012], "isController": false}, {"data": ["The operation lasted too long: It took 5,047 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,083 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,072 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 1, 0.009617234083477592, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 5,094 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 2, 0.019234468166955183, 4.0E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 500000, 10398, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 7231, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1724, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1087, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 243, "The operation lasted too long: It took 5,001 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 500000, 10398, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 7231, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1724, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1087, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 243, "The operation lasted too long: It took 5,001 milliseconds, but should not have lasted longer than 5,000 milliseconds.", 11], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
