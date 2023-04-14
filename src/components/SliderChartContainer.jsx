// import { useRef, useEffect } from 'react';

// function SliderChartContainer() {
//     const sliderContainerRef = useRef(null);
//     const chartContainerRef = useRef(null);
//     const chartDiameter = 280;

//     useEffect(() => {
//         const chartObj = window.jqPlot('chart1', [[1, 1]], {
//             grid: { borderWidth: 0, backgroundColor: 'transparent', shadow: false },
//             gridPadding: { top: 0, bottom: 0, left: 0, right: 0 },
//             seriesDefaults: {
//                 renderer: window.jqPlot.PieRenderer,
//                 shadow: false,
//                 rendererOptions: {
//                     highlightMouseOver: false,
//                     diameter: chartDiameter - 5,
//                     sliceMargin: 4,
//                     startAngle: -90
//                 }
//             },
//             seriesColors: ['#85c846', '#ffa676', '#7fb5bb']
//         });

//         const slider = $(sliderContainerRef.current).roundSlider({
//             sliderType: 'range',
//             radius: chartDiameter / 2,
//             width: 2,
//             showTooltip: false,
//             animation: false,
//             startAngle: 90,
//             min: 0,
//             max: 360,
//             value: '45, 180',
//             handleSize: 24,

//             svgMode: true,
//             borderWidth: 0,
//             rangeColor: 'transparent',
//             pathColor: 'transparent',

//             valueChange: function (e) {
//                 const val1 = e.currentTarget.firstElementChild.rsValue;
//                 const val2 = e.currentTarget.lastElementChild.rsValue;
//                 const max = e.options.max;

//                 const data = [
//                     [1, val1],
//                     [2, val2 - val1],
//                     [3, max - val2]
//                 ];

//                 chartObj.series[0].data = data;
//                 chartObj.redraw();
//             }
//         });

//         return () => {
//             chartObj.destroy();
//             $(slider).roundSlider('destroy');
//         };
//     }, []);

//     return (
//         <div className="relative h-[280px] w-[280px]" ref={sliderContainerRef}>
//             <div id="slider1" className="absolute top-0 left-0" />
//             <div id="chart1" className="absolute top-0 left-0 w-full h-full" ref={chartContainerRef} />
//         </div>
//     );
// }

// export default SliderChartContainer;
