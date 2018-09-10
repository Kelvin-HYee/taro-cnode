(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"127":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.TopicsList=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),a=n(54),u=n(128);n(85);var c=function(e){function TopicsList(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TopicsList),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TopicsList.__proto__||Object.getPrototypeOf(TopicsList)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TopicsList,o.Component),r(TopicsList,[{"key":"render","value":function render(){var e=this.props,t=(e.loading,e.topics.map(function(e){return i.default.createElement(u.Topic,{"key":e.id,"topic":e})}));return i.default.createElement(a.View,{"className":"topic-list"},t)}}]),TopicsList}();c.defaultProps={"topics":[],"loading":!0},t.TopicsList=c},"128":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.Topic=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=n(54),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(85);var l=function(e){function Topic(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Topic);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Topic.__proto__||Object.getPrototypeOf(Topic)).apply(this,arguments));return e.handleNavigate=function(e){i.default.navigateTo({"url":"/pages/topic/index?id="+e})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Topic,o.Component),r(Topic,[{"key":"getTabInfo","value":function getTabInfo(e,t,n,r){return c.getTabInfo(e,t,n,r)}},{"key":"render","value":function render(){var e=this,t=this.props.topic,n=t.title,r=t.tab,o=t.good,i=t.top,l=t.author,s=t.visit_count,f=t.reply_count,p=t.create_at,d=t.last_reply_at,h=t.id,y="stitle "+this.getTabInfo(r,o,i,!0),m=this.getTabInfo(r,o,i,!1);return a.default.createElement(u.View,{"className":"topic","onClick":function onClick(t){e.handleNavigate(h)}},a.default.createElement("h3",{"className":y,"title":m},n),a.default.createElement(u.View,{"className":"content"},a.default.createElement(u.View,null,a.default.createElement(u.Image,{"src":l.avatar_url,"className":"avatar"})),a.default.createElement(u.View,{"className":"info"},a.default.createElement(u.View,null,a.default.createElement(u.View,{"className":"name"},l.loginname),f>0?a.default.createElement(u.Text,{"className":"status"},a.default.createElement("b",null,f),"/ ",a.default.createElement(u.Text,null,s)):""),a.default.createElement(u.View,null,a.default.createElement(u.Text,{"className":"time"},c.getLastTimeStr(p,!0)),a.default.createElement(u.Text,{"className":"time"},c.getLastTimeStr(d,!0))))))}}]),Topic}();t.Topic=l},"130":function(e,t,n){},"49":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(2),a=_interopRequireDefault(i),u=_interopRequireDefault(n(0)),c=n(54),l=n(127),s=_interopRequireDefault(n(57)),f=n(70),p=_interopRequireDefault(n(77)),d=_interopRequireDefault(n(71)),h=n(8);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(130);var y=function(e){function List(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,List);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(List.__proto__||Object.getPrototypeOf(List)).apply(this,arguments));return e.config={"navigationBarTitleText":"全部"},e.mergeTopics=function(t){var n=(0,d.default)(e.state.topics,{"$push":t});e.setState({"topics":n})},e.getScrollData=function(){if(e.state.scroll){var t=document.documentElement.clientHeight+document.documentElement.scrollTop;document.documentElement.scrollHeight<=t+200&&e.setState(function(e){return{"scroll":!1,"searchKey":r({},e.searchKey,{"page":e.searchKey.page+1})}},function(){e.getTopics()})}},e.componentScrollBox=document.documentElement,e.state={"scroll":!0,"topics":[],"index":{},"searchKey":{"page":1,"limit":20,"tab":"all","mdrender":!0},"loading":!0,"searchDataStr":""},e.index={},e.throttledScrollHandler=(0,f.throttle)(300,e.getScrollData),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(List,i.Component),o(List,[{"key":"componentDidHide","value":function componentDidHide(){window.removeEventListener("scroll",this.throttledScrollHandler)}},{"key":"componentDidShow","value":function componentDidShow(){var e=this;this.$router.params&&this.$router.params.tab?this.setState(function(t){Object.assign(t.searchKey,{"tab":e.$router.params.tab})},function(){e.getTopics()}):this.getTopics(),window.addEventListener("scroll",this.throttledScrollHandler)}},{"key":"getTitleStr","value":function getTitleStr(e){var t="";switch(e){case"share":t="分享";break;case"ask":t="问答";break;case"job":t="招聘";break;case"good":t="精华";break;default:t="全部"}return t}},{"key":"getTopics","value":function getTopics(){var e=this,t=this.state.searchKey;try{(0,h.get)({"url":"https://cnodejs.org/api/v1/topics","data":t}).then(function(t){var n=t.data;e.setState({"scroll":!0,"loading":!1}),n&&n.data&&e.mergeTopics(n.data)})}catch(e){a.default.showToast({"title":"载入远程数据错误"})}}},{"key":"render","value":function render(){var e=this.state,t=e.searchKey,n=e.topics,r=e.loading;return u.default.createElement(c.View,{"className":"flex-wrp"},u.default.createElement(s.default,{"pageType":this.getTitleStr(t.tab),"fixHead":!0,"needAdd":!0}),u.default.createElement(c.View,{"id":"page"},u.default.createElement(c.View,{"className":"posts-list"},u.default.createElement(l.TopicsList,{"topics":n,"loading":r}))),u.default.createElement(p.default,null))}}]),List}();t.default=y},"56":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(2),a=_interopRequireDefault(i),u=n(54),c=_interopRequireDefault(n(0)),l=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return a.default.navigateTo({"url":t+(n?"?"+l.param(n):"")}),!1},e.defaultProps={"to":{"url":"","params":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,i.Component),o(Link,[{"key":"render","value":function render(){var e=this,t=this.props;return c.default.createElement(u.View,r({},t,{"onClick":function onClick(n){e.goTo(t.to)}}),this.props.children)}}]),Link}();t.default=s},"57":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=_interopRequireDefault(n(55)),c=n(54),l=_interopRequireDefault(n(58));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(66);var s=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.goToAdd=function(){i.default.navigateTo({"url":"/pages/add/index"})},e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,i=o.needAdd,s=o.pageType,f=o.fixHead,p=o.messageCount,d=(0,u.default)({"show":t&&f,"fix-header":f,"no-fix":!f});return a.default.createElement(c.View,{"className":"header"},t&&f?a.default.createElement(c.View,null,a.default.createElement(c.View,{"className":"page-cover","onClick":this.showMenus})):"",a.default.createElement(c.View,{"className":d,"id":"hd"},a.default.createElement(c.View,{"className":"nv-toolbar"},f?a.default.createElement(c.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",a.default.createElement(c.Text,null,s),p>0?a.default.createElement(c.Text,{"className":"num"},p):"",i&&!p||p<=0?a.default.createElement(c.View,{"className":"iconfont add-icon","onClick":this.goToAdd},""):"")),f?a.default.createElement(l.default,{"showMenu":t,"pageType":s,"nickName":n,"profileUrl":r}):"")}}]),Header}();s.defaultProps={"messageCount":0,"scrollTop":0},t.default=s},"58":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=n(54),c=_interopRequireDefault(n(59)),l=_interopRequireDefault(n(55)),s=_interopRequireDefault(n(63)),f=n(4);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(64);var p=function(e){function NvMenu(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments));return e.listAll=function(){e.toList({"tab":"all"})},e.listGood=function(){e.toList({"tab":"good"})},e.listShare=function(){e.toList({"tab":"share"})},e.listAsk=function(){e.toList({"tab":"ask"})},e.listJob=function(){e.toList({"tab":"job"})},e.listMessage=function(){i.default.navigateTo({"url":"/pages/message/index"})},e.listAbout=function(){i.default.navigateTo({"url":"/pages/about/index"})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),r(NvMenu,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"toList","value":function toList(e){i.default.navigateTo({"url":"/pages/list/index?"+(0,f.param)(e)})}},{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,l.default)({"nav-list":!0,"show":e});return a.default.createElement(u.View,{"id":"sideBar","className":t},a.default.createElement(s.default,{"mask":!1,"show":e},a.default.createElement(c.default,null),a.default.createElement(u.View,{"className":"list-ul"},a.default.createElement(u.View,{"className":"icon-quanbu iconfont item","onClick":this.listAll},"全部"),a.default.createElement(u.View,{"className":"icon-hao iconfont item","onClick":this.listGood},"精华"),a.default.createElement(u.View,{"className":"icon-fenxiang iconfont item","onClick":this.listShare},"分享"),a.default.createElement(u.View,{"className":"icon-wenda iconfont item","onClick":this.listAsk},"问答"),a.default.createElement(u.View,{"className":"icon-zhaopin iconfont item","onClick":this.listJob},"招聘"),a.default.createElement(u.View,{"className":"icon-xiaoxi iconfont item line","onClick":this.listMessage},"消息"),a.default.createElement(u.View,{"className":"icon-about iconfont item","onClick":this.listAbout},"关于"))))}}]),NvMenu}();t.default=p},"59":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireWildcard(n(60)),i=n(2),a=_interopRequireDefault(n(0)),u=n(54),c=_interopRequireDefault(n(56)),l=n(6),s=_interopRequireWildcard(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(61);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,i.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return a.default.createElement(u.View,{"className":"user-info"},e.loginname?a.default.createElement(c.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},a.default.createElement(u.View,{"className":"avertar"},e.avatar_url?a.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),a.default.createElement(u.View,{"className":"info"},e.loginname?a.default.createElement(u.Text,null,e.loginname):"")):a.default.createElement(c.default,{"className":"login-no","to":{"url":"/pages/login/index"}},a.default.createElement(u.View,{"className":"login"},a.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(s.authCheckState())}}})],f),t.default=f},"61":function(e,t,n){},"63":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(2)),_interopRequireDefault(n(0))),i=n(54),a=n(68);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,a.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,a=r.animShow,u=r.show,c=["at-drawer"],l={"display":t?"block":"none","opacity":a?1:0};return n?c.push("at-drawer--right"):c.push("at-drawer--left"),a&&c.push("at-drawer--show"),c=c.filter(function(e){return""!==e}),u&&o.default.createElement(i.View,{"className":c},o.default.createElement(i.View,{"className":"at-drawer__mask","style":l,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(i.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"64":function(e,t,n){},"66":function(e,t,n){},"70":function(e,t,n){"use strict";function throttle(e,t,n,r){var o,i=0;return"boolean"!=typeof t&&(r=n,n=t,t=void 0),function wrapper(){var a=this,u=Number(new Date)-i,c=arguments;function exec(){i=Number(new Date),n.apply(a,c)}r&&!o&&exec(),o&&clearTimeout(o),void 0===r&&u>e?exec():!0!==t&&(o=setTimeout(r?function clear(){o=void 0}:exec,void 0===r?e-u:e))}}Object.defineProperty(t,"__esModule",{"value":!0}),t.throttle=throttle,t.debounce=function debounce(e,t,n){return void 0===n?throttle(e,t,!1):throttle(e,n,!1!==t)}},"71":function(e,t,n){var r=n(9),o=Object.prototype.hasOwnProperty,i=Array.prototype.splice,a=Object.prototype.toString,u=function(e){return a.call(e).slice(8,-1)},c=Object.assign||function assign(e,t){return l(t).forEach(function(n){o.call(t,n)&&(e[n]=t[n])}),e},l="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function copy(e){if(Array.isArray(e))return c(e.constructor(e.length),e);if("Map"===u(e))return new Map(e);if("Set"===u(e))return new Set(e);if(e&&"object"==typeof e){var t=Object.getPrototypeOf(e);return c(Object.create(t),e)}return e}function newContext(){var e=c({},s);return update.extend=function(t,n){e[t]=n},update.isEquals=function(e,t){return e===t},update;function update(t,n){"function"==typeof n&&(n={"$apply":n}),Array.isArray(t)&&Array.isArray(n)||r(!Array.isArray(n),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),r("object"==typeof n&&null!==n,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var i=t;return l(n).forEach(function(r){if(o.call(e,r)){var a=t===i;i=e[r](n[r],i,n,t),a&&update.isEquals(i,t)&&(i=t)}else{var c="Map"===u(t)?update(t.get(r),n[r]):update(t[r],n[r]);update.isEquals(c,i[r])&&(void 0!==c||o.call(t,r))||(i===t&&(i=copy(t)),"Map"===u(i)?i.set(r,c):i[r]=c)}}),i}}var s={"$push":function(e,t,n){return invariantPushAndUnshift(t,n,"$push"),e.length?t.concat(e):t},"$unshift":function(e,t,n){return invariantPushAndUnshift(t,n,"$unshift"),e.length?e.concat(t):t},"$splice":function(e,t,n,o){return function invariantSplices(e,t){r(Array.isArray(e),"Expected $splice target to be an array; got %s",e),invariantSplice(t.$splice)}(t,n),e.forEach(function(e){invariantSplice(e),t===o&&e.length&&(t=copy(o)),i.apply(t,e)}),t},"$set":function(e,t,n){return function invariantSet(e){r(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(n),e},"$toggle":function(e,t){invariantSpecArray(e,"$toggle");var n=e.length?copy(t):t;return e.forEach(function(e){n[e]=!t[e]}),n},"$unset":function(e,t,n,r){return invariantSpecArray(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===r&&(t=copy(r)),delete t[e])}),t},"$add":function(e,t,n,r){return invariantMapOrSet(t,"$add"),invariantSpecArray(e,"$add"),"Map"===u(t)?e.forEach(function(e){var n=e[0],o=e[1];t===r&&t.get(n)!==o&&(t=copy(r)),t.set(n,o)}):e.forEach(function(e){t!==r||t.has(e)||(t=copy(r)),t.add(e)}),t},"$remove":function(e,t,n,r){return invariantMapOrSet(t,"$remove"),invariantSpecArray(e,"$remove"),e.forEach(function(e){t===r&&t.has(e)&&(t=copy(r)),t.delete(e)}),t},"$merge":function(e,t,n,o){return function invariantMerge(e,t){r(t&&"object"==typeof t,"update(): $merge expects a spec of type 'object'; got %s",t),r(e&&"object"==typeof e,"update(): $merge expects a target of type 'object'; got %s",e)}(t,e),l(e).forEach(function(n){e[n]!==t[n]&&(t===o&&(t=copy(o)),t[n]=e[n])}),t},"$apply":function(e,t){return function invariantApply(e){r("function"==typeof e,"update(): expected spec of $apply to be a function; got %s.",e)}(e),e(t)}},f=newContext();function invariantPushAndUnshift(e,t,n){r(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e),invariantSpecArray(t[n],n)}function invariantSpecArray(e,t){r(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function invariantSplice(e){r(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function invariantMapOrSet(e,t){var n=u(e);r("Map"===n||"Set"===n,"update(): %s expects a target of type Set or Map; got %s",t,n)}e.exports=f,e.exports.default=f,e.exports.newContext=newContext},"77":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),a=n(54),u=n(70);n(78);var c=function(e){function BackTop(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments));return e.handleScroll=function(){var t=e.componentScrollBox.scrollTop>=.5*document.body.clientHeight;e.setState({"show":t})},e.goTop=function(){e.componentScrollBox.scrollTop=0},e.state={"show":!1},e.componentScrollBox=document.documentElement,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,o.Component),r(BackTop,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillUnmount","value":function componentWillUnmount(){window.removeEventListener("scroll",this.scrollbinding)}},{"key":"componentDidMount","value":function componentDidMount(){this.scrollbinding=(0,u.throttle)(300,this.handleScroll),window.addEventListener("scroll",this.scrollbinding)}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){var e=this.state.show;return i.default.createElement(a.View,null,e?i.default.createElement(a.View,{"className":"iconfont icon-top","onClick":this.goTop},""):"")}}]),BackTop}();t.default=c},"78":function(e,t,n){},"85":function(e,t,n){}}]);