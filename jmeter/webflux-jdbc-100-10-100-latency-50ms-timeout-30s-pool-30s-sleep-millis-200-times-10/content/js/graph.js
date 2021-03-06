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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2571.0, "minX": 0.0, "maxY": 14350.0, "series": [{"data": [[0.0, 2571.0], [0.1, 2574.0], [0.2, 2577.0], [0.3, 2578.0], [0.4, 2579.0], [0.5, 2580.0], [0.6, 2581.0], [0.7, 2581.0], [0.8, 2582.0], [0.9, 2582.0], [1.0, 2583.0], [1.1, 2583.0], [1.2, 2583.0], [1.3, 2584.0], [1.4, 2585.0], [1.5, 2585.0], [1.6, 2585.0], [1.7, 2585.0], [1.8, 2585.0], [1.9, 2586.0], [2.0, 2586.0], [2.1, 2586.0], [2.2, 2586.0], [2.3, 2586.0], [2.4, 2586.0], [2.5, 2587.0], [2.6, 2587.0], [2.7, 2587.0], [2.8, 2587.0], [2.9, 2587.0], [3.0, 2587.0], [3.1, 2587.0], [3.2, 2587.0], [3.3, 2588.0], [3.4, 2588.0], [3.5, 2588.0], [3.6, 2588.0], [3.7, 2588.0], [3.8, 2588.0], [3.9, 2588.0], [4.0, 2588.0], [4.1, 2588.0], [4.2, 2588.0], [4.3, 2588.0], [4.4, 2588.0], [4.5, 2588.0], [4.6, 2588.0], [4.7, 2588.0], [4.8, 2589.0], [4.9, 2589.0], [5.0, 2589.0], [5.1, 2589.0], [5.2, 2589.0], [5.3, 2589.0], [5.4, 2589.0], [5.5, 2589.0], [5.6, 2589.0], [5.7, 2589.0], [5.8, 2589.0], [5.9, 2589.0], [6.0, 2589.0], [6.1, 2589.0], [6.2, 2589.0], [6.3, 2589.0], [6.4, 2589.0], [6.5, 2589.0], [6.6, 2589.0], [6.7, 2589.0], [6.8, 2589.0], [6.9, 2589.0], [7.0, 2590.0], [7.1, 2590.0], [7.2, 2590.0], [7.3, 2590.0], [7.4, 2590.0], [7.5, 2590.0], [7.6, 2590.0], [7.7, 2590.0], [7.8, 2590.0], [7.9, 2590.0], [8.0, 2590.0], [8.1, 2590.0], [8.2, 2590.0], [8.3, 2590.0], [8.4, 2590.0], [8.5, 2590.0], [8.6, 2590.0], [8.7, 2590.0], [8.8, 2590.0], [8.9, 2590.0], [9.0, 2590.0], [9.1, 2590.0], [9.2, 2590.0], [9.3, 2590.0], [9.4, 2591.0], [9.5, 2591.0], [9.6, 2591.0], [9.7, 2591.0], [9.8, 2591.0], [9.9, 2591.0], [10.0, 2591.0], [10.1, 2591.0], [10.2, 2591.0], [10.3, 2591.0], [10.4, 2591.0], [10.5, 2591.0], [10.6, 2591.0], [10.7, 2591.0], [10.8, 2591.0], [10.9, 2591.0], [11.0, 2591.0], [11.1, 2591.0], [11.2, 2591.0], [11.3, 2591.0], [11.4, 2591.0], [11.5, 2591.0], [11.6, 2591.0], [11.7, 2591.0], [11.8, 2591.0], [11.9, 2591.0], [12.0, 2591.0], [12.1, 2591.0], [12.2, 2592.0], [12.3, 2592.0], [12.4, 2592.0], [12.5, 2592.0], [12.6, 2592.0], [12.7, 2592.0], [12.8, 2592.0], [12.9, 2592.0], [13.0, 2592.0], [13.1, 2592.0], [13.2, 2592.0], [13.3, 2592.0], [13.4, 2592.0], [13.5, 2592.0], [13.6, 2592.0], [13.7, 2592.0], [13.8, 2592.0], [13.9, 2592.0], [14.0, 2592.0], [14.1, 2592.0], [14.2, 2592.0], [14.3, 2592.0], [14.4, 2592.0], [14.5, 2592.0], [14.6, 2592.0], [14.7, 2592.0], [14.8, 2592.0], [14.9, 2592.0], [15.0, 2592.0], [15.1, 2592.0], [15.2, 2593.0], [15.3, 2593.0], [15.4, 2593.0], [15.5, 2593.0], [15.6, 2593.0], [15.7, 2593.0], [15.8, 2593.0], [15.9, 2593.0], [16.0, 2593.0], [16.1, 2593.0], [16.2, 2593.0], [16.3, 2593.0], [16.4, 2593.0], [16.5, 2593.0], [16.6, 2593.0], [16.7, 2593.0], [16.8, 2593.0], [16.9, 2593.0], [17.0, 2593.0], [17.1, 2593.0], [17.2, 2593.0], [17.3, 2593.0], [17.4, 2593.0], [17.5, 2593.0], [17.6, 2593.0], [17.7, 2593.0], [17.8, 2593.0], [17.9, 2593.0], [18.0, 2593.0], [18.1, 2593.0], [18.2, 2593.0], [18.3, 2593.0], [18.4, 2593.0], [18.5, 2593.0], [18.6, 2593.0], [18.7, 2593.0], [18.8, 2593.0], [18.9, 2593.0], [19.0, 2593.0], [19.1, 2594.0], [19.2, 2594.0], [19.3, 2594.0], [19.4, 2594.0], [19.5, 2594.0], [19.6, 2594.0], [19.7, 2594.0], [19.8, 2594.0], [19.9, 2594.0], [20.0, 2594.0], [20.1, 2594.0], [20.2, 2594.0], [20.3, 2594.0], [20.4, 2594.0], [20.5, 2594.0], [20.6, 2594.0], [20.7, 2594.0], [20.8, 2594.0], [20.9, 2594.0], [21.0, 2594.0], [21.1, 2594.0], [21.2, 2594.0], [21.3, 2594.0], [21.4, 2594.0], [21.5, 2594.0], [21.6, 2594.0], [21.7, 2594.0], [21.8, 2594.0], [21.9, 2594.0], [22.0, 2594.0], [22.1, 2594.0], [22.2, 2594.0], [22.3, 2594.0], [22.4, 2594.0], [22.5, 2594.0], [22.6, 2594.0], [22.7, 2594.0], [22.8, 2594.0], [22.9, 2594.0], [23.0, 2594.0], [23.1, 2594.0], [23.2, 2594.0], [23.3, 2594.0], [23.4, 2594.0], [23.5, 2594.0], [23.6, 2594.0], [23.7, 2594.0], [23.8, 2594.0], [23.9, 2595.0], [24.0, 2595.0], [24.1, 2595.0], [24.2, 2595.0], [24.3, 2595.0], [24.4, 2595.0], [24.5, 2595.0], [24.6, 2595.0], [24.7, 2595.0], [24.8, 2595.0], [24.9, 2595.0], [25.0, 2595.0], [25.1, 2595.0], [25.2, 2595.0], [25.3, 2595.0], [25.4, 2595.0], [25.5, 2595.0], [25.6, 2595.0], [25.7, 2595.0], [25.8, 2595.0], [25.9, 2595.0], [26.0, 2595.0], [26.1, 2595.0], [26.2, 2595.0], [26.3, 2595.0], [26.4, 2595.0], [26.5, 2595.0], [26.6, 2595.0], [26.7, 2595.0], [26.8, 2595.0], [26.9, 2595.0], [27.0, 2595.0], [27.1, 2595.0], [27.2, 2595.0], [27.3, 2595.0], [27.4, 2595.0], [27.5, 2595.0], [27.6, 2595.0], [27.7, 2595.0], [27.8, 2595.0], [27.9, 2595.0], [28.0, 2595.0], [28.1, 2595.0], [28.2, 2595.0], [28.3, 2595.0], [28.4, 2595.0], [28.5, 2595.0], [28.6, 2595.0], [28.7, 2595.0], [28.8, 2595.0], [28.9, 2595.0], [29.0, 2596.0], [29.1, 2596.0], [29.2, 2596.0], [29.3, 2596.0], [29.4, 2596.0], [29.5, 2596.0], [29.6, 2596.0], [29.7, 2596.0], [29.8, 2596.0], [29.9, 2596.0], [30.0, 2596.0], [30.1, 2596.0], [30.2, 2596.0], [30.3, 2596.0], [30.4, 2596.0], [30.5, 2596.0], [30.6, 2596.0], [30.7, 2596.0], [30.8, 2596.0], [30.9, 2596.0], [31.0, 2596.0], [31.1, 2596.0], [31.2, 2596.0], [31.3, 2596.0], [31.4, 2596.0], [31.5, 2596.0], [31.6, 2596.0], [31.7, 2596.0], [31.8, 2596.0], [31.9, 2596.0], [32.0, 2596.0], [32.1, 2596.0], [32.2, 2596.0], [32.3, 2596.0], [32.4, 2596.0], [32.5, 2596.0], [32.6, 2596.0], [32.7, 2596.0], [32.8, 2596.0], [32.9, 2596.0], [33.0, 2596.0], [33.1, 2596.0], [33.2, 2596.0], [33.3, 2596.0], [33.4, 2596.0], [33.5, 2596.0], [33.6, 2596.0], [33.7, 2596.0], [33.8, 2596.0], [33.9, 2596.0], [34.0, 2596.0], [34.1, 2597.0], [34.2, 2597.0], [34.3, 2597.0], [34.4, 2597.0], [34.5, 2597.0], [34.6, 2597.0], [34.7, 2597.0], [34.8, 2597.0], [34.9, 2597.0], [35.0, 2597.0], [35.1, 2597.0], [35.2, 2597.0], [35.3, 2597.0], [35.4, 2597.0], [35.5, 2597.0], [35.6, 2597.0], [35.7, 2597.0], [35.8, 2597.0], [35.9, 2597.0], [36.0, 2597.0], [36.1, 2597.0], [36.2, 2597.0], [36.3, 2597.0], [36.4, 2597.0], [36.5, 2597.0], [36.6, 2597.0], [36.7, 2597.0], [36.8, 2597.0], [36.9, 2597.0], [37.0, 2597.0], [37.1, 2597.0], [37.2, 2597.0], [37.3, 2597.0], [37.4, 2597.0], [37.5, 2597.0], [37.6, 2597.0], [37.7, 2597.0], [37.8, 2597.0], [37.9, 2597.0], [38.0, 2597.0], [38.1, 2597.0], [38.2, 2597.0], [38.3, 2597.0], [38.4, 2597.0], [38.5, 2597.0], [38.6, 2597.0], [38.7, 2597.0], [38.8, 2597.0], [38.9, 2597.0], [39.0, 2597.0], [39.1, 2597.0], [39.2, 2597.0], [39.3, 2598.0], [39.4, 2598.0], [39.5, 2598.0], [39.6, 2598.0], [39.7, 2598.0], [39.8, 2598.0], [39.9, 2598.0], [40.0, 2598.0], [40.1, 2598.0], [40.2, 2598.0], [40.3, 2598.0], [40.4, 2598.0], [40.5, 2598.0], [40.6, 2598.0], [40.7, 2598.0], [40.8, 2598.0], [40.9, 2598.0], [41.0, 2598.0], [41.1, 2598.0], [41.2, 2598.0], [41.3, 2598.0], [41.4, 2598.0], [41.5, 2598.0], [41.6, 2598.0], [41.7, 2598.0], [41.8, 2598.0], [41.9, 2598.0], [42.0, 2598.0], [42.1, 2598.0], [42.2, 2598.0], [42.3, 2598.0], [42.4, 2598.0], [42.5, 2598.0], [42.6, 2598.0], [42.7, 2598.0], [42.8, 2598.0], [42.9, 2598.0], [43.0, 2598.0], [43.1, 2598.0], [43.2, 2598.0], [43.3, 2598.0], [43.4, 2598.0], [43.5, 2598.0], [43.6, 2598.0], [43.7, 2598.0], [43.8, 2598.0], [43.9, 2598.0], [44.0, 2599.0], [44.1, 2599.0], [44.2, 2599.0], [44.3, 2599.0], [44.4, 2599.0], [44.5, 2599.0], [44.6, 2599.0], [44.7, 2599.0], [44.8, 2599.0], [44.9, 2599.0], [45.0, 2599.0], [45.1, 2599.0], [45.2, 2599.0], [45.3, 2599.0], [45.4, 2599.0], [45.5, 2599.0], [45.6, 2599.0], [45.7, 2599.0], [45.8, 2599.0], [45.9, 2599.0], [46.0, 2599.0], [46.1, 2599.0], [46.2, 2599.0], [46.3, 2599.0], [46.4, 2599.0], [46.5, 2599.0], [46.6, 2599.0], [46.7, 2599.0], [46.8, 2599.0], [46.9, 2599.0], [47.0, 2599.0], [47.1, 2599.0], [47.2, 2599.0], [47.3, 2599.0], [47.4, 2599.0], [47.5, 2599.0], [47.6, 2599.0], [47.7, 2599.0], [47.8, 2599.0], [47.9, 2599.0], [48.0, 2599.0], [48.1, 2599.0], [48.2, 2599.0], [48.3, 2599.0], [48.4, 2599.0], [48.5, 2600.0], [48.6, 2600.0], [48.7, 2600.0], [48.8, 2600.0], [48.9, 2600.0], [49.0, 2600.0], [49.1, 2600.0], [49.2, 2600.0], [49.3, 2600.0], [49.4, 2600.0], [49.5, 2600.0], [49.6, 2600.0], [49.7, 2600.0], [49.8, 2600.0], [49.9, 2600.0], [50.0, 2600.0], [50.1, 2600.0], [50.2, 2600.0], [50.3, 2600.0], [50.4, 2600.0], [50.5, 2600.0], [50.6, 2600.0], [50.7, 2600.0], [50.8, 2600.0], [50.9, 2600.0], [51.0, 2600.0], [51.1, 2600.0], [51.2, 2600.0], [51.3, 2600.0], [51.4, 2600.0], [51.5, 2600.0], [51.6, 2600.0], [51.7, 2600.0], [51.8, 2600.0], [51.9, 2600.0], [52.0, 2600.0], [52.1, 2600.0], [52.2, 2600.0], [52.3, 2601.0], [52.4, 2601.0], [52.5, 2601.0], [52.6, 2601.0], [52.7, 2601.0], [52.8, 2601.0], [52.9, 2601.0], [53.0, 2601.0], [53.1, 2601.0], [53.2, 2601.0], [53.3, 2601.0], [53.4, 2601.0], [53.5, 2601.0], [53.6, 2601.0], [53.7, 2601.0], [53.8, 2601.0], [53.9, 2601.0], [54.0, 2601.0], [54.1, 2601.0], [54.2, 2601.0], [54.3, 2601.0], [54.4, 2601.0], [54.5, 2601.0], [54.6, 2601.0], [54.7, 2601.0], [54.8, 2601.0], [54.9, 2601.0], [55.0, 2601.0], [55.1, 2601.0], [55.2, 2601.0], [55.3, 2601.0], [55.4, 2601.0], [55.5, 2601.0], [55.6, 2601.0], [55.7, 2601.0], [55.8, 2601.0], [55.9, 2601.0], [56.0, 2601.0], [56.1, 2601.0], [56.2, 2601.0], [56.3, 2601.0], [56.4, 2601.0], [56.5, 2601.0], [56.6, 2601.0], [56.7, 2602.0], [56.8, 2602.0], [56.9, 2602.0], [57.0, 2602.0], [57.1, 2602.0], [57.2, 2602.0], [57.3, 2602.0], [57.4, 2602.0], [57.5, 2602.0], [57.6, 2602.0], [57.7, 2602.0], [57.8, 2602.0], [57.9, 2602.0], [58.0, 2602.0], [58.1, 2602.0], [58.2, 2602.0], [58.3, 2602.0], [58.4, 2602.0], [58.5, 2602.0], [58.6, 2602.0], [58.7, 2602.0], [58.8, 2602.0], [58.9, 2602.0], [59.0, 2602.0], [59.1, 2602.0], [59.2, 2602.0], [59.3, 2602.0], [59.4, 2602.0], [59.5, 2602.0], [59.6, 2602.0], [59.7, 2602.0], [59.8, 2602.0], [59.9, 2602.0], [60.0, 2602.0], [60.1, 2602.0], [60.2, 2602.0], [60.3, 2602.0], [60.4, 2602.0], [60.5, 2602.0], [60.6, 2602.0], [60.7, 2602.0], [60.8, 2602.0], [60.9, 2602.0], [61.0, 2602.0], [61.1, 2602.0], [61.2, 2603.0], [61.3, 2603.0], [61.4, 2603.0], [61.5, 2603.0], [61.6, 2603.0], [61.7, 2603.0], [61.8, 2603.0], [61.9, 2603.0], [62.0, 2603.0], [62.1, 2603.0], [62.2, 2603.0], [62.3, 2603.0], [62.4, 2603.0], [62.5, 2603.0], [62.6, 2603.0], [62.7, 2603.0], [62.8, 2603.0], [62.9, 2603.0], [63.0, 2603.0], [63.1, 2603.0], [63.2, 2603.0], [63.3, 2603.0], [63.4, 2603.0], [63.5, 2603.0], [63.6, 2603.0], [63.7, 2603.0], [63.8, 2603.0], [63.9, 2603.0], [64.0, 2603.0], [64.1, 2603.0], [64.2, 2603.0], [64.3, 2603.0], [64.4, 2603.0], [64.5, 2603.0], [64.6, 2603.0], [64.7, 2603.0], [64.8, 2603.0], [64.9, 2603.0], [65.0, 2603.0], [65.1, 2603.0], [65.2, 2604.0], [65.3, 2604.0], [65.4, 2604.0], [65.5, 2604.0], [65.6, 2604.0], [65.7, 2604.0], [65.8, 2604.0], [65.9, 2604.0], [66.0, 2604.0], [66.1, 2604.0], [66.2, 2604.0], [66.3, 2604.0], [66.4, 2604.0], [66.5, 2604.0], [66.6, 2604.0], [66.7, 2604.0], [66.8, 2604.0], [66.9, 2604.0], [67.0, 2604.0], [67.1, 2604.0], [67.2, 2604.0], [67.3, 2604.0], [67.4, 2604.0], [67.5, 2604.0], [67.6, 2604.0], [67.7, 2604.0], [67.8, 2604.0], [67.9, 2604.0], [68.0, 2604.0], [68.1, 2604.0], [68.2, 2604.0], [68.3, 2604.0], [68.4, 2604.0], [68.5, 2604.0], [68.6, 2604.0], [68.7, 2604.0], [68.8, 2604.0], [68.9, 2605.0], [69.0, 2605.0], [69.1, 2605.0], [69.2, 2605.0], [69.3, 2605.0], [69.4, 2605.0], [69.5, 2605.0], [69.6, 2605.0], [69.7, 2605.0], [69.8, 2605.0], [69.9, 2605.0], [70.0, 2605.0], [70.1, 2605.0], [70.2, 2605.0], [70.3, 2605.0], [70.4, 2605.0], [70.5, 2605.0], [70.6, 2605.0], [70.7, 2605.0], [70.8, 2605.0], [70.9, 2605.0], [71.0, 2605.0], [71.1, 2605.0], [71.2, 2605.0], [71.3, 2605.0], [71.4, 2605.0], [71.5, 2605.0], [71.6, 2605.0], [71.7, 2605.0], [71.8, 2606.0], [71.9, 2606.0], [72.0, 2606.0], [72.1, 2606.0], [72.2, 2606.0], [72.3, 2606.0], [72.4, 2606.0], [72.5, 2606.0], [72.6, 2606.0], [72.7, 2606.0], [72.8, 2606.0], [72.9, 2606.0], [73.0, 2606.0], [73.1, 2606.0], [73.2, 2606.0], [73.3, 2606.0], [73.4, 2606.0], [73.5, 2606.0], [73.6, 2606.0], [73.7, 2606.0], [73.8, 2606.0], [73.9, 2606.0], [74.0, 2606.0], [74.1, 2606.0], [74.2, 2606.0], [74.3, 2606.0], [74.4, 2607.0], [74.5, 2607.0], [74.6, 2607.0], [74.7, 2607.0], [74.8, 2607.0], [74.9, 2607.0], [75.0, 2607.0], [75.1, 2607.0], [75.2, 2607.0], [75.3, 2607.0], [75.4, 2607.0], [75.5, 2607.0], [75.6, 2607.0], [75.7, 2607.0], [75.8, 2607.0], [75.9, 2607.0], [76.0, 2607.0], [76.1, 2607.0], [76.2, 2607.0], [76.3, 2607.0], [76.4, 2607.0], [76.5, 2607.0], [76.6, 2607.0], [76.7, 2607.0], [76.8, 2608.0], [76.9, 2608.0], [77.0, 2608.0], [77.1, 2608.0], [77.2, 2608.0], [77.3, 2608.0], [77.4, 2608.0], [77.5, 2608.0], [77.6, 2608.0], [77.7, 2608.0], [77.8, 2608.0], [77.9, 2608.0], [78.0, 2609.0], [78.1, 2609.0], [78.2, 2609.0], [78.3, 2609.0], [78.4, 2609.0], [78.5, 2609.0], [78.6, 2609.0], [78.7, 2609.0], [78.8, 2609.0], [78.9, 2610.0], [79.0, 2610.0], [79.1, 2610.0], [79.2, 2610.0], [79.3, 2610.0], [79.4, 2611.0], [79.5, 2611.0], [79.6, 2611.0], [79.7, 2611.0], [79.8, 2611.0], [79.9, 2612.0], [80.0, 2612.0], [80.1, 2613.0], [80.2, 2614.0], [80.3, 2615.0], [80.4, 2615.0], [80.5, 2616.0], [80.6, 2617.0], [80.7, 2617.0], [80.8, 2617.0], [80.9, 2619.0], [81.0, 2619.0], [81.1, 2620.0], [81.2, 2621.0], [81.3, 2621.0], [81.4, 2621.0], [81.5, 2623.0], [81.6, 2623.0], [81.7, 2624.0], [81.8, 2624.0], [81.9, 2624.0], [82.0, 2625.0], [82.1, 2625.0], [82.2, 2625.0], [82.3, 2626.0], [82.4, 2626.0], [82.5, 2626.0], [82.6, 2626.0], [82.7, 2627.0], [82.8, 2627.0], [82.9, 2627.0], [83.0, 2628.0], [83.1, 2628.0], [83.2, 2628.0], [83.3, 2629.0], [83.4, 2629.0], [83.5, 2629.0], [83.6, 2630.0], [83.7, 2630.0], [83.8, 2631.0], [83.9, 2631.0], [84.0, 2631.0], [84.1, 2632.0], [84.2, 2632.0], [84.3, 2632.0], [84.4, 2632.0], [84.5, 2633.0], [84.6, 2633.0], [84.7, 2633.0], [84.8, 2634.0], [84.9, 2634.0], [85.0, 2634.0], [85.1, 2634.0], [85.2, 2635.0], [85.3, 2635.0], [85.4, 2635.0], [85.5, 2635.0], [85.6, 2636.0], [85.7, 2636.0], [85.8, 2636.0], [85.9, 2637.0], [86.0, 2637.0], [86.1, 2637.0], [86.2, 2637.0], [86.3, 2637.0], [86.4, 2638.0], [86.5, 2638.0], [86.6, 2638.0], [86.7, 2639.0], [86.8, 2639.0], [86.9, 2639.0], [87.0, 2640.0], [87.1, 2640.0], [87.2, 2641.0], [87.3, 2642.0], [87.4, 2646.0], [87.5, 2647.0], [87.6, 2655.0], [87.7, 2674.0], [87.8, 2688.0], [87.9, 2701.0], [88.0, 2727.0], [88.1, 2735.0], [88.2, 2776.0], [88.3, 2782.0], [88.4, 2807.0], [88.5, 2837.0], [88.6, 2840.0], [88.7, 2878.0], [88.8, 2896.0], [88.9, 2929.0], [89.0, 2942.0], [89.1, 2984.0], [89.2, 2998.0], [89.3, 3039.0], [89.4, 3055.0], [89.5, 3088.0], [89.6, 3125.0], [89.7, 3141.0], [89.8, 3170.0], [89.9, 3228.0], [90.0, 3242.0], [90.1, 3287.0], [90.2, 3329.0], [90.3, 3338.0], [90.4, 3377.0], [90.5, 3422.0], [90.6, 3480.0], [90.7, 3533.0], [90.8, 3582.0], [90.9, 3602.0], [91.0, 3631.0], [91.1, 3676.0], [91.2, 3742.0], [91.3, 3844.0], [91.4, 3904.0], [91.5, 3944.0], [91.6, 3985.0], [91.7, 4039.0], [91.8, 4108.0], [91.9, 4200.0], [92.0, 4295.0], [92.1, 4350.0], [92.2, 4441.0], [92.3, 4545.0], [92.4, 4657.0], [92.5, 4744.0], [92.6, 4862.0], [92.7, 4945.0], [92.8, 5029.0], [92.9, 5113.0], [93.0, 5177.0], [93.1, 5182.0], [93.2, 5183.0], [93.3, 5184.0], [93.4, 5185.0], [93.5, 5187.0], [93.6, 5188.0], [93.7, 5189.0], [93.8, 5189.0], [93.9, 5190.0], [94.0, 5190.0], [94.1, 5191.0], [94.2, 5191.0], [94.3, 5192.0], [94.4, 5192.0], [94.5, 5193.0], [94.6, 5193.0], [94.7, 5194.0], [94.8, 5195.0], [94.9, 5196.0], [95.0, 5197.0], [95.1, 5197.0], [95.2, 5198.0], [95.3, 5199.0], [95.4, 5199.0], [95.5, 5200.0], [95.6, 5201.0], [95.7, 5202.0], [95.8, 5203.0], [95.9, 5204.0], [96.0, 5205.0], [96.1, 5206.0], [96.2, 5207.0], [96.3, 5208.0], [96.4, 5210.0], [96.5, 5210.0], [96.6, 5212.0], [96.7, 5215.0], [96.8, 5220.0], [96.9, 5222.0], [97.0, 5226.0], [97.1, 5228.0], [97.2, 5232.0], [97.3, 5238.0], [97.4, 5277.0], [97.5, 5374.0], [97.6, 5550.0], [97.7, 5726.0], [97.8, 5854.0], [97.9, 5968.0], [98.0, 6160.0], [98.1, 6313.0], [98.2, 6438.0], [98.3, 6613.0], [98.4, 6847.0], [98.5, 6996.0], [98.6, 7131.0], [98.7, 7353.0], [98.8, 7506.0], [98.9, 7697.0], [99.0, 7795.0], [99.1, 7902.0], [99.2, 7966.0], [99.3, 8102.0], [99.4, 8283.0], [99.5, 8415.0], [99.6, 8498.0], [99.7, 8586.0], [99.8, 8726.0], [99.9, 9790.0], [100.0, 14350.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2500.0, "maxY": 4845.0, "series": [{"data": [[2500.0, 4845.0], [2600.0, 3944.0], [2800.0, 47.0], [2700.0, 50.0], [2900.0, 35.0], [3000.0, 38.0], [3100.0, 27.0], [3200.0, 28.0], [3300.0, 34.0], [3400.0, 14.0], [3500.0, 27.0], [3700.0, 11.0], [3600.0, 26.0], [3800.0, 13.0], [3900.0, 25.0], [4000.0, 15.0], [4200.0, 12.0], [4300.0, 12.0], [4100.0, 10.0], [4600.0, 13.0], [4500.0, 7.0], [4400.0, 14.0], [4800.0, 12.0], [4700.0, 6.0], [4900.0, 13.0], [5000.0, 11.0], [5100.0, 253.0], [5200.0, 198.0], [5300.0, 10.0], [5400.0, 5.0], [5500.0, 6.0], [5600.0, 7.0], [5700.0, 5.0], [5800.0, 9.0], [5900.0, 11.0], [6000.0, 5.0], [6100.0, 4.0], [6200.0, 6.0], [6300.0, 9.0], [6400.0, 5.0], [6500.0, 5.0], [6600.0, 5.0], [6700.0, 4.0], [6800.0, 5.0], [6900.0, 9.0], [7100.0, 4.0], [7000.0, 6.0], [7300.0, 8.0], [7200.0, 5.0], [7400.0, 6.0], [7500.0, 6.0], [7600.0, 5.0], [7700.0, 12.0], [7800.0, 7.0], [7900.0, 13.0], [8000.0, 7.0], [8100.0, 5.0], [8200.0, 8.0], [8400.0, 11.0], [8300.0, 7.0], [8500.0, 11.0], [8600.0, 8.0], [8700.0, 7.0], [8800.0, 3.0], [9700.0, 1.0], [9800.0, 3.0], [11400.0, 1.0], [13700.0, 1.0], [13400.0, 1.0], [13900.0, 3.0], [14300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10000.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 10000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 10000.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 12.797570850202433, "minX": 1.6547466E12, "maxY": 100.0, "series": [{"data": [[1.65474672E12, 100.0], [1.6547469E12, 83.75806451612904], [1.6547466E12, 73.09090909090911], [1.65474678E12, 100.0], [1.65474696E12, 12.797570850202433], [1.65474666E12, 100.0], [1.65474684E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474696E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2597.0, "minX": 2.0, "maxY": 6851.0, "series": [{"data": [[2.0, 2615.333333333333], [3.0, 2620.6666666666665], [4.0, 2624.75], [5.0, 2624.2], [7.0, 2624.8571428571427], [8.0, 2613.25], [9.0, 2629.6874999999995], [10.0, 2636.0], [11.0, 2618.4062500000005], [12.0, 2615.772727272728], [13.0, 2606.2], [14.0, 2603.5], [15.0, 2604.7272727272725], [16.0, 2604.2000000000003], [17.0, 2605.058823529412], [18.0, 2619.054545454547], [19.0, 2604.242424242424], [20.0, 2599.8333333333335], [21.0, 2603.346153846154], [22.0, 2607.0], [23.0, 2608.666666666667], [24.0, 2607.8333333333335], [25.0, 2706.5942028985505], [26.0, 2607.0], [28.0, 2604.5], [31.0, 2703.5], [32.0, 2602.0], [34.0, 3209.0], [35.0, 2603.0], [37.0, 2597.0], [38.0, 3567.0], [39.0, 2605.0], [40.0, 2604.0], [43.0, 3915.0], [42.0, 2604.0], [44.0, 2599.0], [47.0, 4266.0], [49.0, 2603.0], [50.0, 2599.0], [52.0, 3275.6666666666665], [53.0, 2599.0], [55.0, 2600.0], [54.0, 2600.0], [56.0, 3780.0], [57.0, 4952.0], [59.0, 2606.0], [58.0, 2605.0], [60.0, 5096.0], [61.0, 2605.0], [63.0, 2601.0], [64.0, 3925.0], [65.0, 4028.0], [66.0, 2602.0], [69.0, 5596.0], [71.0, 2608.0], [70.0, 2607.0], [68.0, 2602.0], [73.0, 4183.0], [74.0, 4272.0], [75.0, 2605.0], [78.0, 6096.5], [79.0, 2601.777777777778], [76.0, 3220.238095238095], [82.0, 3331.4], [83.0, 6332.5], [81.0, 2607.0], [85.0, 3545.25], [86.0, 3526.5], [87.0, 3887.6666666666665], [90.0, 3587.0], [91.0, 3884.0], [89.0, 2603.3333333333335], [88.0, 2603.0], [92.0, 3941.3333333333335], [95.0, 4215.0], [94.0, 2607.0], [93.0, 2604.5], [96.0, 3643.0], [99.0, 6851.0], [98.0, 2603.0], [97.0, 2606.777777777778], [100.0, 2897.4257988419376]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[95.44120000000052, 2889.8834000000115]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 20.9, "minX": 1.6547466E12, "maxY": 5275.2, "series": [{"data": [[1.65474672E12, 1389.5333333333333], [1.6547469E12, 903.1333333333333], [1.6547466E12, 20.9], [1.65474678E12, 1387.0], [1.65474696E12, 156.43333333333334], [1.65474666E12, 1084.2666666666667], [1.65474684E12, 1392.0666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65474672E12, 5265.6], [1.6547469E12, 3422.4], [1.6547466E12, 79.2], [1.65474678E12, 5256.0], [1.65474696E12, 592.8], [1.65474666E12, 4108.8], [1.65474684E12, 5275.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474696E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2615.7368421052643, "minX": 1.6547466E12, "maxY": 5657.787878787879, "series": [{"data": [[1.65474672E12, 2736.365542388328], [1.6547469E12, 2721.8667601683023], [1.6547466E12, 5657.787878787879], [1.65474678E12, 2736.753881278543], [1.65474696E12, 2615.7368421052643], [1.65474666E12, 3605.933995327105], [1.65474684E12, 2736.224749772514]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474696E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2615.7368421052643, "minX": 1.6547466E12, "maxY": 5657.727272727272, "series": [{"data": [[1.65474672E12, 2736.3646308113002], [1.6547469E12, 2721.8667601683023], [1.6547466E12, 5657.727272727272], [1.65474678E12, 2736.752968036525], [1.65474696E12, 2615.7368421052643], [1.65474666E12, 3605.933411214956], [1.65474684E12, 2736.224749772514]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474696E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.008097165991902834, "minX": 1.6547466E12, "maxY": 1.0606060606060608, "series": [{"data": [[1.65474672E12, 0.01549680948040109], [1.6547469E12, 0.026647966339410946], [1.6547466E12, 1.0606060606060608], [1.65474678E12, 0.013698630136986328], [1.65474696E12, 0.008097165991902834], [1.65474666E12, 0.038551401869158876], [1.65474684E12, 0.01774340309372164]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474696E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2571.0, "minX": 1.6547466E12, "maxY": 14350.0, "series": [{"data": [[1.65474672E12, 7795.0], [1.6547469E12, 5230.0], [1.6547466E12, 6917.0], [1.65474678E12, 7797.0], [1.65474696E12, 2648.0], [1.65474666E12, 14350.0], [1.65474684E12, 7807.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65474672E12, 2625.0], [1.6547469E12, 2629.3], [1.6547466E12, 6791.6], [1.65474678E12, 2632.0], [1.65474696E12, 2637.0], [1.65474666E12, 6311.5], [1.65474684E12, 2629.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65474672E12, 5210.05], [1.6547469E12, 5210.0], [1.6547466E12, 6917.0], [1.65474678E12, 5220.0], [1.65474696E12, 2648.0], [1.65474666E12, 8779.05], [1.65474684E12, 5210.0199999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65474672E12, 5170.25], [1.6547469E12, 2648.0], [1.6547466E12, 6870.8], [1.65474678E12, 5181.0], [1.65474696E12, 2645.0], [1.65474666E12, 7922.75], [1.65474684E12, 5180.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65474672E12, 2577.0], [1.6547469E12, 2588.0], [1.6547466E12, 2998.0], [1.65474678E12, 2579.0], [1.65474696E12, 2597.0], [1.65474666E12, 2571.0], [1.65474684E12, 2575.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65474672E12, 2598.0], [1.6547469E12, 2602.0], [1.6547466E12, 6011.0], [1.65474678E12, 2599.0], [1.65474696E12, 2610.0], [1.65474666E12, 2617.5], [1.65474684E12, 2599.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474696E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2596.0, "minX": 1.0, "maxY": 8110.5, "series": [{"data": [[2.0, 2621.5], [32.0, 2601.0], [33.0, 2601.0], [35.0, 2599.0], [34.0, 2598.0], [36.0, 2599.0], [37.0, 2598.0], [38.0, 2597.0], [39.0, 2601.0], [41.0, 2600.0], [40.0, 2596.0], [43.0, 2598.0], [3.0, 2619.0], [4.0, 2639.0], [5.0, 3614.0], [6.0, 2622.0], [7.0, 6383.0], [8.0, 2628.0], [9.0, 4934.0], [10.0, 8110.5], [11.0, 2610.0], [12.0, 5158.5], [14.0, 5568.5], [15.0, 2607.0], [16.0, 7568.5], [1.0, 2618.5], [17.0, 2604.0], [18.0, 2642.0], [19.0, 2610.0], [20.0, 4974.5], [21.0, 2606.0], [22.0, 4878.5], [23.0, 4765.0], [24.0, 4267.0], [25.0, 2605.0], [26.0, 3583.5], [28.0, 3766.5], [30.0, 3338.0], [31.0, 2605.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 2596.0, "minX": 1.0, "maxY": 8110.5, "series": [{"data": [[2.0, 2621.5], [32.0, 2601.0], [33.0, 2601.0], [35.0, 2599.0], [34.0, 2598.0], [36.0, 2599.0], [37.0, 2598.0], [38.0, 2597.0], [39.0, 2601.0], [41.0, 2600.0], [40.0, 2596.0], [43.0, 2598.0], [3.0, 2619.0], [4.0, 2639.0], [5.0, 3614.0], [6.0, 2622.0], [7.0, 6383.0], [8.0, 2628.0], [9.0, 4934.0], [10.0, 8110.5], [11.0, 2610.0], [12.0, 5158.5], [14.0, 5568.5], [15.0, 2607.0], [16.0, 7568.5], [1.0, 2618.5], [17.0, 2604.0], [18.0, 2642.0], [19.0, 2610.0], [20.0, 4974.5], [21.0, 2606.0], [22.0, 4878.5], [23.0, 4765.0], [24.0, 4267.0], [25.0, 2605.0], [26.0, 3583.5], [28.0, 3766.5], [30.0, 3338.0], [31.0, 2605.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.216666666666667, "minX": 1.6547466E12, "maxY": 36.666666666666664, "series": [{"data": [[1.65474672E12, 36.56666666666667], [1.6547469E12, 22.4], [1.6547466E12, 2.216666666666667], [1.65474678E12, 36.46666666666667], [1.65474696E12, 3.816666666666667], [1.65474666E12, 28.533333333333335], [1.65474684E12, 36.666666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474696E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.55, "minX": 1.6547466E12, "maxY": 36.63333333333333, "series": [{"data": [[1.65474672E12, 36.56666666666667], [1.6547469E12, 23.766666666666666], [1.6547466E12, 0.55], [1.65474678E12, 36.5], [1.65474696E12, 4.116666666666666], [1.65474666E12, 28.533333333333335], [1.65474684E12, 36.63333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474696E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.55, "minX": 1.6547466E12, "maxY": 36.63333333333333, "series": [{"data": [[1.65474672E12, 36.56666666666667], [1.6547469E12, 23.766666666666666], [1.6547466E12, 0.55], [1.65474678E12, 36.5], [1.65474696E12, 4.116666666666666], [1.65474666E12, 28.533333333333335], [1.65474684E12, 36.63333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474696E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.55, "minX": 1.6547466E12, "maxY": 36.63333333333333, "series": [{"data": [[1.65474672E12, 36.56666666666667], [1.6547469E12, 23.766666666666666], [1.6547466E12, 0.55], [1.65474678E12, 36.5], [1.65474696E12, 4.116666666666666], [1.65474666E12, 28.533333333333335], [1.65474684E12, 36.63333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474696E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

