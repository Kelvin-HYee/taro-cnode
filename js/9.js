(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"124":function(e,t,n){},"39":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),u=_interopRequireDefault(n(0)),a=n(42),i=_interopRequireDefault(n(47));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(124);var c=function(e){function About(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,About);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(About.__proto__||Object.getPrototypeOf(About)).apply(this,arguments));return e.config={"navigationBarTitleText":"关于"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(About,o.Component),r(About,[{"key":"render","value":function render(){return u.default.createElement(a.View,{"className":"flex-wrp"},u.default.createElement(i.default,{"pageType":"关于","fixHead":!0,"needAdd":!0}),u.default.createElement(a.ScrollView,{"className":"about-info","style":"height:100vh"},u.default.createElement("dt",null,"关于项目"),u.default.createElement("dd",null,"该项目是基于 https://cnodejs.org 的api，Taro 编写的 多端App。"),u.default.createElement("dt",null,"源码地址"),u.default.createElement("dd",null,u.default.createElement("a",{"href":"https://github.com/icai/taro-cnode"},"https://github.com/icai/taro-cnode")),u.default.createElement("dt",null,"意见反馈"),u.default.createElement("dd",null,u.default.createElement("a",{"href":"https://github.com/icai/taro-cnode/issues"},"发表意见或者提需求")),u.default.createElement("dt",null,"当前版本"),u.default.createElement("dd",null,"V1.0")))}}]),About}();t.default=c},"43":function(e,t,n){(function(n){var r,o,u,a,i,c,l,f,s,p,y,b,d,h,_,v,m,w,O,j;!function(g){var P="object"==typeof n?n:"object"==typeof self?self:"object"==typeof this?this:{};function createExporter(e,t){return e!==P&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{"value":!0}):e.__esModule=!0),function(n,r){return e[n]=t?t(n,r):r}}void 0===(r=function(e){!function(e){var t=Object.setPrototypeOf||{"__proto__":[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};o=function(e,n){function __(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(__.prototype=n.prototype,new __)},u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]]);return n},i=function(e,t,n,r){var o,u=arguments.length,a=u<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(u<3?o(a):u>3?o(t,n,a):o(t,n))||a);return u>3&&a&&Object.defineProperty(t,n,a),a},c=function(e,t){return function(n,r){t(n,r,e)}},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(e,t,n,r){return new(n||(n=Promise))(function(o,u){function fulfilled(e){try{step(r.next(e))}catch(e){u(e)}}function rejected(e){try{step(r.throw(e))}catch(e){u(e)}}function step(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(fulfilled,rejected)}step((r=r.apply(e,t||[])).next())})},s=function(e,t){var n,r,o,u,a={"label":0,"sent":function(){if(1&o[0])throw o[1];return o[1]},"trys":[],"ops":[]};return u={"next":verb(0),"throw":verb(1),"return":verb(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function verb(u){return function(i){return function step(u){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{"value":u[1],"done":!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{"value":u[0]?u[1]:void 0,"done":!0}}([u,i])}}},p=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},y=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{"next":function(){return e&&n>=e.length&&(e=void 0),{"value":e&&e[n++],"done":!e}}}},b=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,u=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=u.next()).done;)a.push(r.value)}catch(e){o={"error":e}}finally{try{r&&!r.done&&(n=u.return)&&n.call(u)}finally{if(o)throw o.error}}return a},d=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e},h=function(e){return this instanceof h?(this.v=e,this):new h(e)},_=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),u=[];return r={},verb("next"),verb("throw"),verb("return"),r[Symbol.asyncIterator]=function(){return this},r;function verb(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){u.push([e,t,n,r])>1||resume(e,t)})})}function resume(e,t){try{!function step(e){e.value instanceof h?Promise.resolve(e.value.v).then(fulfill,reject):settle(u[0][2],e)}(o[e](t))}catch(e){settle(u[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),u.shift(),u.length&&resume(u[0][0],u[0][1])}},v=function(e){var t,n;return t={},verb("next"),verb("throw",function(e){throw e}),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(r,o){t[r]=e[r]?function(t){return(n=!n)?{"value":h(e[r](t)),"done":"return"===r}:o?o(t):t}:o}},m=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof y?y(e):e[Symbol.iterator](),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){t=e[n](t),function settle(e,t,n,r){Promise.resolve(r).then(function(t){e({"value":t,"done":n})},t)}(r,o,t.done,t.value)})}}},w=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{"value":t}):e.raw=t,e},O=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},j=function(e){return e&&e.__esModule?e:{"default":e}},e("__extends",o),e("__assign",u),e("__rest",a),e("__decorate",i),e("__param",c),e("__metadata",l),e("__awaiter",f),e("__generator",s),e("__exportStar",p),e("__values",y),e("__read",b),e("__spread",d),e("__await",h),e("__asyncGenerator",_),e("__asyncDelegator",v),e("__asyncValues",m),e("__makeTemplateObject",w),e("__importStar",O),e("__importDefault",j)}(createExporter(P,createExporter(e)))}.apply(t,[t]))||(e.exports=r)}()}).call(this,n(2))}}]);