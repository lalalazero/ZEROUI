(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{83:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var n=a(o(0)),l=(a(o(3)),o(2));function a(t){return t&&t.__esModule?t:{default:t}}var p=function(){return n.default.createElement("div",{className:"tooltip-example-02"},n.default.createElement("div",{className:"box-1"},n.default.createElement(l.Tooltip,{title:"propmt text",placement:"top"},n.default.createElement(l.Button,null,"TOP"))),n.default.createElement("div",{className:"box-2"},n.default.createElement(l.Tooltip,{title:"propmt text",placement:"left"},n.default.createElement(l.Button,null,"LEFT")),n.default.createElement(l.Tooltip,{title:"propmt text",placement:"right"},n.default.createElement(l.Button,null,"RIGHT"))),n.default.createElement("div",{className:"box-3"},n.default.createElement(l.Tooltip,{title:"propmt text",placement:"bottom"},n.default.createElement(l.Button,null,"BOTTOM"))))};e.LiveDemo=function(){return n.default.createElement(p,null)};e.markdown={subject:"位置",desc:"支持 4 个方位",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Tooltip, Button } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div className="tooltip-example-02">\n            <div className="box-1">\n                <Tooltip title="propmt text" placement="top">\n                    <Button>TOP</Button>\n                </Tooltip>\n            </div>\n            <div className="box-2">\n                <Tooltip title="propmt text" placement="left">\n                    <Button>LEFT</Button>\n                </Tooltip>\n                <Tooltip title="propmt text" placement="right">\n                    <Button>RIGHT</Button>\n                </Tooltip>\n            </div>\n            <div className="box-3">\n                <Tooltip title="propmt text" placement="bottom">\n                    <Button>BOTTOM</Button>\n                </Tooltip>\n            </div>\n        </div>\n    )\n}\n\n',css:""}}}]);