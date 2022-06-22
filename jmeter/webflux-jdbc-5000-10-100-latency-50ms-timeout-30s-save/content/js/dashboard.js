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

    var data = {"OkPercent": 62.2394, "KoPercent": 37.7606};
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
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.005566, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.005566, 500, 1500, "HTTP Request"], "isController": false}]}, function(index, item){
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
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 500000, 188803, 37.7606, 6751.457319999974, 2, 30510, 2179.0, 2699.0, 2724.0, 2817.0, 694.0839064152788, 679.3127597609019, 88.27569515973647], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request", 500000, 188803, 37.7606, 6751.457319999974, 2, 30510, 2179.0, 2699.0, 2724.0, 2817.0, 694.0839064152788, 679.3127597609019, 88.27569515973647], "isController": false}]}, function(index, item){
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
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 30,111 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,052 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0015889578025772896, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,033 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,059 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,027 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 150763, 79.85201506331997, 30.1526], "isController": false}, {"data": ["The operation lasted too long: It took 30,079 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,047 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0015889578025772896, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,001 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 56, 0.029660545648109406, 0.0112], "isController": false}, {"data": ["The operation lasted too long: It took 30,090 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1892, 1.0021027208254105, 0.3784], "isController": false}, {"data": ["The operation lasted too long: It took 30,020 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,031 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,009 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,028 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,012 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,002 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 55, 0.02913089304725031, 0.011], "isController": false}, {"data": ["The operation lasted too long: It took 30,051 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,019 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,021 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,070 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,038 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,032 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,058 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,040 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,029 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,013 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["500/Internal Server Error", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,048 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,050 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,067 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,041 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0015889578025772896, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,003 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 61, 0.03230880865240489, 0.0122], "isController": false}, {"data": ["The operation lasted too long: It took 30,086 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 144, 0.0762699745237099, 0.0288], "isController": false}, {"data": ["The operation lasted too long: It took 30,017 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,010 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,042 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,055 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,081 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,036 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,023 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 62, 0.032838461253263986, 0.0124], "isController": false}, {"data": ["The operation lasted too long: It took 30,024 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,018 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,030 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0015889578025772896, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,043 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,011 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,088 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,102 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,056 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 35633, 18.873111126412187, 7.1266], "isController": false}, {"data": ["The operation lasted too long: It took 30,005 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 45, 0.023834367038659342, 0.009], "isController": false}, {"data": ["The operation lasted too long: It took 30,037 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,063 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,015 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,034 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,006 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 3, 0.0015889578025772896, 6.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,053 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,072 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,064 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,026 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,016 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 2, 0.0010593052017181931, 4.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,045 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,082 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,007 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,035 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}, {"data": ["The operation lasted too long: It took 30,054 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 1, 5.296526008590966E-4, 2.0E-4], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 500000, 188803, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 150763, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 35633, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1892, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 144, "The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 62], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["HTTP Request", 500000, 188803, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 150763, "Non HTTP response code: java.net.SocketTimeoutException/Non HTTP response message: Read timed out", 35633, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Broken pipe (Write failed)", 1892, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset by peer (connect failed)", 144, "The operation lasted too long: It took 30,004 milliseconds, but should not have lasted longer than 30,000 milliseconds.", 62], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
