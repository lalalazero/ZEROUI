(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var o=c(n(0)),r=(c(n(5)),n(3));function c(e){return e&&e.__esModule?e:{default:e}}var a=["很差","差评","中评","好评","非常棒"],u=function(){return o.default.createElement(r.Rate,{tooltips:a})};t.LiveDemo=function(){return o.default.createElement(u,null)};t.markdown={subject:"文案展示",desc:"评分带上文案说明",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Rate } from 'zero-ui-react'\n\nconst desc = ['很差', '差评', '中评', '好评', '非常棒']\n\nconst App = () => {\n    return <Rate tooltips={desc}></Rate>\n}\n",css:""}}}]);