(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var o=r(n(0)),c=(r(n(3)),n(2));function r(e){return e&&e.__esModule?e:{default:e}}var a=function(){return o.default.createElement("div",{className:"space-button"},o.default.createElement(c.Button,{icon:"search",shape:"circle",type:"primary"}),o.default.createElement(c.Button,{icon:"search",shape:"circle"}),o.default.createElement(c.Button,{icon:"search",type:"primary"},"Search"),o.default.createElement(c.Button,{icon:"search",position:"right"},"Search"))};t.LiveDemo=function(){return o.default.createElement(a,null)};t.markdown={subject:"图标按钮",desc:"通过 <code>icon</code> 属性设置 <code>Button</code> 的图标类型。当想要图标在按钮的右边时，设置 <code>position</code> 属性即可。注：圆形按钮设置 <code>position</code> 无效。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="space-button">\n            <Button icon="search" shape="circle" type="primary"></Button>\n            <Button icon="search" shape="circle"></Button>\n            <Button icon="search" type="primary">\n                Search\n            </Button>\n            <Button icon="search" position="right">\n                Search\n            </Button>\n        </div>\n    )\n}\n',css:""}}}]);