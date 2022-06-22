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
        data: {"result": {"minY": 2673.0, "minX": 0.0, "maxY": 3046.0, "series": [{"data": [[0.0, 2673.0], [0.1, 2675.0], [0.2, 2675.0], [0.3, 2676.0], [0.4, 2677.0], [0.5, 2677.0], [0.6, 2677.0], [0.7, 2678.0], [0.8, 2678.0], [0.9, 2679.0], [1.0, 2679.0], [1.1, 2682.0], [1.2, 2685.0], [1.3, 2687.0], [1.4, 2689.0], [1.5, 2689.0], [1.6, 2690.0], [1.7, 2690.0], [1.8, 2691.0], [1.9, 2691.0], [2.0, 2692.0], [2.1, 2692.0], [2.2, 2693.0], [2.3, 2693.0], [2.4, 2693.0], [2.5, 2693.0], [2.6, 2694.0], [2.7, 2694.0], [2.8, 2694.0], [2.9, 2694.0], [3.0, 2694.0], [3.1, 2695.0], [3.2, 2695.0], [3.3, 2695.0], [3.4, 2695.0], [3.5, 2695.0], [3.6, 2696.0], [3.7, 2696.0], [3.8, 2696.0], [3.9, 2696.0], [4.0, 2696.0], [4.1, 2696.0], [4.2, 2697.0], [4.3, 2697.0], [4.4, 2697.0], [4.5, 2697.0], [4.6, 2697.0], [4.7, 2698.0], [4.8, 2698.0], [4.9, 2698.0], [5.0, 2698.0], [5.1, 2698.0], [5.2, 2699.0], [5.3, 2699.0], [5.4, 2699.0], [5.5, 2699.0], [5.6, 2700.0], [5.7, 2700.0], [5.8, 2700.0], [5.9, 2701.0], [6.0, 2701.0], [6.1, 2701.0], [6.2, 2702.0], [6.3, 2702.0], [6.4, 2703.0], [6.5, 2703.0], [6.6, 2704.0], [6.7, 2704.0], [6.8, 2705.0], [6.9, 2707.0], [7.0, 2724.0], [7.1, 2731.0], [7.2, 2732.0], [7.3, 2733.0], [7.4, 2734.0], [7.5, 2735.0], [7.6, 2735.0], [7.7, 2736.0], [7.8, 2736.0], [7.9, 2737.0], [8.0, 2738.0], [8.1, 2738.0], [8.2, 2739.0], [8.3, 2739.0], [8.4, 2739.0], [8.5, 2739.0], [8.6, 2740.0], [8.7, 2740.0], [8.8, 2740.0], [8.9, 2740.0], [9.0, 2740.0], [9.1, 2740.0], [9.2, 2741.0], [9.3, 2741.0], [9.4, 2741.0], [9.5, 2741.0], [9.6, 2741.0], [9.7, 2741.0], [9.8, 2742.0], [9.9, 2742.0], [10.0, 2742.0], [10.1, 2742.0], [10.2, 2742.0], [10.3, 2742.0], [10.4, 2742.0], [10.5, 2743.0], [10.6, 2743.0], [10.7, 2743.0], [10.8, 2743.0], [10.9, 2743.0], [11.0, 2743.0], [11.1, 2743.0], [11.2, 2743.0], [11.3, 2743.0], [11.4, 2744.0], [11.5, 2744.0], [11.6, 2744.0], [11.7, 2744.0], [11.8, 2744.0], [11.9, 2744.0], [12.0, 2744.0], [12.1, 2744.0], [12.2, 2744.0], [12.3, 2744.0], [12.4, 2744.0], [12.5, 2745.0], [12.6, 2745.0], [12.7, 2745.0], [12.8, 2745.0], [12.9, 2745.0], [13.0, 2745.0], [13.1, 2745.0], [13.2, 2745.0], [13.3, 2745.0], [13.4, 2745.0], [13.5, 2745.0], [13.6, 2746.0], [13.7, 2746.0], [13.8, 2746.0], [13.9, 2746.0], [14.0, 2746.0], [14.1, 2746.0], [14.2, 2746.0], [14.3, 2746.0], [14.4, 2746.0], [14.5, 2747.0], [14.6, 2747.0], [14.7, 2747.0], [14.8, 2747.0], [14.9, 2747.0], [15.0, 2747.0], [15.1, 2747.0], [15.2, 2747.0], [15.3, 2747.0], [15.4, 2748.0], [15.5, 2748.0], [15.6, 2748.0], [15.7, 2748.0], [15.8, 2748.0], [15.9, 2748.0], [16.0, 2748.0], [16.1, 2749.0], [16.2, 2749.0], [16.3, 2749.0], [16.4, 2749.0], [16.5, 2749.0], [16.6, 2749.0], [16.7, 2750.0], [16.8, 2750.0], [16.9, 2750.0], [17.0, 2750.0], [17.1, 2750.0], [17.2, 2750.0], [17.3, 2751.0], [17.4, 2751.0], [17.5, 2751.0], [17.6, 2751.0], [17.7, 2752.0], [17.8, 2752.0], [17.9, 2752.0], [18.0, 2752.0], [18.1, 2752.0], [18.2, 2753.0], [18.3, 2753.0], [18.4, 2753.0], [18.5, 2753.0], [18.6, 2754.0], [18.7, 2754.0], [18.8, 2754.0], [18.9, 2755.0], [19.0, 2755.0], [19.1, 2756.0], [19.2, 2756.0], [19.3, 2757.0], [19.4, 2759.0], [19.5, 2772.0], [19.6, 2775.0], [19.7, 2778.0], [19.8, 2780.0], [19.9, 2781.0], [20.0, 2782.0], [20.1, 2782.0], [20.2, 2783.0], [20.3, 2783.0], [20.4, 2783.0], [20.5, 2784.0], [20.6, 2784.0], [20.7, 2785.0], [20.8, 2785.0], [20.9, 2785.0], [21.0, 2786.0], [21.1, 2786.0], [21.2, 2786.0], [21.3, 2787.0], [21.4, 2787.0], [21.5, 2787.0], [21.6, 2787.0], [21.7, 2787.0], [21.8, 2788.0], [21.9, 2788.0], [22.0, 2788.0], [22.1, 2788.0], [22.2, 2788.0], [22.3, 2788.0], [22.4, 2788.0], [22.5, 2788.0], [22.6, 2789.0], [22.7, 2789.0], [22.8, 2789.0], [22.9, 2789.0], [23.0, 2789.0], [23.1, 2789.0], [23.2, 2789.0], [23.3, 2789.0], [23.4, 2789.0], [23.5, 2789.0], [23.6, 2790.0], [23.7, 2790.0], [23.8, 2790.0], [23.9, 2790.0], [24.0, 2790.0], [24.1, 2790.0], [24.2, 2790.0], [24.3, 2790.0], [24.4, 2790.0], [24.5, 2790.0], [24.6, 2790.0], [24.7, 2791.0], [24.8, 2791.0], [24.9, 2791.0], [25.0, 2791.0], [25.1, 2791.0], [25.2, 2791.0], [25.3, 2791.0], [25.4, 2791.0], [25.5, 2791.0], [25.6, 2791.0], [25.7, 2792.0], [25.8, 2792.0], [25.9, 2792.0], [26.0, 2792.0], [26.1, 2792.0], [26.2, 2792.0], [26.3, 2792.0], [26.4, 2792.0], [26.5, 2792.0], [26.6, 2792.0], [26.7, 2792.0], [26.8, 2792.0], [26.9, 2792.0], [27.0, 2793.0], [27.1, 2793.0], [27.2, 2793.0], [27.3, 2793.0], [27.4, 2793.0], [27.5, 2793.0], [27.6, 2793.0], [27.7, 2793.0], [27.8, 2793.0], [27.9, 2793.0], [28.0, 2793.0], [28.1, 2793.0], [28.2, 2793.0], [28.3, 2793.0], [28.4, 2793.0], [28.5, 2793.0], [28.6, 2793.0], [28.7, 2793.0], [28.8, 2794.0], [28.9, 2794.0], [29.0, 2794.0], [29.1, 2794.0], [29.2, 2794.0], [29.3, 2794.0], [29.4, 2794.0], [29.5, 2794.0], [29.6, 2794.0], [29.7, 2794.0], [29.8, 2794.0], [29.9, 2794.0], [30.0, 2794.0], [30.1, 2794.0], [30.2, 2794.0], [30.3, 2794.0], [30.4, 2794.0], [30.5, 2795.0], [30.6, 2795.0], [30.7, 2795.0], [30.8, 2795.0], [30.9, 2795.0], [31.0, 2795.0], [31.1, 2795.0], [31.2, 2795.0], [31.3, 2795.0], [31.4, 2795.0], [31.5, 2795.0], [31.6, 2795.0], [31.7, 2795.0], [31.8, 2795.0], [31.9, 2795.0], [32.0, 2795.0], [32.1, 2795.0], [32.2, 2796.0], [32.3, 2796.0], [32.4, 2796.0], [32.5, 2796.0], [32.6, 2796.0], [32.7, 2796.0], [32.8, 2796.0], [32.9, 2796.0], [33.0, 2796.0], [33.1, 2796.0], [33.2, 2796.0], [33.3, 2796.0], [33.4, 2796.0], [33.5, 2796.0], [33.6, 2796.0], [33.7, 2796.0], [33.8, 2797.0], [33.9, 2797.0], [34.0, 2797.0], [34.1, 2797.0], [34.2, 2797.0], [34.3, 2797.0], [34.4, 2797.0], [34.5, 2797.0], [34.6, 2797.0], [34.7, 2797.0], [34.8, 2797.0], [34.9, 2797.0], [35.0, 2797.0], [35.1, 2797.0], [35.2, 2797.0], [35.3, 2797.0], [35.4, 2798.0], [35.5, 2798.0], [35.6, 2798.0], [35.7, 2798.0], [35.8, 2798.0], [35.9, 2798.0], [36.0, 2798.0], [36.1, 2798.0], [36.2, 2798.0], [36.3, 2798.0], [36.4, 2798.0], [36.5, 2798.0], [36.6, 2798.0], [36.7, 2798.0], [36.8, 2799.0], [36.9, 2799.0], [37.0, 2799.0], [37.1, 2799.0], [37.2, 2799.0], [37.3, 2799.0], [37.4, 2799.0], [37.5, 2799.0], [37.6, 2799.0], [37.7, 2799.0], [37.8, 2799.0], [37.9, 2800.0], [38.0, 2800.0], [38.1, 2800.0], [38.2, 2800.0], [38.3, 2800.0], [38.4, 2800.0], [38.5, 2800.0], [38.6, 2800.0], [38.7, 2800.0], [38.8, 2800.0], [38.9, 2801.0], [39.0, 2801.0], [39.1, 2801.0], [39.2, 2801.0], [39.3, 2801.0], [39.4, 2801.0], [39.5, 2802.0], [39.6, 2802.0], [39.7, 2802.0], [39.8, 2802.0], [39.9, 2802.0], [40.0, 2802.0], [40.1, 2803.0], [40.2, 2803.0], [40.3, 2803.0], [40.4, 2803.0], [40.5, 2804.0], [40.6, 2804.0], [40.7, 2805.0], [40.8, 2805.0], [40.9, 2806.0], [41.0, 2807.0], [41.1, 2808.0], [41.2, 2810.0], [41.3, 2811.0], [41.4, 2813.0], [41.5, 2814.0], [41.6, 2816.0], [41.7, 2818.0], [41.8, 2820.0], [41.9, 2822.0], [42.0, 2823.0], [42.1, 2824.0], [42.2, 2824.0], [42.3, 2825.0], [42.4, 2825.0], [42.5, 2826.0], [42.6, 2827.0], [42.7, 2827.0], [42.8, 2828.0], [42.9, 2828.0], [43.0, 2829.0], [43.1, 2829.0], [43.2, 2829.0], [43.3, 2830.0], [43.4, 2831.0], [43.5, 2831.0], [43.6, 2832.0], [43.7, 2832.0], [43.8, 2833.0], [43.9, 2833.0], [44.0, 2834.0], [44.1, 2834.0], [44.2, 2834.0], [44.3, 2835.0], [44.4, 2835.0], [44.5, 2835.0], [44.6, 2835.0], [44.7, 2836.0], [44.8, 2836.0], [44.9, 2836.0], [45.0, 2836.0], [45.1, 2836.0], [45.2, 2836.0], [45.3, 2837.0], [45.4, 2837.0], [45.5, 2837.0], [45.6, 2837.0], [45.7, 2837.0], [45.8, 2837.0], [45.9, 2838.0], [46.0, 2838.0], [46.1, 2838.0], [46.2, 2838.0], [46.3, 2838.0], [46.4, 2838.0], [46.5, 2838.0], [46.6, 2838.0], [46.7, 2838.0], [46.8, 2839.0], [46.9, 2839.0], [47.0, 2839.0], [47.1, 2839.0], [47.2, 2839.0], [47.3, 2839.0], [47.4, 2839.0], [47.5, 2839.0], [47.6, 2840.0], [47.7, 2840.0], [47.8, 2840.0], [47.9, 2840.0], [48.0, 2840.0], [48.1, 2840.0], [48.2, 2840.0], [48.3, 2840.0], [48.4, 2840.0], [48.5, 2840.0], [48.6, 2840.0], [48.7, 2840.0], [48.8, 2841.0], [48.9, 2841.0], [49.0, 2841.0], [49.1, 2841.0], [49.2, 2841.0], [49.3, 2841.0], [49.4, 2841.0], [49.5, 2841.0], [49.6, 2841.0], [49.7, 2841.0], [49.8, 2841.0], [49.9, 2841.0], [50.0, 2841.0], [50.1, 2841.0], [50.2, 2842.0], [50.3, 2842.0], [50.4, 2842.0], [50.5, 2842.0], [50.6, 2842.0], [50.7, 2842.0], [50.8, 2842.0], [50.9, 2842.0], [51.0, 2842.0], [51.1, 2842.0], [51.2, 2842.0], [51.3, 2842.0], [51.4, 2842.0], [51.5, 2843.0], [51.6, 2843.0], [51.7, 2843.0], [51.8, 2843.0], [51.9, 2843.0], [52.0, 2843.0], [52.1, 2843.0], [52.2, 2843.0], [52.3, 2843.0], [52.4, 2843.0], [52.5, 2843.0], [52.6, 2843.0], [52.7, 2843.0], [52.8, 2844.0], [52.9, 2844.0], [53.0, 2844.0], [53.1, 2844.0], [53.2, 2844.0], [53.3, 2844.0], [53.4, 2844.0], [53.5, 2844.0], [53.6, 2844.0], [53.7, 2844.0], [53.8, 2844.0], [53.9, 2844.0], [54.0, 2844.0], [54.1, 2845.0], [54.2, 2845.0], [54.3, 2845.0], [54.4, 2845.0], [54.5, 2845.0], [54.6, 2845.0], [54.7, 2845.0], [54.8, 2845.0], [54.9, 2845.0], [55.0, 2845.0], [55.1, 2845.0], [55.2, 2845.0], [55.3, 2845.0], [55.4, 2845.0], [55.5, 2845.0], [55.6, 2845.0], [55.7, 2845.0], [55.8, 2846.0], [55.9, 2846.0], [56.0, 2846.0], [56.1, 2846.0], [56.2, 2846.0], [56.3, 2846.0], [56.4, 2846.0], [56.5, 2846.0], [56.6, 2846.0], [56.7, 2846.0], [56.8, 2846.0], [56.9, 2846.0], [57.0, 2846.0], [57.1, 2846.0], [57.2, 2846.0], [57.3, 2847.0], [57.4, 2847.0], [57.5, 2847.0], [57.6, 2847.0], [57.7, 2847.0], [57.8, 2847.0], [57.9, 2847.0], [58.0, 2847.0], [58.1, 2847.0], [58.2, 2847.0], [58.3, 2847.0], [58.4, 2847.0], [58.5, 2847.0], [58.6, 2847.0], [58.7, 2848.0], [58.8, 2848.0], [58.9, 2848.0], [59.0, 2848.0], [59.1, 2848.0], [59.2, 2848.0], [59.3, 2848.0], [59.4, 2848.0], [59.5, 2848.0], [59.6, 2848.0], [59.7, 2848.0], [59.8, 2848.0], [59.9, 2848.0], [60.0, 2849.0], [60.1, 2849.0], [60.2, 2849.0], [60.3, 2849.0], [60.4, 2849.0], [60.5, 2849.0], [60.6, 2849.0], [60.7, 2849.0], [60.8, 2849.0], [60.9, 2849.0], [61.0, 2849.0], [61.1, 2849.0], [61.2, 2849.0], [61.3, 2849.0], [61.4, 2849.0], [61.5, 2850.0], [61.6, 2850.0], [61.7, 2850.0], [61.8, 2850.0], [61.9, 2850.0], [62.0, 2850.0], [62.1, 2850.0], [62.2, 2850.0], [62.3, 2850.0], [62.4, 2850.0], [62.5, 2850.0], [62.6, 2850.0], [62.7, 2851.0], [62.8, 2851.0], [62.9, 2851.0], [63.0, 2851.0], [63.1, 2851.0], [63.2, 2851.0], [63.3, 2851.0], [63.4, 2851.0], [63.5, 2851.0], [63.6, 2851.0], [63.7, 2852.0], [63.8, 2852.0], [63.9, 2852.0], [64.0, 2852.0], [64.1, 2852.0], [64.2, 2852.0], [64.3, 2853.0], [64.4, 2853.0], [64.5, 2853.0], [64.6, 2853.0], [64.7, 2853.0], [64.8, 2854.0], [64.9, 2854.0], [65.0, 2854.0], [65.1, 2855.0], [65.2, 2855.0], [65.3, 2855.0], [65.4, 2855.0], [65.5, 2856.0], [65.6, 2856.0], [65.7, 2857.0], [65.8, 2858.0], [65.9, 2859.0], [66.0, 2860.0], [66.1, 2863.0], [66.2, 2865.0], [66.3, 2866.0], [66.4, 2869.0], [66.5, 2871.0], [66.6, 2871.0], [66.7, 2872.0], [66.8, 2873.0], [66.9, 2873.0], [67.0, 2874.0], [67.1, 2874.0], [67.2, 2875.0], [67.3, 2876.0], [67.4, 2876.0], [67.5, 2877.0], [67.6, 2878.0], [67.7, 2879.0], [67.8, 2879.0], [67.9, 2880.0], [68.0, 2881.0], [68.1, 2882.0], [68.2, 2883.0], [68.3, 2883.0], [68.4, 2884.0], [68.5, 2885.0], [68.6, 2885.0], [68.7, 2885.0], [68.8, 2886.0], [68.9, 2886.0], [69.0, 2886.0], [69.1, 2886.0], [69.2, 2887.0], [69.3, 2887.0], [69.4, 2887.0], [69.5, 2887.0], [69.6, 2887.0], [69.7, 2888.0], [69.8, 2888.0], [69.9, 2888.0], [70.0, 2888.0], [70.1, 2888.0], [70.2, 2889.0], [70.3, 2889.0], [70.4, 2889.0], [70.5, 2889.0], [70.6, 2889.0], [70.7, 2890.0], [70.8, 2890.0], [70.9, 2890.0], [71.0, 2890.0], [71.1, 2890.0], [71.2, 2890.0], [71.3, 2890.0], [71.4, 2890.0], [71.5, 2890.0], [71.6, 2891.0], [71.7, 2891.0], [71.8, 2891.0], [71.9, 2891.0], [72.0, 2891.0], [72.1, 2891.0], [72.2, 2891.0], [72.3, 2891.0], [72.4, 2891.0], [72.5, 2891.0], [72.6, 2892.0], [72.7, 2892.0], [72.8, 2892.0], [72.9, 2892.0], [73.0, 2892.0], [73.1, 2892.0], [73.2, 2892.0], [73.3, 2892.0], [73.4, 2892.0], [73.5, 2892.0], [73.6, 2892.0], [73.7, 2893.0], [73.8, 2893.0], [73.9, 2893.0], [74.0, 2893.0], [74.1, 2893.0], [74.2, 2893.0], [74.3, 2893.0], [74.4, 2893.0], [74.5, 2893.0], [74.6, 2893.0], [74.7, 2894.0], [74.8, 2894.0], [74.9, 2894.0], [75.0, 2894.0], [75.1, 2894.0], [75.2, 2894.0], [75.3, 2894.0], [75.4, 2894.0], [75.5, 2894.0], [75.6, 2894.0], [75.7, 2894.0], [75.8, 2895.0], [75.9, 2895.0], [76.0, 2895.0], [76.1, 2895.0], [76.2, 2895.0], [76.3, 2895.0], [76.4, 2895.0], [76.5, 2895.0], [76.6, 2895.0], [76.7, 2895.0], [76.8, 2895.0], [76.9, 2895.0], [77.0, 2895.0], [77.1, 2895.0], [77.2, 2895.0], [77.3, 2895.0], [77.4, 2896.0], [77.5, 2896.0], [77.6, 2896.0], [77.7, 2896.0], [77.8, 2896.0], [77.9, 2896.0], [78.0, 2896.0], [78.1, 2896.0], [78.2, 2896.0], [78.3, 2896.0], [78.4, 2896.0], [78.5, 2896.0], [78.6, 2896.0], [78.7, 2896.0], [78.8, 2896.0], [78.9, 2896.0], [79.0, 2897.0], [79.1, 2897.0], [79.2, 2897.0], [79.3, 2897.0], [79.4, 2897.0], [79.5, 2897.0], [79.6, 2897.0], [79.7, 2897.0], [79.8, 2897.0], [79.9, 2897.0], [80.0, 2897.0], [80.1, 2897.0], [80.2, 2897.0], [80.3, 2898.0], [80.4, 2898.0], [80.5, 2898.0], [80.6, 2898.0], [80.7, 2898.0], [80.8, 2898.0], [80.9, 2898.0], [81.0, 2898.0], [81.1, 2898.0], [81.2, 2898.0], [81.3, 2898.0], [81.4, 2898.0], [81.5, 2898.0], [81.6, 2899.0], [81.7, 2899.0], [81.8, 2899.0], [81.9, 2899.0], [82.0, 2899.0], [82.1, 2899.0], [82.2, 2899.0], [82.3, 2899.0], [82.4, 2899.0], [82.5, 2899.0], [82.6, 2899.0], [82.7, 2900.0], [82.8, 2900.0], [82.9, 2900.0], [83.0, 2900.0], [83.1, 2900.0], [83.2, 2900.0], [83.3, 2900.0], [83.4, 2900.0], [83.5, 2900.0], [83.6, 2900.0], [83.7, 2900.0], [83.8, 2901.0], [83.9, 2901.0], [84.0, 2901.0], [84.1, 2901.0], [84.2, 2901.0], [84.3, 2901.0], [84.4, 2901.0], [84.5, 2901.0], [84.6, 2901.0], [84.7, 2901.0], [84.8, 2902.0], [84.9, 2902.0], [85.0, 2902.0], [85.1, 2902.0], [85.2, 2902.0], [85.3, 2902.0], [85.4, 2902.0], [85.5, 2902.0], [85.6, 2903.0], [85.7, 2903.0], [85.8, 2903.0], [85.9, 2903.0], [86.0, 2903.0], [86.1, 2903.0], [86.2, 2903.0], [86.3, 2904.0], [86.4, 2904.0], [86.5, 2904.0], [86.6, 2904.0], [86.7, 2904.0], [86.8, 2904.0], [86.9, 2905.0], [87.0, 2905.0], [87.1, 2905.0], [87.2, 2906.0], [87.3, 2906.0], [87.4, 2907.0], [87.5, 2907.0], [87.6, 2907.0], [87.7, 2908.0], [87.8, 2909.0], [87.9, 2910.0], [88.0, 2912.0], [88.1, 2920.0], [88.2, 2922.0], [88.3, 2923.0], [88.4, 2925.0], [88.5, 2927.0], [88.6, 2929.0], [88.7, 2930.0], [88.8, 2932.0], [88.9, 2933.0], [89.0, 2933.0], [89.1, 2934.0], [89.2, 2934.0], [89.3, 2935.0], [89.4, 2936.0], [89.5, 2936.0], [89.6, 2937.0], [89.7, 2938.0], [89.8, 2938.0], [89.9, 2939.0], [90.0, 2940.0], [90.1, 2940.0], [90.2, 2940.0], [90.3, 2941.0], [90.4, 2942.0], [90.5, 2942.0], [90.6, 2942.0], [90.7, 2942.0], [90.8, 2943.0], [90.9, 2943.0], [91.0, 2943.0], [91.1, 2944.0], [91.2, 2944.0], [91.3, 2944.0], [91.4, 2944.0], [91.5, 2944.0], [91.6, 2945.0], [91.7, 2945.0], [91.8, 2945.0], [91.9, 2946.0], [92.0, 2946.0], [92.1, 2946.0], [92.2, 2946.0], [92.3, 2947.0], [92.4, 2947.0], [92.5, 2947.0], [92.6, 2947.0], [92.7, 2947.0], [92.8, 2947.0], [92.9, 2947.0], [93.0, 2948.0], [93.1, 2948.0], [93.2, 2948.0], [93.3, 2948.0], [93.4, 2948.0], [93.5, 2948.0], [93.6, 2949.0], [93.7, 2949.0], [93.8, 2949.0], [93.9, 2949.0], [94.0, 2949.0], [94.1, 2949.0], [94.2, 2950.0], [94.3, 2950.0], [94.4, 2950.0], [94.5, 2950.0], [94.6, 2950.0], [94.7, 2951.0], [94.8, 2951.0], [94.9, 2951.0], [95.0, 2951.0], [95.1, 2952.0], [95.2, 2952.0], [95.3, 2952.0], [95.4, 2952.0], [95.5, 2953.0], [95.6, 2953.0], [95.7, 2954.0], [95.8, 2954.0], [95.9, 2954.0], [96.0, 2955.0], [96.1, 2955.0], [96.2, 2955.0], [96.3, 2956.0], [96.4, 2956.0], [96.5, 2956.0], [96.6, 2957.0], [96.7, 2957.0], [96.8, 2958.0], [96.9, 2958.0], [97.0, 2958.0], [97.1, 2959.0], [97.2, 2960.0], [97.3, 2961.0], [97.4, 2962.0], [97.5, 2965.0], [97.6, 2971.0], [97.7, 2976.0], [97.8, 2981.0], [97.9, 2984.0], [98.0, 2986.0], [98.1, 2988.0], [98.2, 2989.0], [98.3, 2992.0], [98.4, 2993.0], [98.5, 2993.0], [98.6, 2995.0], [98.7, 2995.0], [98.8, 2996.0], [98.9, 2997.0], [99.0, 2997.0], [99.1, 2998.0], [99.2, 2999.0], [99.3, 2999.0], [99.4, 3000.0], [99.5, 3001.0], [99.6, 3002.0], [99.7, 3004.0], [99.8, 3006.0], [99.9, 3009.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 69.0, "minX": 2600.0, "maxY": 4479.0, "series": [{"data": [[2600.0, 550.0], [2800.0, 4479.0], [2700.0, 3234.0], [2900.0, 1668.0], [3000.0, 69.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 76.17027027027034, "minX": 1.65474708E12, "maxY": 100.0, "series": [{"data": [[1.65474738E12, 76.17027027027034], [1.6547472E12, 100.0], [1.65474708E12, 96.95217762596067], [1.65474726E12, 100.0], [1.65474714E12, 100.0], [1.65474732E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474738E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2694.0, "minX": 1.0, "maxY": 2983.0, "series": [{"data": [[2.0, 2697.0], [3.0, 2708.0], [5.0, 2703.0], [6.0, 2708.0], [7.0, 2711.0], [9.0, 2707.0], [10.0, 2697.0], [11.0, 2703.0], [13.0, 2705.0], [14.0, 2700.0], [15.0, 2704.0], [18.0, 2703.6666666666665], [19.0, 2703.0], [20.0, 2702.0], [22.0, 2703.5], [23.0, 2699.0], [24.0, 2701.0], [25.0, 2697.0], [27.0, 2701.3333333333335], [28.0, 2702.0], [29.0, 2808.0], [30.0, 2701.5], [31.0, 2694.0], [32.0, 2844.75], [33.0, 2790.3333333333335], [34.0, 2983.0], [35.0, 2788.0], [36.0, 2977.0], [37.0, 2748.1666666666665], [38.0, 2838.0], [39.0, 2751.8], [40.0, 2973.0], [41.0, 2765.25], [42.0, 2961.0], [43.0, 2769.0], [44.0, 2755.8], [45.0, 2768.5], [46.0, 2968.0], [47.0, 2790.0], [48.0, 2753.0], [49.0, 2831.0], [50.0, 2961.0], [51.0, 2965.0], [52.0, 2740.333333333333], [53.0, 2967.0], [54.0, 2963.0], [55.0, 2961.0], [56.0, 2738.8333333333335], [57.0, 2748.4], [58.0, 2718.416666666666], [59.0, 2778.6666666666665], [60.0, 2758.5], [61.0, 2732.1428571428573], [62.0, 2757.75], [63.0, 2745.0], [64.0, 2736.6666666666665], [65.0, 2819.0], [66.0, 2818.5], [67.0, 2817.0], [68.0, 2723.7500000000005], [69.0, 2777.6666666666665], [70.0, 2735.066666666666], [71.0, 2823.666666666667], [72.0, 2820.5], [73.0, 2819.5], [74.0, 2814.857142857143], [75.0, 2866.3333333333335], [76.0, 2853.75], [77.0, 2820.0], [78.0, 2831.8571428571427], [79.0, 2874.3333333333335], [80.0, 2843.0], [81.0, 2877.0], [82.0, 2779.5], [83.0, 2770.6666666666665], [84.0, 2849.0833333333335], [85.0, 2836.0], [86.0, 2785.5], [87.0, 2832.125], [88.0, 2809.5714285714284], [89.0, 2839.2222222222217], [90.0, 2833.0], [91.0, 2797.833333333333], [92.0, 2772.0], [93.0, 2796.7000000000003], [94.0, 2866.4999999999995], [95.0, 2815.5], [96.0, 2808.125], [97.0, 2807.75], [98.0, 2840.0], [99.0, 2858.777777777778], [100.0, 2835.9400000000082], [1.0, 2698.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.76140000000021, 2834.383199999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 234.33333333333334, "minX": 1.65474708E12, "maxY": 5083.2, "series": [{"data": [[1.65474738E12, 234.33333333333334], [1.6547472E12, 1339.5], [1.65474708E12, 741.6333333333333], [1.65474726E12, 1341.4], [1.65474714E12, 1338.2333333333333], [1.65474732E12, 1338.2333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65474738E12, 888.0], [1.6547472E12, 5076.0], [1.65474708E12, 2810.4], [1.65474726E12, 5083.2], [1.65474714E12, 5071.2], [1.65474732E12, 5071.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474738E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2796.5810810810804, "minX": 1.65474708E12, "maxY": 2839.119261713204, "series": [{"data": [[1.65474738E12, 2796.5810810810804], [1.6547472E12, 2836.182505910162], [1.65474708E12, 2824.202391118696], [1.65474726E12, 2839.0377714825286], [1.65474714E12, 2835.442025556078], [1.65474732E12, 2839.119261713204]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474738E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2796.5810810810804, "minX": 1.65474708E12, "maxY": 2839.118788452438, "series": [{"data": [[1.65474738E12, 2796.5810810810804], [1.6547472E12, 2836.1810874704497], [1.65474708E12, 2824.2015371477382], [1.65474726E12, 2839.036827195467], [1.65474714E12, 2835.4415522953136], [1.65474732E12, 2839.118788452438]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474738E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.65474708E12, "maxY": 0.04526046114432109, "series": [{"data": [[1.65474738E12, 0.0], [1.6547472E12, 0.016548463356974005], [1.65474708E12, 0.04526046114432109], [1.65474726E12, 0.021718602455146407], [1.65474714E12, 0.024136299100804542], [1.65474732E12, 0.024609559867486912]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474738E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2673.0, "minX": 1.65474708E12, "maxY": 3046.0, "series": [{"data": [[1.65474738E12, 3046.0], [1.6547472E12, 3005.0], [1.65474708E12, 3012.0], [1.65474726E12, 3025.0], [1.65474714E12, 2958.0], [1.65474732E12, 3036.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65474738E12, 2951.9], [1.6547472E12, 2903.0], [1.65474708E12, 2898.0], [1.65474726E12, 2947.0], [1.65474714E12, 2895.0], [1.65474732E12, 2950.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65474738E12, 3016.5700000000006], [1.6547472E12, 2978.84], [1.65474708E12, 2971.0], [1.65474726E12, 2999.0], [1.65474714E12, 2946.0], [1.65474732E12, 3000.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65474738E12, 2991.45], [1.6547472E12, 2944.0], [1.65474708E12, 2959.0], [1.65474726E12, 2954.0], [1.65474714E12, 2900.0], [1.65474732E12, 2990.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65474738E12, 2685.0], [1.6547472E12, 2686.0], [1.65474708E12, 2673.0], [1.65474726E12, 2684.0], [1.65474714E12, 2685.0], [1.65474732E12, 2685.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65474738E12, 2749.0], [1.6547472E12, 2843.0], [1.65474708E12, 2835.0], [1.65474726E12, 2846.5], [1.65474714E12, 2841.0], [1.65474732E12, 2847.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474738E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2678.0, "minX": 1.0, "maxY": 2971.0, "series": [{"data": [[33.0, 2844.5], [32.0, 2847.5], [34.0, 2843.0], [35.0, 2846.0], [37.0, 2840.0], [36.0, 2839.0], [38.0, 2838.0], [39.0, 2829.0], [40.0, 2808.5], [41.0, 2817.0], [43.0, 2841.5], [42.0, 2848.0], [45.0, 2801.0], [5.0, 2971.0], [9.0, 2707.0], [10.0, 2967.0], [11.0, 2701.0], [12.0, 2703.5], [1.0, 2698.0], [17.0, 2700.0], [18.0, 2959.5], [20.0, 2817.5], [21.0, 2678.0], [25.0, 2699.0], [26.0, 2700.0], [27.0, 2880.5], [28.0, 2863.0], [29.0, 2847.5], [30.0, 2849.0], [31.0, 2845.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2678.0, "minX": 1.0, "maxY": 2971.0, "series": [{"data": [[33.0, 2844.5], [32.0, 2847.5], [34.0, 2843.0], [35.0, 2846.0], [37.0, 2840.0], [36.0, 2839.0], [38.0, 2838.0], [39.0, 2829.0], [40.0, 2808.5], [41.0, 2817.0], [43.0, 2841.5], [42.0, 2848.0], [45.0, 2801.0], [5.0, 2971.0], [9.0, 2707.0], [10.0, 2967.0], [11.0, 2701.0], [12.0, 2703.5], [1.0, 2698.0], [17.0, 2700.0], [18.0, 2959.5], [20.0, 2817.5], [21.0, 2678.0], [25.0, 2699.0], [26.0, 2700.0], [27.0, 2880.5], [28.0, 2863.0], [29.0, 2847.5], [30.0, 2849.0], [31.0, 2845.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 45.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.5, "minX": 1.65474708E12, "maxY": 35.3, "series": [{"data": [[1.65474738E12, 4.5], [1.6547472E12, 35.25], [1.65474708E12, 21.183333333333334], [1.65474726E12, 35.3], [1.65474714E12, 35.21666666666667], [1.65474732E12, 35.21666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474738E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.166666666666667, "minX": 1.65474708E12, "maxY": 35.3, "series": [{"data": [[1.65474738E12, 6.166666666666667], [1.6547472E12, 35.25], [1.65474708E12, 19.516666666666666], [1.65474726E12, 35.3], [1.65474714E12, 35.21666666666667], [1.65474732E12, 35.21666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65474738E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.166666666666667, "minX": 1.65474708E12, "maxY": 35.3, "series": [{"data": [[1.65474738E12, 6.166666666666667], [1.6547472E12, 35.25], [1.65474708E12, 19.516666666666666], [1.65474726E12, 35.3], [1.65474714E12, 35.21666666666667], [1.65474732E12, 35.21666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474738E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.166666666666667, "minX": 1.65474708E12, "maxY": 35.3, "series": [{"data": [[1.65474738E12, 6.166666666666667], [1.6547472E12, 35.25], [1.65474708E12, 19.516666666666666], [1.65474726E12, 35.3], [1.65474714E12, 35.21666666666667], [1.65474732E12, 35.21666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65474738E12, "title": "Total Transactions Per Second"}},
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

