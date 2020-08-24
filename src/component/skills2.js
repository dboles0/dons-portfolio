// // STEP 1 - Include Dependencies
// // Include react
// import React from "react"
// import ReactDOM from "react-dom"
// import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

// // Include the react-fusioncharts component
// import ReactFC from "react-fusioncharts"

// // Include the fusioncharts library
// import FusionCharts from "fusioncharts"

// // Include the chart type
// import charts from "fusioncharts/fusioncharts.charts";

// // Include the theme as fusion
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"

// // Adding the chart and theme as dependency to the core fusioncharts
// ReactFC.fcRoot(FusionCharts, charts, FusionTheme)

// // STEP 2 - Chart Data
// const dataset = [{
//   "label": "Top Selling Brands",
//   "fillcolor": "595f5d",
//   "value": "5800",
//   "data": [{
//     "label": "Samsung",
//     "fillcolor": "838986",
//     "value": "2217",
//     "data": [{
//       "label": "Galaxy Note 4",
//       "value": "519",
//       "sValue": "1.09"
//     }, {
//       "label": "Galaxy S6 Edge",
//       "value": "448",
//       "sValue": "1.48"
//     }, {
//       "label": "Galaxy S6",
//       "value": "416",
//       "sValue": "1.13"
//     }, {
//       "label": "Galaxy J1",
//       "value": "304",
//       "sValue": "1.18"
//     }, {
//       "label": "Galaxy J7",
//       "value": "159",
//       "sValue": "1.36"
//     }, {
//       "label": "Galaxy Note5",
//       "value": "191",
//       "sValue": "1.48"
//     }, {
//       "label": "galaxy A8",
//       "value": "180",
//       "sValue": "1.19"
//     }]
//   }, {
//     "label": "Apple",
//     "fillcolor": "838986",
//     "value": "1283",
//     "data": [{
//       "label": "iPhone 6",
//       "value": "340",
//       "sValue": "1.08"
//     }, {
//       "label": "iPhone 6s plus",
//       "value": "296",
//       "sValue": "1.14"
//     }, {
//       "label": "iPhone 6s",
//       "value": "227",
//       "sValue": "1.12"
//     }, {
//       "label": "iPhone 5s",
//       "value": "174",
//       "sValue": "1.18"
//     }, {
//       "label": "iPhone 5c",
//       "value": "96",
//       "sValue": "1.18"
//     }, {
//       "label": "iPhone 4s",
//       "value": "150",
//       "sValue": "1.11"
//     }]
//   }, {
//     "label": "Nokia",
//     "fillcolor": "838986",
//     "value": "759",
//     "data": [{
//       "label": "Lumia 630",
//       "value": "101",
//       "sValue": "1.13"
//     }, {
//       "label": "lumia 810",
//       "value": "98",
//       "sValue": "0.85"
//     }, {
//       "label": "lumia 930",
//       "value": "105",
//       "sValue": "0.56"
//     }, {
//       "label": "lumia 950 XL dual sim",
//       "value": "85",
//       "sValue": "0.75"
//     }, {
//       "label": "lumia 735",
//       "value": "64",
//       "sValue": "0.78"
//     }, {
//       "label": "lumia 830",
//       "value": "66",
//       "sValue": "0.83"
//     }, {
//       "label": "lumia 1320 LTE",
//       "value": "133",
//       "sValue": "0.29"
//     }, {
//       "label": "lumia 1320",
//       "value": "107",
//       "sValue": "0.29"
//     }]
//   }, {
//     "label": "LG",
//     "fillcolor": "838986",
//     "value": "441",
//     "data": [{
//       "label": "G4",
//       "value": "189",
//       "sValue": "0.51"
//     }, {
//       "label": "L70 Dual",
//       "value": "122",
//       "sValue": "0.52"
//     }, {
//       "label": "G FLEX 2",
//       "value": "77",
//       "sValue": "0.64"
//     }, {
//       "label": "G3 S",
//       "value": "53",
//       "sValue": "0.64"
//     }]
//   }, {
//     "label": "Huawei",
//     "fillcolor": "838986",
//     "value": "411",
//     "data": [{
//       "label": "Y3 U03",
//       "value": "136",
//       "sValue": "1.40"
//     }, {
//       "label": "G8",
//       "value": "78",
//       "sValue": "0.87"
//     }, {
//       "label": "Y520",
//       "value": "67",
//       "sValue": "1.35"
//     }, {
//       "label": "ascend p7",
//       "value": "48",
//       "sValue": "0.97"
//     }, {
//       "label": "G7 plus",
//       "value": "27",
//       "sValue": "0.87"
//     }, {
//       "label": "P8",
//       "value": "55",
//       "sValue": "1.23"
//     }]
//   }, {
//     "label": "Lenovo",
//     "fillcolor": "838986",
//     "value": "489",
//     "data": [{
//       "label": "A5000",
//       "value": "47",
//       "sValue": "0.69"
//     }, {
//       "label": "vibe P780",
//       "value": "37",
//       "sValue": "0.69"
//     }, {
//       "label": "K4 Note",
//       "value": "156",
//       "sValue": "0.69"
//     }, {
//       "label": "A7010",
//       "value": "89",
//       "sValue": "0.71"
//     }, {
//       "label": "Vibe P1 Mini",
//       "value": "110",
//       "sValue": "0.67"
//     }, {
//       "label": "Vibe x3 Lite",
//       "value": "50",
//       "sValue": "0.77"
//     }]
//   }, {
//     "label": "Sony",
//     "fillcolor": "838986",
//     "value": "200",
//     "data": [{
//       "label": "Xperia Z3",
//       "value": "38",
//       "sValue": "1.5"
//     }, {
//       "label": "Xperia Z3+",
//       "value": "25",
//       "sValue": "1.38"
//     }, {
//       "label": "Xperia Z5",
//       "value": "67",
//       "sValue": "0.64"
//     }, {
//       "label": "Xperia X3 Dual",
//       "value": "46",
//       "sValue": "0.73"
//     }, {
//       "label": "Xperia E4",
//       "value": "24",
//       "sValue": "0.77"
//     }]
//   }]
// }]

// const colorrange = {
//   "mapbypercent": "0",
//   "gradient": "1",
//   "minvalue": "0",
//   "code": "dfff72",
//   "startlabel": "Ideal",
//   "endlabel": "Threshold",
//   "color": [{
//     "code": "062a3f",
//     "maxvalue": "1.6",
//     "label": "Threshold"
//   }]
// }

// // STEP 3 - Creating the JSON object to store the chart configurations
// const chartConfigs = {
//   type: 'treemap',
//   renderAt: 'chart-container',
//   width: '650',
//   height: '650',
//   dataFormat: 'json',
//   dataSource: {
//     "chart": {
//       "animation": "0",
//       "hideTitle": "1",
//       "plotToolText": "<div><b>$label</b><br/><b>SAR (body) : </b>$svalue W/kg<br/><b>Units Sold : </b>$value</div>",
//       "horizontalPadding": "0",
//       "verticalPadding": "0",
//       "plotborderthickness": ".5",
//       "plotbordercolor": "ffffff",
//       "chartBottomMargin": "0",
//       "labelGlow": "0",
//       "labelFontColor": "ffffff",
//       "showLegend": "1",
//       "legendpadding": "0",
//       "legendItemFontSize": "10",
//       "legendItemFontBold": "1",
//       "legendPointerWidth": "8",
//       "legenditemfontcolor": "3d5c5c",
//       "legendScaleLineThickness": "0",
//       "legendCaptionFontSize": "10",
//       "algorithm": "squarified",
//       "caption": "Harry's SuperMart : Sales of mobile devices in last quarter",
//       "theme": "fusion",
//       "subcaption": "Analysis based on SAR values",
//       "legendCaption": "Specific Absorption Rate (SAR) in W/kg"
//     },
//       "data": dataset,
//       "colorrange": colorrange
//     }
//   }

// // STEP 4 - Creating the DOM element to pass the react-fusioncharts component
// class Skills extends React.Component {
//   render() {
//     return (
//       <div className="chart">
//         <div className="heading">My Chart</div>
//         <TreeMapComponent id='treemap' dataSource={[
//             { Sport: "Swimming", Gold: 16, GameImage: 'Swimming.svg', ItemHeight: "180px", ItemWidth: "180px" },
//             { Sport: "Athletics", Gold: 13, GameImage: 'Athletics.svg', ItemHeight: "70px", ItemWidth: "70px" },
//             { Sport: "Gymnastics", Gold: 4, GameImage: 'Gymnastics.svg', ItemHeight: "80px", ItemWidth: "80px" },
//             { Sport: "Cycling", Gold: 2, GameImage: 'Cycling.svg', ItemHeight: "50px", ItemWidth: "50px" },
//             { Sport: "Wrestling", Gold: 2, GameImage: 'Wrestling.svg', ItemHeight: "60px", ItemWidth: "50px" },
//             { Sport: "Basketball", Gold: 2, GameImage: 'Basketball.svg', ItemHeight: "50px", ItemWidth: "50px" },
//             { Sport: "Boxing", Gold: 1, GameImage: 'Boxing.svg', ItemHeight: "40px", ItemWidth: "30px" },
//             { Sport: "Tennis", Gold: 1, GameImage: 'Tennis.svg', ItemHeight: "40px", ItemWidth: "40px" },
//             { Sport: "Judo", Gold: 1, GameImage: 'Judo.svg', ItemHeight: "40px", ItemWidth: "40px" },
//             { Sport: "Rowing", Gold: 1, GameImage: 'Rowing.svg', ItemHeight: "40px", ItemWidth: "40px" },
//             { Sport: "Shooting", Gold: 1, GameImage: 'Shooting.svg', ItemHeight: "40px", ItemWidth: "40px" },
//             { Sport: "Triathlon", Gold: 1, GameImage: 'Triathlon.svg', ItemHeight: "40px", ItemWidth: "40px" },
//             { Sport: "Water polo", Gold: 1, GameImage: 'Water polo.svg', ItemHeight: "40px", ItemWidth: "40px" }
//         ]} weightValuePath='Gold' leafItemSettings={{
//             labelPath: 'Sport',
//             fill: '#993399',
//             templatePosition: 'Center',
//             labelTemplate: '<div style="pointer-events: none;"><img src="src/treemap/image/{{:GameImage}}"' +
//                 ' style="height:{{:ItemHeight}};width:{{:ItemWidth}};"></img></div>'
//         }}>
//     </TreeMapComponent>
//       </div>
//     )
//   }
// }

// export default Skills
