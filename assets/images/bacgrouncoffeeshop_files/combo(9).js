YUI.add("sm-guide-modal",(function(e){SM.currentModule="sm-guide-modal";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireWildcard(t("react")),n=babelHelpers.interopRequireDefault(t("sm-component-panel")),s=babelHelpers.interopRequireDefault(t("sm-modal")),i=babelHelpers.interopRequireDefault(t("sm-component-button"));class a extends l.PureComponent{constructor(e){super(e),this.state={currentSlideIndex:0},this._eventHandlers={onKeyDown:this._onKeyDown.bind(this),onPrevClick:this._previousSlide.bind(this),onNextClick:this._nextSlide.bind(this)}}UNSAFE_componentWillMount(){let e=this.props.slides;this._slideComponents=e.map((function(e){return e.component}))}render(){let e=this.props.slides,t=[],a=this.state.currentSlideIndex,d=0===a,r=a===e.length-1;if(e.length>1)for(let n=0;n<e.length;n++)t.push(l.default.createElement("span",{className:"sm-guide-modal-pip",key:"sm-guide-modal-pip-"+n,"data-active":n===a}));let o=r?"Get Started":"Next",{onKeyDown:u,onPrevClick:m,onNextClick:c}=this._eventHandlers;return l.default.createElement("div",{onKeyDown:u},l.default.createElement(s.default,null,l.default.createElement(n.default,{className:"sm-guide-modal-container"},l.default.createElement(n.default.Body,null,l.default.createElement("div",{className:"sm-guide-modal-slides-container",style:{width:648*e.length+"px",marginLeft:-648*a+"px"}},this._slideComponents)),l.default.createElement(n.default.Buttons,null,l.default.createElement(i.default,{onClick:m,className:"sm-guide-modal-button","data-position":"left","data-first-slide":d},"Previous"),l.default.createElement("div",{className:"sm-guide-modal-pips-container"},t),l.default.createElement(i.default,{onClick:c,className:"sm-guide-modal-button","data-position":"right","data-last-slide":r},o)))))}_nextSlide(){let e=this.props.slides,t=this.state;t.currentSlideIndex!==e.length-1?this.setState({currentSlideIndex:t.currentSlideIndex+1}):this.props.onClose()}_previousSlide(){let e=this.state;0!==e.currentSlideIndex&&this.setState({currentSlideIndex:e.currentSlideIndex-1})}_onKeyDown(e){let t=e.keyCode;37===t?this._previousSlide():39!==t&&13!==t||this._nextSlide()}}a.propTypes={onClose:e.default.func.isRequired,slides:e.default.array.isRequired};var d=a;exports.default=d}(),SM.currentModule=null}),"",{requires:["react","sm","sm-component-button","sm-component-panel","sm-analytics","sm-modal"]});
YUI.add("sm-guide-modal-image-text-slide",(function(e){SM.currentModule="sm-guide-modal-image-text-slide";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireDefault(t("react"));const a=({title:e,description:t,imageClassName:a})=>l.default.createElement("div",{className:"sm-guide-modal-slide"},l.default.createElement("div",{className:"sm-guide-modal-slide-image "+a}),l.default.createElement("div",{className:"sm-guide-modal-slide-text"},l.default.createElement("h1",{className:"sm-guide-modal-slide-title"},e),l.default.createElement("p",{className:"sm-guide-modal-slide-description"},t)));a.propTypes={title:e.default.string,description:e.default.string,imageClassName:e.default.string};var d=a;exports.default=d}(),SM.currentModule=null}),"",{requires:["react","sm"]});
YUI.add("sm-customize-constants",(function(e){SM.currentModule="sm-customize-constants";var exports={};SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim;!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.URL_PATH_CUSTOMIZE_CHOOSE=exports.URL_PATH_CUSTOMIZE=void 0;exports.URL_PATH_CUSTOMIZE="/app/customize";const e="".concat("/app/customize","/choose");exports.URL_PATH_CUSTOMIZE_CHOOSE=e}(),SM.currentModule=null}),"",{});