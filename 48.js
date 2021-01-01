(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{107:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var a=i(t(0)),r=(i(t(5)),t(3));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var e=o(a.default.useState(!1),2),n=e[0],t=e[1];return a.default.createElement("div",null,a.default.createElement("div",null,a.default.createElement(r.Button,{onClick:function(){t(!n)}},"切换显示")),a.default.createElement(r.Pagination,{total:10,hideIfOnePage:n}),a.default.createElement("br",null),a.default.createElement(r.Pagination,{total:10,simple:!0,hideIfOnePage:n}))};n.LiveDemo=function(){return a.default.createElement(l,null)};n.markdown={subject:"当只有一页时",desc:"可以选择隐藏或者显示分页",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Pagination, Button } from 'zero-ui-react'\n\nconst App = () => {\n    const [hideIfOnePage, setHideIfOnePage] = React.useState(false)\n    const onClick = () => {\n        setHideIfOnePage(!hideIfOnePage)\n    }\n    return (\n        <div>\n            <div>\n                <Button onClick={onClick}>切换显示</Button>\n            </div>\n            <Pagination total={10} hideIfOnePage={hideIfOnePage} />\n            <br />\n            <Pagination total={10} simple hideIfOnePage={hideIfOnePage} />\n        </div>\n    )\n}\n",css:""}}}]);