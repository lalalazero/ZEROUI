(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var o=u(n(0)),l=(u(n(3)),n(1));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){return o.default.createElement("div",{className:"space-button"},o.default.createElement("div",null,o.default.createElement(l.Button,{block:!0,type:"primary"},"主要")),o.default.createElement("div",null,o.default.createElement(l.Button,{block:!0},"基本")),o.default.createElement("div",null,o.default.createElement(l.Button,{block:!0,type:"dashed"},"虚线")),o.default.createElement("div",null,o.default.createElement(l.Button,{block:!0,type:"text"},"无边框")),o.default.createElement("div",null,o.default.createElement(l.Button,{block:!0,type:"danger"},"危险")))};t.LiveDemo=function(){return o.default.createElement(d,null)};t.markdown={subject:"块级按钮",desc:"通过 <code>block</code> 属性使得按钮宽度适应其父元素。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="space-button">\n            <div>\n                <Button block type="primary">\n                    主要\n                </Button>\n            </div>\n            <div>\n                <Button block>基本</Button>\n            </div>\n            <div>\n                <Button block type="dashed">\n                    虚线\n                </Button>\n            </div>\n            <div>\n                <Button block type="text">\n                    无边框\n                </Button>\n            </div>\n            <div>\n                <Button block type="danger">\n                    危险\n                </Button>\n            </div>\n        </div>\n    )\n}\n',css:""}}}]);