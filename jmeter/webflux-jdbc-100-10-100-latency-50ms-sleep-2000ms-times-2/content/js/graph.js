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
        data: {"result": {"minY": 4153.0, "minX": 0.0, "maxY": 12955.0, "series": [{"data": [[0.0, 4153.0], [0.1, 4155.0], [0.2, 4155.0], [0.3, 4155.0], [0.4, 4155.0], [0.5, 4155.0], [0.6, 4155.0], [0.7, 4156.0], [0.8, 4156.0], [0.9, 4156.0], [1.0, 4156.0], [1.1, 4156.0], [1.2, 4156.0], [1.3, 4156.0], [1.4, 4156.0], [1.5, 4156.0], [1.6, 4156.0], [1.7, 4156.0], [1.8, 4156.0], [1.9, 4156.0], [2.0, 4156.0], [2.1, 4156.0], [2.2, 4156.0], [2.3, 4156.0], [2.4, 4156.0], [2.5, 4156.0], [2.6, 4157.0], [2.7, 4157.0], [2.8, 4157.0], [2.9, 4157.0], [3.0, 4157.0], [3.1, 4157.0], [3.2, 4157.0], [3.3, 4157.0], [3.4, 4157.0], [3.5, 4157.0], [3.6, 4157.0], [3.7, 4157.0], [3.8, 4157.0], [3.9, 4157.0], [4.0, 4157.0], [4.1, 4157.0], [4.2, 4157.0], [4.3, 4157.0], [4.4, 4157.0], [4.5, 4157.0], [4.6, 4157.0], [4.7, 4157.0], [4.8, 4157.0], [4.9, 4157.0], [5.0, 4157.0], [5.1, 4157.0], [5.2, 4157.0], [5.3, 4157.0], [5.4, 4157.0], [5.5, 4157.0], [5.6, 4157.0], [5.7, 4157.0], [5.8, 4157.0], [5.9, 4157.0], [6.0, 4157.0], [6.1, 4157.0], [6.2, 4157.0], [6.3, 4157.0], [6.4, 4157.0], [6.5, 4157.0], [6.6, 4157.0], [6.7, 4157.0], [6.8, 4157.0], [6.9, 4157.0], [7.0, 4157.0], [7.1, 4157.0], [7.2, 4157.0], [7.3, 4158.0], [7.4, 4158.0], [7.5, 4158.0], [7.6, 4158.0], [7.7, 4158.0], [7.8, 4158.0], [7.9, 4158.0], [8.0, 4158.0], [8.1, 4158.0], [8.2, 4158.0], [8.3, 4158.0], [8.4, 4158.0], [8.5, 4158.0], [8.6, 4158.0], [8.7, 4158.0], [8.8, 4158.0], [8.9, 4158.0], [9.0, 4158.0], [9.1, 4158.0], [9.2, 4158.0], [9.3, 4158.0], [9.4, 4158.0], [9.5, 4158.0], [9.6, 4158.0], [9.7, 4158.0], [9.8, 4158.0], [9.9, 4158.0], [10.0, 4158.0], [10.1, 4158.0], [10.2, 4158.0], [10.3, 4158.0], [10.4, 4158.0], [10.5, 4158.0], [10.6, 4158.0], [10.7, 4158.0], [10.8, 4158.0], [10.9, 4158.0], [11.0, 4158.0], [11.1, 4158.0], [11.2, 4158.0], [11.3, 4158.0], [11.4, 4158.0], [11.5, 4158.0], [11.6, 4158.0], [11.7, 4158.0], [11.8, 4158.0], [11.9, 4158.0], [12.0, 4158.0], [12.1, 4158.0], [12.2, 4158.0], [12.3, 4158.0], [12.4, 4158.0], [12.5, 4158.0], [12.6, 4158.0], [12.7, 4158.0], [12.8, 4158.0], [12.9, 4158.0], [13.0, 4158.0], [13.1, 4158.0], [13.2, 4158.0], [13.3, 4158.0], [13.4, 4158.0], [13.5, 4158.0], [13.6, 4159.0], [13.7, 4159.0], [13.8, 4159.0], [13.9, 4159.0], [14.0, 4159.0], [14.1, 4159.0], [14.2, 4159.0], [14.3, 4159.0], [14.4, 4159.0], [14.5, 4159.0], [14.6, 4159.0], [14.7, 4159.0], [14.8, 4159.0], [14.9, 4159.0], [15.0, 4159.0], [15.1, 4159.0], [15.2, 4159.0], [15.3, 4159.0], [15.4, 4159.0], [15.5, 4159.0], [15.6, 4159.0], [15.7, 4159.0], [15.8, 4159.0], [15.9, 4159.0], [16.0, 4159.0], [16.1, 4159.0], [16.2, 4159.0], [16.3, 4159.0], [16.4, 4159.0], [16.5, 4159.0], [16.6, 4159.0], [16.7, 4159.0], [16.8, 4159.0], [16.9, 4159.0], [17.0, 4159.0], [17.1, 4159.0], [17.2, 4159.0], [17.3, 4159.0], [17.4, 4159.0], [17.5, 4159.0], [17.6, 4159.0], [17.7, 4159.0], [17.8, 4159.0], [17.9, 4159.0], [18.0, 4159.0], [18.1, 4159.0], [18.2, 4159.0], [18.3, 4159.0], [18.4, 4159.0], [18.5, 4159.0], [18.6, 4159.0], [18.7, 4159.0], [18.8, 4159.0], [18.9, 4159.0], [19.0, 4159.0], [19.1, 4159.0], [19.2, 4159.0], [19.3, 4159.0], [19.4, 4159.0], [19.5, 4159.0], [19.6, 4159.0], [19.7, 4159.0], [19.8, 4159.0], [19.9, 4159.0], [20.0, 4159.0], [20.1, 4159.0], [20.2, 4159.0], [20.3, 4159.0], [20.4, 4159.0], [20.5, 4159.0], [20.6, 4159.0], [20.7, 4159.0], [20.8, 4159.0], [20.9, 4159.0], [21.0, 4160.0], [21.1, 4160.0], [21.2, 4160.0], [21.3, 4160.0], [21.4, 4160.0], [21.5, 4160.0], [21.6, 4160.0], [21.7, 4160.0], [21.8, 4160.0], [21.9, 4160.0], [22.0, 4160.0], [22.1, 4160.0], [22.2, 4160.0], [22.3, 4160.0], [22.4, 4160.0], [22.5, 4160.0], [22.6, 4160.0], [22.7, 4160.0], [22.8, 4160.0], [22.9, 4160.0], [23.0, 4160.0], [23.1, 4160.0], [23.2, 4160.0], [23.3, 4160.0], [23.4, 4160.0], [23.5, 4160.0], [23.6, 4160.0], [23.7, 4160.0], [23.8, 4160.0], [23.9, 4160.0], [24.0, 4160.0], [24.1, 4160.0], [24.2, 4160.0], [24.3, 4160.0], [24.4, 4160.0], [24.5, 4160.0], [24.6, 4160.0], [24.7, 4160.0], [24.8, 4160.0], [24.9, 4160.0], [25.0, 4160.0], [25.1, 4160.0], [25.2, 4160.0], [25.3, 4160.0], [25.4, 4160.0], [25.5, 4160.0], [25.6, 4160.0], [25.7, 4160.0], [25.8, 4160.0], [25.9, 4160.0], [26.0, 4160.0], [26.1, 4160.0], [26.2, 4160.0], [26.3, 4160.0], [26.4, 4160.0], [26.5, 4160.0], [26.6, 4160.0], [26.7, 4160.0], [26.8, 4160.0], [26.9, 4160.0], [27.0, 4160.0], [27.1, 4160.0], [27.2, 4160.0], [27.3, 4160.0], [27.4, 4160.0], [27.5, 4160.0], [27.6, 4160.0], [27.7, 4160.0], [27.8, 4160.0], [27.9, 4160.0], [28.0, 4160.0], [28.1, 4160.0], [28.2, 4160.0], [28.3, 4160.0], [28.4, 4161.0], [28.5, 4161.0], [28.6, 4161.0], [28.7, 4161.0], [28.8, 4161.0], [28.9, 4161.0], [29.0, 4161.0], [29.1, 4161.0], [29.2, 4161.0], [29.3, 4161.0], [29.4, 4161.0], [29.5, 4161.0], [29.6, 4161.0], [29.7, 4161.0], [29.8, 4161.0], [29.9, 4161.0], [30.0, 4161.0], [30.1, 4161.0], [30.2, 4161.0], [30.3, 4161.0], [30.4, 4161.0], [30.5, 4161.0], [30.6, 4161.0], [30.7, 4161.0], [30.8, 4161.0], [30.9, 4161.0], [31.0, 4161.0], [31.1, 4161.0], [31.2, 4161.0], [31.3, 4161.0], [31.4, 4161.0], [31.5, 4161.0], [31.6, 4161.0], [31.7, 4161.0], [31.8, 4161.0], [31.9, 4161.0], [32.0, 4161.0], [32.1, 4161.0], [32.2, 4161.0], [32.3, 4161.0], [32.4, 4161.0], [32.5, 4161.0], [32.6, 4161.0], [32.7, 4161.0], [32.8, 4161.0], [32.9, 4161.0], [33.0, 4161.0], [33.1, 4161.0], [33.2, 4161.0], [33.3, 4161.0], [33.4, 4161.0], [33.5, 4161.0], [33.6, 4161.0], [33.7, 4161.0], [33.8, 4161.0], [33.9, 4161.0], [34.0, 4161.0], [34.1, 4161.0], [34.2, 4162.0], [34.3, 4162.0], [34.4, 4162.0], [34.5, 4162.0], [34.6, 4162.0], [34.7, 4162.0], [34.8, 4162.0], [34.9, 4162.0], [35.0, 4162.0], [35.1, 4162.0], [35.2, 4162.0], [35.3, 4162.0], [35.4, 4162.0], [35.5, 4162.0], [35.6, 4162.0], [35.7, 4162.0], [35.8, 4162.0], [35.9, 4162.0], [36.0, 4162.0], [36.1, 4162.0], [36.2, 4162.0], [36.3, 4162.0], [36.4, 4162.0], [36.5, 4162.0], [36.6, 4162.0], [36.7, 4162.0], [36.8, 4162.0], [36.9, 4162.0], [37.0, 4162.0], [37.1, 4162.0], [37.2, 4162.0], [37.3, 4163.0], [37.4, 4163.0], [37.5, 4163.0], [37.6, 4163.0], [37.7, 4163.0], [37.8, 4163.0], [37.9, 4163.0], [38.0, 4163.0], [38.1, 4163.0], [38.2, 4163.0], [38.3, 4163.0], [38.4, 4163.0], [38.5, 4163.0], [38.6, 4163.0], [38.7, 4163.0], [38.8, 4163.0], [38.9, 4164.0], [39.0, 4164.0], [39.1, 4164.0], [39.2, 4164.0], [39.3, 4164.0], [39.4, 4164.0], [39.5, 4164.0], [39.6, 4165.0], [39.7, 4165.0], [39.8, 4165.0], [39.9, 4165.0], [40.0, 4165.0], [40.1, 4166.0], [40.2, 4166.0], [40.3, 4166.0], [40.4, 4166.0], [40.5, 4167.0], [40.6, 4169.0], [40.7, 4170.0], [40.8, 4172.0], [40.9, 4174.0], [41.0, 4175.0], [41.1, 4176.0], [41.2, 4176.0], [41.3, 4176.0], [41.4, 4176.0], [41.5, 4177.0], [41.6, 4177.0], [41.7, 4177.0], [41.8, 4177.0], [41.9, 4177.0], [42.0, 4177.0], [42.1, 4177.0], [42.2, 4178.0], [42.3, 4178.0], [42.4, 4178.0], [42.5, 4178.0], [42.6, 4178.0], [42.7, 4178.0], [42.8, 4178.0], [42.9, 4178.0], [43.0, 4178.0], [43.1, 4178.0], [43.2, 4178.0], [43.3, 4178.0], [43.4, 4179.0], [43.5, 4179.0], [43.6, 4179.0], [43.7, 4179.0], [43.8, 4179.0], [43.9, 4179.0], [44.0, 4179.0], [44.1, 4179.0], [44.2, 4179.0], [44.3, 4179.0], [44.4, 4179.0], [44.5, 4179.0], [44.6, 4180.0], [44.7, 4180.0], [44.8, 4180.0], [44.9, 4180.0], [45.0, 4180.0], [45.1, 4180.0], [45.2, 4180.0], [45.3, 4180.0], [45.4, 4180.0], [45.5, 4180.0], [45.6, 4180.0], [45.7, 4180.0], [45.8, 4181.0], [45.9, 4181.0], [46.0, 4181.0], [46.1, 4181.0], [46.2, 4181.0], [46.3, 4181.0], [46.4, 4181.0], [46.5, 4181.0], [46.6, 4182.0], [46.7, 4182.0], [46.8, 4182.0], [46.9, 4182.0], [47.0, 4182.0], [47.1, 4183.0], [47.2, 4183.0], [47.3, 4184.0], [47.4, 4185.0], [47.5, 4186.0], [47.6, 4188.0], [47.7, 4189.0], [47.8, 4190.0], [47.9, 4191.0], [48.0, 4193.0], [48.1, 4194.0], [48.2, 4195.0], [48.3, 4196.0], [48.4, 4197.0], [48.5, 4198.0], [48.6, 4199.0], [48.7, 4199.0], [48.8, 4200.0], [48.9, 4200.0], [49.0, 4201.0], [49.1, 4201.0], [49.2, 4201.0], [49.3, 4202.0], [49.4, 4202.0], [49.5, 4202.0], [49.6, 4202.0], [49.7, 4202.0], [49.8, 4203.0], [49.9, 4203.0], [50.0, 4203.0], [50.1, 4203.0], [50.2, 4203.0], [50.3, 4203.0], [50.4, 4204.0], [50.5, 4204.0], [50.6, 4204.0], [50.7, 4204.0], [50.8, 4204.0], [50.9, 4204.0], [51.0, 4204.0], [51.1, 4205.0], [51.2, 4205.0], [51.3, 4205.0], [51.4, 4205.0], [51.5, 4205.0], [51.6, 4205.0], [51.7, 4205.0], [51.8, 4205.0], [51.9, 4206.0], [52.0, 4206.0], [52.1, 4206.0], [52.2, 4206.0], [52.3, 4206.0], [52.4, 4206.0], [52.5, 4206.0], [52.6, 4206.0], [52.7, 4206.0], [52.8, 4206.0], [52.9, 4207.0], [53.0, 4207.0], [53.1, 4207.0], [53.2, 4207.0], [53.3, 4207.0], [53.4, 4207.0], [53.5, 4207.0], [53.6, 4207.0], [53.7, 4207.0], [53.8, 4207.0], [53.9, 4207.0], [54.0, 4207.0], [54.1, 4208.0], [54.2, 4208.0], [54.3, 4208.0], [54.4, 4208.0], [54.5, 4208.0], [54.6, 4208.0], [54.7, 4208.0], [54.8, 4208.0], [54.9, 4208.0], [55.0, 4208.0], [55.1, 4208.0], [55.2, 4208.0], [55.3, 4208.0], [55.4, 4208.0], [55.5, 4208.0], [55.6, 4208.0], [55.7, 4208.0], [55.8, 4208.0], [55.9, 4208.0], [56.0, 4208.0], [56.1, 4208.0], [56.2, 4209.0], [56.3, 4209.0], [56.4, 4209.0], [56.5, 4209.0], [56.6, 4209.0], [56.7, 4209.0], [56.8, 4209.0], [56.9, 4209.0], [57.0, 4209.0], [57.1, 4209.0], [57.2, 4209.0], [57.3, 4209.0], [57.4, 4209.0], [57.5, 4209.0], [57.6, 4209.0], [57.7, 4209.0], [57.8, 4209.0], [57.9, 4209.0], [58.0, 4209.0], [58.1, 4209.0], [58.2, 4209.0], [58.3, 4209.0], [58.4, 4209.0], [58.5, 4209.0], [58.6, 4209.0], [58.7, 4209.0], [58.8, 4209.0], [58.9, 4209.0], [59.0, 4210.0], [59.1, 4210.0], [59.2, 4210.0], [59.3, 4210.0], [59.4, 4210.0], [59.5, 4210.0], [59.6, 4210.0], [59.7, 4210.0], [59.8, 4210.0], [59.9, 4210.0], [60.0, 4210.0], [60.1, 4210.0], [60.2, 4210.0], [60.3, 4210.0], [60.4, 4210.0], [60.5, 4210.0], [60.6, 4210.0], [60.7, 4210.0], [60.8, 4210.0], [60.9, 4210.0], [61.0, 4210.0], [61.1, 4210.0], [61.2, 4210.0], [61.3, 4210.0], [61.4, 4210.0], [61.5, 4210.0], [61.6, 4210.0], [61.7, 4210.0], [61.8, 4210.0], [61.9, 4210.0], [62.0, 4210.0], [62.1, 4210.0], [62.2, 4210.0], [62.3, 4210.0], [62.4, 4211.0], [62.5, 4211.0], [62.6, 4211.0], [62.7, 4211.0], [62.8, 4211.0], [62.9, 4211.0], [63.0, 4211.0], [63.1, 4211.0], [63.2, 4211.0], [63.3, 4211.0], [63.4, 4211.0], [63.5, 4211.0], [63.6, 4211.0], [63.7, 4211.0], [63.8, 4211.0], [63.9, 4211.0], [64.0, 4211.0], [64.1, 4211.0], [64.2, 4211.0], [64.3, 4211.0], [64.4, 4211.0], [64.5, 4211.0], [64.6, 4211.0], [64.7, 4211.0], [64.8, 4211.0], [64.9, 4211.0], [65.0, 4211.0], [65.1, 4211.0], [65.2, 4211.0], [65.3, 4211.0], [65.4, 4211.0], [65.5, 4211.0], [65.6, 4211.0], [65.7, 4211.0], [65.8, 4211.0], [65.9, 4212.0], [66.0, 4212.0], [66.1, 4212.0], [66.2, 4212.0], [66.3, 4212.0], [66.4, 4212.0], [66.5, 4212.0], [66.6, 4212.0], [66.7, 4212.0], [66.8, 4212.0], [66.9, 4212.0], [67.0, 4212.0], [67.1, 4212.0], [67.2, 4212.0], [67.3, 4212.0], [67.4, 4212.0], [67.5, 4212.0], [67.6, 4212.0], [67.7, 4212.0], [67.8, 4212.0], [67.9, 4212.0], [68.0, 4212.0], [68.1, 4212.0], [68.2, 4212.0], [68.3, 4212.0], [68.4, 4212.0], [68.5, 4212.0], [68.6, 4212.0], [68.7, 4212.0], [68.8, 4212.0], [68.9, 4212.0], [69.0, 4213.0], [69.1, 4213.0], [69.2, 4213.0], [69.3, 4213.0], [69.4, 4213.0], [69.5, 4213.0], [69.6, 4213.0], [69.7, 4213.0], [69.8, 4213.0], [69.9, 4213.0], [70.0, 4213.0], [70.1, 4213.0], [70.2, 4213.0], [70.3, 4213.0], [70.4, 4213.0], [70.5, 4213.0], [70.6, 4213.0], [70.7, 4213.0], [70.8, 4213.0], [70.9, 4214.0], [71.0, 4214.0], [71.1, 4214.0], [71.2, 4214.0], [71.3, 4214.0], [71.4, 4214.0], [71.5, 4214.0], [71.6, 4214.0], [71.7, 4214.0], [71.8, 4214.0], [71.9, 4215.0], [72.0, 4215.0], [72.1, 4215.0], [72.2, 4215.0], [72.3, 4215.0], [72.4, 4215.0], [72.5, 4216.0], [72.6, 4217.0], [72.7, 4218.0], [72.8, 4219.0], [72.9, 4221.0], [73.0, 4222.0], [73.1, 4223.0], [73.2, 4224.0], [73.3, 4225.0], [73.4, 4226.0], [73.5, 4226.0], [73.6, 4226.0], [73.7, 4226.0], [73.8, 4227.0], [73.9, 4227.0], [74.0, 4228.0], [74.1, 4228.0], [74.2, 4228.0], [74.3, 4229.0], [74.4, 4229.0], [74.5, 4229.0], [74.6, 4229.0], [74.7, 4229.0], [74.8, 4230.0], [74.9, 4230.0], [75.0, 4230.0], [75.1, 4230.0], [75.2, 4230.0], [75.3, 4231.0], [75.4, 4231.0], [75.5, 4231.0], [75.6, 4231.0], [75.7, 4231.0], [75.8, 4232.0], [75.9, 4232.0], [76.0, 4232.0], [76.1, 4232.0], [76.2, 4232.0], [76.3, 4233.0], [76.4, 4233.0], [76.5, 4233.0], [76.6, 4234.0], [76.7, 4234.0], [76.8, 4239.0], [76.9, 4246.0], [77.0, 4250.0], [77.1, 4252.0], [77.2, 4253.0], [77.3, 4254.0], [77.4, 4255.0], [77.5, 4256.0], [77.6, 4257.0], [77.7, 4257.0], [77.8, 4258.0], [77.9, 4258.0], [78.0, 4258.0], [78.1, 4259.0], [78.2, 4259.0], [78.3, 4260.0], [78.4, 4260.0], [78.5, 4260.0], [78.6, 4261.0], [78.7, 4261.0], [78.8, 4261.0], [78.9, 4261.0], [79.0, 4261.0], [79.1, 4262.0], [79.2, 4262.0], [79.3, 4262.0], [79.4, 4262.0], [79.5, 4263.0], [79.6, 4263.0], [79.7, 4263.0], [79.8, 4263.0], [79.9, 4263.0], [80.0, 4264.0], [80.1, 4264.0], [80.2, 4265.0], [80.3, 4265.0], [80.4, 4265.0], [80.5, 4266.0], [80.6, 4267.0], [80.7, 4269.0], [80.8, 4274.0], [80.9, 4278.0], [81.0, 4280.0], [81.1, 4281.0], [81.2, 4283.0], [81.3, 4284.0], [81.4, 4288.0], [81.5, 4292.0], [81.6, 4295.0], [81.7, 4297.0], [81.8, 4298.0], [81.9, 4299.0], [82.0, 4300.0], [82.1, 4300.0], [82.2, 4301.0], [82.3, 4301.0], [82.4, 4302.0], [82.5, 4302.0], [82.6, 4302.0], [82.7, 4303.0], [82.8, 4303.0], [82.9, 4303.0], [83.0, 4303.0], [83.1, 4304.0], [83.2, 4304.0], [83.3, 4304.0], [83.4, 4304.0], [83.5, 4305.0], [83.6, 4305.0], [83.7, 4305.0], [83.8, 4305.0], [83.9, 4306.0], [84.0, 4306.0], [84.1, 4306.0], [84.2, 4306.0], [84.3, 4306.0], [84.4, 4306.0], [84.5, 4307.0], [84.6, 4307.0], [84.7, 4307.0], [84.8, 4307.0], [84.9, 4308.0], [85.0, 4308.0], [85.1, 4308.0], [85.2, 4308.0], [85.3, 4308.0], [85.4, 4308.0], [85.5, 4309.0], [85.6, 4309.0], [85.7, 4309.0], [85.8, 4309.0], [85.9, 4309.0], [86.0, 4309.0], [86.1, 4310.0], [86.2, 4310.0], [86.3, 4310.0], [86.4, 4310.0], [86.5, 4310.0], [86.6, 4310.0], [86.7, 4310.0], [86.8, 4311.0], [86.9, 4311.0], [87.0, 4311.0], [87.1, 4311.0], [87.2, 4311.0], [87.3, 4311.0], [87.4, 4311.0], [87.5, 4312.0], [87.6, 4312.0], [87.7, 4312.0], [87.8, 4312.0], [87.9, 4312.0], [88.0, 4312.0], [88.1, 4312.0], [88.2, 4312.0], [88.3, 4312.0], [88.4, 4313.0], [88.5, 4313.0], [88.6, 4313.0], [88.7, 4313.0], [88.8, 4313.0], [88.9, 4313.0], [89.0, 4313.0], [89.1, 4313.0], [89.2, 4313.0], [89.3, 4313.0], [89.4, 4314.0], [89.5, 4314.0], [89.6, 4314.0], [89.7, 4314.0], [89.8, 4314.0], [89.9, 4314.0], [90.0, 4314.0], [90.1, 4314.0], [90.2, 4314.0], [90.3, 4315.0], [90.4, 4315.0], [90.5, 4315.0], [90.6, 4315.0], [90.7, 4315.0], [90.8, 4316.0], [90.9, 4316.0], [91.0, 4316.0], [91.1, 4316.0], [91.2, 4317.0], [91.3, 4317.0], [91.4, 4318.0], [91.5, 4318.0], [91.6, 4319.0], [91.7, 4319.0], [91.8, 4320.0], [91.9, 4321.0], [92.0, 4323.0], [92.1, 4324.0], [92.2, 4324.0], [92.3, 4325.0], [92.4, 4326.0], [92.5, 4327.0], [92.6, 4328.0], [92.7, 4329.0], [92.8, 4329.0], [92.9, 4330.0], [93.0, 4331.0], [93.1, 4332.0], [93.2, 4332.0], [93.3, 4333.0], [93.4, 4334.0], [93.5, 4335.0], [93.6, 4335.0], [93.7, 4338.0], [93.8, 4346.0], [93.9, 4356.0], [94.0, 4358.0], [94.1, 4359.0], [94.2, 4361.0], [94.3, 4362.0], [94.4, 4365.0], [94.5, 4367.0], [94.6, 4374.0], [94.7, 4379.0], [94.8, 4396.0], [94.9, 4431.0], [95.0, 4540.0], [95.1, 4578.0], [95.2, 4599.0], [95.3, 4626.0], [95.4, 4688.0], [95.5, 4770.0], [95.6, 4794.0], [95.7, 4873.0], [95.8, 5009.0], [95.9, 5052.0], [96.0, 5082.0], [96.1, 5194.0], [96.2, 5251.0], [96.3, 5282.0], [96.4, 5344.0], [96.5, 5493.0], [96.6, 5692.0], [96.7, 5740.0], [96.8, 5844.0], [96.9, 5925.0], [97.0, 5955.0], [97.1, 6117.0], [97.2, 6238.0], [97.3, 6393.0], [97.4, 6597.0], [97.5, 6751.0], [97.6, 6813.0], [97.7, 6941.0], [97.8, 7222.0], [97.9, 7444.0], [98.0, 7686.0], [98.1, 7844.0], [98.2, 8070.0], [98.3, 8316.0], [98.4, 8570.0], [98.5, 8894.0], [98.6, 9209.0], [98.7, 9437.0], [98.8, 9941.0], [98.9, 10184.0], [99.0, 10532.0], [99.1, 10788.0], [99.2, 11154.0], [99.3, 11480.0], [99.4, 11666.0], [99.5, 11907.0], [99.6, 12167.0], [99.7, 12424.0], [99.8, 12605.0], [99.9, 12760.0], [100.0, 12955.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4100.0, "maxY": 4873.0, "series": [{"data": [[4300.0, 1284.0], [4200.0, 3323.0], [4100.0, 4873.0], [4500.0, 26.0], [4600.0, 20.0], [4400.0, 14.0], [4700.0, 20.0], [4800.0, 11.0], [5100.0, 8.0], [5000.0, 26.0], [4900.0, 5.0], [5300.0, 10.0], [5200.0, 21.0], [5400.0, 10.0], [5600.0, 6.0], [5500.0, 5.0], [5800.0, 9.0], [5700.0, 14.0], [6100.0, 10.0], [6000.0, 3.0], [5900.0, 20.0], [6300.0, 7.0], [6200.0, 5.0], [6400.0, 3.0], [6600.0, 5.0], [6500.0, 7.0], [6800.0, 10.0], [6900.0, 3.0], [6700.0, 13.0], [7100.0, 2.0], [7000.0, 5.0], [7200.0, 7.0], [7400.0, 7.0], [7300.0, 1.0], [7500.0, 3.0], [7600.0, 4.0], [7700.0, 5.0], [7800.0, 7.0], [7900.0, 3.0], [8000.0, 6.0], [8100.0, 5.0], [8200.0, 1.0], [8300.0, 5.0], [8500.0, 5.0], [8700.0, 6.0], [8600.0, 2.0], [8400.0, 3.0], [9000.0, 4.0], [9200.0, 5.0], [9100.0, 2.0], [8800.0, 2.0], [8900.0, 3.0], [9300.0, 5.0], [9500.0, 2.0], [9600.0, 3.0], [9400.0, 1.0], [9800.0, 4.0], [9900.0, 4.0], [10000.0, 2.0], [10100.0, 5.0], [10200.0, 4.0], [10300.0, 1.0], [10400.0, 4.0], [10500.0, 5.0], [10600.0, 3.0], [10700.0, 3.0], [10900.0, 4.0], [11000.0, 2.0], [11100.0, 4.0], [11200.0, 4.0], [10800.0, 2.0], [11300.0, 2.0], [11400.0, 2.0], [11500.0, 6.0], [11600.0, 5.0], [11700.0, 3.0], [11800.0, 5.0], [11900.0, 5.0], [12000.0, 3.0], [12100.0, 6.0], [12200.0, 2.0], [12300.0, 3.0], [12400.0, 8.0], [12500.0, 3.0], [12600.0, 6.0], [12700.0, 5.0], [12800.0, 5.0], [12900.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 88.99794238683121, "minX": 1.65473634E12, "maxY": 100.0, "series": [{"data": [[1.6547367E12, 100.0], [1.65473652E12, 100.0], [1.65473634E12, 99.59057591623032], [1.65473664E12, 100.0], [1.65473646E12, 100.0], [1.65473676E12, 88.99794238683121], [1.65473658E12, 100.0], [1.6547364E12, 100.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65473676E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4157.0, "minX": 1.0, "maxY": 7807.0, "series": [{"data": [[2.0, 4168.0], [5.0, 4165.0], [7.0, 4161.5], [8.0, 4166.0], [11.0, 4166.0], [12.0, 4164.0], [13.0, 4160.0], [14.0, 4159.0], [15.0, 4166.0], [18.0, 4158.0], [19.0, 4162.0], [21.0, 4159.0], [22.0, 4158.0], [25.0, 4158.0], [26.0, 4161.0], [29.0, 4160.666666666667], [30.0, 4163.0], [31.0, 4161.0], [32.0, 4160.0], [35.0, 4160.0], [34.0, 4163.0], [39.0, 4157.0], [38.0, 4160.0], [41.0, 4157.0], [45.0, 4159.0], [44.0, 4159.0], [47.0, 4570.0], [46.0, 4159.0], [49.0, 4466.5], [48.0, 4158.0], [53.0, 4160.0], [52.0, 4160.0], [54.0, 5117.0], [55.0, 4160.5], [57.0, 4162.5], [58.0, 4810.5], [60.0, 4159.0], [63.0, 5031.5], [62.0, 4184.5], [67.0, 6136.0], [66.0, 4186.5], [64.0, 4210.0], [71.0, 4185.0], [70.0, 4207.5], [68.0, 4185.0], [72.0, 6495.0], [73.0, 4234.0], [76.0, 4854.0], [79.0, 4159.0], [78.0, 4224.0], [81.0, 7228.0], [83.0, 4199.166666666666], [82.0, 4236.5], [80.0, 4211.0], [85.0, 7571.0], [87.0, 4201.666666666667], [86.0, 4234.5], [84.0, 4182.0], [88.0, 5384.0], [90.0, 7807.0], [91.0, 4793.833333333334], [89.0, 4229.5], [94.0, 4636.333333333333], [95.0, 4981.8], [93.0, 4169.75], [92.0, 4219.2], [99.0, 4790.857142857143], [98.0, 4179.0], [97.0, 4209.5], [96.0, 4199.3], [100.0, 4372.75852243816], [1.0, 4165.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.4261999999999, 4373.617799999996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 307.8, "minX": 1.65473634E12, "maxY": 3432.0, "series": [{"data": [[1.6547367E12, 902.5], [1.65473652E12, 903.7666666666667], [1.65473634E12, 604.8333333333334], [1.65473664E12, 905.6666666666666], [1.65473646E12, 903.1333333333333], [1.65473676E12, 307.8], [1.65473658E12, 902.5], [1.6547364E12, 903.1333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6547367E12, 3420.0], [1.65473652E12, 3424.8], [1.65473634E12, 2292.0], [1.65473664E12, 3432.0], [1.65473646E12, 3422.4], [1.65473676E12, 1166.4], [1.65473658E12, 3420.0], [1.6547364E12, 3422.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65473676E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4199.534979423866, "minX": 1.65473634E12, "maxY": 5981.368586387436, "series": [{"data": [[1.6547367E12, 4203.503157894737], [1.65473652E12, 4204.239663629989], [1.65473634E12, 5981.368586387436], [1.65473664E12, 4204.150349650345], [1.65473646E12, 4204.3660589060355], [1.65473676E12, 4199.534979423866], [1.65473658E12, 4204.406315789472], [1.6547364E12, 4204.007713884982]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65473676E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 4199.534979423866, "minX": 1.65473634E12, "maxY": 5981.365445026169, "series": [{"data": [[1.6547367E12, 4203.503157894737], [1.65473652E12, 4204.239663629989], [1.65473634E12, 5981.365445026169], [1.65473664E12, 4204.150349650345], [1.65473646E12, 4204.3660589060355], [1.65473676E12, 4199.534979423866], [1.65473658E12, 4204.406315789472], [1.6547364E12, 4204.00631136045]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65473676E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.65473634E12, "maxY": 0.08167539267015717, "series": [{"data": [[1.6547367E12, 0.020350877192982456], [1.65473652E12, 0.03083391730903993], [1.65473634E12, 0.08167539267015717], [1.65473664E12, 0.03426573426573412], [1.65473646E12, 0.03225806451612904], [1.65473676E12, 0.0], [1.65473658E12, 0.032982456140350815], [1.6547364E12, 0.036465638148667635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65473676E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 4153.0, "minX": 1.65473634E12, "maxY": 12955.0, "series": [{"data": [[1.6547367E12, 4382.0], [1.65473652E12, 4382.0], [1.65473634E12, 12955.0], [1.65473664E12, 4384.0], [1.65473646E12, 4388.0], [1.65473676E12, 4386.0], [1.65473658E12, 4379.0], [1.6547364E12, 4371.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6547367E12, 4307.0], [1.65473652E12, 4308.0], [1.65473634E12, 10648.8], [1.65473664E12, 4308.0], [1.65473646E12, 4308.0], [1.65473676E12, 4302.3], [1.65473658E12, 4309.0], [1.6547364E12, 4309.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6547367E12, 4350.280000000001], [1.65473652E12, 4356.4400000000005], [1.65473634E12, 12809.76], [1.65473664E12, 4354.6900000000005], [1.65473646E12, 4350.68], [1.65473676E12, 4339.38], [1.65473658E12, 4351.84], [1.6547364E12, 4337.73]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6547367E12, 4313.0], [1.65473652E12, 4314.0], [1.65473634E12, 11995.8], [1.65473664E12, 4314.0], [1.65473646E12, 4314.0], [1.65473676E12, 4313.65], [1.65473658E12, 4314.0], [1.6547364E12, 4315.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6547367E12, 4154.0], [1.65473652E12, 4155.0], [1.65473634E12, 4155.0], [1.65473664E12, 4154.0], [1.65473646E12, 4154.0], [1.65473676E12, 4154.0], [1.65473658E12, 4155.0], [1.6547364E12, 4153.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6547367E12, 4194.0], [1.65473652E12, 4203.0], [1.65473634E12, 4604.0], [1.65473664E12, 4182.0], [1.65473646E12, 4199.0], [1.65473676E12, 4178.0], [1.65473658E12, 4183.0], [1.6547364E12, 4188.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65473676E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4164.0, "minX": 2.0, "maxY": 12751.0, "series": [{"data": [[2.0, 4944.5], [3.0, 6886.0], [4.0, 8184.0], [5.0, 9274.0], [6.0, 10479.5], [7.0, 10476.0], [8.0, 12424.0], [9.0, 11888.0], [10.0, 11903.0], [11.0, 11209.0], [12.0, 12751.0], [13.0, 8741.0], [14.0, 6791.0], [15.0, 9223.0], [16.0, 6829.0], [17.0, 5473.0], [18.0, 5876.0], [19.0, 5118.5], [20.0, 4209.0], [21.0, 4203.0], [22.0, 4203.5], [23.0, 4183.0], [24.0, 4202.0], [25.0, 4191.0], [26.0, 4179.0], [27.0, 4181.0], [28.0, 4164.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4164.0, "minX": 2.0, "maxY": 12751.0, "series": [{"data": [[2.0, 4944.5], [3.0, 6886.0], [4.0, 8184.0], [5.0, 9274.0], [6.0, 10479.5], [7.0, 10476.0], [8.0, 12424.0], [9.0, 11888.0], [10.0, 11903.0], [11.0, 11209.0], [12.0, 12751.0], [13.0, 8741.0], [14.0, 6791.0], [15.0, 9223.0], [16.0, 6829.0], [17.0, 5473.0], [18.0, 5876.0], [19.0, 5118.5], [20.0, 4209.0], [21.0, 4203.0], [22.0, 4203.5], [23.0, 4183.0], [24.0, 4202.0], [25.0, 4191.0], [26.0, 4179.0], [27.0, 4181.0], [28.0, 4164.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.6833333333333333, "minX": 1.65473628E12, "maxY": 23.833333333333332, "series": [{"data": [[1.6547367E12, 23.75], [1.65473652E12, 23.783333333333335], [1.65473634E12, 16.9], [1.65473664E12, 23.833333333333332], [1.65473646E12, 23.766666666666666], [1.65473628E12, 0.6833333333333333], [1.65473676E12, 6.433333333333334], [1.65473658E12, 23.75], [1.6547364E12, 23.766666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65473676E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.1, "minX": 1.65473634E12, "maxY": 23.833333333333332, "series": [{"data": [[1.6547367E12, 23.75], [1.65473652E12, 23.783333333333335], [1.65473634E12, 15.916666666666666], [1.65473664E12, 23.833333333333332], [1.65473646E12, 23.766666666666666], [1.65473676E12, 8.1], [1.65473658E12, 23.75], [1.6547364E12, 23.766666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65473676E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.1, "minX": 1.65473634E12, "maxY": 23.833333333333332, "series": [{"data": [[1.6547367E12, 23.75], [1.65473652E12, 23.783333333333335], [1.65473634E12, 15.916666666666666], [1.65473664E12, 23.833333333333332], [1.65473646E12, 23.766666666666666], [1.65473676E12, 8.1], [1.65473658E12, 23.75], [1.6547364E12, 23.766666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65473676E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.1, "minX": 1.65473634E12, "maxY": 23.833333333333332, "series": [{"data": [[1.6547367E12, 23.75], [1.65473652E12, 23.783333333333335], [1.65473634E12, 15.916666666666666], [1.65473664E12, 23.833333333333332], [1.65473646E12, 23.766666666666666], [1.65473676E12, 8.1], [1.65473658E12, 23.75], [1.6547364E12, 23.766666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65473676E12, "title": "Total Transactions Per Second"}},
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

