(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{360:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var button_1=__webpack_require__(828);exports.Button=button_1.Button},361:function(module,exports,__webpack_require__){"use strict";function __export(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}Object.defineProperty(exports,"__esModule",{value:!0}),__export(__webpack_require__(829)),__export(__webpack_require__(831))},362:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.colors={light:{primary:"#93c0c1",secondary:"#FEECB9",accent:"white",body:"black"},dark:{primary:"#93c0c1",secondary:"#FEECB9",accent:"black",body:"white"}}},363:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var paragraph_1=__webpack_require__(833);exports.Paragraph=paragraph_1.Paragraph},364:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var button_1=__webpack_require__(360);exports.Button=button_1.Button;var paragraph_1=__webpack_require__(363);exports.Paragraph=paragraph_1.Paragraph},376:function(module,exports,__webpack_require__){__webpack_require__(377),__webpack_require__(479),__webpack_require__(480),module.exports=__webpack_require__(800)},800:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(89),_storybook_theming__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(230),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(372),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(373);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs);const theme=Object(_storybook_theming__WEBPACK_IMPORTED_MODULE_1__.create)({base:"light",brandTitle:"🐦 Finch Design System",brandUrl:"https://github.com/domjacks/finch"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{theme:theme}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(813),module)}.call(this,__webpack_require__(801)(module))},813:function(module,exports,__webpack_require__){var map={"./components/button/button.stories.tsx":814,"./components/paragraph/paragraph.stories.tsx":832,"./tokens/colors/colors.stories.tsx":834,"./tokens/typography/typography.stories.tsx":835};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=813},814:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var addon_actions_1=__webpack_require__(815),react_1=__importDefault(__webpack_require__(0)),_1=__webpack_require__(360);exports.default={title:"Components | Button",component:_1.Button},exports.button=function(){return react_1.default.createElement(_1.Button,{onClick:addon_actions_1.action("button-click")},"Button")},exports.twoButtons=function(){return react_1.default.createElement("div",null,react_1.default.createElement(_1.Button,{onClick:addon_actions_1.action("button-click")},"Cancel"),"       ",react_1.default.createElement(_1.Button,{onClick:addon_actions_1.action("button-click")},"Next"))}},828:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__importDefault(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(228)),tokens_1=__webpack_require__(361),StyledButton=styled_components_1.default.button(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n\n  font-size: 20px;\n  padding: 5px;\n\n  color: ",";\n  border: 2px solid ",";\n  background-color: ",";\n\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n\n    color: ",";\n    border: 2px solid ",";\n    background-color: ",";\n  }\n"],["\n  ","\n\n  font-size: 20px;\n  padding: 5px;\n\n  color: ",";\n  border: 2px solid ",";\n  background-color: ",";\n\n  &:active,\n  &:focus,\n  &:hover {\n    cursor: pointer;\n\n    color: ",";\n    border: 2px solid ",";\n    background-color: ",";\n  }\n"])),tokens_1.font,tokens_1.colors.light.primary,tokens_1.colors.light.primary,tokens_1.colors.light.accent,tokens_1.colors.light.accent,tokens_1.colors.light.primary,tokens_1.colors.light.primary);exports.Button=function(_a){var handleClick=_a.onClick,children=_a.children;return react_1.default.createElement(StyledButton,{onClick:handleClick},children)};try{exports.Button.displayName="Button",exports.Button.__docgenInfo={description:"Button component.",displayName:"Button",props:{onClick:{defaultValue:null,description:"Function to call when button is clicked",name:"onClick",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.tsx#Button"]={docgenInfo:exports.Button.__docgenInfo,name:"Button",path:"src/components/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},829:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var typography_1=__webpack_require__(830);exports.font=typography_1.font},830:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.font="\n  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300&display=swap');\n  font-family: 'Open Sans', sans-serif;\n"},831:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var colors_1=__webpack_require__(362);exports.colors=colors_1.colors},832:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),_1=__webpack_require__(363);exports.default={title:"Components | Paragraph",component:_1.Paragraph},exports.text=function(){return react_1.default.createElement(_1.Paragraph,null,"This is a simple paragraph.")}},833:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,react_1=__importDefault(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(228)),tokens_1=__webpack_require__(361),StyledParagraph=styled_components_1.default.p(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  ","\n\n  font-size: 20px;\n"],["\n  ","\n\n  font-size: 20px;\n"])),tokens_1.font);exports.Paragraph=function(_a){var className=_a.className,children=_a.children;return react_1.default.createElement(StyledParagraph,{className:className},children)};try{exports.Paragraph.displayName="Paragraph",exports.Paragraph.__docgenInfo={description:"Paragraph component.",displayName:"Paragraph",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/paragraph/paragraph.tsx#Paragraph"]={docgenInfo:exports.Paragraph.__docgenInfo,name:"Paragraph",path:"src/components/paragraph/paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},834:function(module,exports,__webpack_require__){"use strict";var __makeTemplateObject=this&&this.__makeTemplateObject||function(cooked,raw){return Object.defineProperty?Object.defineProperty(cooked,"raw",{value:raw}):cooked.raw=raw,cooked},__importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var templateObject_1,templateObject_2,templateObject_3,react_1=__importDefault(__webpack_require__(0)),styled_components_1=__importDefault(__webpack_require__(228)),components_1=__webpack_require__(364),colors_1=__webpack_require__(362),StyledCircle=styled_components_1.default.div(templateObject_1||(templateObject_1=__makeTemplateObject(["\n  height: 100px;\n  width: 100px;\n  margin: 20px;\n  border-radius: 50%;\n  background-color: ",";\n"],["\n  height: 100px;\n  width: 100px;\n  margin: 20px;\n  border-radius: 50%;\n  background-color: ",";\n"])),function(props){return props.color}),StyledParagraph=styled_components_1.default(components_1.Paragraph)(templateObject_2||(templateObject_2=__makeTemplateObject(["\n  color: ",";\n  line-height: 100px;\n"],["\n  color: ",";\n  line-height: 100px;\n"])),function(props){return props.color}),Container=styled_components_1.default.div(templateObject_3||(templateObject_3=__makeTemplateObject(["\n  background-color: ",";\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n"],["\n  background-color: ",";\n  padding: 20px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n"])),function(props){return props.color}),Circle=function(_a){var color=_a.color;return react_1.default.createElement(StyledCircle,{color:color})};exports.default={title:"Tokens | Colors"},exports.palette=function(){return react_1.default.createElement(Container,null,react_1.default.createElement(StyledParagraph,{color:colors_1.colors.light.body},"Light"),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.light.body},"Dark"),react_1.default.createElement(Container,{color:colors_1.colors.light.accent},react_1.default.createElement(Circle,{color:colors_1.colors.light.primary}),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.light.body},"Primary"),react_1.default.createElement(Circle,{color:colors_1.colors.light.secondary}),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.light.body},"Secondary"),react_1.default.createElement(Circle,{color:colors_1.colors.light.body}),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.light.body},"Body")),react_1.default.createElement(Container,{color:colors_1.colors.dark.accent},react_1.default.createElement(Circle,{color:colors_1.colors.dark.primary}),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.dark.body},"Primary"),react_1.default.createElement(Circle,{color:colors_1.colors.dark.secondary}),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.dark.body},"Secondary"),react_1.default.createElement(Circle,{color:colors_1.colors.dark.body}),react_1.default.createElement(StyledParagraph,{color:colors_1.colors.dark.body},"Body")))}},835:function(module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__importDefault(__webpack_require__(0)),components_1=__webpack_require__(364);exports.default={title:"Tokens | Typography"},exports.paragraph=function(){return react_1.default.createElement(components_1.Paragraph,null,"This is a simple paragraph.")}}},[[376,1,2]]]);
//# sourceMappingURL=main.8a5556c615f3593732df.bundle.js.map