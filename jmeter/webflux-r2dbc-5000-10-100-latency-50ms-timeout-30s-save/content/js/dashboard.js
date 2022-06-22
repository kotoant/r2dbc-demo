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

    var data = {"OkPercent": 84.645, "KoPercent": 15.355};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.0, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 500000, 76775, 15.355, 16455.202224000095, 4, 30435, 11777.0, 30005.0, 30006.0, 30015.0, 301.0109754621873, 143.5042223044693, 52.17115642095542], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 500000, 76775, 15.355, 16455.202224000095, 4, 30435, 11777.0, 30005.0, 30006.0, 30015.0, 301.0109754621873, 143.5042223044693, 52.17115642095542], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 30,052 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,124 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,046 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,014 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 7, 0.009117551286225985, 0.0014], "isController": false}, {"data": ["The operation lasted too long: It took 30,162 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,008 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 7, 0.009117551286225985, 0.0014], "isController": false}, {"data": ["The operation lasted too long: It took 30,298 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,234 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,085 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1595, 2.077499185932921, 0.319], "isController": false}, {"data": ["The operation lasted too long: It took 30,157 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 5, 0.0065125366330185605, 0.001], "isController": false}, {"data": ["The operation lasted too long: It took 30,079 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,163 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,047 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 4, 0.005210029306414849, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,229 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,090 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,084 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,235 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,020 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,164 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,009 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 8, 0.010420058612829698, 0.0016], "isController": false}, {"data": ["The operation lasted too long: It took 30,116 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,060 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,012 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 5, 0.0065125366330185605, 0.001], "isController": false}, {"data": ["The operation lasted too long: It took 30,311 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,154 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,126 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,232 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,051 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,268 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,021 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,165 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,013 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,077 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,192 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,048 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 4, 0.005210029306414849, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,022 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,050 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,100 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,039 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,205 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,269 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,086 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 51, 0.06642787365678932, 0.0102], "isController": false}, {"data": ["The operation lasted too long: It took 30,191 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,198 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,212 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,094 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,133 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,074 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,081 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,316 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,036 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,023 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,120 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,171 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,018 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,043 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,011 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,061 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,226 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,282 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,056 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 73640, 95.91663953109736, 14.728], "isController": false}, {"data": ["The operation lasted too long: It took 30,005 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 169, 0.22012373819602735, 0.0338], "isController": false}, {"data": ["The operation lasted too long: It took 30,185 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,151 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,092 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,025 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,099 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,158 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,063 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,196 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,359 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,129 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,083 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,034 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,122 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,072 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,149 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,016 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,160 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,007 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 7, 0.009117551286225985, 0.0014], "isController": false}, {"data": ["The operation lasted too long: It took 30,372 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,054 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,104 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,111 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,065 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,097 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,215 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,033 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,059 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 6, 0.007815043959622273, 0.0012], "isController": false}, {"data": ["The operation lasted too long: It took 30,143 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,253 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,358 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,027 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,182 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,105 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,285 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,222 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,216 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,066 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,106 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,001 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 214, 0.2787365678931944, 0.0428], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 122, 0.15890589384565287, 0.0244], "isController": false}, {"data": ["The operation lasted too long: It took 30,181 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,071 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,057 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,031 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,356 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,028 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,261 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,002 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 223, 0.29045913383262784, 0.0446], "isController": false}, {"data": ["The operation lasted too long: It took 30,019 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 4, 0.005210029306414849, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,070 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,032 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,224 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,040 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,029 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,146 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,095 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,174 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,067 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,003 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 213, 0.2774340605665907, 0.0426], "isController": false}, {"data": ["The operation lasted too long: It took 30,108 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,136 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,172 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,017 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 4, 0.005210029306414849, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,231 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,049 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,010 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,042 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,062 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,055 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,114 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,380 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 222, 0.2891566265060241, 0.0444], "isController": false}, {"data": ["The operation lasted too long: It took 30,080 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,024 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,030 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,075 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,134 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,166 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,317 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,349 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,069 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,037 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,177 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,132 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,073 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,148 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,141 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,161 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,015 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,139 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,274 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,324 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,006 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 34, 0.04428524910452621, 0.0068], "isController": false}, {"data": ["The operation lasted too long: It took 30,053 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0026050146532074245, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,197 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,123 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,064 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,026 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0039075219798111365, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,227 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,091 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 4, 0.005210029306414849, 8.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,344 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,082 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,035 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,306 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,168 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,170 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 0.0013025073266037122, 2.0E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 500000, 76775, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 73640, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1595, "The operation lasted too long: It took 30,002 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 223, "The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 222, "The operation lasted too long: It took 30,001 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 214], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 500000, 76775, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 73640, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1595, "The operation lasted too long: It took 30,002 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 223, "The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 222, "The operation lasted too long: It took 30,001 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 214], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
