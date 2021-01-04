(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{64:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o=a(n(0)),u=(a(n(5)),n(3));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){return o.default.createElement("div",{className:"space-button"},o.default.createElement(u.Button,null,"基本"),o.default.createElement(u.Button,{type:"primary"},"主要"),o.default.createElement(u.Button,{type:"dashed"},"虚线"),o.default.createElement(u.Button,{type:"text"},"无边框"),o.default.createElement(u.Button,{type:"danger"},"危险"))};e.LiveDemo=function(){return o.default.createElement(r,null)};e.markdown={subject:"按钮类型",desc:"按钮有五种类型：主按钮、次按钮、虚线按钮、无边框按钮和危险按钮。主按钮在同一个操作区域最多出现一次。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="space-button">\n            <Button>基本</Button>\n            <Button type="primary">主要</Button>\n            <Button type="dashed">虚线</Button>\n            <Button type="text">无边框</Button>\n            <Button type="danger">危险</Button>\n        </div>\n    )\n}\n',css:""}}}]);