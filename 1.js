(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{64:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.markdown=a.LiveDemo=void 0;var t=r(n(0)),l=(r(n(5)),n(3));function r(e){return e&&e.__esModule?e:{default:e}}var c=function(){return t.default.createElement("div",null,t.default.createElement(l.Badge,{count:5},t.default.createElement("a",{href:"#",className:"badge-example"})),t.default.createElement(l.Badge,{count:0},t.default.createElement("a",{href:"#",className:"badge-example"})),t.default.createElement(l.Badge,{count:0,showZero:!0},t.default.createElement("a",{href:"#",className:"badge-example"})),t.default.createElement(l.Badge,{count:t.default.createElement(l.Icon,{name:"joy",style:{fill:"red"}})},t.default.createElement("a",{href:"#",className:"badge-example"})))};a.LiveDemo=function(){return t.default.createElement(c,null)};a.markdown={subject:"基本",desc:"简单的用法，当 count=0 时默认不展示徽章，可以通过 showZero 修改为显示。",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Badge, Icon } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div>\n            <Badge count={5}>\n                <a href="#" className="badge-example" />\n            </Badge>\n            <Badge count={0}>\n                <a href="#" className="badge-example" />\n            </Badge>\n            <Badge count={0} showZero={true}>\n                <a href="#" className="badge-example" />\n            </Badge>\n            <Badge count={<Icon name="joy" style={{ fill: \'red\' }} />}>\n                <a href="#" className="badge-example" />\n            </Badge>\n        </div>\n    )\n}\n',css:""}}}]);