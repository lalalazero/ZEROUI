(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{66:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.markdown=a.LiveDemo=void 0;var t=d(n(0)),r=(d(n(5)),n(3));function d(e){return e&&e.__esModule?e:{default:e}}var c=function(){return t.default.createElement("div",null,t.default.createElement(r.Badge,{count:99},t.default.createElement("a",{href:"#",className:"badge-example"})),t.default.createElement(r.Badge,{count:102},t.default.createElement("a",{href:"#",className:"badge-example"})),t.default.createElement(r.Badge,{count:12,overCount:10},t.default.createElement("a",{href:"#",className:"badge-example"})),t.default.createElement(r.Badge,{count:1e3,overCount:999},t.default.createElement("a",{href:"#",className:"badge-example"})))};a.LiveDemo=function(){return t.default.createElement(c,null)};a.markdown={subject:"封顶数字",desc:"超过了封顶数字会展示为+号，默认封顶数字是 99",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Badge, Icon } from \'zero-ui-react\'\n\nconst App = () => {\n    return (\n        <div>\n            <Badge count={99}>\n                <a href="#" className="badge-example" />\n            </Badge>\n            <Badge count={102}>\n                <a href="#" className="badge-example" />\n            </Badge>\n            <Badge count={12} overCount={10}>\n                <a href="#" className="badge-example" />\n            </Badge>\n            <Badge count={1000} overCount={999}>\n                <a href="#" className="badge-example" />\n            </Badge>\n        </div>\n    )\n}\n',css:""}}}]);