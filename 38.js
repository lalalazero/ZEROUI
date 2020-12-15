(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{93:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o,r=(o=t(0))&&o.__esModule?o:{default:o},i=t(3);var a=function(){return r.default.createElement("div",{className:"btn-wrapper"},["success","warn","info","error","success2","warn2","info2","error2"].map(function(n,e){return r.default.createElement(i.Button,{onClick:function(){return i.notification[n]({title:r.default.createElement("h4",null,"标题"),body:"通知内容",autoClose:!1})},key:e},n)}))};e.LiveDemo=function(){return r.default.createElement(a,null)};e.markdown={subject:"内置类型",desc:"提供了常用的四种通知类型，区分了两种样式。",code:"import React from 'react'\nimport { Button, notification } from 'zero-ui-react'\n\nconst App = () => {\n    const buildInApi = [\n        'success',\n        'warn',\n        'info',\n        'error',\n        'success2',\n        'warn2',\n        'info2',\n        'error2',\n    ]\n    return (\n        <div className=\"btn-wrapper\">\n            {buildInApi.map((apiType, idx) => {\n                const onClick = () =>\n                    notification[apiType]({\n                        title: <h4>标题</h4>,\n                        body: '通知内容',\n                        autoClose: false,\n                    })\n                return (\n                    <Button onClick={onClick} key={idx}>\n                        {apiType}\n                    </Button>\n                )\n            })}\n        </div>\n    )\n}\n",css:".btn-wrapper > .zeroUI-button {\n    margin: 5px;\n}"}}}]);