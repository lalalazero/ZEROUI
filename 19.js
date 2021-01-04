(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{80:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.markdown=n.LiveDemo=void 0;var c=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var c=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};c.get||c.set?Object.defineProperty(n,t,c):n[t]=e[t]}return n.default=e,n}(t(0)),l=t(3);function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],c=!0,l=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(c=(a=o.next()).done)&&(t.push(a.value),!n||t.length!==n);c=!0);}catch(e){l=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(l)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(){var e=r((0,c.useState)(!1),2),n=e[0],t=e[1],a=r((0,c.useState)(null),2),o=a[0],u=a[1],i=r((0,c.useState)([]),2),h=i[0],s=i[1];return c.default.createElement("div",null,c.default.createElement("div",null,c.default.createElement(l.Checkbox,{checked:n,indeterminate:o,onChange:function(e,n){t(n),u(null),s(n?["Vue","React","jQuery"]:[])}},"全选")),c.default.createElement(l.Checkbox.Group,{onChange:function(e,n){console.log("checkbox change: ",n),s(n),n.length>0&&n.length<3?u(!0):u(!1),3===n.length?t(!0):t(!1)},options:[{label:"Vue",value:"Vue"},{label:"React",value:"React"},{label:"jQuery",value:"jQuery"}],value:h}))};n.LiveDemo=function(){return c.default.createElement(a,null)};n.markdown={subject:"checkbox 组",desc:"多个 checkbox 组成一组",code:"import React, { useState } from 'react'\nimport { Checkbox } from 'zero-ui-react'\n\nconst App = () => {\n    const [checkAll, setCheckAll] = useState(false)\n    const [indeterminate, setIndeterminate] = useState(null)\n    const [checkGroup, setCheckGroup] = useState([])\n\n    const handleChange = (name, checkedValue) => {\n        console.log('checkbox change: ', checkedValue)\n        setCheckGroup(checkedValue)\n\n        if (checkedValue.length > 0 && checkedValue.length < 3) {\n            setIndeterminate(true)\n        } else {\n            setIndeterminate(false)\n        }\n\n        if (checkedValue.length === 3) {\n            setCheckAll(true)\n        } else {\n            setCheckAll(false)\n        }\n    }\n\n    const handleCheckAll = (name, checked) => {\n        setCheckAll(checked)\n        setIndeterminate(null)\n\n        if (checked) {\n            setCheckGroup(['Vue', 'React', 'jQuery'])\n        } else {\n            setCheckGroup([])\n        }\n    }\n\n    const options = [\n        {\n            label: 'Vue',\n            value: 'Vue',\n        },\n        {\n            label: 'React',\n            value: 'React',\n        },\n        {\n            label: 'jQuery',\n            value: 'jQuery',\n        },\n    ]\n    return (\n        <div>\n            <div>\n                <Checkbox\n                    checked={checkAll}\n                    indeterminate={indeterminate}\n                    onChange={handleCheckAll}\n                >\n                    全选\n                </Checkbox>\n            </div>\n            <Checkbox.Group\n                onChange={handleChange}\n                options={options}\n                value={checkGroup}\n            ></Checkbox.Group>\n        </div>\n    )\n}\n",css:""}}}]);