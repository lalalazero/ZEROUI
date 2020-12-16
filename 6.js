(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o=r(n(0)),u=(r(n(4)),n(3));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(){return o.default.createElement("div",{className:"space-button-group"},o.default.createElement(u.ButtonGroup,null,o.default.createElement(u.Button,null,"取消"),o.default.createElement(u.Button,null,"确定")),o.default.createElement(u.ButtonGroup,null,o.default.createElement(u.Button,{disabled:!0},"左"),o.default.createElement(u.Button,{disabled:!0},"中"),o.default.createElement(u.Button,{disabled:!0},"右")),o.default.createElement(u.ButtonGroup,null,o.default.createElement(u.Button,{icon:"left",type:"primary"},"上一页"),o.default.createElement(u.Button,{icon:"right",type:"primary",position:"right"},"下一页")),o.default.createElement(u.ButtonGroup,null,o.default.createElement(u.Button,{icon:"download",type:"primary"}),o.default.createElement(u.Button,{icon:"like",type:"primary"})))};e.LiveDemo=function(){return o.default.createElement(a,null)};e.markdown={subject:"按钮组合",desc:"将多个 <code>Button</code> 放入 <code>ButtonGroup</code> 容器中。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Button, ButtonGroup } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="space-button-group">\n            <ButtonGroup>\n                <Button>取消</Button>\n                <Button>确定</Button>\n            </ButtonGroup>\n            <ButtonGroup>\n                <Button disabled>左</Button>\n                <Button disabled>中</Button>\n                <Button disabled>右</Button>\n            </ButtonGroup>\n            <ButtonGroup>\n                <Button icon="left" type="primary">\n                    上一页\n                </Button>\n                <Button icon="right" type="primary" position="right">\n                    下一页\n                </Button>\n            </ButtonGroup>\n            <ButtonGroup>\n                <Button icon="download" type="primary"></Button>\n                <Button icon="like" type="primary"></Button>\n            </ButtonGroup>\n        </div>\n    )\n}\n',css:""}}}]);