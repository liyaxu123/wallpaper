(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-dropdown/u-dropdown"],{

/***/ 228:
/*!*********************************************************************!*\
  !*** D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& */ 229);
/* harmony import */ var _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=script&lang=js& */ 231);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& */ 233);
/* harmony import */ var _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0340bb60",
  null,
  false,
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-dropdown/u-dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 229:
/*!****************************************************************************************************************!*\
  !*** D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& */ 230);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 230:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 186))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.$u.addUnit(_vm.height)
  var g1 = _vm.$u.addUnit(_vm.titleSize)
  var g2 = _vm.$u.addUnit(_vm.menuIconSize)

  var s0 = _vm.__get_style([
    _vm.contentStyle,
    {
      transition: "opacity " + _vm.duration / 1000 + "s linear",
      top: _vm.$u.addUnit(_vm.height),
      height: _vm.contentHeight + "px"
    }
  ])

  var s1 = _vm.__get_style([_vm.popupStyle])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        s0: s0,
        s1: s1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 231:
/*!**********************************************************************************************!*\
  !*** D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=script&lang=js& */ 232);
/* harmony import */ var _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 232:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * dropdown 下拉菜单
 * @description 该组件一般用于向下展开菜单，同时可切换多个选项卡的场景
 * @tutorial http://uviewui.com/components/dropdown.html
 * @property {String} active-color 标题和选项卡选中的颜色（默认#2979ff）
 * @property {String} inactive-color 标题和选项卡未选中的颜色（默认#606266）
 * @property {Boolean} close-on-click-mask 点击遮罩是否关闭菜单（默认true）
 * @property {Boolean} close-on-click-self 点击当前激活项标题是否关闭菜单（默认true）
 * @property {String | Number} duration 选项卡展开和收起的过渡时间，单位ms（默认300）
 * @property {String | Number} height 标题菜单的高度，单位任意（默认80）
 * @property {String | Number} border-radius 菜单展开内容下方的圆角值，单位任意（默认0）
 * @property {Boolean} border-bottom 标题菜单是否显示下边框（默认false）
 * @property {String | Number} title-size 标题的字体大小，单位任意，数值默认为rpx单位（默认28）
 * @event {Function} open 下拉菜单被打开时触发
 * @event {Function} close 下拉菜单被关闭时触发
 * @example <u-dropdown></u-dropdown>
 */var _default =
{
  name: 'u-dropdown',
  props: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      default: '#2979ff' },

    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      default: '#606266' },

    // 点击遮罩是否关闭菜单
    closeOnClickMask: {
      type: Boolean,
      default: true },

    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      default: true },

    // 过渡时间
    duration: {
      type: [Number, String],
      default: 300 },

    // 标题菜单的高度，单位任意，数值默认为rpx单位
    height: {
      type: [Number, String],
      default: 80 },

    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: false },

    // 标题的字体大小
    titleSize: {
      type: [Number, String],
      default: 28 },

    // 下拉出来的内容部分的圆角值
    borderRadius: {
      type: [Number, String],
      default: 0 },

    // 菜单右侧的icon图标
    menuIcon: {
      type: String,
      default: 'arrow-down' },

    // 菜单右侧图标的大小
    menuIconSize: {
      type: [Number, String],
      default: 26 } },


  data: function data() {
    return {
      showDropdown: true, // 是否打开下来菜单,
      menuList: [], // 显示的菜单
      active: false, // 下拉菜单的状态
      // 当前是第几个菜单处于激活状态，小程序中此处不能写成false或者""，否则后续将current赋值为0，
      // 无能的TX没有使用===而是使用==判断，导致程序认为前后二者没有变化，从而不会触发视图更新
      current: 99999,
      // 外层内容的样式，初始时处于底层，且透明
      contentStyle: {
        zIndex: -1,
        opacity: 0 },

      // 让某个菜单保持高亮的状态
      highlightIndex: 99999,
      contentHeight: 0 };

  },
  computed: {
    // 下拉出来部分的样式
    popupStyle: function popupStyle() {
      var style = {};
      // 进行Y轴位移，展开状态时，恢复原位。收齐状态时，往上位移100%，进行隐藏
      style.transform = "translateY(".concat(this.active ? 0 : '-100%', ")");
      style['transition-duration'] = this.duration / 1000 + 's';
      style.borderRadius = "0 0 ".concat(this.$u.addUnit(this.borderRadius), " ").concat(this.$u.addUnit(this.borderRadius));
      return style;
    } },

  created: function created() {
    // 引用所有子组件(u-dropdown-item)的this，不能在data中声明变量，否则在微信小程序会造成循环引用而报错
    this.children = [];
  },
  mounted: function mounted() {
    this.getContentHeight();
  },
  methods: {
    init: function init() {
      // 当某个子组件内容变化时，触发父组件的init，父组件再让每一个子组件重新初始化一遍
      // 以保证数据的正确性
      this.menuList = [];
      this.children.map(function (child) {
        child.init();
      });
    },
    // 点击菜单
    menuClick: function menuClick(index) {var _this = this;
      // 判断是否被禁用
      if (this.menuList[index].disabled) return;
      // 如果点击时的索引和当前激活项索引相同，意味着点击了激活项，需要收起下拉菜单
      if (index === this.current && this.closeOnClickSelf) {
        this.close();
        // 等动画结束后，再移除下拉菜单中的内容，否则直接移除，也就没有下拉菜单收起的效果了
        setTimeout(function () {
          _this.children[index].active = false;
        }, this.duration);
        return;
      }
      this.open(index);
    },
    // 打开下拉菜单
    open: function open(index) {
      // 重置高亮索引，否则会造成多个菜单同时高亮
      // this.highlightIndex = 9999;
      // 展开时，设置下拉内容的样式
      this.contentStyle = {
        zIndex: 11 };

      // 标记展开状态以及当前展开项的索引
      this.active = true;
      this.current = index;
      // 历遍所有的子元素，将索引匹配的项标记为激活状态，因为子元素是通过v-if控制切换的
      // 之所以不是因display: none，是因为nvue没有display这个属性
      this.children.map(function (val, idx) {
        val.active = index == idx ? true : false;
      });
      this.$emit('open', this.current);
    },
    // 设置下拉菜单处于收起状态
    close: function close() {
      this.$emit('close', this.current);
      // 设置为收起状态，同时current归位，设置为空字符串
      this.active = false;
      this.current = 99999;
      // 下拉内容的样式进行调整，不透明度设置为0
      this.contentStyle = {
        zIndex: -1,
        opacity: 0 };

    },
    // 点击遮罩
    maskClick: function maskClick() {
      // 如果不允许点击遮罩，直接返回
      if (!this.closeOnClickMask) return;
      this.close();
    },
    // 外部手动设置某个菜单高亮
    highlight: function highlight() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.highlightIndex = index !== undefined ? index : 99999;
    },
    // 获取下拉菜单内容的高度
    getContentHeight: function getContentHeight() {var _this2 = this;
      // 这里的原理为，因为dropdown组件是相对定位的，它的下拉出来的内容，必须给定一个高度
      // 才能让遮罩占满菜单一下，直到屏幕底部的高度
      // this.$u.sys()为uView封装的获取设备信息的方法
      var windowHeight = this.$u.sys().windowHeight;
      this.$uGetRect('.u-dropdown__menu').then(function (res) {
        // 这里获取的是dropdown的尺寸，在H5上，uniapp获取尺寸是有bug的(以前提出修复过，后来又出现了此bug，目前hx2.8.11版本)
        // H5端bug表现为元素尺寸的top值为导航栏底部到到元素的上边沿的距离，但是元素的bottom值确是导航栏顶部到元素底部的距离
        // 二者是互相矛盾的，本质原因是H5端导航栏非原生，uni的开发者大意造成
        // 这里取菜单栏的botton值合理的，不能用res.top，否则页面会造成滚动
        _this2.contentHeight = windowHeight - res.bottom;
      });
    } } };exports.default = _default;

/***/ }),

/***/ 233:
/*!*******************************************************************************************************************************!*\
  !*** D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../chromeDownload/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& */ 234);
/* harmony import */ var _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chromeDownload_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 234:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myCode/壁纸App/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/uview-ui/components/u-dropdown/u-dropdown.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-dropdown/u-dropdown-create-component',
    {
        'uview-ui/components/u-dropdown/u-dropdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(228))
        })
    },
    [['uview-ui/components/u-dropdown/u-dropdown-create-component']]
]);
