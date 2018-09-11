(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"139":function(e,t,n){},"53":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=n(56),l=_interopRequireDefault(n(59)),s=n(70),c=n(71);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(139);var f=function(e){function Login(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Login);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Login.__proto__||Object.getPrototypeOf(Login)).apply(this,arguments));return e.config={"navigationBarTitleText":"登录"},e.logon=function(){if(""===e.state.token)return e.showMessage("令牌格式错误,应为36位UUID字符串"),!1;e.props.authLogin(e.state.token).then(function(){i.default.navigateTo({"url":"/pages/list/index"})})},e.state={"token":"","err":{"isHiddenIcon":!0,"iconSize":36,"iconType":"error","iconColor":"#f00","text":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Login,o.Component),r(Login,[{"key":"showMessage","value":function showMessage(e){i.default.showToast({"title":e})}},{"key":"handleChange","value":function handleChange(e){this.setState({"token":e})}},{"key":"render","value":function render(){var e=this,t=this.state.token;return a.default.createElement(u.View,{"className":"login-page"},a.default.createElement(l.default,{"pageType":"登录","fixHead":!0,"needAdd":!0}),a.default.createElement(u.View,{"className":"page-body"},a.default.createElement(u.View,{"className":"label"},a.default.createElement(s.AtInput,{"className":"txt","type":"text","placeholder":"Access Token","value":t,"onChange":function onChange(t){e.handleChange(t)},"maxlength":"36"})),a.default.createElement(u.View,{"className":"label"},a.default.createElement(u.View,{"className":"button","onClick":this.logon},"登录"))))}}]),Login}();t.default=(0,c.withUser)(f,!0)},"58":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(1),a=_interopRequireDefault(i),u=n(56),l=_interopRequireDefault(n(0)),s=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return a.default.navigateTo({"url":t+(n?"?"+s.param(n):"")}),!1},e.defaultProps={"to":{"url":"","params":""}},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,i.Component),o(Link,[{"key":"render","value":function render(){var e=this,t=this.props;return l.default.createElement(u.View,r({},t,{"onClick":function onClick(n){e.goTo(t.to)}}),this.props.children)}}]),Link}();t.default=c},"59":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=_interopRequireDefault(n(57)),l=n(56),s=_interopRequireDefault(n(60));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(68);var c=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.goToAdd=function(){i.default.navigateTo({"url":"/pages/add/index"})},e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,i=o.needAdd,c=o.pageType,f=o.fixHead,p=o.messageCount,d=(0,u.default)({"show":t&&f,"fix-header":f,"no-fix":!f});return a.default.createElement(l.View,{"className":"header"},t&&f?a.default.createElement(l.View,null,a.default.createElement(l.View,{"className":"page-cover","onClick":this.showMenus})):"",a.default.createElement(l.View,{"className":d,"id":"hd"},a.default.createElement(l.View,{"className":"nv-toolbar"},f?a.default.createElement(l.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",a.default.createElement(l.Text,null,c),p>0?a.default.createElement(l.Text,{"className":"num"},p):"",i&&!p||p<=0?a.default.createElement(l.View,{"className":"iconfont add-icon","onClick":this.goToAdd},""):"")),f?a.default.createElement(s.default,{"showMenu":t,"pageType":c,"nickName":n,"profileUrl":r}):"")}}]),Header}();c.defaultProps={"messageCount":0,"scrollTop":0},t.default=c},"60":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=_interopRequireDefault(o),a=_interopRequireDefault(n(0)),u=n(56),l=_interopRequireDefault(n(61)),s=_interopRequireDefault(n(57)),c=_interopRequireDefault(n(65)),f=n(4);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(66);var p=function(e){function NvMenu(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments));return e.listAll=function(){e.toList({"tab":"all"})},e.listGood=function(){e.toList({"tab":"good"})},e.listShare=function(){e.toList({"tab":"share"})},e.listAsk=function(){e.toList({"tab":"ask"})},e.listJob=function(){e.toList({"tab":"job"})},e.listMessage=function(){i.default.navigateTo({"url":"/pages/message/index"})},e.listAbout=function(){i.default.navigateTo({"url":"/pages/about/index"})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),r(NvMenu,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"toList","value":function toList(e){i.default.navigateTo({"url":"/pages/list/index?"+(0,f.param)(e)})}},{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,s.default)({"nav-list":!0,"show":e});return a.default.createElement(u.View,{"id":"sideBar","className":t},a.default.createElement(c.default,{"mask":!1,"show":e},a.default.createElement(l.default,null),a.default.createElement(u.View,{"className":"list-ul"},a.default.createElement(u.View,{"className":"icon-quanbu iconfont item","onClick":this.listAll},"全部"),a.default.createElement(u.View,{"className":"icon-hao iconfont item","onClick":this.listGood},"精华"),a.default.createElement(u.View,{"className":"icon-fenxiang iconfont item","onClick":this.listShare},"分享"),a.default.createElement(u.View,{"className":"icon-wenda iconfont item","onClick":this.listAsk},"问答"),a.default.createElement(u.View,{"className":"icon-zhaopin iconfont item","onClick":this.listJob},"招聘"),a.default.createElement(u.View,{"className":"icon-xiaoxi iconfont item line","onClick":this.listMessage},"消息"),a.default.createElement(u.View,{"className":"icon-about iconfont item","onClick":this.listAbout},"关于"))))}}]),NvMenu}();t.default=p},"61":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireWildcard(n(62)),i=n(1),a=_interopRequireDefault(n(0)),u=n(56),l=_interopRequireDefault(n(58)),s=n(6),c=_interopRequireWildcard(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(63);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,i.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return a.default.createElement(u.View,{"className":"user-info"},e.loginname?a.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},a.default.createElement(u.View,{"className":"avertar"},e.avatar_url?a.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),a.default.createElement(u.View,{"className":"info"},e.loginname?a.default.createElement(u.Text,null,e.loginname):"")):a.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},a.default.createElement(u.View,{"className":"login"},a.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],f),t.default=f},"63":function(e,t,n){},"65":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),i=n(56),a=n(70);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,a.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,a=r.animShow,u=r.show,l=["at-drawer"],s={"display":t?"block":"none","opacity":a?1:0};return n?l.push("at-drawer--right"):l.push("at-drawer--left"),a&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&o.default.createElement(i.View,{"className":l},o.default.createElement(i.View,{"className":"at-drawer__mask","style":s,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(i.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"66":function(e,t,n){},"68":function(e,t,n){},"71":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0},i=n(1),a=_interopRequireDefault(i),u=_interopRequireWildcard(n(62)),l=(_interopRequireDefault(n(0)),n(6)),s=_interopRequireWildcard(n(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=i.Component,t.withUser=function withUser(e,t){t=t||!1;var n=function(n){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),r(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||a.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return n=u.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],n)}}}]);