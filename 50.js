(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var r=o(n(0)),l=(o(n(4)),n(3));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,l=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){l=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(l)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(){var e=u(r.default.useState(null),2),t=e[0],n=e[1];return r.default.createElement(l.Select,{value:t,options:[{title:"中国",value:"cn"},{title:"美国",value:"us"},{title:"日本",value:"jp"},{title:"韩国",value:"kr"}],onSelect:function(e){return n(e)}})};t.LiveDemo=function(){return r.default.createElement(a,null)};t.markdown={subject:"基本用法",desc:"普通的下拉选择框。",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Select } from 'zero-ui-react'\n\nconst App = () => {\n    const [selected, setSelected] = React.useState(null)\n    const options = [\n        {\n            title: '中国',\n            value: 'cn',\n        },\n        {\n            title: '美国',\n            value: 'us',\n        },\n        {\n            title: '日本',\n            value: 'jp',\n        },\n        {\n            title: '韩国',\n            value: 'kr',\n        },\n    ]\n    return (\n        <Select\n            value={selected}\n            options={options}\n            onSelect={(item) => setSelected(item)}\n        ></Select>\n    )\n}\n",css:""}}}]);