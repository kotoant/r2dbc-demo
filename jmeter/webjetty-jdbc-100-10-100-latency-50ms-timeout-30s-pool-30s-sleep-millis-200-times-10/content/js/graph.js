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
        data: {"result": {"minY": 2571.0, "minX": 0.0, "maxY": 8882.0, "series": [{"data": [[0.0, 2571.0], [0.1, 2588.0], [0.2, 2591.0], [0.3, 2592.0], [0.4, 2594.0], [0.5, 2594.0], [0.6, 2595.0], [0.7, 2596.0], [0.8, 2596.0], [0.9, 2597.0], [1.0, 2597.0], [1.1, 2598.0], [1.2, 2598.0], [1.3, 2598.0], [1.4, 2599.0], [1.5, 2599.0], [1.6, 2600.0], [1.7, 2600.0], [1.8, 2601.0], [1.9, 2601.0], [2.0, 2601.0], [2.1, 2602.0], [2.2, 2602.0], [2.3, 2603.0], [2.4, 2603.0], [2.5, 2604.0], [2.6, 2604.0], [2.7, 2604.0], [2.8, 2605.0], [2.9, 2606.0], [3.0, 2606.0], [3.1, 2607.0], [3.2, 2608.0], [3.3, 2609.0], [3.4, 2610.0], [3.5, 2611.0], [3.6, 2612.0], [3.7, 2613.0], [3.8, 2614.0], [3.9, 2615.0], [4.0, 2617.0], [4.1, 2619.0], [4.2, 2621.0], [4.3, 2631.0], [4.4, 2634.0], [4.5, 2634.0], [4.6, 2635.0], [4.7, 2635.0], [4.8, 2636.0], [4.9, 2636.0], [5.0, 2636.0], [5.1, 2637.0], [5.2, 2637.0], [5.3, 2637.0], [5.4, 2637.0], [5.5, 2638.0], [5.6, 2638.0], [5.7, 2638.0], [5.8, 2638.0], [5.9, 2639.0], [6.0, 2639.0], [6.1, 2639.0], [6.2, 2639.0], [6.3, 2639.0], [6.4, 2640.0], [6.5, 2640.0], [6.6, 2640.0], [6.7, 2640.0], [6.8, 2641.0], [6.9, 2641.0], [7.0, 2641.0], [7.1, 2641.0], [7.2, 2641.0], [7.3, 2641.0], [7.4, 2642.0], [7.5, 2642.0], [7.6, 2642.0], [7.7, 2642.0], [7.8, 2643.0], [7.9, 2643.0], [8.0, 2643.0], [8.1, 2643.0], [8.2, 2643.0], [8.3, 2643.0], [8.4, 2644.0], [8.5, 2644.0], [8.6, 2644.0], [8.7, 2644.0], [8.8, 2644.0], [8.9, 2644.0], [9.0, 2645.0], [9.1, 2645.0], [9.2, 2645.0], [9.3, 2645.0], [9.4, 2645.0], [9.5, 2645.0], [9.6, 2645.0], [9.7, 2646.0], [9.8, 2646.0], [9.9, 2646.0], [10.0, 2646.0], [10.1, 2647.0], [10.2, 2647.0], [10.3, 2647.0], [10.4, 2647.0], [10.5, 2647.0], [10.6, 2647.0], [10.7, 2648.0], [10.8, 2648.0], [10.9, 2648.0], [11.0, 2648.0], [11.1, 2649.0], [11.2, 2649.0], [11.3, 2649.0], [11.4, 2649.0], [11.5, 2649.0], [11.6, 2650.0], [11.7, 2650.0], [11.8, 2650.0], [11.9, 2650.0], [12.0, 2650.0], [12.1, 2651.0], [12.2, 2651.0], [12.3, 2651.0], [12.4, 2651.0], [12.5, 2651.0], [12.6, 2652.0], [12.7, 2652.0], [12.8, 2652.0], [12.9, 2652.0], [13.0, 2652.0], [13.1, 2652.0], [13.2, 2653.0], [13.3, 2653.0], [13.4, 2653.0], [13.5, 2653.0], [13.6, 2653.0], [13.7, 2654.0], [13.8, 2654.0], [13.9, 2654.0], [14.0, 2654.0], [14.1, 2654.0], [14.2, 2654.0], [14.3, 2655.0], [14.4, 2655.0], [14.5, 2655.0], [14.6, 2655.0], [14.7, 2656.0], [14.8, 2656.0], [14.9, 2656.0], [15.0, 2657.0], [15.1, 2657.0], [15.2, 2657.0], [15.3, 2658.0], [15.4, 2659.0], [15.5, 2659.0], [15.6, 2660.0], [15.7, 2660.0], [15.8, 2661.0], [15.9, 2662.0], [16.0, 2662.0], [16.1, 2663.0], [16.2, 2664.0], [16.3, 2665.0], [16.4, 2667.0], [16.5, 2668.0], [16.6, 2670.0], [16.7, 2674.0], [16.8, 2676.0], [16.9, 2677.0], [17.0, 2677.0], [17.1, 2679.0], [17.2, 2680.0], [17.3, 2681.0], [17.4, 2682.0], [17.5, 2683.0], [17.6, 2684.0], [17.7, 2685.0], [17.8, 2685.0], [17.9, 2685.0], [18.0, 2686.0], [18.1, 2686.0], [18.2, 2686.0], [18.3, 2686.0], [18.4, 2687.0], [18.5, 2687.0], [18.6, 2687.0], [18.7, 2687.0], [18.8, 2687.0], [18.9, 2688.0], [19.0, 2688.0], [19.1, 2688.0], [19.2, 2688.0], [19.3, 2688.0], [19.4, 2688.0], [19.5, 2688.0], [19.6, 2689.0], [19.7, 2689.0], [19.8, 2689.0], [19.9, 2689.0], [20.0, 2689.0], [20.1, 2689.0], [20.2, 2689.0], [20.3, 2689.0], [20.4, 2689.0], [20.5, 2690.0], [20.6, 2690.0], [20.7, 2690.0], [20.8, 2690.0], [20.9, 2690.0], [21.0, 2690.0], [21.1, 2690.0], [21.2, 2690.0], [21.3, 2690.0], [21.4, 2690.0], [21.5, 2691.0], [21.6, 2691.0], [21.7, 2691.0], [21.8, 2691.0], [21.9, 2691.0], [22.0, 2691.0], [22.1, 2691.0], [22.2, 2691.0], [22.3, 2692.0], [22.4, 2692.0], [22.5, 2692.0], [22.6, 2692.0], [22.7, 2692.0], [22.8, 2692.0], [22.9, 2692.0], [23.0, 2692.0], [23.1, 2692.0], [23.2, 2692.0], [23.3, 2692.0], [23.4, 2692.0], [23.5, 2693.0], [23.6, 2693.0], [23.7, 2693.0], [23.8, 2693.0], [23.9, 2693.0], [24.0, 2693.0], [24.1, 2693.0], [24.2, 2693.0], [24.3, 2693.0], [24.4, 2693.0], [24.5, 2694.0], [24.6, 2694.0], [24.7, 2694.0], [24.8, 2694.0], [24.9, 2694.0], [25.0, 2694.0], [25.1, 2694.0], [25.2, 2694.0], [25.3, 2694.0], [25.4, 2694.0], [25.5, 2694.0], [25.6, 2695.0], [25.7, 2695.0], [25.8, 2695.0], [25.9, 2695.0], [26.0, 2695.0], [26.1, 2695.0], [26.2, 2695.0], [26.3, 2695.0], [26.4, 2695.0], [26.5, 2695.0], [26.6, 2695.0], [26.7, 2695.0], [26.8, 2695.0], [26.9, 2695.0], [27.0, 2696.0], [27.1, 2696.0], [27.2, 2696.0], [27.3, 2696.0], [27.4, 2696.0], [27.5, 2696.0], [27.6, 2696.0], [27.7, 2696.0], [27.8, 2696.0], [27.9, 2696.0], [28.0, 2696.0], [28.1, 2696.0], [28.2, 2696.0], [28.3, 2697.0], [28.4, 2697.0], [28.5, 2697.0], [28.6, 2697.0], [28.7, 2697.0], [28.8, 2697.0], [28.9, 2697.0], [29.0, 2697.0], [29.1, 2697.0], [29.2, 2698.0], [29.3, 2698.0], [29.4, 2698.0], [29.5, 2698.0], [29.6, 2698.0], [29.7, 2698.0], [29.8, 2698.0], [29.9, 2698.0], [30.0, 2698.0], [30.1, 2698.0], [30.2, 2698.0], [30.3, 2699.0], [30.4, 2699.0], [30.5, 2699.0], [30.6, 2699.0], [30.7, 2699.0], [30.8, 2699.0], [30.9, 2699.0], [31.0, 2699.0], [31.1, 2699.0], [31.2, 2699.0], [31.3, 2699.0], [31.4, 2700.0], [31.5, 2700.0], [31.6, 2700.0], [31.7, 2700.0], [31.8, 2700.0], [31.9, 2700.0], [32.0, 2700.0], [32.1, 2701.0], [32.2, 2701.0], [32.3, 2701.0], [32.4, 2701.0], [32.5, 2701.0], [32.6, 2701.0], [32.7, 2701.0], [32.8, 2701.0], [32.9, 2701.0], [33.0, 2702.0], [33.1, 2702.0], [33.2, 2702.0], [33.3, 2702.0], [33.4, 2702.0], [33.5, 2702.0], [33.6, 2702.0], [33.7, 2702.0], [33.8, 2703.0], [33.9, 2703.0], [34.0, 2703.0], [34.1, 2703.0], [34.2, 2703.0], [34.3, 2703.0], [34.4, 2703.0], [34.5, 2703.0], [34.6, 2704.0], [34.7, 2704.0], [34.8, 2704.0], [34.9, 2704.0], [35.0, 2704.0], [35.1, 2704.0], [35.2, 2705.0], [35.3, 2705.0], [35.4, 2705.0], [35.5, 2705.0], [35.6, 2705.0], [35.7, 2705.0], [35.8, 2706.0], [35.9, 2706.0], [36.0, 2706.0], [36.1, 2706.0], [36.2, 2706.0], [36.3, 2706.0], [36.4, 2707.0], [36.5, 2707.0], [36.6, 2707.0], [36.7, 2707.0], [36.8, 2708.0], [36.9, 2708.0], [37.0, 2708.0], [37.1, 2709.0], [37.2, 2709.0], [37.3, 2710.0], [37.4, 2711.0], [37.5, 2711.0], [37.6, 2712.0], [37.7, 2713.0], [37.8, 2713.0], [37.9, 2715.0], [38.0, 2715.0], [38.1, 2718.0], [38.2, 2721.0], [38.3, 2722.0], [38.4, 2723.0], [38.5, 2724.0], [38.6, 2724.0], [38.7, 2725.0], [38.8, 2726.0], [38.9, 2727.0], [39.0, 2728.0], [39.1, 2729.0], [39.2, 2730.0], [39.3, 2731.0], [39.4, 2732.0], [39.5, 2732.0], [39.6, 2733.0], [39.7, 2734.0], [39.8, 2734.0], [39.9, 2735.0], [40.0, 2735.0], [40.1, 2736.0], [40.2, 2736.0], [40.3, 2736.0], [40.4, 2737.0], [40.5, 2737.0], [40.6, 2737.0], [40.7, 2738.0], [40.8, 2738.0], [40.9, 2738.0], [41.0, 2738.0], [41.1, 2738.0], [41.2, 2739.0], [41.3, 2739.0], [41.4, 2739.0], [41.5, 2739.0], [41.6, 2739.0], [41.7, 2740.0], [41.8, 2740.0], [41.9, 2740.0], [42.0, 2740.0], [42.1, 2740.0], [42.2, 2741.0], [42.3, 2741.0], [42.4, 2741.0], [42.5, 2741.0], [42.6, 2741.0], [42.7, 2741.0], [42.8, 2741.0], [42.9, 2741.0], [43.0, 2742.0], [43.1, 2742.0], [43.2, 2742.0], [43.3, 2742.0], [43.4, 2742.0], [43.5, 2742.0], [43.6, 2742.0], [43.7, 2742.0], [43.8, 2742.0], [43.9, 2742.0], [44.0, 2742.0], [44.1, 2743.0], [44.2, 2743.0], [44.3, 2743.0], [44.4, 2743.0], [44.5, 2743.0], [44.6, 2743.0], [44.7, 2743.0], [44.8, 2743.0], [44.9, 2743.0], [45.0, 2743.0], [45.1, 2743.0], [45.2, 2744.0], [45.3, 2744.0], [45.4, 2744.0], [45.5, 2744.0], [45.6, 2744.0], [45.7, 2744.0], [45.8, 2744.0], [45.9, 2744.0], [46.0, 2744.0], [46.1, 2744.0], [46.2, 2744.0], [46.3, 2744.0], [46.4, 2744.0], [46.5, 2744.0], [46.6, 2744.0], [46.7, 2745.0], [46.8, 2745.0], [46.9, 2745.0], [47.0, 2745.0], [47.1, 2745.0], [47.2, 2745.0], [47.3, 2745.0], [47.4, 2745.0], [47.5, 2745.0], [47.6, 2745.0], [47.7, 2745.0], [47.8, 2745.0], [47.9, 2745.0], [48.0, 2745.0], [48.1, 2745.0], [48.2, 2745.0], [48.3, 2746.0], [48.4, 2746.0], [48.5, 2746.0], [48.6, 2746.0], [48.7, 2746.0], [48.8, 2746.0], [48.9, 2746.0], [49.0, 2746.0], [49.1, 2746.0], [49.2, 2746.0], [49.3, 2746.0], [49.4, 2746.0], [49.5, 2746.0], [49.6, 2746.0], [49.7, 2747.0], [49.8, 2747.0], [49.9, 2747.0], [50.0, 2747.0], [50.1, 2747.0], [50.2, 2747.0], [50.3, 2747.0], [50.4, 2747.0], [50.5, 2747.0], [50.6, 2747.0], [50.7, 2747.0], [50.8, 2747.0], [50.9, 2747.0], [51.0, 2747.0], [51.1, 2748.0], [51.2, 2748.0], [51.3, 2748.0], [51.4, 2748.0], [51.5, 2748.0], [51.6, 2748.0], [51.7, 2748.0], [51.8, 2748.0], [51.9, 2748.0], [52.0, 2748.0], [52.1, 2748.0], [52.2, 2748.0], [52.3, 2748.0], [52.4, 2748.0], [52.5, 2748.0], [52.6, 2749.0], [52.7, 2749.0], [52.8, 2749.0], [52.9, 2749.0], [53.0, 2749.0], [53.1, 2749.0], [53.2, 2749.0], [53.3, 2749.0], [53.4, 2749.0], [53.5, 2749.0], [53.6, 2749.0], [53.7, 2749.0], [53.8, 2749.0], [53.9, 2750.0], [54.0, 2750.0], [54.1, 2750.0], [54.2, 2750.0], [54.3, 2750.0], [54.4, 2750.0], [54.5, 2750.0], [54.6, 2750.0], [54.7, 2750.0], [54.8, 2750.0], [54.9, 2750.0], [55.0, 2750.0], [55.1, 2750.0], [55.2, 2751.0], [55.3, 2751.0], [55.4, 2751.0], [55.5, 2751.0], [55.6, 2751.0], [55.7, 2751.0], [55.8, 2751.0], [55.9, 2751.0], [56.0, 2751.0], [56.1, 2751.0], [56.2, 2751.0], [56.3, 2751.0], [56.4, 2751.0], [56.5, 2751.0], [56.6, 2752.0], [56.7, 2752.0], [56.8, 2752.0], [56.9, 2752.0], [57.0, 2752.0], [57.1, 2752.0], [57.2, 2752.0], [57.3, 2752.0], [57.4, 2752.0], [57.5, 2752.0], [57.6, 2752.0], [57.7, 2752.0], [57.8, 2753.0], [57.9, 2753.0], [58.0, 2753.0], [58.1, 2753.0], [58.2, 2753.0], [58.3, 2753.0], [58.4, 2753.0], [58.5, 2753.0], [58.6, 2753.0], [58.7, 2753.0], [58.8, 2754.0], [58.9, 2754.0], [59.0, 2754.0], [59.1, 2754.0], [59.2, 2754.0], [59.3, 2754.0], [59.4, 2754.0], [59.5, 2754.0], [59.6, 2754.0], [59.7, 2754.0], [59.8, 2755.0], [59.9, 2755.0], [60.0, 2755.0], [60.1, 2755.0], [60.2, 2755.0], [60.3, 2755.0], [60.4, 2755.0], [60.5, 2756.0], [60.6, 2756.0], [60.7, 2756.0], [60.8, 2756.0], [60.9, 2756.0], [61.0, 2756.0], [61.1, 2756.0], [61.2, 2756.0], [61.3, 2757.0], [61.4, 2757.0], [61.5, 2757.0], [61.6, 2757.0], [61.7, 2757.0], [61.8, 2757.0], [61.9, 2757.0], [62.0, 2758.0], [62.1, 2758.0], [62.2, 2758.0], [62.3, 2758.0], [62.4, 2758.0], [62.5, 2758.0], [62.6, 2759.0], [62.7, 2759.0], [62.8, 2759.0], [62.9, 2759.0], [63.0, 2760.0], [63.1, 2760.0], [63.2, 2760.0], [63.3, 2761.0], [63.4, 2761.0], [63.5, 2761.0], [63.6, 2762.0], [63.7, 2762.0], [63.8, 2763.0], [63.9, 2763.0], [64.0, 2764.0], [64.1, 2764.0], [64.2, 2764.0], [64.3, 2764.0], [64.4, 2765.0], [64.5, 2765.0], [64.6, 2766.0], [64.7, 2767.0], [64.8, 2767.0], [64.9, 2768.0], [65.0, 2768.0], [65.1, 2768.0], [65.2, 2770.0], [65.3, 2771.0], [65.4, 2772.0], [65.5, 2772.0], [65.6, 2773.0], [65.7, 2774.0], [65.8, 2775.0], [65.9, 2775.0], [66.0, 2776.0], [66.1, 2776.0], [66.2, 2778.0], [66.3, 2778.0], [66.4, 2779.0], [66.5, 2780.0], [66.6, 2781.0], [66.7, 2782.0], [66.8, 2783.0], [66.9, 2783.0], [67.0, 2784.0], [67.1, 2784.0], [67.2, 2785.0], [67.3, 2785.0], [67.4, 2786.0], [67.5, 2786.0], [67.6, 2787.0], [67.7, 2787.0], [67.8, 2788.0], [67.9, 2788.0], [68.0, 2789.0], [68.1, 2789.0], [68.2, 2790.0], [68.3, 2790.0], [68.4, 2790.0], [68.5, 2791.0], [68.6, 2791.0], [68.7, 2791.0], [68.8, 2791.0], [68.9, 2792.0], [69.0, 2792.0], [69.1, 2792.0], [69.2, 2792.0], [69.3, 2792.0], [69.4, 2792.0], [69.5, 2793.0], [69.6, 2793.0], [69.7, 2793.0], [69.8, 2793.0], [69.9, 2793.0], [70.0, 2793.0], [70.1, 2794.0], [70.2, 2794.0], [70.3, 2794.0], [70.4, 2794.0], [70.5, 2794.0], [70.6, 2794.0], [70.7, 2794.0], [70.8, 2794.0], [70.9, 2794.0], [71.0, 2795.0], [71.1, 2795.0], [71.2, 2795.0], [71.3, 2795.0], [71.4, 2795.0], [71.5, 2795.0], [71.6, 2795.0], [71.7, 2795.0], [71.8, 2795.0], [71.9, 2795.0], [72.0, 2796.0], [72.1, 2796.0], [72.2, 2796.0], [72.3, 2796.0], [72.4, 2796.0], [72.5, 2796.0], [72.6, 2796.0], [72.7, 2796.0], [72.8, 2796.0], [72.9, 2796.0], [73.0, 2796.0], [73.1, 2796.0], [73.2, 2796.0], [73.3, 2797.0], [73.4, 2797.0], [73.5, 2797.0], [73.6, 2797.0], [73.7, 2797.0], [73.8, 2797.0], [73.9, 2797.0], [74.0, 2797.0], [74.1, 2797.0], [74.2, 2797.0], [74.3, 2798.0], [74.4, 2798.0], [74.5, 2798.0], [74.6, 2798.0], [74.7, 2798.0], [74.8, 2798.0], [74.9, 2798.0], [75.0, 2798.0], [75.1, 2798.0], [75.2, 2798.0], [75.3, 2798.0], [75.4, 2798.0], [75.5, 2799.0], [75.6, 2799.0], [75.7, 2799.0], [75.8, 2799.0], [75.9, 2799.0], [76.0, 2799.0], [76.1, 2799.0], [76.2, 2799.0], [76.3, 2799.0], [76.4, 2799.0], [76.5, 2799.0], [76.6, 2800.0], [76.7, 2800.0], [76.8, 2800.0], [76.9, 2800.0], [77.0, 2800.0], [77.1, 2800.0], [77.2, 2800.0], [77.3, 2800.0], [77.4, 2800.0], [77.5, 2801.0], [77.6, 2801.0], [77.7, 2801.0], [77.8, 2801.0], [77.9, 2801.0], [78.0, 2801.0], [78.1, 2801.0], [78.2, 2801.0], [78.3, 2801.0], [78.4, 2802.0], [78.5, 2802.0], [78.6, 2802.0], [78.7, 2802.0], [78.8, 2802.0], [78.9, 2802.0], [79.0, 2802.0], [79.1, 2803.0], [79.2, 2803.0], [79.3, 2803.0], [79.4, 2803.0], [79.5, 2803.0], [79.6, 2803.0], [79.7, 2803.0], [79.8, 2803.0], [79.9, 2804.0], [80.0, 2804.0], [80.1, 2804.0], [80.2, 2804.0], [80.3, 2804.0], [80.4, 2804.0], [80.5, 2804.0], [80.6, 2804.0], [80.7, 2804.0], [80.8, 2805.0], [80.9, 2805.0], [81.0, 2805.0], [81.1, 2805.0], [81.2, 2805.0], [81.3, 2805.0], [81.4, 2806.0], [81.5, 2806.0], [81.6, 2806.0], [81.7, 2806.0], [81.8, 2806.0], [81.9, 2807.0], [82.0, 2807.0], [82.1, 2807.0], [82.2, 2807.0], [82.3, 2807.0], [82.4, 2807.0], [82.5, 2807.0], [82.6, 2808.0], [82.7, 2808.0], [82.8, 2808.0], [82.9, 2808.0], [83.0, 2809.0], [83.1, 2809.0], [83.2, 2810.0], [83.3, 2811.0], [83.4, 2811.0], [83.5, 2812.0], [83.6, 2812.0], [83.7, 2813.0], [83.8, 2813.0], [83.9, 2813.0], [84.0, 2814.0], [84.1, 2814.0], [84.2, 2816.0], [84.3, 2825.0], [84.4, 2826.0], [84.5, 2827.0], [84.6, 2829.0], [84.7, 2831.0], [84.8, 2833.0], [84.9, 2834.0], [85.0, 2835.0], [85.1, 2836.0], [85.2, 2837.0], [85.3, 2838.0], [85.4, 2839.0], [85.5, 2840.0], [85.6, 2840.0], [85.7, 2841.0], [85.8, 2841.0], [85.9, 2842.0], [86.0, 2843.0], [86.1, 2844.0], [86.2, 2844.0], [86.3, 2845.0], [86.4, 2845.0], [86.5, 2845.0], [86.6, 2846.0], [86.7, 2846.0], [86.8, 2847.0], [86.9, 2847.0], [87.0, 2848.0], [87.1, 2848.0], [87.2, 2848.0], [87.3, 2849.0], [87.4, 2849.0], [87.5, 2850.0], [87.6, 2851.0], [87.7, 2851.0], [87.8, 2851.0], [87.9, 2852.0], [88.0, 2852.0], [88.1, 2852.0], [88.2, 2853.0], [88.3, 2853.0], [88.4, 2853.0], [88.5, 2854.0], [88.6, 2854.0], [88.7, 2854.0], [88.8, 2854.0], [88.9, 2855.0], [89.0, 2855.0], [89.1, 2855.0], [89.2, 2856.0], [89.3, 2856.0], [89.4, 2856.0], [89.5, 2857.0], [89.6, 2857.0], [89.7, 2857.0], [89.8, 2858.0], [89.9, 2858.0], [90.0, 2858.0], [90.1, 2859.0], [90.2, 2859.0], [90.3, 2859.0], [90.4, 2860.0], [90.5, 2860.0], [90.6, 2861.0], [90.7, 2862.0], [90.8, 2862.0], [90.9, 2863.0], [91.0, 2864.0], [91.1, 2865.0], [91.2, 2865.0], [91.3, 2866.0], [91.4, 2867.0], [91.5, 2868.0], [91.6, 2869.0], [91.7, 2869.0], [91.8, 2870.0], [91.9, 2871.0], [92.0, 2872.0], [92.1, 2874.0], [92.2, 2881.0], [92.3, 2885.0], [92.4, 2888.0], [92.5, 2890.0], [92.6, 2891.0], [92.7, 2915.0], [92.8, 2934.0], [92.9, 2951.0], [93.0, 2967.0], [93.1, 2976.0], [93.2, 2998.0], [93.3, 3017.0], [93.4, 3048.0], [93.5, 3076.0], [93.6, 3107.0], [93.7, 3155.0], [93.8, 3189.0], [93.9, 3212.0], [94.0, 3224.0], [94.1, 3251.0], [94.2, 3290.0], [94.3, 3310.0], [94.4, 3328.0], [94.5, 3373.0], [94.6, 3420.0], [94.7, 3439.0], [94.8, 3470.0], [94.9, 3514.0], [95.0, 3534.0], [95.1, 3577.0], [95.2, 3609.0], [95.3, 3640.0], [95.4, 3737.0], [95.5, 3788.0], [95.6, 3838.0], [95.7, 3848.0], [95.8, 3904.0], [95.9, 3960.0], [96.0, 4011.0], [96.1, 4092.0], [96.2, 4160.0], [96.3, 4213.0], [96.4, 4264.0], [96.5, 4322.0], [96.6, 4408.0], [96.7, 4479.0], [96.8, 4586.0], [96.9, 4601.0], [97.0, 4704.0], [97.1, 4813.0], [97.2, 4910.0], [97.3, 5027.0], [97.4, 5107.0], [97.5, 5202.0], [97.6, 5336.0], [97.7, 5463.0], [97.8, 5591.0], [97.9, 5732.0], [98.0, 5918.0], [98.1, 6099.0], [98.2, 6260.0], [98.3, 6371.0], [98.4, 6508.0], [98.5, 6736.0], [98.6, 6974.0], [98.7, 7161.0], [98.8, 7291.0], [98.9, 7448.0], [99.0, 7626.0], [99.1, 7796.0], [99.2, 7947.0], [99.3, 8112.0], [99.4, 8219.0], [99.5, 8298.0], [99.6, 8382.0], [99.7, 8501.0], [99.8, 8603.0], [99.9, 8710.0], [100.0, 8882.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 2500.0, "maxY": 4520.0, "series": [{"data": [[2500.0, 152.0], [2600.0, 2981.0], [2800.0, 1609.0], [2700.0, 4520.0], [2900.0, 58.0], [3000.0, 34.0], [3100.0, 27.0], [3200.0, 46.0], [3300.0, 29.0], [3400.0, 32.0], [3500.0, 30.0], [3700.0, 21.0], [3600.0, 16.0], [3800.0, 24.0], [3900.0, 16.0], [4000.0, 16.0], [4200.0, 21.0], [4300.0, 10.0], [4100.0, 16.0], [4500.0, 17.0], [4600.0, 8.0], [4400.0, 13.0], [4800.0, 7.0], [4700.0, 13.0], [4900.0, 13.0], [5100.0, 10.0], [5000.0, 10.0], [5200.0, 7.0], [5300.0, 8.0], [5400.0, 7.0], [5500.0, 12.0], [5600.0, 5.0], [5700.0, 6.0], [5800.0, 5.0], [5900.0, 4.0], [6000.0, 7.0], [6100.0, 5.0], [6200.0, 9.0], [6300.0, 7.0], [6400.0, 8.0], [6500.0, 4.0], [6600.0, 5.0], [6700.0, 6.0], [6800.0, 3.0], [6900.0, 5.0], [7000.0, 4.0], [7100.0, 6.0], [7200.0, 9.0], [7400.0, 9.0], [7300.0, 4.0], [7500.0, 3.0], [7600.0, 6.0], [7700.0, 7.0], [7900.0, 10.0], [7800.0, 5.0], [8000.0, 4.0], [8100.0, 10.0], [8200.0, 12.0], [8300.0, 9.0], [8500.0, 9.0], [8400.0, 9.0], [8600.0, 9.0], [8700.0, 10.0], [8800.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 93.1399082568806, "minX": 1.65474624E12, "maxY": 100.0, "series": [{"data": [[1.65474624E12, 97.83414634146348], [1.65474642E12, 100.0], [1.6547463E12, 100.0], [1.65474648E12, 100.0], [1.65474636E12, 100.0], [1.65474654E12, 93.1399082568806]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474654E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2596.0, "minX": 1.0, "maxY": 6560.0, "series": [{"data": [[3.0, 2650.0], [5.0, 2596.0], [6.0, 2649.0], [9.0, 2597.3333333333335], [11.0, 2648.5], [13.0, 2599.5], [15.0, 2601.0], [16.0, 2601.0], [17.0, 2602.0], [18.0, 2598.0], [21.0, 2600.3333333333335], [24.0, 2606.0], [27.0, 2598.3333333333335], [28.0, 2657.0], [29.0, 2656.0], [31.0, 2997.0], [32.0, 2602.0], [34.0, 2798.6666666666665], [38.0, 2791.2], [39.0, 2597.0], [41.0, 2596.0], [43.0, 3033.0], [44.0, 2597.0], [47.0, 2930.4], [49.0, 2600.0], [48.0, 2597.0], [51.0, 4579.0], [52.0, 2598.3333333333335], [55.0, 2598.0], [56.0, 4938.0], [57.0, 3067.4], [59.0, 4997.0], [58.0, 2599.0], [60.0, 3117.4], [61.0, 2597.0], [64.0, 3051.5714285714284], [65.0, 5436.0], [66.0, 2598.0], [69.0, 3563.0], [71.0, 2684.0], [70.0, 2857.0], [73.0, 4194.0], [74.0, 4285.5], [75.0, 2794.0], [72.0, 2855.0], [78.0, 3533.0], [79.0, 3863.3333333333335], [82.0, 6256.0], [83.0, 6321.0], [81.0, 2765.0], [80.0, 2736.2], [85.0, 3080.909090909091], [87.0, 4219.2], [84.0, 2709.166666666667], [90.0, 6560.0], [91.0, 3636.0], [89.0, 2758.0], [88.0, 2774.4], [92.0, 3560.8], [95.0, 3454.818181818182], [94.0, 2746.3333333333335], [93.0, 2733.5], [96.0, 4806.5], [99.0, 3389.6666666666665], [97.0, 2773.3333333333335], [100.0, 2888.753546280237], [1.0, 2654.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.31300000000032, 2893.6927999999957]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 512.5, "minX": 1.65474624E12, "maxY": 5265.6, "series": [{"data": [[1.65474624E12, 512.5], [1.65474642E12, 2737.5], [1.6547463E12, 2678.75], [1.65474648E12, 2742.5], [1.65474636E12, 2738.75], [1.65474654E12, 1090.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65474624E12, 984.0], [1.65474642E12, 5256.0], [1.6547463E12, 5143.2], [1.65474648E12, 5265.6], [1.65474636E12, 5258.4], [1.65474654E12, 2092.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474654E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2733.8543577981663, "minX": 1.65474624E12, "maxY": 6104.0146341463405, "series": [{"data": [[1.65474624E12, 6104.0146341463405], [1.65474642E12, 2738.0251141552476], [1.6547463E12, 2826.952869808679], [1.65474648E12, 2736.0419325433013], [1.65474636E12, 2735.3035143769944], [1.65474654E12, 2733.8543577981663]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474654E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2733.8543577981663, "minX": 1.65474624E12, "maxY": 6104.009756097563, "series": [{"data": [[1.65474624E12, 6104.009756097563], [1.65474642E12, 2738.023287671238], [1.6547463E12, 2826.952869808679], [1.65474648E12, 2736.0419325433013], [1.65474636E12, 2735.3030579643982], [1.65474654E12, 2733.8543577981663]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474654E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.65474624E12, "maxY": 0.1804878048780488, "series": [{"data": [[1.65474624E12, 0.1804878048780488], [1.65474642E12, 0.01826484018264842], [1.6547463E12, 0.02239850676621559], [1.65474648E12, 0.015496809480401124], [1.65474636E12, 0.020538566864445454], [1.65474654E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474654E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2571.0, "minX": 1.65474624E12, "maxY": 8882.0, "series": [{"data": [[1.65474624E12, 8882.0], [1.65474642E12, 2998.0], [1.6547463E12, 4424.0], [1.65474648E12, 3132.0], [1.65474636E12, 2948.0], [1.65474654E12, 2903.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65474624E12, 8381.8], [1.65474642E12, 2807.0], [1.6547463E12, 3168.8], [1.65474648E12, 2845.0], [1.65474636E12, 2802.0], [1.65474654E12, 2863.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65474624E12, 8790.81], [1.65474642E12, 2860.0], [1.6547463E12, 3855.0399999999995], [1.65474648E12, 2873.0], [1.65474636E12, 2858.0], [1.65474654E12, 2889.27]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65474624E12, 8603.45], [1.65474642E12, 2834.0], [1.6547463E12, 3489.5999999999995], [1.65474648E12, 2855.0], [1.65474636E12, 2832.0], [1.65474654E12, 2869.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65474624E12, 2997.0], [1.65474642E12, 2580.0], [1.6547463E12, 2571.0], [1.65474648E12, 2587.0], [1.65474636E12, 2588.0], [1.65474654E12, 2588.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65474624E12, 5840.5], [1.65474642E12, 2748.0], [1.6547463E12, 2744.0], [1.65474648E12, 2744.0], [1.65474636E12, 2746.0], [1.65474654E12, 2753.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474654E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2654.0, "minX": 1.0, "maxY": 8681.0, "series": [{"data": [[2.0, 4086.0], [32.0, 2754.0], [33.0, 2815.0], [34.0, 2747.0], [35.0, 2750.0], [37.0, 2745.0], [36.0, 2743.0], [38.0, 2741.0], [39.0, 2745.0], [41.0, 2706.0], [40.0, 2743.0], [43.0, 2740.0], [42.0, 2730.5], [3.0, 3203.0], [4.0, 5394.5], [5.0, 5436.0], [6.0, 6349.0], [7.0, 6616.0], [8.0, 7405.0], [9.0, 7445.5], [10.0, 8279.0], [11.0, 8113.0], [12.0, 7883.5], [14.0, 8681.0], [15.0, 4897.5], [16.0, 8423.5], [1.0, 2654.0], [17.0, 8170.0], [19.0, 6336.0], [20.0, 5318.5], [21.0, 5591.0], [22.0, 4799.5], [24.0, 4216.0], [25.0, 4405.0], [28.0, 3887.5], [30.0, 3522.0], [31.0, 2749.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2654.0, "minX": 1.0, "maxY": 8681.0, "series": [{"data": [[2.0, 4086.0], [32.0, 2754.0], [33.0, 2815.0], [34.0, 2747.0], [35.0, 2750.0], [37.0, 2745.0], [36.0, 2743.0], [38.0, 2741.0], [39.0, 2745.0], [41.0, 2706.0], [40.0, 2743.0], [43.0, 2740.0], [42.0, 2730.5], [3.0, 3203.0], [4.0, 5394.5], [5.0, 5436.0], [6.0, 6349.0], [7.0, 6616.0], [8.0, 7405.0], [9.0, 7445.5], [10.0, 8279.0], [11.0, 8113.0], [12.0, 7883.5], [14.0, 8681.0], [15.0, 4897.5], [16.0, 8423.5], [1.0, 2654.0], [17.0, 8170.0], [19.0, 6336.0], [20.0, 5318.5], [21.0, 5591.0], [22.0, 4799.5], [24.0, 4216.0], [25.0, 4405.0], [28.0, 3887.5], [30.0, 3522.0], [31.0, 2749.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 43.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.5, "minX": 1.65474624E12, "maxY": 36.56666666666667, "series": [{"data": [[1.65474624E12, 8.5], [1.65474642E12, 36.5], [1.6547463E12, 35.71666666666667], [1.65474648E12, 36.56666666666667], [1.65474636E12, 36.516666666666666], [1.65474654E12, 12.866666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474654E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.833333333333333, "minX": 1.65474624E12, "maxY": 36.56666666666667, "series": [{"data": [[1.65474624E12, 6.833333333333333], [1.65474642E12, 36.5], [1.6547463E12, 35.71666666666667], [1.65474648E12, 36.56666666666667], [1.65474636E12, 36.516666666666666], [1.65474654E12, 14.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474654E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.833333333333333, "minX": 1.65474624E12, "maxY": 36.56666666666667, "series": [{"data": [[1.65474624E12, 6.833333333333333], [1.65474642E12, 36.5], [1.6547463E12, 35.71666666666667], [1.65474648E12, 36.56666666666667], [1.65474636E12, 36.516666666666666], [1.65474654E12, 14.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474654E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.833333333333333, "minX": 1.65474624E12, "maxY": 36.56666666666667, "series": [{"data": [[1.65474624E12, 6.833333333333333], [1.65474642E12, 36.5], [1.6547463E12, 35.71666666666667], [1.65474648E12, 36.56666666666667], [1.65474636E12, 36.516666666666666], [1.65474654E12, 14.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474654E12, "title": "Total Transactions Per Second"}},
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

