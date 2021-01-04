(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{106:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.markdown=e.LiveDemo=void 0;var o,i=(o=t(0))&&o.__esModule?o:{default:o},l=t(3);function a(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],o=!0,i=!1,l=void 0;try{for(var a,r=n[Symbol.iterator]();!(o=(a=r.next()).done)&&(t.push(a.value),!e||t.length!==e);o=!0);}catch(n){i=!0,l=n}finally{try{o||null==r.return||r.return()}finally{if(i)throw l}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r=function(){var n=a(i.default.useState(!1),2),e=n[0],t=n[1];return i.default.createElement("div",null,i.default.createElement(l.Button,{onClick:function(){l.notification.open({title:i.default.createElement("h4",null,"标题"),body:"通知内容",autoClose:!1,key:"test",onClose:function(){t(!1)}}),t(!0)},style:{marginRight:10},disabled:e},"打开"),i.default.createElement(l.Button,{onClick:function(){l.notification.close("test"),t(!1)},disabled:!e},"关闭"))};e.LiveDemo=function(){return i.default.createElement(r,null)};e.markdown={subject:"手动关闭",desc:"设置 autoClose 属性为 false 则通知不会自动关闭。",code:"import React from 'react'\nimport { Button, notification } from 'zero-ui-react'\n\nconst App = () => {\n    const [opened, setOpen] = React.useState(false)\n    const onClick = () => {\n        notification.open({\n            title: <h4>标题</h4>,\n            body: '通知内容',\n            autoClose: false,\n            key: 'test',\n            onClose: () => {\n                setOpen(false)\n            },\n        })\n\n        setOpen(true)\n    }\n\n    const onClose = () => {\n        notification.close('test')\n        setOpen(false)\n    }\n    return (\n        <div>\n            <Button\n                onClick={onClick}\n                style={{ marginRight: 10 }}\n                disabled={opened}\n            >\n                打开\n            </Button>\n            <Button onClick={onClose} disabled={!opened}>\n                关闭\n            </Button>\n        </div>\n    )\n}\n",css:""}}}]);