require("source-map-support").install();
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/index.tsx":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/logo.svg */ "./src/static/logo.svg");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





// Import your global styles here


var App = function App(_ref) {
  var route = _ref.route;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_3__.Helmet, _objectSpread({}, _config__WEBPACK_IMPORTED_MODULE_5__["default"].APP)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("img", {
        src: _static_logo_svg__WEBPACK_IMPORTED_MODULE_4__,
        alt: "Logo",
        role: "presentation"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("h1", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("em", {
          children: _config__WEBPACK_IMPORTED_MODULE_5__["default"].APP.title
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("hr", {}), (0,react_router_config__WEBPACK_IMPORTED_MODULE_2__.renderRoutes)(route.routes)]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/ErrorBoundary/index.tsx":
/*!************************************************!*\
  !*** ./src/components/ErrorBoundary/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "@babel/runtime/helpers/possibleConstructorReturn");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "@babel/runtime/helpers/getPrototypeOf");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "@babel/runtime/helpers/inherits");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





function _callSuper(t, o, e) { return o = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(o), _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }


var ErrorBoundary = /*#__PURE__*/function (_PureComponent) {
  function ErrorBoundary(props) {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      error: null,
      errorInfo: null
    };
    return _this;
  }
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ErrorBoundary, _PureComponent);
  return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      });

      // You can also log error messages to an error reporting service here
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$state = this.state,
        errorInfo = _this$state.errorInfo,
        error = _this$state.error;

      // If there's an error, render error path
      return errorInfo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        "data-testid": "error-view",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
          children: "Something went wrong."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("details", {
          style: {
            whiteSpace: "pre-wrap"
          },
          children: [error && error.toString(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), errorInfo.componentStack]
        })]
      }) : children || null;
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_5__.PureComponent);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);

/***/ }),

/***/ "./src/components/Info/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Info/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


var Info = function Info(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
      children: "User Info"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: ["Name: ", item.name]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: ["Phone: ", item.phone]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: ["Email: ", item.email]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
        children: ["Website: ", item.website]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Info));

/***/ }),

/***/ "./src/components/List/index.tsx":
/*!***************************************!*\
  !*** ./src/components/List/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var List = function List(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h4", {
      children: "User List"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
      children: items.map(function (_ref2) {
        var id = _ref2.id,
          name = _ref2.name;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
            to: "/UserInfo/".concat(id),
            children: name
          })
        }, id);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(List));

/***/ }),

/***/ "./src/components/Loading/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Loading/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

var Loading = function Loading() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
      children: "Loading..."
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Info: () => (/* reexport safe */ _Info__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   List: () => (/* reexport safe */ _List__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Loading: () => (/* reexport safe */ _Loading__WEBPACK_IMPORTED_MODULE_3__["default"])
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/components/List/index.tsx");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info */ "./src/components/Info/index.tsx");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/components/ErrorBoundary/index.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading/index.tsx");






/***/ }),

/***/ "./src/config/default.ts":
/*!*******************************!*\
  !*** ./src/config/default.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  HOST: 'localhost',
  PORT: 3000,
  API_URL: 'https://jsonplaceholder.typicode.com',
  APP: {
    htmlAttributes: {
      lang: 'zh'
    },
    title: '印客学院 ES6 项目实战',
    titleTemplate: '印客学院 ES6 项目实战 - %s',
    meta: [{
      name: 'description',
      content: '印客学院 ES6 React 项目模板'
    }]
  }
});

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ "./src/config/default.ts");
/* harmony import */ var _prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prod */ "./src/config/prod.ts");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ( true ? _default__WEBPACK_IMPORTED_MODULE_1__["default"] : 0);

/***/ }),

/***/ "./src/config/prod.ts":
/*!****************************!*\
  !*** ./src/config/prod.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  PORT: 8080
});

/***/ }),

/***/ "./src/pages/Home/Home.tsx":
/*!*********************************!*\
  !*** ./src/pages/Home/Home.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadData: () => (/* binding */ loadData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_userList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/userList */ "./src/store/userList.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






var Home = function Home() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (_ref) {
      var userList = _ref.userList;
      return userList;
    }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual),
    readyStatus = _useSelector.readyStatus,
    items = _useSelector.items;

  // Fetch client-side data here
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_userList__WEBPACK_IMPORTED_MODULE_3__.fetchUserListIfNeed)());
  }, [dispatch]);
  var renderList = function renderList() {
    if (!readyStatus || readyStatus === 'invalid' || readyStatus === 'request') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Loading..."
    });
    if (readyStatus === 'failure') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Oops, Failed to load list!"
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.List, {
      items: items
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      title: "Home"
    }), renderList()]
  });
};

// Fetch server-side data here
var loadData = function loadData() {
  return [(0,_store_userList__WEBPACK_IMPORTED_MODULE_3__.fetchUserListIfNeed)()
  // More pre-fetched actions...
  ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(Home));

/***/ }),

/***/ "./src/pages/Home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Home/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadData: () => (/* reexport safe */ _Home__WEBPACK_IMPORTED_MODULE_3__.loadData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/pages/Home/Home.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "Home";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] !== true) {
      return false;
    }
    if (true) {
      return !!__webpack_require__.m[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./Home */ "./src/pages/Home/Home.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (true) {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./Home */ "./src/pages/Home/Home.tsx");
    }
    return eval('require.resolve')("./Home");
  }
}, {
  fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Loading, {})
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Home, _objectSpread({}, props))
  });
});


/***/ }),

/***/ "./src/pages/NotFound/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/NotFound/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var NotFound = function NotFound(_ref) {
  var staticContext = _ref.staticContext;
  // We have to check if staticContext exists
  // because it will be undefined if rendered through a BrowserRoute
  /* istanbul ignore next */
  if (staticContext) staticContext.statusCode = 404;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet, {
      title: "Oops"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      children: "Oops, Page was not found!"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(NotFound));

/***/ }),

/***/ "./src/pages/UserInfo/UserInfo.tsx":
/*!*****************************************!*\
  !*** ./src/pages/UserInfo/UserInfo.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadData: () => (/* binding */ loadData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_userData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/userData */ "./src/store/userData.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






var UserInfo = function UserInfo(_ref) {
  var match = _ref.match;
  var id = match.params.id;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.userData;
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    dispatch((0,_store_userData__WEBPACK_IMPORTED_MODULE_3__.fetchUserDataIfNeed)(id));
  }, [dispatch, id]);
  var renderInfo = function renderInfo() {
    var userInfo = userData[id];
    if (!userInfo || userInfo.readyStatus === 'request') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Loading..."
    });
    if (userInfo.readyStatus === 'failure') return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      children: "Oops! Failed to load data."
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.Info, {
      item: userInfo.item
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, {
      title: "User Info"
    }), renderInfo()]
  });
};
var loadData = function loadData(_ref2) {
  var params = _ref2.params;
  return [(0,_store_userData__WEBPACK_IMPORTED_MODULE_3__.fetchUserDataIfNeed)(params.id)];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(UserInfo));

/***/ }),

/***/ "./src/pages/UserInfo/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/UserInfo/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   loadData: () => (/* reexport safe */ _UserInfo__WEBPACK_IMPORTED_MODULE_3__.loadData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./src/components/index.ts");
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserInfo */ "./src/pages/UserInfo/UserInfo.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }




var UserInfo = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
  resolved: {},
  chunkName: function chunkName() {
    return "UserInfo";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);
    if (this.resolved[key] !== true) {
      return false;
    }
    if (true) {
      return !!__webpack_require__.m[key];
    }
    return false;
  },
  importAsync: function importAsync() {
    return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./UserInfo */ "./src/pages/UserInfo/UserInfo.tsx"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;
    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);
    if (true) {
      return __webpack_require__(id);
    }
    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./UserInfo */ "./src/pages/UserInfo/UserInfo.tsx");
    }
    return eval('require.resolve')("./UserInfo");
  }
}, {
  fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Loading, {})
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(UserInfo, _objectSpread({}, props))
  });
});


/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/app/index.tsx");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ "./src/pages/Home/index.tsx");
/* harmony import */ var _pages_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/UserInfo */ "./src/pages/UserInfo/index.tsx");
/* harmony import */ var _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/NotFound */ "./src/pages/NotFound/index.tsx");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  component: _app__WEBPACK_IMPORTED_MODULE_0__["default"],
  routes: [{
    path: "/",
    exact: true,
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"],
    // Add your page here
    loadData: _pages_Home__WEBPACK_IMPORTED_MODULE_1__.loadData // Add your pre-fetch method here
  }, {
    path: "/UserInfo/:id",
    component: _pages_UserInfo__WEBPACK_IMPORTED_MODULE_2__["default"],
    loadData: _pages_UserInfo__WEBPACK_IMPORTED_MODULE_2__.loadData
  }, {
    component: _pages_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"]
  }]
}]);

/***/ }),

/***/ "./src/server/devServer.ts":
/*!*********************************!*\
  !*** ./src/server/devServer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {
  var webpack = __webpack_require__(/*! webpack */ "webpack");
  var webpackConfig = (__webpack_require__(/*! ../../webpack/client.config */ "./webpack/client.config.ts")["default"]);
  var compiler = webpack(webpackConfig);
  var instance = __webpack_require__(/*! webpack-dev-middleware */ "webpack-dev-middleware")(compiler, {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    serverSideRender: true
  });
  app.use(instance);
  app.use(__webpack_require__(/*! webpack-hot-middleware */ "webpack-hot-middleware")(compiler, {
    log: false,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000
  }));
  instance.waitUntilValid(function () {
    var url = "http://".concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].HOST, ":").concat(_config__WEBPACK_IMPORTED_MODULE_1__["default"].PORT);
    console.info(chalk__WEBPACK_IMPORTED_MODULE_0___default().green("==> \uD83C\uDF0E  Listening at ".concat(url)));
  });
});

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hpp */ "hpp");
/* harmony import */ var hpp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hpp__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! serve-favicon */ "serve-favicon");
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _devServer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./devServer */ "./src/server/devServer.ts");
/* harmony import */ var _ssr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ssr */ "./src/server/ssr.tsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");











var app = express__WEBPACK_IMPORTED_MODULE_1___default()();

// Use helmet to secure Express with various HTTP headers
app.use(helmet__WEBPACK_IMPORTED_MODULE_4___default()({
  contentSecurityPolicy: false
}));
// Prevent HTTP parameter pollution
app.use(hpp__WEBPACK_IMPORTED_MODULE_5___default()());
// Compress all requests
app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());

// Use for http request debug (show errors only)
app.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev', {
  skip: function skip(_, res) {
    return res.statusCode < 400;
  }
}));
app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_6___default()(path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), 'public/logo.png')));
app.use(express__WEBPACK_IMPORTED_MODULE_1___default()["static"](path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), 'public')));

// Enable dev-server in development
if (true) (0,_devServer__WEBPACK_IMPORTED_MODULE_8__["default"])(app);

// Use React server-side rendering middleware
app.get('*', _ssr__WEBPACK_IMPORTED_MODULE_9__["default"]);

// @ts-expect-error
app.listen(_config__WEBPACK_IMPORTED_MODULE_10__["default"].PORT, _config__WEBPACK_IMPORTED_MODULE_10__["default"].HOST, function (error) {
  if (error) console.error(chalk__WEBPACK_IMPORTED_MODULE_7___default().red("==> \uD83D\uDE2D  OMG!!! ".concat(error)));
});

/***/ }),

/***/ "./src/server/renderHtml.ts":
/*!**********************************!*\
  !*** ./src/server/renderHtml.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_minifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-minifier */ "html-minifier");
/* harmony import */ var html_minifier__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_minifier__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (head, extractor, htmlContent, initialState) {
  var html = "\n    <!doctype html>\n    <html ".concat(head.htmlAttributes.toString(), ">\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <meta name=\"theme-color\" content=\"#000\" />\n\n        <link rel=\"icon\" href=\"/logo.png\" />\n        <link rel=\"apple-touch-icon\" href=\"/logo192.png\" />\n        <link rel=\"manifest\" href=\"/manifest.json\" />\n\n        ").concat(head.title.toString(), "\n        ").concat(head.base.toString(), "\n        ").concat(head.meta.toString(), "\n        ").concat(head.link.toString(), "\n\n        <!-- Insert bundled styles into <link> tag -->\n        ").concat(extractor.getLinkTags(), "\n        ").concat(extractor.getStyleTags(), "\n      </head>\n      <body>\n        <!-- Insert the router, which passed from server-side -->\n        <div id=\"react-view\">").concat(htmlContent, "</div>\n\n        <!-- Store the initial state into window -->\n        <script>\n          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__INITIAL_STATE__=").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(initialState), ";\n        </script>\n\n        <!-- Insert bundled scripts into <script> tag -->\n        ").concat(extractor.getScriptTags(), "\n        ").concat(head.script.toString(), "\n      </body>\n    </html>\n  ");
  var minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
  };

  // Minify HTML in production
  return  true ? html : 0;
});

/***/ }),

/***/ "./src/server/ssr.tsx":
/*!****************************!*\
  !*** ./src/server/ssr.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-config */ "react-router-config");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./src/store/index.ts");
/* harmony import */ var _renderHtml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./renderHtml */ "./src/server/renderHtml.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./src/routes/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);














/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(req, res, next) {
    var _createStore, store, loadBranchData, statsFile, extractor, staticContext, App, initialState, htmlContent, head;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _createStore = (0,_store__WEBPACK_IMPORTED_MODULE_10__["default"])({
            url: req.url
          }), store = _createStore.store; // The method for loading data from server-side
          loadBranchData = function loadBranchData() {
            var branch = (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.matchRoutes)(_routes__WEBPACK_IMPORTED_MODULE_12__["default"], req.path);
            var promises = branch.map(function (_ref2) {
              var route = _ref2.route,
                match = _ref2.match;
              if (route.loadData) return Promise.all(route.loadData({
                params: match.params,
                getState: store.getState,
                req: req,
                res: res
              }).map(function (item) {
                return store.dispatch(item);
              }));
              return Promise.resolve(null);
            });
            return Promise.all(promises);
          };
          _context.prev = 2;
          _context.next = 5;
          return loadBranchData();
        case 5:
          statsFile = path__WEBPACK_IMPORTED_MODULE_2___default().resolve(process.cwd(), 'public/loadable-stats');
          extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_7__.ChunkExtractor({
            statsFile: statsFile
          });
          staticContext = {};
          App = extractor.collectChunks( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
            store: store,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {
              location: req.path,
              context: staticContext,
              children: (0,react_router_config__WEBPACK_IMPORTED_MODULE_5__.renderRoutes)(_routes__WEBPACK_IMPORTED_MODULE_12__["default"])
            })
          }));
          initialState = store.getState();
          htmlContent = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)(App); // head must be placed after "renderToString"
          // see: https://github.com/nfl/react-helmet#server-usage
          head = react_helmet__WEBPACK_IMPORTED_MODULE_8__.Helmet.renderStatic(); // Check if the render result contains a redirect, if so we need to set
          // the specific status and redirect header and end the response
          if (!staticContext.url) {
            _context.next = 16;
            break;
          }
          res.status(301).setHeader('Location', staticContext.url);
          res.end();
          return _context.abrupt("return");
        case 16:
          // Pass the route and initial state into html template, the "statusCode" comes from <NotFound />
          res.status(staticContext.statusCode === '404' ? 404 : 200).send((0,_renderHtml__WEBPACK_IMPORTED_MODULE_11__["default"])(head, extractor, htmlContent, initialState));
          _context.next = 23;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](2);
          res.status(404).send('Not Found :(');
          console.error(chalk__WEBPACK_IMPORTED_MODULE_9___default().red("==> \uD83D\uDE2D  Rendering routes error: ".concat(_context.t0)));
        case 23:
          next();
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 19]]);
  }));
  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./src/services/jsonPlaceholder.ts":
/*!*****************************************!*\
  !*** ./src/services/jsonPlaceholder.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserData: () => (/* binding */ getUserData),
/* harmony export */   getUserList: () => (/* binding */ getUserList)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config/index.ts");




var getUserList = /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var _yield$axios$get, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].API_URL, "/users"));
        case 3:
          _yield$axios$get = _context.sent;
          data = _yield$axios$get.data;
          return _context.abrupt("return", {
            data: data
          });
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            error: _context.t0
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getUserList() {
    return _ref.apply(this, arguments);
  };
}();
var getUserData = /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(id) {
    var _yield$axios$get2, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_2___default().get("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].API_URL, "/users/").concat(id));
        case 3:
          _yield$axios$get2 = _context2.sent;
          data = _yield$axios$get2.data;
          return _context2.abrupt("return", {
            data: data
          });
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            error: _context2.t0
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function getUserData(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "history");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ "./src/store/rootReducer.ts");





// Use inferred return type for making correctly Redux types
var createStore = function createStore() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    initialState = _ref.initialState,
    url = _ref.url;
  var history =  true ? (0,history__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
    initialEntries: [url || '/']
  }) : 0;
  var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
    preloadedState: initialState,
    reducer: (0,_rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"])(history),
    middleware: function middleware(getDefaultMiddleware) {
      return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(getDefaultMiddleware()), [(0,connected_react_router__WEBPACK_IMPORTED_MODULE_3__.routerMiddleware)(history)]);
    },
    devTools: true
  });
  return {
    store: store,
    history: history
  };
};
var _createStore = createStore(),
  store = _createStore.store;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore);

/***/ }),

/***/ "./src/store/rootReducer.ts":
/*!**********************************!*\
  !*** ./src/store/rootReducer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! connected-react-router */ "connected-react-router");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userList */ "./src/store/userList.ts");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userData */ "./src/store/userData.ts");




// Use inferred return type for making correctly Redux types
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (history) {
  return {
    userList: _userList__WEBPACK_IMPORTED_MODULE_1__["default"],
    userData: _userData__WEBPACK_IMPORTED_MODULE_2__["default"],
    router: (0,connected_react_router__WEBPACK_IMPORTED_MODULE_0__.connectRouter)(history)
    // Register more reducers...
  };
});

/***/ }),

/***/ "./src/store/userData.ts":
/*!*******************************!*\
  !*** ./src/store/userData.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchUserData: () => (/* binding */ fetchUserData),
/* harmony export */   fetchUserDataIfNeed: () => (/* binding */ fetchUserDataIfNeed),
/* harmony export */   getFailure: () => (/* binding */ getFailure),
/* harmony export */   getRequesting: () => (/* binding */ getRequesting),
/* harmony export */   getSuccess: () => (/* binding */ getSuccess)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_jsonPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/jsonPlaceholder */ "./src/services/jsonPlaceholder.ts");




var userData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
  name: "userData",
  initialState: {},
  reducers: {
    getRequesting: function getRequesting(state, _ref) {
      var payload = _ref.payload;
      state[payload] = {
        readyStatus: "request"
      };
    },
    getSuccess: function getSuccess(state, _ref2) {
      var payload = _ref2.payload;
      state[payload.id] = {
        readyStatus: "success",
        item: payload.item
      };
    },
    getFailure: function getFailure(state, _ref3) {
      var payload = _ref3.payload;
      state[payload.id] = {
        readyStatus: "failure",
        error: payload.error
      };
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userData.reducer);
var _userData$actions = userData.actions,
  getRequesting = _userData$actions.getRequesting,
  getSuccess = _userData$actions.getSuccess,
  getFailure = _userData$actions.getFailure;

var fetchUserData = function fetchUserData(id) {
  return /*#__PURE__*/function () {
    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$getUserData, error, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch(getRequesting(id));
            _context.next = 3;
            return (0,_services_jsonPlaceholder__WEBPACK_IMPORTED_MODULE_3__.getUserData)(id);
          case 3:
            _yield$getUserData = _context.sent;
            error = _yield$getUserData.error;
            data = _yield$getUserData.data;
            if (error) {
              dispatch(getFailure({
                id: id,
                error: error.message
              }));
            } else {
              dispatch(getSuccess({
                id: id,
                item: data
              }));
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var shouldFetchUserData = function shouldFetchUserData(state, id) {
  var _state$userData$id;
  return ((_state$userData$id = state.userData[id]) === null || _state$userData$id === void 0 ? void 0 : _state$userData$id.readyStatus) !== "success";
};
var fetchUserDataIfNeed = function fetchUserDataIfNeed(id) {
  return function (dispatch, getState) {
    if (shouldFetchUserData(getState(), id)) return dispatch(fetchUserData(id));
    return null;
  };
};

/***/ }),

/***/ "./src/store/userList.ts":
/*!*******************************!*\
  !*** ./src/store/userList.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fetchUserList: () => (/* binding */ fetchUserList),
/* harmony export */   fetchUserListIfNeed: () => (/* binding */ fetchUserListIfNeed),
/* harmony export */   getFailure: () => (/* binding */ getFailure),
/* harmony export */   getRequesting: () => (/* binding */ getRequesting),
/* harmony export */   getSuccess: () => (/* binding */ getSuccess),
/* harmony export */   initialState: () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_jsonPlaceholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/jsonPlaceholder */ "./src/services/jsonPlaceholder.ts");




var initialState = {
  readyStatus: "invalid",
  items: [],
  error: null
};
var userList = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({
  name: "userList",
  initialState: initialState,
  reducers: {
    getRequesting: function getRequesting(state) {
      state.readyStatus = "request";
    },
    getSuccess: function getSuccess(state, _ref) {
      var payload = _ref.payload;
      state.readyStatus = "success";
      state.items = payload;
    },
    getFailure: function getFailure(state, _ref2) {
      var payload = _ref2.payload;
      state.readyStatus = "failure";
      state.error = payload;
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userList.reducer);
var _userList$actions = userList.actions,
  getRequesting = _userList$actions.getRequesting,
  getSuccess = _userList$actions.getSuccess,
  getFailure = _userList$actions.getFailure;

var fetchUserList = function fetchUserList() {
  return /*#__PURE__*/function () {
    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch) {
      var _yield$getUserList, error, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            dispatch(getRequesting());
            _context.next = 3;
            return (0,_services_jsonPlaceholder__WEBPACK_IMPORTED_MODULE_3__.getUserList)();
          case 3:
            _yield$getUserList = _context.sent;
            error = _yield$getUserList.error;
            data = _yield$getUserList.data;
            if (error) {
              dispatch(getFailure(error.message));
            } else {
              dispatch(getSuccess(data));
            }
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var shouldFetchUserList = function shouldFetchUserList(state) {
  return state.userList.readyStatus !== "success";
};
var fetchUserListIfNeed = function fetchUserListIfNeed() {
  return function (dispatch, getState) {
    if (shouldFetchUserList(getState())) return dispatch(fetchUserList());
    return null;
  };
};

/***/ }),

/***/ "./webpack/base.config.ts":
/*!********************************!*\
  !*** ./webpack/base.config.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDev: () => (/* binding */ isDev)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack */ "webpack");
/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webpack_manifest_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-manifest-plugin */ "webpack-manifest-plugin");
/* harmony import */ var webpack_manifest_plugin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_manifest_plugin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var terser_webpack_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! terser-webpack-plugin */ "terser-webpack-plugin");
/* harmony import */ var terser_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(terser_webpack_plugin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin");
/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fork_ts_checker_webpack_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fork-ts-checker-webpack-plugin */ "fork-ts-checker-webpack-plugin");
/* harmony import */ var fork_ts_checker_webpack_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fork_ts_checker_webpack_plugin__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loadable_webpack_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @loadable/webpack-plugin */ "@loadable/webpack-plugin");
/* harmony import */ var _loadable_webpack_plugin__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loadable_webpack_plugin__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var webpack_bundle_analyzer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! webpack-bundle-analyzer */ "webpack-bundle-analyzer");
/* harmony import */ var webpack_bundle_analyzer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(webpack_bundle_analyzer__WEBPACK_IMPORTED_MODULE_8__);









var isDev = "development" === 'development';
var getStyleLoaders = function getStyleLoaders(isWeb, isSass) {
  var loaders = [{
    loader: 'css-loader',
    options: {
      importLoaders: isSass ? 2 : 1,
      modules: {
        auto: true,
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64]',
        exportOnlyLocals: !isWeb
      }
    }
  }, {
    loader: 'postcss-loader'
  }];
  if (isWeb) loaders = [(mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_5___default().loader)].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(loaders));
  if (isSass) loaders = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(loaders), [{
    loader: 'sass-loader'
  }]);
  return loaders;
};
var getPlugins = function getPlugins(isWeb) {
  var plugins = [new (webpack__WEBPACK_IMPORTED_MODULE_2___default().ProgressPlugin)(), new webpack_manifest_plugin__WEBPACK_IMPORTED_MODULE_3__.WebpackManifestPlugin({
    fileName: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd(), 'public/webpack-assets.json'),
    filter: function filter(file) {
      return file.isInitial;
    }
  }), new (_loadable_webpack_plugin__WEBPACK_IMPORTED_MODULE_7___default())({
    writeToDisk: true,
    filename: '../loadable-stats.json'
  }),
  // Setting global variables
  new (webpack__WEBPACK_IMPORTED_MODULE_2___default().DefinePlugin)({
    __CLIENT__: isWeb,
    __SERVER__: !isWeb,
    __DEV__: isDev
  })];
  if (isDev) plugins = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(plugins), [new (fork_ts_checker_webpack_plugin__WEBPACK_IMPORTED_MODULE_6___default())({
    eslint: {
      files: './src/**/*.{js,jsx,ts,tsx}'
    }
  })]);
  if (!isDev) plugins = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(plugins), [new webpack_bundle_analyzer__WEBPACK_IMPORTED_MODULE_8__.BundleAnalyzerPlugin({
    analyzerMode:  false ? 0 : 'disabled'
  })]);
  return plugins;
};
var config = function config() {
  var isWeb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    mode: isDev ? 'development' : 'production',
    stats: 'minimal',
    context: path__WEBPACK_IMPORTED_MODULE_1___default().resolve(process.cwd()),
    output: {
      clean: true
    },
    optimization: {
      minimizer: [new (terser_webpack_plugin__WEBPACK_IMPORTED_MODULE_4___default())({
        // See more options: https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })]
    },
    plugins: getPlugins(isWeb),
    module: {
      rules: [{
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          caller: {
            target: isWeb ? 'web' : 'node'
          },
          cacheDirectory: isDev
        }
      }, {
        test: /\.css$/,
        use: getStyleLoaders(isWeb)
      }, {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset',
        generator: {
          emit: isWeb
        }
      }, {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset',
        generator: {
          emit: isWeb
        }
      }]
    },
    resolve: {
      modules: ['src', 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./webpack/client.config.ts":
/*!**********************************!*\
  !*** ./webpack/client.config.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mini-css-extract-plugin */ "mini-css-extract-plugin");
/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_minimizer_webpack_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-minimizer-webpack-plugin */ "css-minimizer-webpack-plugin");
/* harmony import */ var css_minimizer_webpack_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_minimizer_webpack_plugin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var webpack_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-merge */ "webpack-merge");
/* harmony import */ var webpack_merge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_merge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _base_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base.config */ "./webpack/base.config.ts");

// import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';




var getPlugins = function getPlugins() {
  var plugins = [new (mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_1___default())({
    // Don't use hash in development, we need the persistent for "renderHtml.ts"
    filename: _base_config__WEBPACK_IMPORTED_MODULE_4__.isDev ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: _base_config__WEBPACK_IMPORTED_MODULE_4__.isDev ? '[id].css' : '[id].[contenthash].css'
  })];

  // if (isDev)
  //   plugins = [
  //     ...plugins,
  //     new webpack.HotModuleReplacementPlugin(),
  //     new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } }),
  //   ];

  return plugins;
};
var config = {
  devtool: _base_config__WEBPACK_IMPORTED_MODULE_4__.isDev && 'eval-cheap-source-map',
  entry: _base_config__WEBPACK_IMPORTED_MODULE_4__.isDev ? ['webpack-hot-middleware/client?reload=true', './src/client'] : './src/client',
  output: {
    filename: _base_config__WEBPACK_IMPORTED_MODULE_4__.isDev ? '[name].js' : '[name].[contenthash].js',
    chunkFilename: _base_config__WEBPACK_IMPORTED_MODULE_4__.isDev ? '[id].js' : '[id].[contenthash].js',
    path: path__WEBPACK_IMPORTED_MODULE_0___default().resolve(process.cwd(), 'public/assets'),
    publicPath: '/assets/'
  },
  optimization: {
    minimizer: [new (css_minimizer_webpack_plugin__WEBPACK_IMPORTED_MODULE_2___default())()]
  },
  plugins: getPlugins()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webpack_merge__WEBPACK_IMPORTED_MODULE_3___default()((0,_base_config__WEBPACK_IMPORTED_MODULE_4__["default"])(true), config));

/***/ }),

/***/ "./node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_5_2_7_webpack_5_91_0_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./node_modules/.pnpm/normalize.css@8.0.1/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,+BAAuB;UAAvB,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,yCAAiC;UAAjC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,8BAAsB;UAAtB,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,8BAAsB;UAAtB,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@5.2.7_webpack@5.91.0/node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/static/logo.svg":
/*!*****************************!*\
  !*** ./src/static/logo.svg ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMCIgeT0iMCIgd2lkdGg9IjU3MCIgaGVpZ2h0PSI1MTAiIHZpZXdCb3g9IjAsIDAsIDU3MCwgNTEwIj4NCiAgPGcgaWQ9IkJhY2tncm91bmQiPg0KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI1NzAiIGhlaWdodD0iNTEwIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAiLz4NCiAgPC9nPg0KICA8ZyBpZD0iTGF5ZXJfMSI+DQogICAgPHBhdGggZD0iTTMzNC42OTYsMjU0LjYyOCBDMzM0LjY5NiwyODIuMzM0IDMxMi4yMzUsMzA0Ljc5NSAyODQuNTI5LDMwNC43OTUgQzI1Ni44MjMsMzA0Ljc5NSAyMzQuMzYyLDI4Mi4zMzQgMjM0LjM2MiwyNTQuNjI4IEMyMzQuMzYyLDIyNi45MjIgMjU2LjgyMywyMDQuNDYxIDI4NC41MjksMjA0LjQ2MSBDMzEyLjIzNSwyMDQuNDYxIDMzNC42OTYsMjI2LjkyMiAzMzQuNjk2LDI1NC42MjggeiIgZmlsbD0iIzAwRDhGRiIvPg0KICAgIDxwYXRoIGQ9Ik0yODQuNTI5LDE1Mi42MjggQzM1MS44ODUsMTUyLjYyOCA0MTQuNDU3LDE2Mi4yOTMgNDYxLjYzNiwxNzguNTM1IEM1MTguNDgsMTk4LjEwNCA1NTMuNDMsMjI3Ljc2OCA1NTMuNDMsMjU0LjYyOCBDNTUzLjQzLDI4Mi42MTkgNTE2LjM4OSwzMTQuMTMxIDQ1NS4zNDcsMzM0LjM1NiBDNDA5LjE5NiwzNDkuNjQ3IDM0OC40NjgsMzU3LjYyOCAyODQuNTI5LDM1Ny42MjggQzIxOC45NzUsMzU3LjYyOCAxNTYuODk5LDM1MC4xMzYgMTEwLjIzOSwzMzQuMTg3IEM1MS4xOTMsMzE0LjAwNSAxNS42MjgsMjgyLjA4NCAxNS42MjgsMjU0LjYyOCBDMTUuNjI4LDIyNy45ODYgNDguOTk4LDE5OC41NTIgMTA1LjA0MywxNzkuMDEyIEMxNTIuMzk4LDE2Mi41MDMgMjE2LjUxNSwxNTIuNjI4IDI4NC41MjksMTUyLjYyOCB6IiBmaWxsLW9wYWNpdHk9IjAiIHN0cm9rZT0iIzAwRDhGRiIgc3Ryb2tlLXdpZHRoPSIyNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+DQogICAgPHBhdGggZD0iTTE5NS43MzYsMjAzLjkyMiBDMjI5LjM4NSwxNDUuNTc0IDI2OS4wMTcsOTYuMTk4IDMwNi42NTYsNjMuNDQyIEMzNTIuMDA2LDIzLjk3NiAzOTUuMTYzLDguNTE5IDQxOC40MzEsMjEuOTM3IEM0NDIuNjc5LDM1LjkyIDQ1MS40NzMsODMuNzUxIDQzOC40OTgsMTQ2LjczMyBDNDI4LjY4OCwxOTQuMzUxIDQwNS4yNjQsMjUwLjk0NSAzNzMuMzIyLDMwNi4zMzQgQzM0MC41NzMsMzYzLjEyMiAzMDMuMDcyLDQxMy4xNTMgMjY1Ljk0NSw0NDUuNjA2IEMyMTguOTY0LDQ4Ni42NzQgMTczLjU0NSw1MDEuNTM1IDE0OS43Niw0ODcuODE5IEMxMjYuNjgxLDQ3NC41MDkgMTE3Ljg1NCw0MzAuODk4IDEyOC45MjYsMzcyLjU4NiBDMTM4LjI4MSwzMjMuMzE2IDE2MS43NTgsMjYyLjg0MSAxOTUuNzM2LDIwMy45MjIgeiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPg0KICAgIDxwYXRoIGQ9Ik0xOTUuODIxLDMwNi40ODIgQzE2Mi4wNzUsMjQ4LjE5IDEzOS4wOSwxODkuMTk1IDEyOS41MDksMTQwLjIyNyBDMTE3Ljk2NSw4MS4yMjggMTI2LjEyNywzNi4xMTggMTQ5LjM3MywyMi42NjEgQzE3My41OTcsOC42MzcgMjE5LjQyOCwyNC45MDUgMjY3LjUxMyw2Ny42MDEgQzMwMy44NjksOTkuODgxIDM0MS4yMDEsMTQ4LjQzOCAzNzMuMjM2LDIwMy43NzQgQzQwNi4wOCwyNjAuNTA3IDQzMC42OTcsMzE3Ljk4MyA0NDAuMjcyLDM2Ni4zNTYgQzQ1Mi4zODksNDI3LjU2OSA0NDIuNTgxLDQ3NC4zNCA0MTguODE5LDQ4OC4wOTYgQzM5NS43NjIsNTAxLjQ0NCAzNTMuNTcsNDg3LjMxMiAzMDguNTgsNDQ4LjU5NyBDMjcwLjU2Nyw0MTUuODg2IDIyOS44OTgsMzY1LjM0NCAxOTUuODIxLDMwNi40ODIgeiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiMwMEQ4RkYiIHN0cm9rZS13aWR0aD0iMjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPg0KICA8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@loadable/server");

/***/ }),

/***/ "@loadable/webpack-plugin":
/*!*******************************************!*\
  !*** external "@loadable/webpack-plugin" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@loadable/webpack-plugin");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("connected-react-router");

/***/ }),

/***/ "css-minimizer-webpack-plugin":
/*!***********************************************!*\
  !*** external "css-minimizer-webpack-plugin" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("css-minimizer-webpack-plugin");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "fork-ts-checker-webpack-plugin":
/*!*************************************************!*\
  !*** external "fork-ts-checker-webpack-plugin" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("fork-ts-checker-webpack-plugin");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("history");

/***/ }),

/***/ "hpp":
/*!**********************!*\
  !*** external "hpp" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("hpp");

/***/ }),

/***/ "html-minifier":
/*!********************************!*\
  !*** external "html-minifier" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("html-minifier");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("serve-favicon");

/***/ }),

/***/ "terser-webpack-plugin":
/*!****************************************!*\
  !*** external "terser-webpack-plugin" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("terser-webpack-plugin");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-bundle-analyzer":
/*!******************************************!*\
  !*** external "webpack-bundle-analyzer" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("webpack-bundle-analyzer");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-manifest-plugin":
/*!******************************************!*\
  !*** external "webpack-manifest-plugin" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("webpack-manifest-plugin");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("webpack-merge");

/***/ }),

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@loadable/component");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvaW5kZXgudHN4Iiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9JbmZvL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlLy4vc3JjL2NvbmZpZy9kZWZhdWx0LnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvY29uZmlnL2luZGV4LnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvY29uZmlnL3Byb2QudHMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9Ib21lL0hvbWUudHN4Iiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvcGFnZXMvSG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9Ob3RGb3VuZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9Vc2VySW5mby9Vc2VySW5mby50c3giLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9Vc2VySW5mby9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9yb3V0ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9zZXJ2ZXIvZGV2U2VydmVyLnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvc2VydmVyL2luZGV4LnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvc2VydmVyL3JlbmRlckh0bWwudHMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9zZXJ2ZXIvc3NyLnRzeCIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlLy4vc3JjL3NlcnZpY2VzL2pzb25QbGFjZWhvbGRlci50cyIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlLy4vc3JjL3N0b3JlL2luZGV4LnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi9zcmMvc3RvcmUvcm9vdFJlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL3NyYy9zdG9yZS91c2VyRGF0YS50cyIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlLy4vc3JjL3N0b3JlL3VzZXJMaXN0LnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi93ZWJwYWNrL2Jhc2UuY29uZmlnLnRzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvLi93ZWJwYWNrL2NsaWVudC5jb25maWcudHMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9ub3JtYWxpemUuY3NzQDguMC4xL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45MS4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDUuMi43X3dlYnBhY2tANS45MS4wL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZlwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkBsb2FkYWJsZS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiQGxvYWRhYmxlL3dlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiY29ubmVjdGVkLXJlYWN0LXJvdXRlclwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJjc3MtbWluaW1pemVyLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwiZm9yay10cy1jaGVja2VyLXdlYnBhY2stcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcImhlbG1ldFwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJoaXN0b3J5XCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcImhwcFwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJodG1sLW1pbmlmaWVyXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIm1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIm1vcmdhblwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LWhlbG1ldFwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcInJlYWN0LXJvdXRlci1kb21cIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3QvanN4LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwic2VydmUtZmF2aWNvblwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJ0ZXJzZXItd2VicGFjay1wbHVnaW5cIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwid2VicGFja1wiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJ3ZWJwYWNrLWJ1bmRsZS1hbmFseXplclwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMgXCJ3ZWJwYWNrLWRldi1taWRkbGV3YXJlXCIiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS9leHRlcm5hbCBjb21tb25qcyBcIndlYnBhY2staG90LW1pZGRsZXdhcmVcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwid2VicGFjay1tYW5pZmVzdC1wbHVnaW5cIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL2V4dGVybmFsIGNvbW1vbmpzIFwid2VicGFjay1tZXJnZVwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgY29tbW9uanMyIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInBhdGhcIiIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2VuY29kZS1lczYtcmVhY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbmNvZGUtZXM2LXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZW5jb2RlLWVzNi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbmZpZywgcmVuZGVyUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi9zdGF0aWMvbG9nby5zdmcnO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZyc7XHJcbi8vIEltcG9ydCB5b3VyIGdsb2JhbCBzdHlsZXMgaGVyZVxyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUm91dGUge1xyXG4gIHJvdXRlOiB7IHJvdXRlczogUm91dGVDb25maWdbXSB9O1xyXG59XHJcblxyXG5jb25zdCBBcHAgPSAoeyByb3V0ZSB9OiBSb3V0ZSk6IEpTWC5FbGVtZW50ID0+IChcclxuICA8ZGl2ID5cclxuICAgIDxIZWxtZXQgey4uLmNvbmZpZy5BUFB9IC8+XHJcbiAgICA8TGluayB0bz1cIi9cIiA+XHJcbiAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJMb2dvXCIgcm9sZT1cInByZXNlbnRhdGlvblwiIC8+XHJcbiAgICAgIDxoMT5cclxuICAgICAgICA8ZW0+e2NvbmZpZy5BUFAudGl0bGV9PC9lbT5cclxuICAgICAgPC9oMT5cclxuICAgIDwvTGluaz5cclxuICAgIDxociAvPlxyXG4gICAgey8qIENoaWxkIHJvdXRlcyB3b24ndCByZW5kZXIgd2l0aG91dCB0aGlzICovfVxyXG4gICAge3JlbmRlclJvdXRlcyhyb3V0ZS5yb3V0ZXMpfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgeyBSZWFjdE5vZGUsIFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGU7XHJcbn1cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBlcnJvcjogRXJyb3IgfCBudWxsO1xyXG4gIGVycm9ySW5mbzogeyBjb21wb25lbnRTdGFjazogc3RyaW5nIH0gfCBudWxsO1xyXG59XHJcblxyXG5jbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogbnVsbCwgZXJyb3JJbmZvOiBudWxsIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogeyBjb21wb25lbnRTdGFjazogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIC8vIENhdGNoIGVycm9ycyBpbiBhbnkgY29tcG9uZW50cyBiZWxvdyBhbmQgcmUtcmVuZGVyIHdpdGggZXJyb3IgbWVzc2FnZVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yLCBlcnJvckluZm8gfSk7XHJcblxyXG4gICAgLy8gWW91IGNhbiBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyB0byBhbiBlcnJvciByZXBvcnRpbmcgc2VydmljZSBoZXJlXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGVycm9ySW5mbywgZXJyb3IgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gSWYgdGhlcmUncyBhbiBlcnJvciwgcmVuZGVyIGVycm9yIHBhdGhcclxuICAgIHJldHVybiBlcnJvckluZm8gPyAoXHJcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJlcnJvci12aWV3XCI+XHJcbiAgICAgICAgPGgyPlNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDI+XHJcbiAgICAgICAgPGRldGFpbHMgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiIH19PlxyXG4gICAgICAgICAge2Vycm9yICYmIGVycm9yLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtlcnJvckluZm8uY29tcG9uZW50U3RhY2t9XHJcbiAgICAgICAgPC9kZXRhaWxzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIGNoaWxkcmVuIHx8IG51bGxcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xyXG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2pzb25QbGFjZWhvbGRlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGl0ZW06IFVzZXI7XHJcbn1cclxuXHJcbmNvbnN0IEluZm8gPSAoeyBpdGVtIH06IFByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoND5Vc2VyIEluZm88L2g0PlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+TmFtZToge2l0ZW0ubmFtZX08L2xpPlxyXG4gICAgICA8bGk+UGhvbmU6IHtpdGVtLnBob25lfTwvbGk+XHJcbiAgICAgIDxsaT5FbWFpbDoge2l0ZW0uZW1haWx9PC9saT5cclxuICAgICAgPGxpPldlYnNpdGU6IHtpdGVtLndlYnNpdGV9PC9saT5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEluZm8pO1xyXG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvanNvblBsYWNlaG9sZGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXRlbXM6IFVzZXJbXTtcclxufVxyXG5cclxuY29uc3QgTGlzdCA9ICh7IGl0ZW1zIH06IFByb3BzKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxoND5Vc2VyIExpc3Q8L2g0PlxyXG4gICAgPHVsPlxyXG4gICAgICB7aXRlbXMubWFwKCh7IGlkLCBuYW1lIH0pID0+IChcclxuICAgICAgICA8bGkga2V5PXtpZH0+XHJcbiAgICAgICAgICA8TGluayB0bz17YC9Vc2VySW5mby8ke2lkfWB9PntuYW1lfTwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKExpc3QpO1xyXG4iLCJjb25zdCBMb2FkaW5nID0gKCk6IEpTWC5FbGVtZW50ID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XHJcbiIsImltcG9ydCBMaXN0IGZyb20gXCIuL0xpc3RcIjtcclxuaW1wb3J0IEluZm8gZnJvbSBcIi4vSW5mb1wiO1xyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tIFwiLi9FcnJvckJvdW5kYXJ5XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmdcIjtcclxuXHJcbmV4cG9ydCB7IExpc3QsIEluZm8sIEVycm9yQm91bmRhcnksIExvYWRpbmcgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIEhPU1Q6ICdsb2NhbGhvc3QnLFxyXG4gIFBPUlQ6IDMwMDAsXHJcbiAgQVBJX1VSTDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbScsXHJcbiAgQVBQOiB7XHJcbiAgICBodG1sQXR0cmlidXRlczogeyBsYW5nOiAnemgnIH0sXHJcbiAgICB0aXRsZTogJ+WNsOWuouWtpumZoiBFUzYg6aG555uu5a6e5oiYJyxcclxuICAgIHRpdGxlVGVtcGxhdGU6ICfljbDlrqLlrabpmaIgRVM2IOmhueebruWunuaImCAtICVzJyxcclxuICAgIG1ldGE6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdkZXNjcmlwdGlvbicsXHJcbiAgICAgICAgY29udGVudDogJ+WNsOWuouWtpumZoiBFUzYgUmVhY3Qg6aG555uu5qih5p2/JyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSBcIi4vZGVmYXVsdFwiO1xyXG5pbXBvcnQgcHJvZENvbmZpZyBmcm9tIFwiLi9wcm9kXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfX0RFVl9fID8gZGVmYXVsdENvbmZpZyA6IHsgLi4uZGVmYXVsdENvbmZpZywgLi4ucHJvZENvbmZpZyB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgUE9SVDogODA4MCxcclxufTtcclxuIiwiaW1wb3J0IHsgRkMsIHVzZUVmZmVjdCwgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IsIHNoYWxsb3dFcXVhbCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuXHJcbmltcG9ydCB7IEFwcFN0YXRlLCBBcHBUaHVuayB9IGZyb20gJy4uLy4uL3N0b3JlJztcclxuaW1wb3J0IHsgZmV0Y2hVc2VyTGlzdElmTmVlZCB9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXJMaXN0JztcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IHR5cGUgUHJvcHMgPSBSb3V0ZUNvbXBvbmVudFByb3BzO1xyXG5cclxuY29uc3QgSG9tZTogRkM8UHJvcHM+ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyByZWFkeVN0YXR1cywgaXRlbXMgfSA9IHVzZVNlbGVjdG9yKCh7IHVzZXJMaXN0IH06IEFwcFN0YXRlKSA9PiB1c2VyTGlzdCwgc2hhbGxvd0VxdWFsKTtcclxuXHJcbiAgLy8gRmV0Y2ggY2xpZW50LXNpZGUgZGF0YSBoZXJlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGZldGNoVXNlckxpc3RJZk5lZWQoKSk7XHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IHJlbmRlckxpc3QgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXJlYWR5U3RhdHVzIHx8IHJlYWR5U3RhdHVzID09PSAnaW52YWxpZCcgfHwgcmVhZHlTdGF0dXMgPT09ICdyZXF1ZXN0JylcclxuICAgICAgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG5cclxuICAgIGlmIChyZWFkeVN0YXR1cyA9PT0gJ2ZhaWx1cmUnKSByZXR1cm4gPHA+T29wcywgRmFpbGVkIHRvIGxvYWQgbGlzdCE8L3A+O1xyXG5cclxuICAgIHJldHVybiA8TGlzdCBpdGVtcz17aXRlbXN9IC8+O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVsbWV0IHRpdGxlPVwiSG9tZVwiIC8+XHJcbiAgICAgIHtyZW5kZXJMaXN0KCl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gRmV0Y2ggc2VydmVyLXNpZGUgZGF0YSBoZXJlXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9ICgpOiBBcHBUaHVua1tdID0+IFtcclxuICBmZXRjaFVzZXJMaXN0SWZOZWVkKCksXHJcbiAgLy8gTW9yZSBwcmUtZmV0Y2hlZCBhY3Rpb25zLi4uXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEhvbWUpO1xyXG4iLCJpbXBvcnQgbG9hZGFibGUgZnJvbSAnQGxvYWRhYmxlL2NvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMb2FkaW5nLCBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFByb3BzLCBsb2FkRGF0YSB9IGZyb20gJy4vSG9tZSc7XHJcblxyXG5jb25zdCBIb21lID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuL0hvbWUnKSwge1xyXG4gIGZhbGxiYWNrOiA8TG9hZGluZyAvPixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKTogSlNYLkVsZW1lbnQgPT4gKFxyXG4gIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgPEhvbWUgey4uLnByb3BzfSAvPlxyXG4gIDwvRXJyb3JCb3VuZGFyeT5cclxuKTtcclxuZXhwb3J0IHsgbG9hZERhdGEgfTtcclxuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5cclxudHlwZSBQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM7XHJcblxyXG5jb25zdCBOb3RGb3VuZCA9ICh7IHN0YXRpY0NvbnRleHQgfTogUHJvcHMpID0+IHtcclxuICAvLyBXZSBoYXZlIHRvIGNoZWNrIGlmIHN0YXRpY0NvbnRleHQgZXhpc3RzXHJcbiAgLy8gYmVjYXVzZSBpdCB3aWxsIGJlIHVuZGVmaW5lZCBpZiByZW5kZXJlZCB0aHJvdWdoIGEgQnJvd3NlclJvdXRlXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICBpZiAoc3RhdGljQ29udGV4dCkgc3RhdGljQ29udGV4dC5zdGF0dXNDb2RlID0gNDA0O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlbG1ldCB0aXRsZT1cIk9vcHNcIiAvPlxyXG4gICAgICA8cD5Pb3BzLCBQYWdlIHdhcyBub3QgZm91bmQhPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oTm90Rm91bmQpO1xyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yLCBzaGFsbG93RXF1YWwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEhlbG1ldCB9IGZyb20gJ3JlYWN0LWhlbG1ldCc7XHJcblxyXG5pbXBvcnQgeyBBcHBTdGF0ZSwgQXBwVGh1bmsgfSBmcm9tICcuLi8uLi9zdG9yZSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9qc29uUGxhY2Vob2xkZXInO1xyXG5pbXBvcnQgeyBmZXRjaFVzZXJEYXRhSWZOZWVkIH0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlckRhdGEnO1xyXG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IFJvdXRlQ29tcG9uZW50UHJvcHM8eyBpZDogc3RyaW5nIH0+O1xyXG5cclxuY29uc3QgVXNlckluZm8gPSAoeyBtYXRjaCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IHtcclxuICBjb25zdCB7IGlkIH0gPSBtYXRjaC5wYXJhbXM7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUudXNlckRhdGEsIHNoYWxsb3dFcXVhbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChmZXRjaFVzZXJEYXRhSWZOZWVkKGlkKSk7XHJcbiAgfSwgW2Rpc3BhdGNoLCBpZF0pO1xyXG5cclxuICBjb25zdCByZW5kZXJJbmZvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckluZm8gPSB1c2VyRGF0YVtpZF07XHJcblxyXG4gICAgaWYgKCF1c2VySW5mbyB8fCB1c2VySW5mby5yZWFkeVN0YXR1cyA9PT0gJ3JlcXVlc3QnKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcblxyXG4gICAgaWYgKHVzZXJJbmZvLnJlYWR5U3RhdHVzID09PSAnZmFpbHVyZScpIHJldHVybiA8cD5Pb3BzISBGYWlsZWQgdG8gbG9hZCBkYXRhLjwvcD47XHJcblxyXG4gICAgcmV0dXJuIDxJbmZvIGl0ZW09e3VzZXJJbmZvLml0ZW0gYXMgVXNlcn0gLz47XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWxtZXQgdGl0bGU9XCJVc2VyIEluZm9cIiAvPlxyXG4gICAgICB7cmVuZGVySW5mbygpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmludGVyZmFjZSBMb2FkRGF0YUFyZ3Mge1xyXG4gIHBhcmFtczogeyBpZDogc3RyaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkRGF0YSA9ICh7IHBhcmFtcyB9OiBMb2FkRGF0YUFyZ3MpOiBBcHBUaHVua1tdID0+IFtmZXRjaFVzZXJEYXRhSWZOZWVkKHBhcmFtcy5pZCldO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhVc2VySW5mbyk7XHJcbiIsImltcG9ydCBsb2FkYWJsZSBmcm9tIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgTG9hZGluZywgRXJyb3JCb3VuZGFyeSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFByb3BzLCBsb2FkRGF0YSB9IGZyb20gXCIuL1VzZXJJbmZvXCI7XHJcblxyXG5jb25zdCBVc2VySW5mbyA9IGxvYWRhYmxlKCgpID0+IGltcG9ydChcIi4vVXNlckluZm9cIiksIHtcclxuICBmYWxsYmFjazogPExvYWRpbmcgLz4sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9wcyk6IEpTWC5FbGVtZW50ID0+IChcclxuICA8RXJyb3JCb3VuZGFyeT5cclxuICAgIDxVc2VySW5mbyB7Li4ucHJvcHN9IC8+XHJcbiAgPC9FcnJvckJvdW5kYXJ5PlxyXG4pO1xyXG5leHBvcnQgeyBsb2FkRGF0YSB9O1xyXG4iLCJpbXBvcnQgeyBSb3V0ZUNvbmZpZyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XHJcblxyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9hcHBcIjtcclxuaW1wb3J0IEFzeW5jSG9tZSwgeyBsb2FkRGF0YSBhcyBsb2FkSG9tZURhdGEgfSBmcm9tIFwiLi4vcGFnZXMvSG9tZVwiO1xyXG5pbXBvcnQgQXN5bmNVc2VySW5mbywgeyBsb2FkRGF0YSBhcyBsb2FkVXNlckluZm9EYXRhIH0gZnJvbSBcIi4uL3BhZ2VzL1VzZXJJbmZvXCI7XHJcbmltcG9ydCBOb3RGb3VuZCBmcm9tIFwiLi4vcGFnZXMvTm90Rm91bmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBjb21wb25lbnQ6IEFwcCxcclxuICAgIHJvdXRlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgICAgY29tcG9uZW50OiBBc3luY0hvbWUsIC8vIEFkZCB5b3VyIHBhZ2UgaGVyZVxyXG4gICAgICAgIGxvYWREYXRhOiBsb2FkSG9tZURhdGEsIC8vIEFkZCB5b3VyIHByZS1mZXRjaCBtZXRob2QgaGVyZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvVXNlckluZm8vOmlkXCIsXHJcbiAgICAgICAgY29tcG9uZW50OiBBc3luY1VzZXJJbmZvLFxyXG4gICAgICAgIGxvYWREYXRhOiBsb2FkVXNlckluZm9EYXRhLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBOb3RGb3VuZCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXSBhcyBSb3V0ZUNvbmZpZ1tdO1xyXG4iLCJpbXBvcnQgeyBFeHByZXNzIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGNoYWxrIGZyb20gXCJjaGFsa1wiO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBFeHByZXNzKTogdm9pZCA9PiB7XHJcbiAgY29uc3Qgd2VicGFjayA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xyXG4gIGNvbnN0IHdlYnBhY2tDb25maWcgPSByZXF1aXJlKFwiLi4vLi4vd2VicGFjay9jbGllbnQuY29uZmlnXCIpLmRlZmF1bHQ7XHJcbiAgY29uc3QgY29tcGlsZXIgPSB3ZWJwYWNrKHdlYnBhY2tDb25maWcpO1xyXG4gIGNvbnN0IGluc3RhbmNlID0gcmVxdWlyZShcIndlYnBhY2stZGV2LW1pZGRsZXdhcmVcIikoY29tcGlsZXIsIHtcclxuICAgIGhlYWRlcnM6IHsgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIgfSxcclxuICAgIHNlcnZlclNpZGVSZW5kZXI6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIGFwcC51c2UoaW5zdGFuY2UpO1xyXG4gIGFwcC51c2UoXHJcbiAgICByZXF1aXJlKFwid2VicGFjay1ob3QtbWlkZGxld2FyZVwiKShjb21waWxlciwge1xyXG4gICAgICBsb2c6IGZhbHNlLFxyXG4gICAgICBwYXRoOiBcIi9fX3dlYnBhY2tfaG1yXCIsXHJcbiAgICAgIGhlYXJ0YmVhdDogMTAgKiAxMDAwLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBpbnN0YW5jZS53YWl0VW50aWxWYWxpZCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovLyR7Y29uZmlnLkhPU1R9OiR7Y29uZmlnLlBPUlR9YDtcclxuICAgIGNvbnNvbGUuaW5mbyhjaGFsay5ncmVlbihgPT0+IPCfjI4gIExpc3RlbmluZyBhdCAke3VybH1gKSk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IGxvZ2dlciBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgaGVsbWV0IGZyb20gJ2hlbG1ldCc7XHJcbmltcG9ydCBocHAgZnJvbSAnaHBwJztcclxuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbic7XHJcbmltcG9ydCBjaGFsayBmcm9tICdjaGFsayc7XHJcblxyXG5pbXBvcnQgZGV2U2VydmVyIGZyb20gJy4vZGV2U2VydmVyJztcclxuaW1wb3J0IHNzciBmcm9tICcuL3Nzcic7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcclxuXHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbi8vIFVzZSBoZWxtZXQgdG8gc2VjdXJlIEV4cHJlc3Mgd2l0aCB2YXJpb3VzIEhUVFAgaGVhZGVyc1xyXG5hcHAudXNlKGhlbG1ldCh7IGNvbnRlbnRTZWN1cml0eVBvbGljeTogZmFsc2UgfSkpO1xyXG4vLyBQcmV2ZW50IEhUVFAgcGFyYW1ldGVyIHBvbGx1dGlvblxyXG5hcHAudXNlKGhwcCgpKTtcclxuLy8gQ29tcHJlc3MgYWxsIHJlcXVlc3RzXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vLyBVc2UgZm9yIGh0dHAgcmVxdWVzdCBkZWJ1ZyAoc2hvdyBlcnJvcnMgb25seSlcclxuYXBwLnVzZShsb2dnZXIoJ2RldicsIHsgc2tpcDogKF8sIHJlcykgPT4gcmVzLnN0YXR1c0NvZGUgPCA0MDAgfSkpO1xyXG5hcHAudXNlKGZhdmljb24ocGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvbG9nby5wbmcnKSkpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAncHVibGljJykpKTtcclxuXHJcbi8vIEVuYWJsZSBkZXYtc2VydmVyIGluIGRldmVsb3BtZW50XHJcbmlmIChfX0RFVl9fKSBkZXZTZXJ2ZXIoYXBwKTtcclxuXHJcbi8vIFVzZSBSZWFjdCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgbWlkZGxld2FyZVxyXG5hcHAuZ2V0KCcqJywgc3NyKTtcclxuXHJcbi8vIEB0cy1leHBlY3QtZXJyb3JcclxuYXBwLmxpc3Rlbihjb25maWcuUE9SVCwgY29uZmlnLkhPU1QsIChlcnJvcikgPT4ge1xyXG4gIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihjaGFsay5yZWQoYD09PiDwn5itICBPTUchISEgJHtlcnJvcn1gKSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBDaHVua0V4dHJhY3RvciB9IGZyb20gJ0Bsb2FkYWJsZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBIZWxtZXREYXRhIH0gZnJvbSAncmVhY3QtaGVsbWV0JztcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdzZXJpYWxpemUtamF2YXNjcmlwdCc7XHJcbmltcG9ydCB7IG1pbmlmeSB9IGZyb20gJ2h0bWwtbWluaWZpZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFxyXG4gIGhlYWQ6IEhlbG1ldERhdGEsXHJcbiAgZXh0cmFjdG9yOiBDaHVua0V4dHJhY3RvcixcclxuICBodG1sQ29udGVudDogc3RyaW5nLFxyXG4gIGluaXRpYWxTdGF0ZTogdHlwZW9mIHdpbmRvdy5fX0lOSVRJQUxfU1RBVEVfXyxcclxuKTogYW55ID0+IHtcclxuICBjb25zdCBodG1sID0gYFxyXG4gICAgPCFkb2N0eXBlIGh0bWw+XHJcbiAgICA8aHRtbCAke2hlYWQuaHRtbEF0dHJpYnV0ZXMudG9TdHJpbmcoKX0+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzAwMFwiIC8+XHJcblxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2xvZ28ucG5nXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9sb2dvMTkyLnBuZ1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG5cclxuICAgICAgICAke2hlYWQudGl0bGUudG9TdHJpbmcoKX1cclxuICAgICAgICAke2hlYWQuYmFzZS50b1N0cmluZygpfVxyXG4gICAgICAgICR7aGVhZC5tZXRhLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgJHtoZWFkLmxpbmsudG9TdHJpbmcoKX1cclxuXHJcbiAgICAgICAgPCEtLSBJbnNlcnQgYnVuZGxlZCBzdHlsZXMgaW50byA8bGluaz4gdGFnIC0tPlxyXG4gICAgICAgICR7ZXh0cmFjdG9yLmdldExpbmtUYWdzKCl9XHJcbiAgICAgICAgJHtleHRyYWN0b3IuZ2V0U3R5bGVUYWdzKCl9XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPCEtLSBJbnNlcnQgdGhlIHJvdXRlciwgd2hpY2ggcGFzc2VkIGZyb20gc2VydmVyLXNpZGUgLS0+XHJcbiAgICAgICAgPGRpdiBpZD1cInJlYWN0LXZpZXdcIj4ke2h0bWxDb250ZW50fTwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIFN0b3JlIHRoZSBpbml0aWFsIHN0YXRlIGludG8gd2luZG93IC0tPlxyXG4gICAgICAgIDxzY3JpcHQ+XHJcbiAgICAgICAgICAvLyBVc2Ugc2VyaWFsaXplLWphdmFzY3JpcHQgZm9yIG1pdGlnYXRpbmcgWFNTIGF0dGFja3MuIFNlZSB0aGUgZm9sbG93aW5nIHNlY3VyaXR5IGlzc3VlczpcclxuICAgICAgICAgIC8vIGh0dHA6Ly9yZWR1eC5qcy5vcmcvZG9jcy9yZWNpcGVzL1NlcnZlclJlbmRlcmluZy5odG1sI3NlY3VyaXR5LWNvbnNpZGVyYXRpb25zXHJcbiAgICAgICAgICB3aW5kb3cuX19JTklUSUFMX1NUQVRFX189JHtzZXJpYWxpemUoaW5pdGlhbFN0YXRlKX07XHJcbiAgICAgICAgPC9zY3JpcHQ+XHJcblxyXG4gICAgICAgIDwhLS0gSW5zZXJ0IGJ1bmRsZWQgc2NyaXB0cyBpbnRvIDxzY3JpcHQ+IHRhZyAtLT5cclxuICAgICAgICAke2V4dHJhY3Rvci5nZXRTY3JpcHRUYWdzKCl9XHJcbiAgICAgICAgJHtoZWFkLnNjcmlwdC50b1N0cmluZygpfVxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgYDtcclxuXHJcbiAgY29uc3QgbWluaWZ5Q29uZmlnID0ge1xyXG4gICAgY29sbGFwc2VXaGl0ZXNwYWNlOiB0cnVlLFxyXG4gICAgcmVtb3ZlQ29tbWVudHM6IHRydWUsXHJcbiAgICB0cmltQ3VzdG9tRnJhZ21lbnRzOiB0cnVlLFxyXG4gICAgbWluaWZ5Q1NTOiB0cnVlLFxyXG4gICAgbWluaWZ5SlM6IHRydWUsXHJcbiAgICBtaW5pZnlVUkxzOiB0cnVlLFxyXG4gIH07XHJcblxyXG4gIC8vIE1pbmlmeSBIVE1MIGluIHByb2R1Y3Rpb25cclxuICByZXR1cm4gX19ERVZfXyA/IGh0bWwgOiBtaW5pZnkoaHRtbCwgbWluaWZ5Q29uZmlnKTtcclxufTtcclxuIiwiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XHJcbmltcG9ydCB7IFN0YXRpY1JvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMsIG1hdGNoUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyLWNvbmZpZyc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDaHVua0V4dHJhY3RvciB9IGZyb20gJ0Bsb2FkYWJsZS9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQgY2hhbGsgZnJvbSAnY2hhbGsnO1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9uIH0gZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHJlbmRlckh0bWwgZnJvbSAnLi9yZW5kZXJIdG1sJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgY29uc3QgeyBzdG9yZSB9ID0gY3JlYXRlU3RvcmUoeyB1cmw6IHJlcS51cmwgfSk7XHJcblxyXG4gIC8vIFRoZSBtZXRob2QgZm9yIGxvYWRpbmcgZGF0YSBmcm9tIHNlcnZlci1zaWRlXHJcbiAgY29uc3QgbG9hZEJyYW5jaERhdGEgPSAoKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGJyYW5jaCA9IG1hdGNoUm91dGVzKHJvdXRlcywgcmVxLnBhdGgpO1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBicmFuY2gubWFwKCh7IHJvdXRlLCBtYXRjaCB9KSA9PiB7XHJcbiAgICAgIGlmIChyb3V0ZS5sb2FkRGF0YSlcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICByb3V0ZVxyXG4gICAgICAgICAgICAubG9hZERhdGEoe1xyXG4gICAgICAgICAgICAgIHBhcmFtczogbWF0Y2gucGFyYW1zLFxyXG4gICAgICAgICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcclxuICAgICAgICAgICAgICByZXEsXHJcbiAgICAgICAgICAgICAgcmVzLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKChpdGVtOiBBY3Rpb24pID0+IHN0b3JlLmRpc3BhdGNoKGl0ZW0pKSxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIExvYWQgZGF0YSBmcm9tIHNlcnZlci1zaWRlIGZpcnN0XHJcbiAgICBhd2FpdCBsb2FkQnJhbmNoRGF0YSgpO1xyXG5cclxuICAgIGNvbnN0IHN0YXRzRmlsZSA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAncHVibGljL2xvYWRhYmxlLXN0YXRzJyk7XHJcbiAgICBjb25zdCBleHRyYWN0b3IgPSBuZXcgQ2h1bmtFeHRyYWN0b3IoeyBzdGF0c0ZpbGUgfSk7XHJcblxyXG4gICAgY29uc3Qgc3RhdGljQ29udGV4dDogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xyXG4gICAgY29uc3QgQXBwID0gZXh0cmFjdG9yLmNvbGxlY3RDaHVua3MoXHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIHsvKiBTZXR1cCBSZWFjdC1Sb3V0ZXIgc2VydmVyLXNpZGUgcmVuZGVyaW5nICovfVxyXG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS5wYXRofSBjb250ZXh0PXtzdGF0aWNDb250ZXh0fT5cclxuICAgICAgICAgIHtyZW5kZXJSb3V0ZXMocm91dGVzKX1cclxuICAgICAgICA8L1N0YXRpY1JvdXRlcj5cclxuICAgICAgPC9Qcm92aWRlcj4sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XHJcbiAgICBjb25zdCBodG1sQ29udGVudCA9IHJlbmRlclRvU3RyaW5nKEFwcCk7XHJcbiAgICAvLyBoZWFkIG11c3QgYmUgcGxhY2VkIGFmdGVyIFwicmVuZGVyVG9TdHJpbmdcIlxyXG4gICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vbmZsL3JlYWN0LWhlbG1ldCNzZXJ2ZXItdXNhZ2VcclxuICAgIGNvbnN0IGhlYWQgPSBIZWxtZXQucmVuZGVyU3RhdGljKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlbmRlciByZXN1bHQgY29udGFpbnMgYSByZWRpcmVjdCwgaWYgc28gd2UgbmVlZCB0byBzZXRcclxuICAgIC8vIHRoZSBzcGVjaWZpYyBzdGF0dXMgYW5kIHJlZGlyZWN0IGhlYWRlciBhbmQgZW5kIHRoZSByZXNwb25zZVxyXG4gICAgaWYgKHN0YXRpY0NvbnRleHQudXJsKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoMzAxKS5zZXRIZWFkZXIoJ0xvY2F0aW9uJywgc3RhdGljQ29udGV4dC51cmwpO1xyXG4gICAgICByZXMuZW5kKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGFzcyB0aGUgcm91dGUgYW5kIGluaXRpYWwgc3RhdGUgaW50byBodG1sIHRlbXBsYXRlLCB0aGUgXCJzdGF0dXNDb2RlXCIgY29tZXMgZnJvbSA8Tm90Rm91bmQgLz5cclxuICAgIHJlc1xyXG4gICAgICAuc3RhdHVzKHN0YXRpY0NvbnRleHQuc3RhdHVzQ29kZSA9PT0gJzQwNCcgPyA0MDQgOiAyMDApXHJcbiAgICAgIC5zZW5kKHJlbmRlckh0bWwoaGVhZCwgZXh0cmFjdG9yLCBodG1sQ29udGVudCwgaW5pdGlhbFN0YXRlKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdOb3QgRm91bmQgOignKTtcclxuICAgIGNvbnNvbGUuZXJyb3IoY2hhbGsucmVkKGA9PT4g8J+YrSAgUmVuZGVyaW5nIHJvdXRlcyBlcnJvcjogJHtlcnJvcn1gKSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwaG9uZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgd2Vic2l0ZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlckxpc3Qge1xyXG4gIGRhdGE/OiBVc2VyW107XHJcbiAgZXJyb3I/OiBFcnJvcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJEYXRhIHtcclxuICBkYXRhPzogVXNlcjtcclxuICBlcnJvcj86IEVycm9yO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSBhc3luYyAoKTogUHJvbWlzZTxVc2VyTGlzdD4gPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgJHtjb25maWcuQVBJX1VSTH0vdXNlcnNgKTtcclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHsgZXJyb3IgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8VXNlckRhdGE+ID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7Y29uZmlnLkFQSV9VUkx9L3VzZXJzLyR7aWR9YCk7XHJcbiAgICByZXR1cm4geyBkYXRhIH07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVCcm93c2VySGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBBY3Rpb24sIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IFRodW5rQWN0aW9uIH0gZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgY3JlYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcic7XHJcblxyXG5pbnRlcmZhY2UgQXJnIHtcclxuICBpbml0aWFsU3RhdGU/OiB0eXBlb2Ygd2luZG93Ll9fSU5JVElBTF9TVEFURV9fO1xyXG4gIHVybD86IHN0cmluZztcclxufVxyXG5cclxuLy8gVXNlIGluZmVycmVkIHJldHVybiB0eXBlIGZvciBtYWtpbmcgY29ycmVjdGx5IFJlZHV4IHR5cGVzXHJcbmNvbnN0IGNyZWF0ZVN0b3JlID0gKHsgaW5pdGlhbFN0YXRlLCB1cmwgfTogQXJnID0ge30pID0+IHtcclxuICBjb25zdCBoaXN0b3J5ID0gX19TRVJWRVJfX1xyXG4gICAgPyBjcmVhdGVNZW1vcnlIaXN0b3J5KHsgaW5pdGlhbEVudHJpZXM6IFt1cmwgfHwgJy8nXSB9KVxyXG4gICAgOiBjcmVhdGVCcm93c2VySGlzdG9yeSgpO1xyXG4gIGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcHJlbG9hZGVkU3RhdGU6IGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXI6IGNyZWF0ZVJvb3RSZWR1Y2VyKGhpc3RvcnkpLFxyXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PiBbXHJcbiAgICAgIC8vIEluY2x1ZGVkIGRlZmF1bHQgbWlkZGxld2FyZXM6IGh0dHBzOi8vcmVkdXgtdG9vbGtpdC5qcy5vcmcvYXBpL2dldERlZmF1bHRNaWRkbGV3YXJlI2luY2x1ZGVkLWRlZmF1bHQtbWlkZGxld2FyZVxyXG4gICAgICAuLi5nZXREZWZhdWx0TWlkZGxld2FyZSgpLFxyXG4gICAgICByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpLFxyXG4gICAgXSxcclxuICAgIGRldlRvb2xzOiBfX0RFVl9fLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBzdG9yZSwgaGlzdG9yeSB9O1xyXG59O1xyXG5cclxuY29uc3QgeyBzdG9yZSB9ID0gY3JlYXRlU3RvcmUoKTtcclxuXHJcbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+O1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2g7XHJcblxyXG5leHBvcnQgdHlwZSBBcHBUaHVuayA9IFRodW5rQWN0aW9uPHZvaWQsIEFwcFN0YXRlLCB1bmtub3duLCBBY3Rpb248c3RyaW5nPj47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZTtcclxuIiwiaW1wb3J0IHsgSGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknO1xyXG5pbXBvcnQgeyBjb25uZWN0Um91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcic7XHJcblxyXG5pbXBvcnQgdXNlckxpc3QgZnJvbSAnLi91c2VyTGlzdCc7XHJcbmltcG9ydCB1c2VyRGF0YSBmcm9tICcuL3VzZXJEYXRhJztcclxuXHJcbi8vIFVzZSBpbmZlcnJlZCByZXR1cm4gdHlwZSBmb3IgbWFraW5nIGNvcnJlY3RseSBSZWR1eCB0eXBlc1xyXG5leHBvcnQgZGVmYXVsdCAoaGlzdG9yeTogSGlzdG9yeSkgPT4gKHtcclxuICB1c2VyTGlzdCxcclxuICB1c2VyRGF0YSxcclxuICByb3V0ZXI6IGNvbm5lY3RSb3V0ZXIoaGlzdG9yeSkgYXMgYW55LFxyXG4gIC8vIFJlZ2lzdGVyIG1vcmUgcmVkdWNlcnMuLi5cclxufSk7XHJcbiIsImltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmltcG9ydCB7IFVzZXIsIGdldFVzZXJEYXRhIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2pzb25QbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgeyBBcHBUaHVuaywgQXBwU3RhdGUgfSBmcm9tIFwiLlwiO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJEYXRlIHtcclxuICBbaWQ6IHN0cmluZ106IHtcclxuICAgIHJlYWR5U3RhdHVzOiBzdHJpbmc7XHJcbiAgICBpdGVtPzogVXNlcjtcclxuICAgIGVycm9yPzogc3RyaW5nO1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdWNjZXNzIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGl0ZW06IFVzZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBGYWlsdXJlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGVycm9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHVzZXJEYXRhID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlckRhdGFcIixcclxuICBpbml0aWFsU3RhdGU6IHt9IGFzIFVzZXJEYXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBnZXRSZXF1ZXN0aW5nOiAoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPHN0cmluZz4pID0+IHtcclxuICAgICAgc3RhdGVbcGF5bG9hZF0gPSB7IHJlYWR5U3RhdHVzOiBcInJlcXVlc3RcIiB9O1xyXG4gICAgfSxcclxuICAgIGdldFN1Y2Nlc3M6IChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248U3VjY2Vzcz4pID0+IHtcclxuICAgICAgc3RhdGVbcGF5bG9hZC5pZF0gPSB7IHJlYWR5U3RhdHVzOiBcInN1Y2Nlc3NcIiwgaXRlbTogcGF5bG9hZC5pdGVtIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0RmFpbHVyZTogKHN0YXRlLCB7IHBheWxvYWQgfTogUGF5bG9hZEFjdGlvbjxGYWlsdXJlPikgPT4ge1xyXG4gICAgICBzdGF0ZVtwYXlsb2FkLmlkXSA9IHsgcmVhZHlTdGF0dXM6IFwiZmFpbHVyZVwiLCBlcnJvcjogcGF5bG9hZC5lcnJvciB9O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJEYXRhLnJlZHVjZXI7XHJcbmV4cG9ydCBjb25zdCB7IGdldFJlcXVlc3RpbmcsIGdldFN1Y2Nlc3MsIGdldEZhaWx1cmUgfSA9IHVzZXJEYXRhLmFjdGlvbnM7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyRGF0YSA9XHJcbiAgKGlkOiBzdHJpbmcpOiBBcHBUaHVuayA9PlxyXG4gIGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0UmVxdWVzdGluZyhpZCkpO1xyXG5cclxuICAgIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGdldFVzZXJEYXRhKGlkKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2goZ2V0RmFpbHVyZSh7IGlkLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChnZXRTdWNjZXNzKHsgaWQsIGl0ZW06IGRhdGEgYXMgVXNlciB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbmNvbnN0IHNob3VsZEZldGNoVXNlckRhdGEgPSAoc3RhdGU6IEFwcFN0YXRlLCBpZDogc3RyaW5nKSA9PlxyXG4gIHN0YXRlLnVzZXJEYXRhW2lkXT8ucmVhZHlTdGF0dXMgIT09IFwic3VjY2Vzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoVXNlckRhdGFJZk5lZWQgPVxyXG4gIChpZDogc3RyaW5nKTogQXBwVGh1bmsgPT5cclxuICAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgICBpZiAoc2hvdWxkRmV0Y2hVc2VyRGF0YShnZXRTdGF0ZSgpLCBpZCkpIHJldHVybiBkaXNwYXRjaChmZXRjaFVzZXJEYXRhKGlkKSk7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuIiwiaW1wb3J0IHsgUGF5bG9hZEFjdGlvbiwgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuaW1wb3J0IHsgVXNlciwgZ2V0VXNlckxpc3QgfSBmcm9tIFwiLi4vc2VydmljZXMvanNvblBsYWNlaG9sZGVyXCI7XHJcbmltcG9ydCB7IEFwcFRodW5rLCBBcHBTdGF0ZSB9IGZyb20gXCIuXCI7XHJcblxyXG5pbnRlcmZhY2UgVXNlckxpc3Qge1xyXG4gIHJlYWR5U3RhdHVzOiBzdHJpbmc7XHJcbiAgaXRlbXM6IFVzZXJbXTtcclxuICBlcnJvcjogc3RyaW5nIHwgbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogVXNlckxpc3QgPSB7XHJcbiAgcmVhZHlTdGF0dXM6IFwiaW52YWxpZFwiLFxyXG4gIGl0ZW1zOiBbXSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHVzZXJMaXN0ID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwidXNlckxpc3RcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGdldFJlcXVlc3Rpbmc6IChzdGF0ZTogVXNlckxpc3QpID0+IHtcclxuICAgICAgc3RhdGUucmVhZHlTdGF0dXMgPSBcInJlcXVlc3RcIjtcclxuICAgIH0sXHJcbiAgICBnZXRTdWNjZXNzOiAoc3RhdGUsIHsgcGF5bG9hZCB9OiBQYXlsb2FkQWN0aW9uPFVzZXJbXT4pID0+IHtcclxuICAgICAgc3RhdGUucmVhZHlTdGF0dXMgPSBcInN1Y2Nlc3NcIjtcclxuICAgICAgc3RhdGUuaXRlbXMgPSBwYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGdldEZhaWx1cmU6IChzdGF0ZSwgeyBwYXlsb2FkIH06IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS5yZWFkeVN0YXR1cyA9IFwiZmFpbHVyZVwiO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IHBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlckxpc3QucmVkdWNlcjtcclxuZXhwb3J0IGNvbnN0IHsgZ2V0UmVxdWVzdGluZywgZ2V0U3VjY2VzcywgZ2V0RmFpbHVyZSB9ID0gdXNlckxpc3QuYWN0aW9ucztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJMaXN0ID0gKCk6IEFwcFRodW5rID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGRpc3BhdGNoKGdldFJlcXVlc3RpbmcoKSk7XHJcblxyXG4gIGNvbnN0IHsgZXJyb3IsIGRhdGEgfSA9IGF3YWl0IGdldFVzZXJMaXN0KCk7XHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2goZ2V0RmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpc3BhdGNoKGdldFN1Y2Nlc3MoZGF0YSBhcyBVc2VyW10pKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzaG91bGRGZXRjaFVzZXJMaXN0ID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT5cclxuICBzdGF0ZS51c2VyTGlzdC5yZWFkeVN0YXR1cyAhPT0gXCJzdWNjZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VyTGlzdElmTmVlZCA9ICgpOiBBcHBUaHVuayA9PiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XHJcbiAgaWYgKHNob3VsZEZldGNoVXNlckxpc3QoZ2V0U3RhdGUoKSkpIHJldHVybiBkaXNwYXRjaChmZXRjaFVzZXJMaXN0KCkpO1xyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuIiwiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB3ZWJwYWNrLCB7IENvbmZpZ3VyYXRpb24sIFdlYnBhY2tQbHVnaW5JbnN0YW5jZSwgUnVsZVNldFVzZUl0ZW0gfSBmcm9tICd3ZWJwYWNrJztcclxuaW1wb3J0IHsgV2VicGFja01hbmlmZXN0UGx1Z2luIH0gZnJvbSAnd2VicGFjay1tYW5pZmVzdC1wbHVnaW4nO1xyXG5pbXBvcnQgVGVyc2VyUGx1Z2luIGZyb20gJ3RlcnNlci13ZWJwYWNrLXBsdWdpbic7XHJcbmltcG9ydCBNaW5pQ3NzRXh0cmFjdFBsdWdpbiBmcm9tICdtaW5pLWNzcy1leHRyYWN0LXBsdWdpbic7XHJcbmltcG9ydCBGb3JrVHNDaGVja2VyV2VicGFja1BsdWdpbiBmcm9tICdmb3JrLXRzLWNoZWNrZXItd2VicGFjay1wbHVnaW4nO1xyXG5pbXBvcnQgTG9hZGFibGVQbHVnaW4gZnJvbSAnQGxvYWRhYmxlL3dlYnBhY2stcGx1Z2luJztcclxuaW1wb3J0IHsgQnVuZGxlQW5hbHl6ZXJQbHVnaW4gfSBmcm9tICd3ZWJwYWNrLWJ1bmRsZS1hbmFseXplcic7XHJcblxyXG5leHBvcnQgY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcclxuXHJcbmNvbnN0IGdldFN0eWxlTG9hZGVycyA9IChpc1dlYjogYm9vbGVhbiwgaXNTYXNzPzogYm9vbGVhbikgPT4ge1xyXG4gIGxldCBsb2FkZXJzOiBSdWxlU2V0VXNlSXRlbVtdID0gW1xyXG4gICAge1xyXG4gICAgICBsb2FkZXI6ICdjc3MtbG9hZGVyJyxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGltcG9ydExvYWRlcnM6IGlzU2FzcyA/IDIgOiAxLFxyXG4gICAgICAgIG1vZHVsZXM6IHtcclxuICAgICAgICAgIGF1dG86IHRydWUsXHJcbiAgICAgICAgICBsb2NhbElkZW50TmFtZTogaXNEZXYgPyAnW3BhdGhdW25hbWVdX19bbG9jYWxdJyA6ICdbaGFzaDpiYXNlNjRdJyxcclxuICAgICAgICAgIGV4cG9ydE9ubHlMb2NhbHM6ICFpc1dlYixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHsgbG9hZGVyOiAncG9zdGNzcy1sb2FkZXInIH0sXHJcbiAgXTtcclxuXHJcbiAgaWYgKGlzV2ViKSBsb2FkZXJzID0gW01pbmlDc3NFeHRyYWN0UGx1Z2luLmxvYWRlciwgLi4ubG9hZGVyc107XHJcblxyXG4gIGlmIChpc1Nhc3MpIGxvYWRlcnMgPSBbLi4ubG9hZGVycywgeyBsb2FkZXI6ICdzYXNzLWxvYWRlcicgfV07XHJcblxyXG4gIHJldHVybiBsb2FkZXJzO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGx1Z2lucyA9IChpc1dlYjogYm9vbGVhbikgPT4ge1xyXG4gIGxldCBwbHVnaW5zID0gW1xyXG4gICAgbmV3IHdlYnBhY2suUHJvZ3Jlc3NQbHVnaW4oKSxcclxuICAgIG5ldyBXZWJwYWNrTWFuaWZlc3RQbHVnaW4oe1xyXG4gICAgICBmaWxlTmFtZTogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvd2VicGFjay1hc3NldHMuanNvbicpLFxyXG4gICAgICBmaWx0ZXI6IChmaWxlKSA9PiBmaWxlLmlzSW5pdGlhbCxcclxuICAgIH0pLFxyXG4gICAgbmV3IExvYWRhYmxlUGx1Z2luKHtcclxuICAgICAgd3JpdGVUb0Rpc2s6IHRydWUsXHJcbiAgICAgIGZpbGVuYW1lOiAnLi4vbG9hZGFibGUtc3RhdHMuanNvbicsXHJcbiAgICB9KSxcclxuICAgIC8vIFNldHRpbmcgZ2xvYmFsIHZhcmlhYmxlc1xyXG4gICAgbmV3IHdlYnBhY2suRGVmaW5lUGx1Z2luKHtcclxuICAgICAgX19DTElFTlRfXzogaXNXZWIsXHJcbiAgICAgIF9fU0VSVkVSX186ICFpc1dlYixcclxuICAgICAgX19ERVZfXzogaXNEZXYsXHJcbiAgICB9KSxcclxuICBdO1xyXG5cclxuICBpZiAoaXNEZXYpXHJcbiAgICBwbHVnaW5zID0gW1xyXG4gICAgICAuLi5wbHVnaW5zLFxyXG4gICAgICBuZXcgRm9ya1RzQ2hlY2tlcldlYnBhY2tQbHVnaW4oe1xyXG4gICAgICAgIGVzbGludDogeyBmaWxlczogJy4vc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9JyB9LFxyXG4gICAgICB9KSxcclxuICAgIF07XHJcblxyXG4gIGlmICghaXNEZXYpXHJcbiAgICBwbHVnaW5zID0gW1xyXG4gICAgICAuLi5wbHVnaW5zLFxyXG4gICAgICBuZXcgQnVuZGxlQW5hbHl6ZXJQbHVnaW4oe1xyXG4gICAgICAgIGFuYWx5emVyTW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdhbmFseXplJyA/ICdzZXJ2ZXInIDogJ2Rpc2FibGVkJyxcclxuICAgICAgfSksXHJcbiAgICBdO1xyXG5cclxuICByZXR1cm4gcGx1Z2lucztcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZyA9IChpc1dlYiA9IGZhbHNlKTogQ29uZmlndXJhdGlvbiA9PiAoe1xyXG4gIG1vZGU6IGlzRGV2ID8gJ2RldmVsb3BtZW50JyA6ICdwcm9kdWN0aW9uJyxcclxuICBzdGF0czogJ21pbmltYWwnLFxyXG4gIGNvbnRleHQ6IHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpKSxcclxuICBvdXRwdXQ6IHsgY2xlYW46IHRydWUgfSxcclxuICBvcHRpbWl6YXRpb246IHtcclxuICAgIG1pbmltaXplcjogW1xyXG4gICAgICBuZXcgVGVyc2VyUGx1Z2luKHtcclxuICAgICAgICAvLyBTZWUgbW9yZSBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3RlcnNlci13ZWJwYWNrLXBsdWdpbiN0ZXJzZXJvcHRpb25zXHJcbiAgICAgICAgdGVyc2VyT3B0aW9uczogeyBjb21wcmVzczogeyBkcm9wX2NvbnNvbGU6IHRydWUgfSB9LFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBnZXRQbHVnaW5zKGlzV2ViKSBhcyBXZWJwYWNrUGx1Z2luSW5zdGFuY2VbXSxcclxuICBtb2R1bGU6IHtcclxuICAgIHJ1bGVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0OiAvXFwuKHR8ailzeD8kLyxcclxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcclxuICAgICAgICBsb2FkZXI6ICdiYWJlbC1sb2FkZXInLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGNhbGxlcjogeyB0YXJnZXQ6IGlzV2ViID8gJ3dlYicgOiAnbm9kZScgfSxcclxuICAgICAgICAgIGNhY2hlRGlyZWN0b3J5OiBpc0RldixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdDogL1xcLmNzcyQvLFxyXG4gICAgICAgIHVzZTogZ2V0U3R5bGVMb2FkZXJzKGlzV2ViKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3Q6IC9cXC4od29mZjI/fGVvdHx0dGZ8b3RmKSQvaSxcclxuICAgICAgICB0eXBlOiAnYXNzZXQnLFxyXG4gICAgICAgIGdlbmVyYXRvcjogeyBlbWl0OiBpc1dlYiB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdDogL1xcLihwbmd8c3ZnfGpwZT9nfGdpZikkL2ksXHJcbiAgICAgICAgdHlwZTogJ2Fzc2V0JyxcclxuICAgICAgICBnZW5lcmF0b3I6IHsgZW1pdDogaXNXZWIgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBtb2R1bGVzOiBbJ3NyYycsICdub2RlX21vZHVsZXMnXSxcclxuICAgIGV4dGVuc2lvbnM6IFsnLnRzJywgJy50c3gnLCAnLmpzJywgJy5qc3gnLCAnLmpzb24nXSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcclxuIiwiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICd3ZWJwYWNrJztcclxuLy8gaW1wb3J0IFJlYWN0UmVmcmVzaFdlYnBhY2tQbHVnaW4gZnJvbSAnQHBtbW13aC9yZWFjdC1yZWZyZXNoLXdlYnBhY2stcGx1Z2luJztcclxuaW1wb3J0IE1pbmlDc3NFeHRyYWN0UGx1Z2luIGZyb20gJ21pbmktY3NzLWV4dHJhY3QtcGx1Z2luJztcclxuaW1wb3J0IENzc01pbmltaXplclBsdWdpbiBmcm9tICdjc3MtbWluaW1pemVyLXdlYnBhY2stcGx1Z2luJztcclxuaW1wb3J0IG1lcmdlIGZyb20gJ3dlYnBhY2stbWVyZ2UnO1xyXG5cclxuaW1wb3J0IGJhc2VDb25maWcsIHsgaXNEZXYgfSBmcm9tICcuL2Jhc2UuY29uZmlnJztcclxuXHJcbmNvbnN0IGdldFBsdWdpbnMgPSAoKSA9PiB7XHJcbiAgbGV0IHBsdWdpbnMgPSBbXHJcbiAgICBuZXcgTWluaUNzc0V4dHJhY3RQbHVnaW4oe1xyXG4gICAgICAvLyBEb24ndCB1c2UgaGFzaCBpbiBkZXZlbG9wbWVudCwgd2UgbmVlZCB0aGUgcGVyc2lzdGVudCBmb3IgXCJyZW5kZXJIdG1sLnRzXCJcclxuICAgICAgZmlsZW5hbWU6IGlzRGV2ID8gJ1tuYW1lXS5jc3MnIDogJ1tuYW1lXS5bY29udGVudGhhc2hdLmNzcycsXHJcbiAgICAgIGNodW5rRmlsZW5hbWU6IGlzRGV2ID8gJ1tpZF0uY3NzJyA6ICdbaWRdLltjb250ZW50aGFzaF0uY3NzJyxcclxuICAgIH0pLFxyXG4gIF07XHJcblxyXG4gIC8vIGlmIChpc0RldilcclxuICAvLyAgIHBsdWdpbnMgPSBbXHJcbiAgLy8gICAgIC4uLnBsdWdpbnMsXHJcbiAgLy8gICAgIG5ldyB3ZWJwYWNrLkhvdE1vZHVsZVJlcGxhY2VtZW50UGx1Z2luKCksXHJcbiAgLy8gICAgIG5ldyBSZWFjdFJlZnJlc2hXZWJwYWNrUGx1Z2luKHsgb3ZlcmxheTogeyBzb2NrSW50ZWdyYXRpb246ICd3aG0nIH0gfSksXHJcbiAgLy8gICBdO1xyXG5cclxuICByZXR1cm4gcGx1Z2lucztcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZzogQ29uZmlndXJhdGlvbiA9IHtcclxuICBkZXZ0b29sOiBpc0RldiAmJiAnZXZhbC1jaGVhcC1zb3VyY2UtbWFwJyxcclxuICBlbnRyeTogaXNEZXYgPyBbJ3dlYnBhY2staG90LW1pZGRsZXdhcmUvY2xpZW50P3JlbG9hZD10cnVlJywgJy4vc3JjL2NsaWVudCddIDogJy4vc3JjL2NsaWVudCcsXHJcbiAgb3V0cHV0OiB7XHJcbiAgICBmaWxlbmFtZTogaXNEZXYgPyAnW25hbWVdLmpzJyA6ICdbbmFtZV0uW2NvbnRlbnRoYXNoXS5qcycsXHJcbiAgICBjaHVua0ZpbGVuYW1lOiBpc0RldiA/ICdbaWRdLmpzJyA6ICdbaWRdLltjb250ZW50aGFzaF0uanMnLFxyXG4gICAgcGF0aDogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICdwdWJsaWMvYXNzZXRzJyksXHJcbiAgICBwdWJsaWNQYXRoOiAnL2Fzc2V0cy8nLFxyXG4gIH0sXHJcbiAgb3B0aW1pemF0aW9uOiB7IG1pbmltaXplcjogW25ldyBDc3NNaW5pbWl6ZXJQbHVnaW4oKV0gfSxcclxuICBwbHVnaW5zOiBnZXRQbHVnaW5zKCksXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJnZShiYXNlQ29uZmlnKHRydWUpLCBjb25maWcpO1xyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTEuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vY3NzLWxvYWRlckA1LjIuN193ZWJwYWNrQDUuOTEuMC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25vcm1hbGl6ZS5jc3NAOC4wLjEvbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSwrQkFBdUI7VUFBdkIsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMseUNBQWlDO1VBQWpDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLDhCQUFzQjtVQUF0QixzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSw4QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbG9hZGFibGUvc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS93ZWJwYWNrLXBsdWdpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbm5lY3RlZC1yZWFjdC1yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3NzLW1pbmltaXplci13ZWJwYWNrLXBsdWdpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZvcmstdHMtY2hlY2tlci13ZWJwYWNrLXBsdWdpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlzdG9yeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJocHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHRtbC1taW5pZmllclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtaW5pLWNzcy1leHRyYWN0LXBsdWdpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcnZlLWZhdmljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGVyc2VyLXdlYnBhY2stcGx1Z2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1idW5kbGUtYW5hbHl6ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2VicGFjay1kZXYtbWlkZGxld2FyZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWJwYWNrLWhvdC1taWRkbGV3YXJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbWFuaWZlc3QtcGx1Z2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYnBhY2stbWVyZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gbW9kdWxlIGZhY3RvcmllcyBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zZXJ2ZXIvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOlsiTGluayIsInJlbmRlclJvdXRlcyIsIkhlbG1ldCIsImxvZ28iLCJjb25maWciLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiQXBwIiwiX3JlZiIsInJvdXRlIiwiY2hpbGRyZW4iLCJfb2JqZWN0U3ByZWFkIiwiQVBQIiwidG8iLCJzcmMiLCJhbHQiLCJyb2xlIiwidGl0bGUiLCJyb3V0ZXMiLCJQdXJlQ29tcG9uZW50IiwiRXJyb3JCb3VuZGFyeSIsIl9QdXJlQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJzdGF0ZSIsImVycm9yIiwiZXJyb3JJbmZvIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb21wb25lbnREaWRDYXRjaCIsInNldFN0YXRlIiwicmVuZGVyIiwiX3RoaXMkc3RhdGUiLCJzdHlsZSIsIndoaXRlU3BhY2UiLCJ0b1N0cmluZyIsImNvbXBvbmVudFN0YWNrIiwibWVtbyIsIkluZm8iLCJpdGVtIiwibmFtZSIsInBob25lIiwiZW1haWwiLCJ3ZWJzaXRlIiwiTGlzdCIsIml0ZW1zIiwibWFwIiwiX3JlZjIiLCJpZCIsImNvbmNhdCIsIkxvYWRpbmciLCJIT1NUIiwiUE9SVCIsIkFQSV9VUkwiLCJodG1sQXR0cmlidXRlcyIsImxhbmciLCJ0aXRsZVRlbXBsYXRlIiwibWV0YSIsImNvbnRlbnQiLCJkZWZhdWx0Q29uZmlnIiwicHJvZENvbmZpZyIsIl9fREVWX18iLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2hhbGxvd0VxdWFsIiwiZmV0Y2hVc2VyTGlzdElmTmVlZCIsIkhvbWUiLCJkaXNwYXRjaCIsIl91c2VTZWxlY3RvciIsInVzZXJMaXN0IiwicmVhZHlTdGF0dXMiLCJyZW5kZXJMaXN0IiwibG9hZERhdGEiLCJsb2FkYWJsZSIsInJlc29sdmVkIiwiY2h1bmtOYW1lIiwiaXNSZWFkeSIsInJlc29sdmUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiaW1wb3J0QXN5bmMiLCJyZXF1aXJlQXN5bmMiLCJ0aGVuIiwicmVxdWlyZVN5bmMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXZhbCIsInJlcXVpcmUiLCJyZXNvbHZlV2VhayIsImZhbGxiYWNrIiwiTm90Rm91bmQiLCJzdGF0aWNDb250ZXh0Iiwic3RhdHVzQ29kZSIsImZldGNoVXNlckRhdGFJZk5lZWQiLCJVc2VySW5mbyIsIm1hdGNoIiwicGFyYW1zIiwidXNlckRhdGEiLCJyZW5kZXJJbmZvIiwidXNlckluZm8iLCJBc3luY0hvbWUiLCJsb2FkSG9tZURhdGEiLCJBc3luY1VzZXJJbmZvIiwibG9hZFVzZXJJbmZvRGF0YSIsImNvbXBvbmVudCIsInBhdGgiLCJleGFjdCIsImNoYWxrIiwiYXBwIiwid2VicGFjayIsIndlYnBhY2tDb25maWciLCJkZWZhdWx0IiwiY29tcGlsZXIiLCJpbnN0YW5jZSIsImhlYWRlcnMiLCJzZXJ2ZXJTaWRlUmVuZGVyIiwidXNlIiwibG9nIiwiaGVhcnRiZWF0Iiwid2FpdFVudGlsVmFsaWQiLCJ1cmwiLCJjb25zb2xlIiwiaW5mbyIsImdyZWVuIiwiZXhwcmVzcyIsImxvZ2dlciIsImNvbXByZXNzaW9uIiwiaGVsbWV0IiwiaHBwIiwiZmF2aWNvbiIsImRldlNlcnZlciIsInNzciIsImNvbnRlbnRTZWN1cml0eVBvbGljeSIsInNraXAiLCJfIiwicmVzIiwicHJvY2VzcyIsImN3ZCIsInN0YXRpYyIsImdldCIsImxpc3RlbiIsInJlZCIsInNlcmlhbGl6ZSIsIm1pbmlmeSIsImhlYWQiLCJleHRyYWN0b3IiLCJodG1sQ29udGVudCIsImluaXRpYWxTdGF0ZSIsImh0bWwiLCJiYXNlIiwibGluayIsImdldExpbmtUYWdzIiwiZ2V0U3R5bGVUYWdzIiwiZ2V0U2NyaXB0VGFncyIsInNjcmlwdCIsIm1pbmlmeUNvbmZpZyIsImNvbGxhcHNlV2hpdGVzcGFjZSIsInJlbW92ZUNvbW1lbnRzIiwidHJpbUN1c3RvbUZyYWdtZW50cyIsIm1pbmlmeUNTUyIsIm1pbmlmeUpTIiwibWluaWZ5VVJMcyIsInJlbmRlclRvU3RyaW5nIiwiU3RhdGljUm91dGVyIiwibWF0Y2hSb3V0ZXMiLCJQcm92aWRlciIsIkNodW5rRXh0cmFjdG9yIiwiY3JlYXRlU3RvcmUiLCJyZW5kZXJIdG1sIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJyZXEiLCJuZXh0IiwiX2NyZWF0ZVN0b3JlIiwic3RvcmUiLCJsb2FkQnJhbmNoRGF0YSIsInN0YXRzRmlsZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsImJyYW5jaCIsInByb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsImdldFN0YXRlIiwiY29sbGVjdENodW5rcyIsImxvY2F0aW9uIiwiY29udGV4dCIsInJlbmRlclN0YXRpYyIsInN0YXR1cyIsInNldEhlYWRlciIsImVuZCIsImFicnVwdCIsInNlbmQiLCJ0MCIsInN0b3AiLCJfeCIsIl94MiIsIl94MyIsImFwcGx5IiwiYXJndW1lbnRzIiwiYXhpb3MiLCJnZXRVc2VyTGlzdCIsIl95aWVsZCRheGlvcyRnZXQiLCJkYXRhIiwic2VudCIsImdldFVzZXJEYXRhIiwiX2NhbGxlZTIiLCJfeWllbGQkYXhpb3MkZ2V0MiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNyZWF0ZU1lbW9yeUhpc3RvcnkiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsImNvbmZpZ3VyZVN0b3JlIiwicm91dGVyTWlkZGxld2FyZSIsImNyZWF0ZVJvb3RSZWR1Y2VyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGlzdG9yeSIsIl9fU0VSVkVSX18iLCJpbml0aWFsRW50cmllcyIsInByZWxvYWRlZFN0YXRlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImRldlRvb2xzIiwiY29ubmVjdFJvdXRlciIsInJvdXRlciIsImNyZWF0ZVNsaWNlIiwicmVkdWNlcnMiLCJnZXRSZXF1ZXN0aW5nIiwicGF5bG9hZCIsImdldFN1Y2Nlc3MiLCJnZXRGYWlsdXJlIiwiX3JlZjMiLCJfdXNlckRhdGEkYWN0aW9ucyIsImFjdGlvbnMiLCJmZXRjaFVzZXJEYXRhIiwiX3JlZjQiLCJfeWllbGQkZ2V0VXNlckRhdGEiLCJtZXNzYWdlIiwic2hvdWxkRmV0Y2hVc2VyRGF0YSIsIl9zdGF0ZSR1c2VyRGF0YSRpZCIsIl91c2VyTGlzdCRhY3Rpb25zIiwiZmV0Y2hVc2VyTGlzdCIsIl95aWVsZCRnZXRVc2VyTGlzdCIsInNob3VsZEZldGNoVXNlckxpc3QiLCJXZWJwYWNrTWFuaWZlc3RQbHVnaW4iLCJUZXJzZXJQbHVnaW4iLCJNaW5pQ3NzRXh0cmFjdFBsdWdpbiIsIkZvcmtUc0NoZWNrZXJXZWJwYWNrUGx1Z2luIiwiTG9hZGFibGVQbHVnaW4iLCJCdW5kbGVBbmFseXplclBsdWdpbiIsImlzRGV2IiwiZW52IiwiTk9ERV9FTlYiLCJnZXRTdHlsZUxvYWRlcnMiLCJpc1dlYiIsImlzU2FzcyIsImxvYWRlcnMiLCJsb2FkZXIiLCJvcHRpb25zIiwiaW1wb3J0TG9hZGVycyIsIm1vZHVsZXMiLCJhdXRvIiwibG9jYWxJZGVudE5hbWUiLCJleHBvcnRPbmx5TG9jYWxzIiwiZ2V0UGx1Z2lucyIsInBsdWdpbnMiLCJQcm9ncmVzc1BsdWdpbiIsImZpbGVOYW1lIiwiZmlsdGVyIiwiZmlsZSIsImlzSW5pdGlhbCIsIndyaXRlVG9EaXNrIiwiZmlsZW5hbWUiLCJEZWZpbmVQbHVnaW4iLCJfX0NMSUVOVF9fIiwiZXNsaW50IiwiZmlsZXMiLCJhbmFseXplck1vZGUiLCJtb2RlIiwic3RhdHMiLCJvdXRwdXQiLCJjbGVhbiIsIm9wdGltaXphdGlvbiIsIm1pbmltaXplciIsInRlcnNlck9wdGlvbnMiLCJjb21wcmVzcyIsImRyb3BfY29uc29sZSIsIm1vZHVsZSIsInJ1bGVzIiwidGVzdCIsImV4Y2x1ZGUiLCJjYWxsZXIiLCJ0YXJnZXQiLCJjYWNoZURpcmVjdG9yeSIsInR5cGUiLCJnZW5lcmF0b3IiLCJlbWl0IiwiZXh0ZW5zaW9ucyIsIkNzc01pbmltaXplclBsdWdpbiIsIm1lcmdlIiwiYmFzZUNvbmZpZyIsImNodW5rRmlsZW5hbWUiLCJkZXZ0b29sIiwiZW50cnkiLCJwdWJsaWNQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==