(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markdown=t.LiveDemo=void 0;var r=o(n(0)),c=(o(n(5)),n(3));function o(e){return e&&e.__esModule?e:{default:e}}var p=c.Steps.Step,s=function(){return r.default.createElement(c.Steps,{current:2},r.default.createElement(p,{title:"第一步",desc:"第一步需要身份证"}),r.default.createElement(p,{title:"第二步",desc:"第二步需要社保证明"}),r.default.createElement(p,{title:"第三步",desc:"等待审核结果"}))};t.LiveDemo=function(){return r.default.createElement(s,null)};t.markdown={subject:"基本",desc:"简单的步骤条",code:'import React from \'react\'\nimport ReactDOM from \'react-dom\'\nimport { Steps } from \'zero-ui-react\'\n\nconst { Step } = Steps\n\nconst App = () => {\n    return (\n        <Steps current={2}>\n            <Step title="第一步" desc="第一步需要身份证"></Step>\n            <Step title="第二步" desc="第二步需要社保证明"></Step>\n            <Step title="第三步" desc="等待审核结果"></Step>\n        </Steps>\n    )\n}\n',css:""}}}]);