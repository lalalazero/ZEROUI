(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var c,l=(c=n(0))&&c.__esModule?c:{default:c},a=n(3);var i=function(){return l.default.createElement("div",null,l.default.createElement(a.Switch,{checked:!0,loading:!0}),l.default.createElement(a.Switch,{checked:!1,loading:!0}),l.default.createElement(a.Switch,{checked:!0,loading:!0,size:"small"}),l.default.createElement(a.Switch,{checked:!1,loading:!0,size:"small"}))};t.LiveDemo=function(){return l.default.createElement(i,null)};t.markdown={subject:"加载中",desc:"转圈 loading 状态",code:"import React from 'react'\nimport { Switch } from 'zero-ui-react'\n\nconst App = () => {\n    return (\n        <div>\n            <Switch checked={true} loading={true} />\n            <Switch checked={false} loading={true} />\n            <Switch checked={true} loading={true} size=\"small\" />\n            <Switch checked={false} loading={true} size=\"small\" />\n        </div>\n    )\n}\n",css:""}}}]);