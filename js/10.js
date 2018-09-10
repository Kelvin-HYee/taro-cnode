(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"145":function(e,t,n){},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(2)),i=_interopRequireWildcard(n(60)),u=_interopRequireDefault(n(0)),l=n(69),s=n(54),c=n(6),f=_interopRequireDefault(n(57)),p=_interopRequireDefault(n(56)),d=_interopRequireWildcard(n(7)),h=_interopRequireDefault(n(55)),m=_interopRequireWildcard(n(4)),_=n(8);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(145);var y=function(e){function User(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(User.__proto__||Object.getPrototypeOf(User)).apply(this,arguments));return e.config={"navigationBarTitleText":"用户信息"},e.changeItem=function(t){var n=1===t?e.state.user.recent_replies:e.state.user.recent_topics;e.setState(function(e){return r({},e,{"selectItem":t,"currentData":n})})},e.state={"currentData":[],"user":{"avatar_url":""},"showMenu":!1,"selectItem":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(User,l.Component),o(User,[{"key":"componentDidMount","value":function componentDidMount(){this.getUser()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"getUser","value":function getUser(){var e=this,t=this.$router.params.loginname;if(!t)return a.default.showToast({"title":"缺少用户名参数"}),a.default.navigateTo({"url":"/pages/list/index"}),!1;(0,_.get)({"url":"https://cnodejs.org/api/v1/user/"+t}).then(function(t){var n=t.data;if(n&&n.data){var r=n.data;e.setState({"user":r}),r.recent_replies.length>0?e.setState({"currentData":r.recent_replies}):e.setState({"currentData":r.recent_topics,"selectItem":2})}})}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.selectItem,r=t.user,o=t.currentData,a=function getLastTimeStr(e,t){return m.getLastTimeStr(e,t)};return u.default.createElement(s.View,{"className":"flex-wrp"},u.default.createElement(f.default,{"pageType":"用户信息","fixHead":!0,"showMenu":!0,"needAdd":!0}),u.default.createElement(s.View,{"className":"userinfo"},u.default.createElement(s.Image,{"className":"u-img","src":r.avatar_url}),u.default.createElement("br",null),u.default.createElement(s.Text,{"className":"u-name"},r.loginname),u.default.createElement(s.View,{"className":"u-bottom"},u.default.createElement(s.Text,{"className":"u-time"},a(r.create_at,!1)),u.default.createElement(s.Text,{"className":"u-score"},"积分：",r.score))),u.default.createElement(s.View,{"className":"topics"},u.default.createElement(s.View,{"className":"user-tabs"},u.default.createElement(s.View,{"className":(0,h.default)({"item":1,"br":1,"selected":1===n}),"onClick":function onClick(t){e.changeItem(1)}},"最近回复"),u.default.createElement(s.View,{"className":(0,h.default)({"item":1,"selected":2===n}),"onClick":function onClick(t){e.changeItem(2)}},"最新发布")),o.map(function(e){return u.default.createElement(s.View,{"className":"message"},u.default.createElement(s.View,{"className":"user"},u.default.createElement(p.default,{"className":"head","to":{"url":"/pages/user/index","params":{"loginname":e.author.loginname}}},u.default.createElement(s.Image,{"class":"head","src":e.author.avatar_url})),u.default.createElement(p.default,{"className":"info","to":{"url":"/pages/topic/index","params":{"id":e.id}}},u.default.createElement(s.View,{"className":"t-title"},e.title),u.default.createElement(s.Text,{"className":"cl mt12"},u.default.createElement(s.Text,{"className":"name"},e.author.loginname)),u.default.createElement(s.Text,{"className":"cr mt12"},u.default.createElement(s.Text,{"className":"name"},a(e.last_reply_at,!0))))))}),0===o.length?u.default.createElement(s.View,{"className":"no-data"},u.default.createElement(s.Text,{"className":"iconfont icon-empty"},""),"暂无数据!"):""))}}]),User}();y=i.__decorate([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(d.authCheckState())}}})],y),t.default=y},"56":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(2),i=_interopRequireDefault(a),u=n(54),l=_interopRequireDefault(n(0)),s=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return i.default.navigateTo({"url":t+(n?"?"+s.param(n):"")}),!1},e.defaultProps={"to":{"url":"","params":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,a.Component),o(Link,[{"key":"render","value":function render(){var e=this,t=this.props;return l.default.createElement(u.View,r({},t,{"onClick":function onClick(n){e.goTo(t.to)}}),this.props.children)}}]),Link}();t.default=c},"57":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),u=_interopRequireDefault(n(55)),l=n(54),s=_interopRequireDefault(n(58));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(66);var c=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.goToAdd=function(){a.default.navigateTo({"url":"/pages/add/index"})},e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,a=o.needAdd,c=o.pageType,f=o.fixHead,p=o.messageCount,d=(0,u.default)({"show":t&&f,"fix-header":f,"no-fix":!f});return i.default.createElement(l.View,{"className":"header"},t&&f?i.default.createElement(l.View,null,i.default.createElement(l.View,{"className":"page-cover","onClick":this.showMenus})):"",i.default.createElement(l.View,{"className":d,"id":"hd"},i.default.createElement(l.View,{"className":"nv-toolbar"},f?i.default.createElement(l.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",i.default.createElement(l.Text,null,c),p>0?i.default.createElement(l.Text,{"className":"num"},p):"",a&&!p||p<=0?i.default.createElement(l.View,{"className":"iconfont add-icon","onClick":this.goToAdd},""):"")),f?i.default.createElement(s.default,{"showMenu":t,"pageType":c,"nickName":n,"profileUrl":r}):"")}}]),Header}();c.defaultProps={"messageCount":0,"scrollTop":0},t.default=c},"58":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(2),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),u=n(54),l=_interopRequireDefault(n(59)),s=_interopRequireDefault(n(55)),c=_interopRequireDefault(n(63)),f=n(4);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(64);var p=function(e){function NvMenu(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments));return e.listAll=function(){e.toList({"tab":"all"})},e.listGood=function(){e.toList({"tab":"good"})},e.listShare=function(){e.toList({"tab":"share"})},e.listAsk=function(){e.toList({"tab":"ask"})},e.listJob=function(){e.toList({"tab":"job"})},e.listMessage=function(){a.default.navigateTo({"url":"/pages/message/index"})},e.listAbout=function(){a.default.navigateTo({"url":"/pages/about/index"})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),r(NvMenu,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"toList","value":function toList(e){a.default.navigateTo({"url":"/pages/list/index?"+(0,f.param)(e)})}},{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,s.default)({"nav-list":!0,"show":e});return i.default.createElement(u.View,{"id":"sideBar","className":t},i.default.createElement(c.default,{"mask":!1,"show":e},i.default.createElement(l.default,null),i.default.createElement(u.View,{"className":"list-ul"},i.default.createElement(u.View,{"className":"icon-quanbu iconfont item","onClick":this.listAll},"全部"),i.default.createElement(u.View,{"className":"icon-hao iconfont item","onClick":this.listGood},"精华"),i.default.createElement(u.View,{"className":"icon-fenxiang iconfont item","onClick":this.listShare},"分享"),i.default.createElement(u.View,{"className":"icon-wenda iconfont item","onClick":this.listAsk},"问答"),i.default.createElement(u.View,{"className":"icon-zhaopin iconfont item","onClick":this.listJob},"招聘"),i.default.createElement(u.View,{"className":"icon-xiaoxi iconfont item line","onClick":this.listMessage},"消息"),i.default.createElement(u.View,{"className":"icon-about iconfont item","onClick":this.listAbout},"关于"))))}}]),NvMenu}();t.default=p},"59":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireWildcard(n(60)),a=n(2),i=_interopRequireDefault(n(0)),u=n(54),l=_interopRequireDefault(n(56)),s=n(6),c=_interopRequireWildcard(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(61);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,a.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return i.default.createElement(u.View,{"className":"user-info"},e.loginname?i.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},i.default.createElement(u.View,{"className":"avertar"},e.avatar_url?i.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),i.default.createElement(u.View,{"className":"info"},e.loginname?i.default.createElement(u.Text,null,e.loginname):"")):i.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},i.default.createElement(u.View,{"className":"login"},i.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],f),t.default=f},"61":function(e,t,n){},"63":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(2)),_interopRequireDefault(n(0))),a=n(54),i=n(68);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,i=r.animShow,u=r.show,l=["at-drawer"],s={"display":t?"block":"none","opacity":i?1:0};return n?l.push("at-drawer--right"):l.push("at-drawer--left"),i&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&o.default.createElement(a.View,{"className":l},o.default.createElement(a.View,{"className":"at-drawer__mask","style":s,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(a.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"64":function(e,t,n){},"66":function(e,t,n){},"69":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},a=n(2),i=_interopRequireDefault(a),u=_interopRequireWildcard(n(60)),l=(_interopRequireDefault(n(0)),n(6)),s=_interopRequireWildcard(n(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=a.Component,t.withUser=function withUser(e,t){t=t||!1;var n=function(n){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),r(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||i.default.navigateTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return n=u.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],n)}}}]);