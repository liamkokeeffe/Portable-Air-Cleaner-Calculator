(this.webpackJsonpportable_air_cleaner_app=this.webpackJsonpportable_air_cleaner_app||[]).push([[0],{100:function(e,t,i){},101:function(e,t,i){},104:function(e,t,i){},105:function(e,t,i){},107:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i(1),r=i.n(o),a=i(39),c=i.n(a),s=(i(79),i(11)),l=i(16),d=i.n(l),u=i(40),j=i(2),m=(i(17),i.p+"static/media/roomdim_clipart.2a654541.png");function h(e){var t=Object(o.useState)(0===e.roomInfo.roomWidth?"":e.roomInfo.roomWidth),i=Object(j.a)(t,2),r=i[0],a=i[1],c=Object(o.useState)(0===e.roomInfo.roomLength?"":e.roomInfo.roomLength),s=Object(j.a)(c,2),l=s[0],d=s[1],u=Object(o.useState)(0===e.roomInfo.ceilingHeight?"":e.roomInfo.ceilingHeight),h=Object(j.a)(u,2),b=h[0],p=h[1],O=Object(o.useState)(0===e.roomInfo.floorArea?"":e.roomInfo.floorArea),f=Object(j.a)(O,2),x=f[0],g=f[1];return Object(n.jsxs)("div",{id:"roomdim-wrapper",children:[Object(n.jsx)("img",{src:m,alt:"Room Dimmension ClipArt",id:"img-roomdim"}),Object(n.jsxs)("div",{id:"roomdim-right-container",children:[Object(n.jsxs)("div",{className:"input-wrapper",id:"roomdim-wrapper",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"unit-selection-dropdown",className:"input-title",children:"Units"}),Object(n.jsxs)("select",{id:"unit-selection-dropdown",className:"user-input",onChange:function(t){return e.unitSelectionMade(t.target.value)},value:e.roomInfo.units,children:[Object(n.jsx)("option",{value:"feet",children:"Feet"}),Object(n.jsx)("option",{value:"meters",children:"Meters"})]})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"room-width-input",className:"input-title",children:"Room Width"}),Object(n.jsx)("input",{id:"room-width-input",className:"user-input",onChange:function(t){a(t.target.value),e.roomWidthEntered(parseFloat(t.target.value))},value:r})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"room-length-input",className:"input-title",children:"Room Length"}),Object(n.jsx)("input",{id:"room-length-input",className:"user-input",onChange:function(t){d(t.target.value),e.roomLengthEntered(parseFloat(t.target.value))},value:l})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"floor-area-input",className:"input-title",children:"Floor Area"}),Object(n.jsx)("input",{className:"user-input",onChange:function(t){g(parseFloat(t.target.value)),e.floorAreaEntered(parseFloat(t.target.value))},value:x})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"ceiling-height-input",className:"input-title",children:"Ceiling Height"}),Object(n.jsx)("input",{id:"ceiling-height-input",className:"user-input",onChange:function(t){p(t.target.value),e.ceilingHeightEntered(parseFloat(t.target.value))},value:b})]})]}),Object(n.jsx)("p",{id:"roomdim-help-text",className:"help-text",children:"If you don\u2019t know your room\u2019s length or width. Please enter your room\u2019s overall floor area specified in building information. "})]})]})}var b=i.p+"static/media/ventilation_clipart.f1764192.png";function p(e){return Object(n.jsxs)("div",{id:"ventilation-wrapper",children:[Object(n.jsxs)("div",{id:"ventilation-left-box",children:[Object(n.jsxs)("div",{className:"input-wrapper",id:"ventilation-input-wrapper",children:[Object(n.jsx)("label",{htmlFor:"ventilation-selection",className:"input-title",children:"Ventilation"}),Object(n.jsxs)("select",{id:"ventilation-selection",className:"user-input",onChange:function(t){return e.updateOutdoorVentilation(t.target.value)},value:e.type,children:[Object(n.jsx)("option",{value:"Poor",children:"Poor"}),Object(n.jsx)("option",{value:"Typical",children:"Typical"}),Object(n.jsx)("option",{value:"Good",children:"Good"}),Object(n.jsx)("option",{value:"Enhanced",children:"Enhanced"})]})]}),Object(n.jsxs)("p",{id:"ventilation-text",children:[Object(n.jsxs)("span",{id:"ventilation-text-title",children:[e.type,":"]}),Object(n.jsx)("br",{})," Select this if your environment has poor ventilation or you're not sure (for reference, a typical U.S. home is 0.5 ACH)"]})]}),Object(n.jsx)("img",{src:b,alt:"Ventilation Clip Art",id:"img-ventilation"})]})}var O=i.p+"static/media/cadr_clipart.bd6a9c1e.png";function f(e){var t=Object(o.useState)(0===e.roomInfo.cadr?"":e.roomInfo.cadr),i=Object(j.a)(t,2),r=i[0],a=i[1];return Object(n.jsxs)("div",{id:"cadr-wrapper",children:[Object(n.jsx)("img",{src:O,alt:"Clean Air Delivery Rate Clipart",id:"img-cadr"}),Object(n.jsxs)("div",{className:"input-wrapper",children:[Object(n.jsx)("p",{className:"input-title",children:"Air Cleaner Model Name"}),Object(n.jsxs)("select",{className:"user-input",onChange:function(t){"I'm not sure"!==t.target.value&&e.cadrEntered(200)},children:[Object(n.jsx)("option",{}),Object(n.jsx)("option",{value:"Levoit Vital 100 True HEPA Purifier",children:"Levoit Vital 100 True HEPA Purifier"}),Object(n.jsx)("option",{value:"Whirlpool Vital 100 True HEPA Purifier",children:"Whirlpool Vital 100 True HEPA Purifier"}),Object(n.jsx)("option",{value:"Conway Vital 100 True HEPA Purifier",children:"Conway Vital 100 True HEPA Purifier"}),Object(n.jsx)("option",{value:"I'm not sure",children:"I'm not sure"})]}),Object(n.jsx)("p",{className:"input-title",children:"CADR of air cleaner"}),Object(n.jsx)("input",{className:"user-input",onChange:function(t){a(t.target.value),e.cadrEntered(parseInt(t.target.value))},value:r})]}),Object(n.jsx)("p",{className:"help-text",id:"cadr-help-text",children:"If you are unsure of your cleaner\u2019s model name, then input the CADR value of your air cleaner. It is commonly listed at the bottom of the air cleaner on the specifications sticker."})]})}var x=i.p+"static/media/density_clipart.28196e09.png";function g(e){var t=Object(o.useState)(""),i=Object(j.a)(t,2),a=i[0],c=i[1],s=Object(o.useState)(""===e.roomInfo.roomType?"":e.roomInfo.roomType),l=Object(j.a)(s,2),d=l[0],u=l[1],m=Object(o.useState)(0===e.roomInfo.usableSpace?0:e.roomInfo.usableSpace),h=Object(j.a)(m,2),b=h[0],p=h[1],O=Object(o.useState)(0===e.roomInfo.maxOccupancy?0:e.roomInfo.maxOccupancy),f=Object(j.a)(O,2),g=f[0],v=f[1],y=r.a.useRef(d),C=r.a.useRef(b),N=r.a.useRef(g),I={"eating-drinking":40,gym:50,library:50,"common-area":40};function S(e){console.log(N.current+" "+y.current+" "+C.current);var t="";if(""===y.current||0===C.current||0===e.roomWidth||0===e.roomLength)t="",document.getElementById("density-recommendation").style.visibility="hidden";else{var i=e.roomLength*e.roomWidth*(C.current/100)/I[y.current],n=0;t=isNaN(N.current)||0===N.current||i<(n=.5*N.current)?i:n,document.getElementById("density-recommendation").style.visibility="visible"}return Math.floor(t)}return Object(n.jsxs)("div",{id:"density-wrapper",children:[Object(n.jsxs)("div",{id:"density-left-container",children:[Object(n.jsxs)("div",{className:"input-wrapper",children:[Object(n.jsx)("label",{htmlFor:"roomtype-selection",className:"input-title",children:"RoomType"}),Object(n.jsxs)("select",{id:"roomtype-selection",className:"user-input",onChange:function(t){var i;i=t.target.value,y.current=i,u(i),e.updateRoomType(t.target.value),c(S(e.roomInfo))},children:[Object(n.jsx)("option",{disabled:!0,selected:!0,value:"",children:" -- select an option -- "}),Object(n.jsx)("option",{value:"eating-drinking",children:"Eating & Drinking Area"}),Object(n.jsx)("option",{value:"gym",children:"Gyms & Fitness Center"}),Object(n.jsx)("option",{value:"common-area",children:"Lobby, Hallway, Common Area"}),Object(n.jsx)("option",{value:"library",children:"Library"})]}),Object(n.jsx)("label",{htmlFor:"space-selection",className:"input-title",id:"density-bottom-title",children:"Usable Space"}),Object(n.jsxs)("select",{id:"roomtype-selection",className:"user-input",onChange:function(t){var i;i=parseFloat(t.target.value),C.current=i,p(i),e.updateUsableSpace(parseFloat(t.target.value)),c(S(e.roomInfo))},children:[Object(n.jsx)("option",{disabled:!0,selected:!0,value:"",children:" -- select an option -- "}),Object(n.jsx)("option",{value:"10",children:"10%"}),Object(n.jsx)("option",{value:"20",children:"20%"}),Object(n.jsx)("option",{value:"30",children:"30%"}),Object(n.jsx)("option",{value:"40",children:"40%"}),Object(n.jsx)("option",{value:"50",children:"50%"}),Object(n.jsx)("option",{value:"60",children:"60%"}),Object(n.jsx)("option",{value:"70",children:"70%"}),Object(n.jsx)("option",{value:"80",children:"80%"}),Object(n.jsx)("option",{value:"90",children:"90%"}),Object(n.jsx)("option",{value:"100",children:"100%"})]}),Object(n.jsx)("label",{htmlFor:"maximum-occupancy",className:"input-title",id:"density-middle-title",children:"Maximum Occupancy"}),Object(n.jsx)("input",{className:"user-input",onChange:function(t){var i;i=parseFloat(t.target.value),N.current=i,v(i),e.updateOccupancy(parseFloat(t.target.value)),c(S(e.roomInfo))}})]}),Object(n.jsxs)("p",{id:"density-recommendation",children:[Object(n.jsx)("span",{className:"density-bold",children:"Occupancy Recommendation: "}),"Based on your room type and usable space, the recommended occupancy of your room is ",Object(n.jsx)("span",{className:"density-bold",children:a+" persons"})]})]}),Object(n.jsx)("img",{src:x,id:"img-density",alt:"density clip art"}),Object(n.jsx)("p",{id:"density-help-text",className:"help-text",children:"Occupant density determines the optimal amount of people that should be in your room for clean air"})]})}function v(e){function t(){(("find"!==e.calculatorType||0!==e.roomInfo.roomWidth&&0!==e.roomInfo.roomLength&&0!==e.roomInfo.ceilingHeight)&&("test"!==e.calculatorType||0!==e.roomInfo.roomWidth&&0!==e.roomInfo.roomLength&&0!==e.roomInfo.ceilingHeight&&0!==e.roomInfo.cadr)?(e.floorAreaEntered(e.roomInfo.roomWidth*e.roomInfo.roomLength),1):(console.log("Please fill out all fields to continue"),0))&&e.onShowResult(e.calculatorType),window.scrollTo(0,0)}return Object(n.jsxs)("div",{id:"calculator-wrapper",children:[Object(n.jsx)("h2",{id:"calculator-title",children:(document.body.style.background="linear-gradient(180deg, rgba(234, 95, 20, 0.25) 0%, rgba(234, 95, 20, 0.25) 41.15%, rgba(234, 95, 20, 0.25) 76.56%, rgba(226, 167, 0, 0.25) 100%)","find"===e.calculatorType?"Find Air Cleaner":"Test Air Cleaner Efficiency")}),Object(n.jsxs)("div",{className:"step-wrapper",children:[Object(n.jsx)("h3",{className:"step-title",children:"Step 1: Room Dimension"}),Object(n.jsx)(h,{unitSelectionMade:e.unitSelectionMade,roomWidthEntered:e.roomWidthEntered,roomLengthEntered:e.roomLengthEntered,ceilingHeightEntered:e.ceilingHeightEntered,floorAreaEntered:e.floorAreaEntered,roomInfo:e.roomInfo})]}),Object(n.jsxs)("div",{className:"step-wrapper",children:[Object(n.jsx)("h3",{className:"step-title",children:"Step 2: Ventilation Rating"}),Object(n.jsx)(p,{updateOutdoorVentilation:e.updateOutdoorVentilation,type:e.roomInfo.outdoorVentilation})]}),"test"===e.calculatorType&&Object(n.jsxs)("div",{className:"step-wrapper",children:[Object(n.jsx)("h3",{className:"step-title",children:"Step 3: Clean Air Delivery Rate (CADR)"}),Object(n.jsx)(f,{cadrEntered:e.cadrEntered,roomInfo:e.roomInfo})]}),Object(n.jsxs)("div",{className:"step-wrapper",children:[Object(n.jsx)("h3",{className:"step-title",children:"Step 4: Occupant Density"}),Object(n.jsx)(g,{updateRoomType:e.updateRoomType,updateUsableSpace:e.updateUsableSpace,updateOccupancy:e.updateOccupancy,roomInfo:e.roomInfo})]}),Object(n.jsx)("div",{id:"button-wrapper",children:Object(n.jsx)("button",{id:"results-btn",onClick:function(){return t()},children:"VIEW RESULTS"})})]})}i(81);var y=i(41),C=i.n(y);function N(e){var t,i={Poor:1,Typical:1.5,Good:3,Enhanced:4};function o(){return"feet"===e.roomInfo.units?Math.round(60*e.roomInfo.cadr/(e.roomInfo.roomWidth*e.roomInfo.roomLength*e.roomInfo.ceilingHeight)*10)/10+i[e.roomInfo.outdoorVentilation]:Math.round(e.roomInfo.cadr/.58/(e.roomInfo.roomWidth*e.roomInfo.roomLength*e.roomInfo.ceilingHeight)*10)/10+i[e.roomInfo.outdoorVentilation]}return Object(n.jsxs)("div",{id:"roomsizerec-container",children:[Object(n.jsxs)("div",{id:"roomsizerec-header",unselectable:"on",children:[Object(n.jsx)("button",{id:"btn-back",onClick:function(){e.backToCalculator()},children:"< Go Back"}),Object(n.jsx)("p",{id:"roomsizerec-title",children:"ACH Efficiency Report"})]}),Object(n.jsxs)("div",{id:"roomsizerec-content",children:[Object(n.jsxs)("div",{id:"roomsizerec-gauge",children:[Object(n.jsx)("h3",{children:"Is your room meeting the recommended guidelines?"}),Object(n.jsx)(C.a,{id:"gauge-chart1",nrOfLevels:5,colors:["#FF0D0D","#FF8E15","#FAB733","#ACB334","#69B34C"],arcPadding:.05,arcsLength:[.2,.19,.19,.19,.2],animate:!0,percent:function(){var e=o();return e<=3?e/15:e<=4?e/10.26:e<=5?e/8.62:e<=6?e/7.79:.77+.01*e}(),formatTextValue:function(e){return o()}}),Object(n.jsx)("p",{id:"gauge-footer",children:"Air Changes Per Hour"}),Object(n.jsx)("div",{id:"gauge-result-message",children:Object(n.jsx)("p",{id:"result-message",children:(t=o(),t<3?"VERY LOW":t<4?"BARE MINIMUM":t<5?"OKAY":t<6?"GOOD":"IDEAL")})})]}),Object(n.jsxs)("div",{id:"roomsizerec-details",children:[Object(n.jsxs)("div",{className:"details-module",children:[Object(n.jsxs)("p",{className:"details-top",id:"superscript-feet",children:[function(){var t=0;return"feet"===e.roomInfo.units?(t=i[e.roomInfo.outdoorVentilation]*(e.roomInfo.roomWidth*e.roomInfo.roomLength*e.roomInfo.ceilingHeight)/60+parseFloat(e.roomInfo.cadr),console.log(t),Math.round(60*t/(5*e.roomInfo.ceilingHeight))):(t=i[e.roomInfo.outdoorVentilation]*e.roomInfo.floorArea*e.roomInfo.ceilingHeight*35.3147/60+parseFloat(e.roomInfo.cadr),Math.round(60*t/35.315/(5*e.roomInfo.ceilingHeight)))}()," ft ",Object(n.jsx)("span",{id:"superscript-number",children:"2"})]}),Object(n.jsx)("p",{className:"details-bottom",children:"Recommended Room Area"})]}),Object(n.jsxs)("div",{className:"details-module",children:[Object(n.jsx)("p",{className:"details-top",children:e.roomInfo.outdoorVentilation.toUpperCase()}),Object(n.jsx)("p",{className:"details-bottom",children:"Ventilation Rating"})]}),Object(n.jsxs)("div",{className:"details-module",children:[Object(n.jsx)("p",{className:"details-top",children:"EPSOM-6429"}),Object(n.jsx)("p",{className:"details-bottom",children:"Air Cleaner Model Name"})]}),Object(n.jsxs)("div",{className:"details-module",children:[Object(n.jsx)("p",{className:"details-top",children:e.roomInfo.cadr}),Object(n.jsx)("p",{className:"details-bottom",children:"Clean Air Delivery Rate"})]})]})]})]})}i(88),i(30);function I(e){return Object(n.jsx)("div",{id:"sort-key-choice-container",children:Object(n.jsxs)("div",{id:"sort-key-choice",children:[Object(n.jsx)("label",{htmlFor:"sort-key-choice-dropdown",children:"Sort By:"}),Object(n.jsxs)("select",{id:"sort-key-choice-dropdown",onChange:function(t){return e.updateSortKey(t.target.value)},children:[Object(n.jsx)("option",{value:"price",children:"Price"}),Object(n.jsx)("option",{value:"noise",children:"Noise"}),Object(n.jsx)("option",{value:"ach",children:"ACH (Air Changes per Hour)"})]})]})})}i(89);function S(e){var t=Object(o.useState)({}),i=Object(j.a)(t,2),r=i[0],a=i[1],c=Object(o.useRef)(null),s=Object(o.useRef)(null),l=Object(o.useRef)(null);function d(){var e={maxPrice:""!==c.current.value?c.current.value:-1,maxNoise:""!==s.current.value?s.current.value:-1,maxPower:""!==l.current.value?l.current.value:-1};a(e)}return Object(n.jsxs)("div",{id:"filter-options",children:[Object(n.jsxs)("div",{id:"filter-options-title-container",children:[Object(n.jsx)("p",{id:"filter-options-title",children:"Filter by:"}),Object(n.jsx)("button",{id:"filter-options-clear-all-button","data-testid":"clear-filter-options-button",onClick:function(){c.current.value=null,s.current.value=null,l.current.value=null,e.setFilterOptions({maxPrice:-1,maxNoise:-1,maxPower:-1})},children:"clear all"})]}),Object(n.jsxs)("div",{className:"filter-option-container",children:[Object(n.jsx)("p",{className:"filter-option-title",children:"Max Price (U.S dollars)"}),Object(n.jsxs)("div",{className:"filter-option",children:[Object(n.jsxs)("div",{className:"filter-option-label-and-input",children:[Object(n.jsx)("label",{htmlFor:"price-input",className:"filter-option-unit-dollar",children:"$"}),Object(n.jsx)("input",{id:"price-input",className:"filter-option-input",onChange:function(){return d()},ref:c})]}),Object(n.jsx)("button",{"data-testid":"max-price-filter-submit-button",className:"submit-filter-options-button",onClick:function(){e.setFilterOptions(r)},children:"Submit"})]})]}),Object(n.jsxs)("div",{className:"filter-option-container",children:[Object(n.jsx)("p",{className:"filter-option-title",children:"Max Noise (decibels)"}),Object(n.jsxs)("div",{className:"filter-option",children:[Object(n.jsxs)("div",{className:"filter-option-label-and-input",children:[Object(n.jsx)("input",{id:"noise-input",className:"filter-option-input",onChange:function(){return d()},ref:s}),Object(n.jsx)("label",{htmlFor:"noise-input",className:"filter-option-unit-other",children:"dB"})]}),Object(n.jsx)("button",{"data-testid":"max-noise-filter-submit-button",className:"submit-filter-options-button",onClick:function(){e.setFilterOptions(r)},children:"Submit"})]})]}),Object(n.jsxs)("div",{id:"last-filter-option-container",className:"filter-option-container",children:[Object(n.jsx)("p",{className:"filter-option-title",children:"Max Power Usage (Watts)"}),Object(n.jsxs)("div",{className:"filter-option",children:[Object(n.jsxs)("div",{className:"filter-option-label-and-input",children:[Object(n.jsx)("input",{id:"power-input",className:"filter-option-input",onChange:function(){return d()},ref:l}),Object(n.jsx)("label",{htmlFor:"power-input",className:"filter-option-unit-other",children:"W"})]}),Object(n.jsx)("button",{"data-testid":"max-power-filter-submit-button",className:"submit-filter-options-button",onClick:function(){e.setFilterOptions(r)},children:"Submit"})]})]})]})}var A=i(51);i(90),i(91);function w(e){return Object(n.jsxs)("div",{className:"air-cleaner-list-item",children:[Object(n.jsx)("div",{className:"air-cleaner-image-container",children:Object(n.jsx)("img",{className:"air-cleaner-image",src:e.airCleaner.imageLink,alt:e.airCleaner.name})}),Object(n.jsxs)("div",{className:"air-cleaner-high-level-details",children:[Object(n.jsx)("p",{className:"air-cleaner-name",children:e.airCleaner.name}),Object(n.jsxs)("p",{"data-testid":"air-cleaner-price",children:[Object(n.jsx)("strong",{children:"Price:"})," $",e.airCleaner.price]}),Object(n.jsxs)("p",{"data-testid":"air-cleaner-ach",children:[Object(n.jsx)("strong",{children:" Estimated air changes per hour for your space:"}),"  ",e.airCleaner.ach]}),Object(n.jsxs)("p",{"data-testid":"air-cleaner-noise",children:[Object(n.jsx)("strong",{children:" Noise Level:"}),"  ",e.airCleaner.noise<0?"Not available":e.airCleaner.noise+" dB"]}),Object(n.jsx)("button",{className:"air-cleaner-details-button",onClick:function(){e.detailsClick(e.airCleaner)},children:"Details"})]})]})}function T(e){var t=Object(o.useState)([]),i=Object(j.a)(t,2),r=i[0],a=i[1],c=r.map((function(t){return Object(n.jsx)(w,{airCleaner:t,detailsClick:e.detailsClick},t.name)}));return Object(o.useEffect)((function(){!function(){var t=1;"Typical"===e.roomInfo.outdoorVentilation?t=1.5:"Good"===e.roomInfo.outdoorVentilation?t=3:"Enhanced"===e.roomInfo.outdoorVentilation&&(t=4);var i=e.airCleaners;i.forEach((function(i){"feet"===e.roomInfo.units?i.ach=Math.round(60*i.cadr/(e.roomInfo.floorArea*e.roomInfo.ceilingHeight)*100)/100+t:i.ach=Math.round(i.cadr/.58/(e.roomInfo.floorArea*e.roomInfo.ceilingHeight)*100)/100+t}));var n=Object(A.a)(i).filter((function(t){return!(t.ach<4)&&(!(e.filterOptions.maxPrice>-1&&e.filterOptions.maxPrice<t.price)&&(!(e.filterOptions.maxNoise>-1&&(e.filterOptions.maxNoise<t.noise||-1===t.noise))&&!(e.filterOptions.maxPower>-1&&e.filterOptions.maxPower<t.power)))})).sort((function(t,i){return-1===t[e.sortKey]&&-1!==i[e.sortKey]?1:-1===i[e.sortKey]&&-1!==t[e.sortKey]?-1:"ach"===e.sortKey?i[e.sortKey]-t[e.sortKey]:t[e.sortKey]-i[e.sortKey]}));a(n)}()}),[e]),Object(n.jsx)("div",{id:"air-cleaner-list",children:c.length>0?c:Object(n.jsx)("div",{id:"no-air-cleaners-found-message-container",children:Object(n.jsx)("p",{children:"Sorry, but there were no portable air cleaners found."})})})}i(92);function L(e){return Object(n.jsx)("div",{id:"air-cleaner-details-container",children:Object(n.jsxs)("div",{id:"air-cleaner-details",children:[Object(n.jsxs)("div",{id:"air-cleaner-details-header",children:[Object(n.jsx)("h3",{children:e.airCleaner.name}),Object(n.jsx)("button",{id:"close-air-cleaner-details-button",onClick:function(){console.log(e.airCleaner),e.closeDetailsClick()},children:"Close"})]}),Object(n.jsxs)("div",{id:"air-cleaner-details-body",children:[Object(n.jsx)("img",{className:"air-cleaner-details-image",src:e.airCleaner.imageLink,alt:e.airCleaner.name}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Link to buy:"})," ",Object(n.jsx)("a",{href:e.airCleaner.link,children:"Here"})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:" Estimated air changes per hour for your space:"}),"  ",e.airCleaner.ach]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Price:"})," $",e.airCleaner.price]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Noise:"})," ",-1===e.airCleaner.noise?"Not available":e.airCleaner.noise+" dB"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Power Requirement:"})," ",-1===e.airCleaner.power?"Not available":e.airCleaner.power+" W"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Clean Air Delivery Rate (CADR):"})," ",e.airCleaner.cadr+" m^3/min"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Size:"})," ",""===e.airCleaner.size?"Not available":function(e){var t=e.indexOf("x")-1,i=e.lastIndexOf("x")-1;return e.slice(0,t)+'"'+e.slice(t,i)+'"'+e.slice(i)+'"'}(e.airCleaner.size)]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Maximum Room Size:"})," ",-1===e.airCleaner.maxRoomSize?"Not available":e.airCleaner.maxRoomSize+" square feet"]})]})]})]})})}var E=i.p+"static/media/various_portable_air_cleaners.d351f1a5.png";function k(e){var t=Object(o.useState)("price"),i=Object(j.a)(t,2),r=i[0],a=i[1],c=Object(o.useState)({maxPrice:-1,maxNoise:-1,maxWidth:-1,maxLength:-1,maxHeight:-1,maxPower:-1}),s=Object(j.a)(c,2),l=s[0],d=s[1],u=Object(o.useState)(null),m=Object(j.a)(u,2),h=m[0],b=m[1];return Object(n.jsxs)("div",{id:"air-cleaner-recommendations-container",children:[null===h&&Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{id:"back-button",onClick:function(){e.backToCalculator()},children:"< Go Back"}),Object(n.jsxs)("div",{id:"air-cleaner-recommendations",children:[Object(n.jsx)(S,{filterOptions:l,setFilterOptions:d}),Object(n.jsx)("div",{id:"air-cleaner-recommendations-page-center-container",children:Object(n.jsxs)("div",{id:"air-cleaner-recommendations-page-center",children:[Object(n.jsx)("div",{id:"various-air-cleaners-image-container",children:Object(n.jsx)("img",{id:"various-air-cleaners-image",src:E,alt:"Various portable air cleaners"})}),Object(n.jsx)("h2",{id:"air-cleaner-recommendations-title",children:"Recommended Portable Air Cleaners"}),Object(n.jsx)(I,{updateSortKey:a}),Object(n.jsx)(T,{roomInfo:e.roomInfo,sortKey:r,filterOptions:l,detailsClick:function(e){b(e)},airCleaners:e.airCleaners})]})})]})]}),null!==h&&Object(n.jsx)(L,{airCleaner:h,closeDetailsClick:function(){b(null)}})]})}i(93);var R=i.p+"static/media/aircleaner_animated.3e5eb9b7.png",H=i(108);function W(e){var t=Object(H.a)().t;return Object(n.jsxs)("div",{id:"body-container",children:[Object(n.jsxs)("div",{id:"text-container",children:[Object(n.jsx)("h1",{id:"title",children:t("Title")}),Object(n.jsx)("p",{id:"text-calculator-description",children:"Click a button below to calculate which portable air cleaner is best suited for your business to help keep employees and customers safe or test your own portable air cleaner to find out whether it\u2019s effectively ventilating your business."}),Object(n.jsxs)("div",{id:"buttons-container",children:[Object(n.jsx)("button",{className:"subheader--btn",id:"subheader--btn-find",onClick:function(){return e.setCalculatorType("find")},children:t("FIND AIR CLEANER")}),Object(n.jsx)("button",{className:"subheader--btn",id:"subheader--btn-test",onClick:function(){return e.setCalculatorType("test")},children:t("TEST AIR CLEANER")})]})]}),Object(n.jsx)("img",{id:"img-aircleaner",src:R,alt:"Portable air cleaner drawing"})]})}var F=i.p+"static/media/air_cleaner_list.69f7c418.csv",V=i(50);function P(e){var t=Object(o.useState)({roomWidth:0,roomLength:0,floorArea:0,ceilingHeight:0,units:"feet",outdoorVentilation:"Poor",cadr:0,roomType:"Eating & Drinking",usableSpace:0,maxOccupancy:0}),i=Object(j.a)(t,2),r=i[0],a=i[1],c=Object(o.useState)(null),s=Object(j.a)(c,2),l=s[0],m=s[1],h=Object(o.useState)(null),b=Object(j.a)(h,2),p=b[0],O=b[1],f=Object(o.useState)(void 0===e.airCleaners?null:e.airCleaners),x=Object(j.a)(f,2),g=x[0],y=x[1];function C(){O(null),m(l.substring(7))}return Object(o.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a(F,(function(e){return{name:e.Name,cadr:+e.CADR,price:""===e["Price (USD)"]?-1:+e["Price (USD)"],noise:""===e["Noise Rating (db)"]?-1:+e["Noise Rating (db)"],power:""===e["Power (W)"]?-1:+e["Power (W)"],size:e["Size (in)"],maxRoomSize:""===e["Room Size (sq ft)"]?-1:+e["Room Size (sq ft)"],link:e.Link,imageLink:e["Image Link"]}}));case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}null===g&&function(){e.apply(this,arguments)}()})),Object(n.jsxs)("div",{children:[null===l&&null===p&&Object(n.jsx)(W,{setCalculatorType:m}),("find"===l||"test"===l)&&Object(n.jsx)(v,{calculatorType:l,roomInfo:r,unitSelectionMade:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:e,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},roomWidthEntered:function(e){var t={roomWidth:e,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},roomLengthEntered:function(e){var t={roomWidth:r.roomWidth,roomLength:e,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},floorAreaEntered:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:e,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},ceilingHeightEntered:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:e,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},cadrEntered:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:e,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},onShowResult:function(e){O(e),m("hidden_"+l)},updateOutdoorVentilation:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:e,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},updateRoomType:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:e,usableSpace:r.usableSpace,maxOccupancy:r.maxOccupancy};a(t)},updateUsableSpace:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:e,maxOccupancy:r.maxOccupancy};a(t)},updateOccupancy:function(e){var t={roomWidth:r.roomWidth,roomLength:r.roomLength,floorArea:r.floorArea,ceilingHeight:r.ceilingHeight,units:r.units,outdoorVentilation:r.outdoorVentilation,cadr:r.cadr,roomType:r.roomType,usableSpace:r.usableSpace,maxOccupancy:e};a(t)}}),"find"===p&&null!==g&&Object(n.jsx)(k,{roomInfo:r,backToCalculator:C,airCleaners:g}),"test"===p&&Object(n.jsx)(N,{roomInfo:r,backToCalculator:C})]})}var D=i.p+"static/media/coral_logo.52aed696.png",M=i.p+"static/media/about_product.ed72463d.png",_=i.p+"static/media/commerce_about_logo.1496b165.png";i(99);function U(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"about-submodule-container",children:[Object(n.jsxs)("div",{className:"about-text-container",id:"about-team-container",children:[Object(n.jsx)("h2",{children:"About the Team"}),Object(n.jsx)("p",{children:"We are Informatics students at the University of Washington. We wanted to work on ths project because COVID-19 personally impacted us and many small businesses we know so we were motivated to help create a product that aims at reducing the spread of the virus. "})]}),Object(n.jsx)("img",{src:D,alt:"Team Logo",id:"img-logo"})]}),Object(n.jsxs)("div",{className:"about-submodule-container",children:[Object(n.jsx)("img",{src:M,alt:"",id:"img-product"}),Object(n.jsxs)("div",{className:"about-text-container",id:"about-product-container",children:[Object(n.jsx)("h2",{children:"Why Our Product and Why You Should Care"}),Object(n.jsx)("p",{children:"Air quality is absolutely paramount in keeping yourself and your employees safe, especially for small businesses who function mostly indoor. Because it\u2019s hard to practice social distancing in a closed and pack environment, air cleaner is one of the best ways of keeping everyone in your business safe. "})]})]}),Object(n.jsxs)("div",{className:"about-submodule-container",children:[Object(n.jsxs)("div",{className:"about-text-container",id:"about-sponsor-container",children:[Object(n.jsx)("h2",{children:"Our Sponsor"}),Object(n.jsx)("p",{children:"Sarah Lee from the Washington State Department of Commerce is our sponsor. We are working under the efforts of the Safe Start grant which funds projects helping small business keep running afer facing economic hardships during the COVID-19 pandemic. "})]}),Object(n.jsx)("img",{src:_,alt:"Commerce Logo",id:"img-commerce-logo"})]}),Object(n.jsxs)("div",{className:"about-submodule-container",children:[Object(n.jsx)("div",{className:"about-text-container",children:Object(n.jsx)("h2",{children:"Special Thanks"})}),Object(n.jsx)("img",{})]})]})}i(100);function z(){return Object(n.jsxs)("div",{id:"additional-resources-container",children:[Object(n.jsx)("h1",{children:"Additional Resources"}),Object(n.jsx)("h2",{children:"References"})]})}i(101);function B(){return Object(n.jsxs)("div",{id:"help-content-container",children:[Object(n.jsx)("h2",{className:"help-subheading",children:"Demo Video"}),Object(n.jsx)("p",{children:"space for demo video"}),Object(n.jsx)("h2",{children:"Disclaimer"}),Object(n.jsxs)("p",{children:["Wearing masks, social distancing, increasing airflow from outdoors with open doors and windows, and upgrading the filter that you use in your ventilation system (if you have a ventilation system) ",Object(n.jsx)("strong",{children:"are all more important precautions to take than buying a portable air cleaner."})," Portable air cleaners are only a small part of preventing COVID-19. You can read more about these precautions ",Object(n.jsx)("a",{href:"#",children:"here"}),"."]}),Object(n.jsxs)("p",{children:["Using a portable air cleaner may decrease the likelihood of infection from COVID-19, but it does not prevent it. We are not guaranteeing that any portable air cleaner we recommend will prevent you or others in the space the air cleaner is located to not be infected with COVID-19. You can read more about portable air cleaners ",Object(n.jsx)("a",{href:"#",children:"here"}),"."]}),Object(n.jsx)("h2",{className:"help-subheading",children:"Frequently Asked Questions (FAQs)"}),Object(n.jsx)("strong",{children:Object(n.jsx)("p",{children:"Where should I place my air cleaner?"})}),Object(n.jsx)("p",{children:"Portable air cleaners should usually be elevated about 3 feet off the ground (SOURCE?). They should be placed in an area that will cover as much of the room as possible, which is usually the center of the room. However, avoid placing the air cleaner so that the air released from it blows on people. The model of your specific air cleaner may have more information."}),Object(n.jsx)("strong",{children:Object(n.jsx)("p",{children:"How long does it take for a portable air cleaner to fully ventilate a room?"})}),Object(n.jsx)("p",{children:"calculation for this?"}),Object(n.jsx)("strong",{children:Object(n.jsx)("p",{children:"Where do I find my device's CADR rating?"})}),Object(n.jsx)("p",{children:"You can find your portable air cleaner's CADR rating on the product's website or the specification section that comes with your portable air cleaner."}),Object(n.jsx)("strong",{children:Object(n.jsx)("p",{children:"My air cleaner has CADR ratings for dust, smoke/tobacco smoke, and pollen. Which one should I use?"})}),Object(n.jsx)("p",{children:"Use the dust CADR rating."}),Object(n.jsx)("strong",{children:Object(n.jsx)("p",{children:"How do I estimate my room's ventilation rating?"})}),Object(n.jsxs)("p",{children:["The room ventilation can be calculated by using a CO_2 monitor. You can use ",Object(n.jsx)("a",{href:"#",children:"this"}),"link to measure it. If you can't/don't want to do this, you can estimate based on any upgrades to your ventilation system and how much fresh air you think is being circulated in the room."]}),Object(n.jsx)("h2",{children:"Terminologies"})]})}var K=i(3);function Y(){return Object(n.jsx)("div",{children:Object(n.jsxs)(K.c,{children:[Object(n.jsx)(K.a,{exact:!0,path:"/",component:P}),Object(n.jsx)(K.a,{path:"/about",component:U}),Object(n.jsx)(K.a,{path:"/additional-resources",component:z}),Object(n.jsx)(K.a,{path:"/help",component:B})]})})}i(104),i(105);var q=i.p+"static/media/departmentOfCommerceLogo.c7979d81.png";function G(){var e=Object(H.a)().t;return Object(n.jsx)("div",{id:"header-container",children:Object(n.jsxs)("header",{children:[Object(n.jsx)("img",{id:"wa-dept-of-commerce-logo",src:q,alt:"Washington State Department of Commerce Logo"}),Object(n.jsxs)("nav",{children:[Object(n.jsxs)("div",{id:"tabs-container",children:[Object(n.jsx)(s.b,{to:"/",className:"tab",children:e("Tabs.Home")}),Object(n.jsx)("span",{className:"tab-divider",children:"|"}),Object(n.jsx)(s.b,{to:"/about",className:"tab",children:e("Tabs.About")}),Object(n.jsx)("span",{className:"tab-divider",children:"|"}),Object(n.jsx)(s.b,{to:"/additional-resources",className:"tab",children:e("Tabs.Resources")}),Object(n.jsx)("span",{className:"tab-divider",children:"|"}),Object(n.jsx)(s.b,{to:"/help",className:"tab",children:e("Help")})]}),Object(n.jsxs)("div",{id:"hamburger-menu",onClick:function(){""===document.querySelector("#tabs-container").style.display?document.querySelector("#tabs-container").style.display="flex":document.querySelector("#tabs-container").style.display=""},children:[Object(n.jsx)("div",{className:"hamburger-menu-line"}),Object(n.jsx)("div",{className:"hamburger-menu-line"}),Object(n.jsx)("div",{className:"hamburger-menu-line"})]})]})]})})}i(38);function J(){var e=Object(H.a)(),t=e.t,i=e.i18n;return Object(n.jsxs)("div",{id:"language-selection",children:[Object(n.jsx)("label",{id:"language-selection-label",htmlFor:"language-selection-dropdown",children:t("Language")+":"}),Object(n.jsxs)("select",{id:"language-selection-dropdown",onChange:function(e){return i.changeLanguage(e.target.value)},value:function(){if("es"===i.language)return"es"}(),children:[Object(n.jsx)("option",{value:"en",children:"English"}),Object(n.jsx)("option",{value:"es",children:"Espa\xf1ol"})]})]})}function $(){return Object(n.jsx)("footer",{children:Object(n.jsx)("div",{id:"language-selection-container",children:Object(n.jsx)(J,{})})})}function Q(e){var t=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(G,{}),Object(n.jsx)("div",{children:t}),Object(n.jsx)($,{})]})}var X=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Q,{children:Object(n.jsx)(s.a,{basename:"/",children:Object(n.jsx)(Y,{})})})})},Z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,109)).then((function(t){var i=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;i(e),n(e),o(e),r(e),a(e)}))},ee=i(33),te=i(47),ie=i(19),ne={en:{translation:i(48)},es:{translation:i(49)}};ee.a.use(te.a).use(ie.e).init({resources:ne,fallbackLng:"en",debug:!0,supportedLngs:["en","es"],detection:{order:["querystring","navigator"]},interpolation:{escapeValue:!1}});ee.a;c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o.Suspense,{fallback:"Loading",children:Object(n.jsx)(s.a,{children:Object(n.jsx)(X,{})})})}),document.getElementById("root")),Z()},17:function(e,t,i){},30:function(e,t,i){},38:function(e,t,i){},48:function(e){e.exports=JSON.parse('{"Title":"Portable Air Cleaner Calculator","Tabs":{"Home":"Home","About":"About","Resources":"Resources"},"Language":"Language","Find an air cleaner":"FIND AN AIR CLEANER","Test my air cleaner\'s efficiency":"TEST MY AIR CLEANER\'S EFFICIENCY"}')},49:function(e){e.exports=JSON.parse('{"Title":"1Portable Air Cleaner Calculator","Tabs":{"Calculator":"1Home","About":"1About","Resources":"1Resources"},"Language":"1Language","Find an air cleaner":"1FIND AN AIR CLEANER","Test my air cleaner\'s efficiency":"1TEST MY AIR CLEANER\'S EFFICIENCY"}')},79:function(e,t,i){},81:function(e,t,i){},88:function(e,t,i){},89:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){},99:function(e,t,i){}},[[107,1,2]]]);
//# sourceMappingURL=main.e414fb1e.chunk.js.map