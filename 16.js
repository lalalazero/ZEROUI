(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{77:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.markdown=r.LiveDemo=void 0;var d=a(t(0)),n=(a(t(5)),t(3));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(){var e={width:"25%",textAlign:"center",height:100};return d.default.createElement("div",null,d.default.createElement(n.Card,{title:"标题"},d.default.createElement(n.Card.Grid,{style:e},"卡片内容"),d.default.createElement(n.Card.Grid,{style:e},"卡片内容"),d.default.createElement(n.Card.Grid,{style:e,hoverable:!1},"卡片内容"),d.default.createElement(n.Card.Grid,{style:e},"卡片内容"),d.default.createElement(n.Card.Grid,{style:e},"卡片内容"),d.default.createElement(n.Card.Grid,{style:e},"卡片内容")))};r.LiveDemo=function(){return d.default.createElement(l,null)};r.markdown={subject:"网格内嵌卡片",desc:"常见卡片展示方式",code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { Card } from 'zero-ui-react'\n\nconst App = () => {\n    const gridStyle = {\n        width: '25%',\n        textAlign: 'center',\n        height: 100,\n    }\n    return (\n        <div>\n            <Card title={'标题'}>\n                <Card.Grid style={gridStyle}>卡片内容</Card.Grid>\n                <Card.Grid style={gridStyle}>卡片内容</Card.Grid>\n                <Card.Grid style={gridStyle} hoverable={false}>\n                    卡片内容\n                </Card.Grid>\n                <Card.Grid style={gridStyle}>卡片内容</Card.Grid>\n                <Card.Grid style={gridStyle}>卡片内容</Card.Grid>\n                <Card.Grid style={gridStyle}>卡片内容</Card.Grid>\n            </Card>\n        </div>\n    )\n}\n",css:""}}}]);