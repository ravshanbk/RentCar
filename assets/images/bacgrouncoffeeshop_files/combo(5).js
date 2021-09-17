YUI.add("sm-page-widget-constants",(function(E){SM.currentModule="sm-page-widget-constants";var exports={};SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim;!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WIDGET_TYPE_TO_WORKING_EXPANSION=exports.WIDGET_YOUTUBE=exports.WIDGET_WUFOO=exports.WIDGET_VIMEO=exports.WIDGET_VIDEO=exports.WIDGET_TEXT=exports.WIDGET_SPACER=exports.WIDGET_SOCIALLINKS=exports.WIDGET_SOCIALBUTTONS=exports.WIDGET_SMUGMUG_JOBS_LIST=exports.WIDGET_SLIDESHOW=exports.WIDGET_SIMPLEAPP=exports.WIDGET_SEPARATOR=exports.WIDGET_SEARCH=exports.WIDGET_PROFILE=exports.WIDGET_PAGETITLE=exports.WIDGET_PAGES=exports.WIDGET_NODES=exports.WIDGET_NAV=exports.WIDGET_MAP=exports.WIDGET_LOGO=exports.WIDGET_KEYWORDS=exports.WIDGET_IMAGES=exports.WIDGET_IMAGE=exports.WIDGET_HTML=exports.WIDGET_GOOGLETRANSLATE=exports.WIDGET_GOOGLEPLUS_BADGE=exports.WIDGET_GOOGLECALENDAR=exports.WIDGET_GALLERIES=exports.WIDGET_FOLDERS=exports.WIDGET_FEED=exports.WIDGET_FEATUREDEVENTS=exports.WIDGET_CSS=exports.WIDGET_COMMENTS=exports.WIDGET_CAROUSEL=exports.WIDGET_BUTTON=exports.WIDGET_BREADCRUMB=exports.WIDGET_ADSENSE=void 0;exports.WIDGET_ADSENSE="AdSense";exports.WIDGET_BREADCRUMB="Breadcrumb";exports.WIDGET_BUTTON="Button";exports.WIDGET_CAROUSEL="Carousel";exports.WIDGET_COMMENTS="Comments";exports.WIDGET_CSS="CSS";exports.WIDGET_FEATUREDEVENTS="FeaturedEvents";exports.WIDGET_FEED="Feed";exports.WIDGET_FOLDERS="Folders";exports.WIDGET_GALLERIES="Galleries";exports.WIDGET_GOOGLECALENDAR="GoogleCalendar";exports.WIDGET_GOOGLEPLUS_BADGE="GooglePlusBadge";exports.WIDGET_GOOGLETRANSLATE="GoogleTranslate";exports.WIDGET_HTML="Html";exports.WIDGET_IMAGE="Image";exports.WIDGET_IMAGES="Images";exports.WIDGET_KEYWORDS="Keywords";exports.WIDGET_LOGO="Logo";exports.WIDGET_MAP="Map";exports.WIDGET_NAV="Navigation";exports.WIDGET_NODES="Nodes";exports.WIDGET_PAGES="Pages";exports.WIDGET_PAGETITLE="PageTitle";exports.WIDGET_PROFILE="Profile";exports.WIDGET_SEARCH="Search";exports.WIDGET_SEPARATOR="Separator";exports.WIDGET_SIMPLEAPP="SimpleApp";exports.WIDGET_SLIDESHOW="Slideshow";exports.WIDGET_SMUGMUG_JOBS_LIST="SmugMugJobsList";exports.WIDGET_SOCIALBUTTONS="SocialButtons";exports.WIDGET_SOCIALLINKS="SocialLinks";exports.WIDGET_SPACER="Spacer";exports.WIDGET_TEXT="Text";exports.WIDGET_VIDEO="Video";exports.WIDGET_VIMEO="Vimeo";exports.WIDGET_WUFOO="Wufoo";exports.WIDGET_YOUTUBE="YouTube";const E={Carousel:"WorkingCarouselWidget",Galleries:"WorkingGalleriesWidget",Images:"WorkingMultiplePhotosWidget",Logo:"WorkingLogoWidget",Nodes:"WorkingFoldersGalleriesPagesWidget",PageTitle:"WorkingPageTitleWidget",Profile:"WorkingProfileWidget",SocialLinks:"WorkingSocialLinksWidget",Text:"WorkingTextWidget"};exports.WIDGET_TYPE_TO_WORKING_EXPANSION=E}(),SM.currentModule=null}),"",{});
YUI.add("sm-error-boundary-hoc",(function(e){SM.currentModule="sm-error-boundary-hoc";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(t,i={}){class u extends e.Component{constructor(...e){super(...e),babelHelpers.defineProperty(this,"state",{caughtError:null}),babelHelpers.defineProperty(this,"_onAlertDismiss",()=>{this.setState({caughtError:null})})}componentDidCatch(e,t){let a={[o.default.FIELD_ERROR]:e.toString(),url:s.default.doc.URL};t&&t.componentStack&&(a[o.default.FIELD_MESSAGE]=t.componentStack.trim().replace(/\n\s*/g,";"));try{o.default.add(i.logCategory||n.logCategory,a,o.default.LEVEL_ERROR)}catch(e){}r.default.withScope(s=>{s.setExtra("category",i.logCategory||n.logCategory),t&&Object.keys(t).forEach(e=>{s.setExtra(e,t[e])}),r.default.captureException(e)}),this.setState({caughtError:!0})}render(){let{caughtError:r}=this.state;if(null!==r){let{dismissible:t,message:r}={...n,...i};return e.default.createElement(a.default,{dismissible:t,message:r,onClose:this._onAlertDismiss,type:l.ERROR_TYPE})}return e.default.createElement(t,this.props)}}return babelHelpers.defineProperty(u,"displayName","WithErrorBoundary(".concat(function(e){return e.displayName||e.name||"Component"}(t),")")),u};var e=babelHelpers.interopRequireWildcard(t("react")),r=babelHelpers.interopRequireDefault(t("sm-sentry-init")),s=babelHelpers.interopRequireDefault(t("sm-dom")),o=babelHelpers.interopRequireDefault(t("sm-smuglog")),a=babelHelpers.interopRequireDefault(t("sm-dialogs-panel")),l=t("sm-dialogs-constants");const n={dismissible:!0,logCategory:"sm-error-boundary-hoc",message:l.DEFAULT_ERROR_MSG}}(),SM.currentModule=null}),"",{requires:["react","sm-sentry-init","sm-dom","sm-smuglog","sm-dialogs-panel","sm-dialogs-constants"]});
YUI.add("sm-uri-helpers-deprecated",(function(e){SM.currentModule="sm-uri-helpers-deprecated";var exports={},r=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkUrl=function(r){if(!r)return!1;let t=new e.default(r);if(!t.protocol||!t.host)return!1;if("http"!==t.protocol&&"https"!==t.protocol)return!1;let u=t.host.split(".");if(u.includes(""))return!1;if(u.length<2)return!1;return!0};var e=babelHelpers.interopRequireDefault(r("sm-uri-deprecated"))}(),SM.currentModule=null}),"",{requires:["sm-uri-deprecated"]});
YUI.add("sm-progressbar",(function(e){SM.currentModule="sm-progressbar";var exports={},r=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(r("classnames")),a=babelHelpers.interopRequireDefault(r("prop-types")),s=babelHelpers.interopRequireDefault(r("react"));const t=({className:r,message:a,percentComplete:t})=>{let l,u="number"!=typeof t;return u||(l={width:"".concat(t,"%")}),s.default.createElement("div",{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":u?void 0:t,className:(0,e.default)("sm-progress",r),"data-indeterminate":u||void 0,role:"progressbar"},!!a&&s.default.createElement("div",{className:"sm-progress-message"},a),s.default.createElement("div",{className:"sm-progress-bar"},s.default.createElement("div",{className:"sm-progress-complete",style:l})))};t.displayName="ProgressBar",t.propTypes={message:a.default.string,percentComplete:a.default.number};var l=t;exports.default=l}(),SM.currentModule=null}),"",{requires:["classnames","prop-types","react"]});
YUI.add("sm-panel-progress",(function(e){SM.currentModule="sm-panel-progress";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("classnames")),r=babelHelpers.interopRequireDefault(t("sm-component-button")),s=babelHelpers.interopRequireDefault(t("sm-modal")),n=babelHelpers.interopRequireDefault(t("sm-component-panel")),u=babelHelpers.interopRequireDefault(t("sm-progressbar"));const o=e=>{let{children:t,className:o,dataTestId:d,onCancel:p,percentComplete:c,progressBarMessage:m,title:i}=e;return l.default.createElement(s.default,{closeOnEscape:!!p,onClose:p||void 0},l.default.createElement(n.default,{className:(0,a.default)("sm-panel-progress",o),headerPosition:n.default.HEADER_INSIDE,"data-testid":d},!!i&&l.default.createElement(n.default.Header,null,l.default.createElement("h2",null,i)),l.default.createElement(n.default.Body,null,l.default.createElement(u.default,{message:m,percentComplete:c}),t),!!p&&l.default.createElement(n.default.Buttons,null,l.default.createElement(r.default,{onClick:p||void 0,skin:"submit"},"Cancel"))))};o.displayName="PanelProgress",o.propTypes={dataTestId:e.default.string,title:e.default.string,onCancel:e.default.func,percentComplete:e.default.number,progressBarMessage:e.default.string},o.defaultProps={className:""};var d=o;exports.default=d}(),SM.currentModule=null}),"",{requires:["react","classnames","sm-component-panel","sm-modal","sm-progressbar"]});
YUI.add("sm-pretty-size",(function(e){SM.currentModule="sm-pretty-size";var exports={};SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim;!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e=SM.import("sm-smuglog"),r=["B","KB","MB","GB","TB"];exports.default=t=>{let s=parseFloat(t);if(Number.isNaN(s))throw e.error("sm-pretty-size",{message:"Invalid size given",size:t});let u=-1;for(;++u<4&&Math.abs(s)>=1024;)s/=1024;return"".concat(s.toFixed(2)," ").concat(r[u])}}(),SM.currentModule=null}),"",{requires:["sm-smuglog"]});
YUI.add("sm-form-field-file-picker-constants",(function(e){SM.currentModule="sm-form-field-file-picker-constants";var exports={},E=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DEFAULT_SIDECAR_EXTENSIONS=exports.DEFAULT_VIDEO_MIMES=exports.DEFAULT_VIDEO_EXTENSIONS=exports.DEFAULT_IMAGE_MIMES=exports.DEFAULT_IMAGE_EXTENSIONS=exports.VIDEO_SIZE_STRING=exports.IMAGE_SIZE_STRING=exports.VIDEO_SIZE=exports.IMAGE_SIZE=exports.IMAGE_AND_VIDEO_WILDCARD_MIME_TYPES=exports.VIDEO_WILDCARD_MIME_TYPE=exports.IMAGE_WILDCARD_MIME_TYPE=exports.ACCEPTED_IMAGE_MIME_TYPES=void 0;var e=babelHelpers.interopRequireDefault(E("sm-pretty-size"));exports.ACCEPTED_IMAGE_MIME_TYPES=["image/heif","image/gif","image/jpeg","image/png"];exports.IMAGE_WILDCARD_MIME_TYPE="image/*";exports.VIDEO_WILDCARD_MIME_TYPE="video/*";const I=["image/*","video/*"];exports.IMAGE_AND_VIDEO_WILDCARD_MIME_TYPES=I;const{photoBytes:_,videoBytes:i}=SM.env.limits;exports.VIDEO_SIZE=i,exports.IMAGE_SIZE=_;const o=(0,e.default)(_);exports.IMAGE_SIZE_STRING=o;const M=(0,e.default)(i);exports.VIDEO_SIZE_STRING=M;exports.DEFAULT_IMAGE_EXTENSIONS=["heic","jpg","jpeg","png","gif"];exports.DEFAULT_IMAGE_MIMES=["image/heif","image/jpeg","image/png","image/gif"];exports.DEFAULT_VIDEO_EXTENSIONS=["3gp","3g2","3gp2","avi","h264","m4v","mov","mp4","mpeg","mts","ogg","ogv","qt","webm","wmv"];exports.DEFAULT_VIDEO_MIMES=["video/3gpp","video/3gpp2","video/x-msvideo","video/h264","video/mp4","video/quicktime","video/mp4","video/mpeg","video/mp2t","video/ogg","video/quicktime","video/webm","video/x-ms-wmv"];exports.DEFAULT_SIDECAR_EXTENSIONS=["cof","comask","cop","cos","cot","dop","icm","on1","pp3","xmp"]}(),SM.currentModule=null}),"",{requires:["sm-pretty-size"]});
YUI.add("sm-action-panel",(function(e){SM.currentModule="sm-action-panel";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireWildcard(t("react")),r=babelHelpers.interopRequireDefault(t("sm-component-button")),n=babelHelpers.interopRequireDefault(t("sm-modal")),o=babelHelpers.interopRequireDefault(t("sm-component-panel"));class a extends l.PureComponent{constructor(...e){super(...e),babelHelpers.defineProperty(this,"modalRef",l.default.createRef()),babelHelpers.defineProperty(this,"_onCloseClick",()=>{this.props.onClose&&this.props.onClose()})}render(){let{children:e,closeButtonSkin:t,closeButtonText:a,title:s,width:u,...i}=this.props;return l.default.createElement(n.default,babelHelpers.extends({},i,{ref:this.modalRef}),l.default.createElement(o.default,{className:"sm-action-panel",headerPosition:o.default.HEADER_INSIDE,width:u},!!s&&l.default.createElement(o.default.Header,null,l.default.createElement("h1",null,s)),l.default.createElement(o.default.Body,null,e,l.default.createElement(r.default,{className:"sm-action-panel-close",onClick:this._onCloseClick,skin:t},a))))}}exports.default=a,babelHelpers.defineProperty(a,"propTypes",{...n.default.propTypes,children:function(e,t,n){let o=!1;if(l.default.Children.forEach(e[t],e=>{e&&e.type!==r.default&&(o=!0)}),o)return new Error("".concat(n,": all children must be <Button>s"))},closeButtonSkin:e.default.string,closeButtonText:e.default.string,title:e.default.string,width:e.default.number}),babelHelpers.defineProperty(a,"defaultProps",{closeButtonSkin:"default",closeButtonText:"Close",width:336}),babelHelpers.defineProperty(a,"displayName","ActionPanel")}(),SM.currentModule=null}),"",{requires:["react","sm","sm-component-button","sm-component-panel","sm-modal"]});
YUI.add("sm-form-picker-action-panel",(function(e){SM.currentModule="sm-form-picker-action-panel";var exports={},o=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(o("react")),t=babelHelpers.interopRequireDefault(o("prop-types")),l=babelHelpers.interopRequireDefault(o("sm-action-panel")),a=babelHelpers.interopRequireDefault(o("sm-component-button"));const n=o=>{let{onCloseClick:t,onUploadClick:n,onChooseFromSMClick:r}=o;return e.default.createElement(l.default,{onClose:t,title:"Select Photo",className:"sm-picker-action-panel"},e.default.createElement(a.default,{onClick:n,className:"sm-picker-action-panel-upload-button"},"Upload New Photo"),e.default.createElement(a.default,{onClick:r,className:"sm-picker-action-panel-choose-button"},"Choose from Smugmug"))};n.displayName="PickerActionPanel",n.propTypes={onChooseFromSMClick:t.default.func.isRequired,onCloseClick:t.default.func.isRequired,onUploadClick:t.default.func.isRequired};var r=n;exports.default=r}(),SM.currentModule=null}),"",{requires:["react","react-dom","sm-dom","sm-component-button","sm-action-panel","create-class"]});
YUI.add("sm-upload-utils",(function(e){SM.currentModule="sm-upload-utils";var exports={},r=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageDimensions=async function(r){let t=new e.default.win.Image;t.src=r;try{return await t.decode(),{imageUrl:r,width:t.width,height:t.height}}catch(e){return}};var e=babelHelpers.interopRequireDefault(r("sm-dom-core"))}(),SM.currentModule=null}),"",{requires:["sm-dom-core"]});
YUI.add("sm-form-field-file-picker-behavior",(function(e){SM.currentModule="sm-form-field-file-picker-behavior";var exports={},i=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(i("react")),t=babelHelpers.interopRequireDefault(i("prop-types")),l=babelHelpers.interopRequireDefault(i("sm-dom")),r=babelHelpers.interopRequireDefault(i("sm-smuglog")),s=babelHelpers.interopRequireDefault(i("sm-form-picker-action-panel")),a=i("sm-upload-utils"),n=i("sm-form-field-file-picker-constants");class o extends e.default.Component{constructor(...i){super(...i),babelHelpers.defineProperty(this,"state",{showActionPanel:!1}),babelHelpers.defineProperty(this,"_onClearFilesClick",e=>{this._clearFileInput(),this.props.onFilesCleared(e)}),babelHelpers.defineProperty(this,"_onSelectFilesClick",()=>{this.props.useActionPanel?this.setState({showActionPanel:!0}):this._forceClickOnFileInput()}),babelHelpers.defineProperty(this,"_forceClickOnFileInput",()=>{this.filePickerRef.current&&this.filePickerRef.current.click()}),babelHelpers.defineProperty(this,"_closeActionPanel",()=>{this.setState({showActionPanel:!1})}),babelHelpers.defineProperty(this,"_onChooseFromSMClick",()=>{this._closeActionPanel(),this.props.onChooseFromSMClick()}),babelHelpers.defineProperty(this,"_onInputChange",e=>{this.state.showActionPanel&&this._closeActionPanel();let i=e.target.files,t=this._getValidFiles(i);if(t.length<1)return void this._clearFileInput();let s=t.find(e=>this._isImage(e.type));if(s){let e=l.default.win.URL.createObjectURL(s),i=new l.default.win.FileReader;i.onload=()=>{(0,a.getImageDimensions)(e).then(e=>{if(!e)return;let{imageUrl:i,width:t,height:l}=e;this.props.onImageExtracted(i,t,l)})};try{i.readAsArrayBuffer(s)}catch(e){r.default.add("sm-form-field-file-picker-behavior",{[r.default.FIELD_MESSAGE]:"FileReader failed to readAsArrayBuffer"},r.default.LEVEL_ERROR)}}this.props.onFilesSelected(t,e)}),this.filePickerRef=e.default.createRef()}render(){let{acceptTypes:i,dataTestId:t,errorMessage:l,imageUrl:r,multiple:a,name:n,onClick:o}=this.props,{showActionPanel:c}=this.state;return e.default.createElement("div",{className:"sm-form-field-file-picker"},e.default.createElement("input",{accept:i.join(","),"data-testid":t,multiple:a,name:n,onChange:this._onInputChange,onClick:o,ref:this.filePickerRef,type:"file"}),!!c&&e.default.createElement(s.default,{onChooseFromSMClick:this._onChooseFromSMClick,onCloseClick:this._closeActionPanel,onUploadClick:this._forceClickOnFileInput}),this.props.render({errorMessage:l,imageUrl:r,onClearFilesClick:this._onClearFilesClick,onSelectFilesClick:this._onSelectFilesClick}))}_getValidFiles(e){let{acceptTypes:i,multiple:t}=this.props;if(!e.length)return[];let l=i.includes(n.IMAGE_WILDCARD_MIME_TYPE),r=i.includes(n.VIDEO_WILDCARD_MIME_TYPE),s=[],a=Array.from(e).filter(e=>{let t,a,o=this._isImage(e.type),c=this._isVideo(e.type);return o?(t=n.IMAGE_SIZE,a=n.IMAGE_SIZE_STRING):c&&(t=n.VIDEO_SIZE,a=n.VIDEO_SIZE_STRING),t&&e.size>t?(s.push({filename:e.name,reason:"Exceeds maximum size of ".concat(a,".")}),!1):!!i.includes(e.type)||(!!(o&&l&&n.ACCEPTED_IMAGE_MIME_TYPES.includes(e.type))||(!(!c||!r)||(s.push({filename:e.name,reason:"Invalid file type."}),!1)))});if(s.length)if(t)this.props.onInvalidFiles(s);else{let e=s.shift();this.props.onInvalidFiles(e)}return a}_isImage(e){return"image/"===e.substring(0,6)}_isVideo(e){return"video/"===e.substring(0,6)}_clearFileInput(){this.filePickerRef.current&&(this.filePickerRef.current.value="")}}babelHelpers.defineProperty(o,"displayName","FilePickerBehavior"),babelHelpers.defineProperty(o,"defaultProps",{acceptTypes:[n.IMAGE_WILDCARD_MIME_TYPE],multiple:!1,onChooseFromSMClick:()=>{},onFilesCleared:()=>{},onImageExtracted:()=>{},onInvalidFiles:()=>{},useActionPanel:!1}),babelHelpers.defineProperty(o,"propTypes",{acceptTypes:t.default.array,dataTestId:t.default.string,errorMessage:t.default.string,imageUrl:t.default.string,multiple:t.default.bool,name:t.default.string.isRequired,onClick:t.default.func,onChooseFromSMClick:t.default.func,onFilesCleared:t.default.func,onFilesSelected:t.default.func.isRequired,onImageExtracted:t.default.func,onInvalidFiles:t.default.func,render:t.default.func.isRequired,useActionPanel:t.default.bool});var c=o;exports.default=c}(),SM.currentModule=null}),"",{requires:["react","react-dom","sm-dom","sm-form-field-file-picker-constants","sm-form-picker-action-panel","sm-upload-utils"]});
YUI.add("sm-image-sizes-external",(function(e){SM.currentModule="sm-image-sizes-external";var exports={};SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim;!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;exports.default=class{constructor(e){e.isSmugMugResource?this._resourceDetails=e.get("ResourceDetails"):this._resourceDetails=e}cover(){let e;return e=this._isPortrait()?{maxWidth:"100%"}:{maxHeight:"100%"},{style:e,Url:this._resourceDetails.PreviewUrl}}_isPortrait(){let e=this._resourceDetails,{OriginalHeight:r,OriginalWidth:t}=e;return r||t?r>t:null}}}(),SM.currentModule=null}),"",{requires:["sm"]});
YUI.add("sm-tappable",(function(e){SM.currentModule="sm-tappable";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("prop-types")),o=babelHelpers.interopRequireDefault(t("react"));class l extends o.default.PureComponent{constructor(e){super(e),this._touchState={},this._handleClick=this._handleClick.bind(this),this._handleTouchEnd=this._handleTouchEnd.bind(this),this._handleTouchMove=this._handleTouchMove.bind(this),this._handleTouchStart=this._handleTouchStart.bind(this)}render(){let{children:e,onTap:t}=this.props;if(!t)return e;let l=o.default.Children.only(e),h=l.props,n={WebkitTapHighlightColor:this.props.tapHighlightColor};return o.default.cloneElement(l,{style:Object.assign(n,h.style),onClick:h.onClick?this._handleClick:h.onClick,onTouchEnd:t?this._handleTouchEnd:h.onTouchEnd,onTouchMove:t?this._handleTouchMove:h.onTouchMove,onTouchStart:t?this._handleTouchStart:h.onTouchStart})}_handleClick(...e){let t=this._touchState;t.touched||t.moved||o.default.Children.only(this.props.children).props.onClick(...e)}_handleTouchEnd(...e){let t=o.default.Children.only(this.props.children).props,l=this._touchState;t.onTouchEnd&&t.onTouchEnd(...e),l.moved||(e[0].persist(),l.touched=!0,l.timeout=setTimeout(()=>{l.touched=!1},500),e[0].allowClick=()=>{l.touched=!1},this.props.onTap(...e))}_handleTouchMove(...e){let t=o.default.Children.only(this.props.children).props,l=this._touchState;t.onTouchMove&&t.onTouchMove(...e);let h=e[0].touches[0];(Math.abs(l.clientX-h.clientX)>=20||Math.abs(l.clientY-h.clientY)>=20)&&(l.moved=!0)}_handleTouchStart(...e){let t=o.default.Children.only(this.props.children).props,l=this._touchState;clearTimeout(l.timeout);let h=e[0].touches[0];l.clientX=h.clientX,l.clientY=h.clientY,l.moved=!1,l.touched=!1,t.onTouchStart&&t.onTouchStart(...e)}}exports.default=l,l.displayName="Tappable",l.propTypes={children:e.default.element.isRequired,onTap:e.default.func,tapHighlightColor:e.default.string},l.defaultProps={tapHighlightColor:"rgba(0, 0, 0, 0)"}}(),SM.currentModule=null}),"",{requires:["react","react-dom","sm","sm-component-pure-render"]});
YUI.add("sm-tiles-v2-tile-image",(function(e){SM.currentModule="sm-tiles-v2-tile-image";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=l;var e=babelHelpers.interopRequireDefault(t("prop-types")),r=babelHelpers.interopRequireDefault(t("react"));function l(e){let t=Object.assign({},e.style);return e.protected&&(t.backgroundImage="url(".concat(e.url,")")),e.height&&(t.height=e.height),e.width&&(t.width=e.width),r.default.createElement("img",{className:"sm-tiles-v2-image",alt:e.alt,"data-protected":e.protected||null,src:e.protected?"/img/spacer.gif":e.url,style:t})}l.displayName="Tile.Image",l.propTypes={alt:e.default.string,height:e.default.number,protected:e.default.bool,url:e.default.string.isRequired,width:e.default.number},l.defaultProps={alt:""}}(),SM.currentModule=null}),"",{requires:["prop-types","react"]});
YUI.add("sm-tiles-v2-tile",(function(e){SM.currentModule="sm-tiles-v2-tile";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("sm-component-button")),n=babelHelpers.interopRequireDefault(t("sm-dom")),i=babelHelpers.interopRequireDefault(t("sm-icon")),s=babelHelpers.interopRequireDefault(t("sm-image-sizes")),o=babelHelpers.interopRequireDefault(t("sm-image-sizes-external")),d=babelHelpers.interopRequireDefault(t("sm-tappable")),r=babelHelpers.interopRequireDefault(t("sm-tiles-v2-tile-image"));class u extends(SM.import("sm-component-pure-render")){constructor(e){super(e),this._handleContextMenu=this._handleContextMenu.bind(this),this._handleClick=this._handleClick.bind(this),this._handleDoubleClick=this._handleDoubleClick.bind(this),this._handleTap=this._handleTap.bind(this),this._onBuyClick=this._handleButtonClick.bind(this,"onBuyClick"),this._onDownloadClick=this._handleButtonClick.bind(this,"onDownloadClick"),this._onExpandClick=this._handleButtonClick.bind(this,"onExpandClick"),this._onFavoriteClick=this._handleButtonClick.bind(this,"onFavoriteClick")}render(){let e=this.props,{linkUrl:t,width:a,height:n,infoStyle:i,hoverEffect:s,"data-testid":o}=e,r=["sm-tiles-v2-tile"].concat(e.className),c=t?"a":"div",f={height:n,width:a},m=Object.assign({},e.style,f);i===u.INFO_STYLE_OFF?r=[...r,"sm-tiles-v2-info-never"]:i===u.INFO_STYLE_UNDER&&(r=[...r,"sm-tiles-v2-info-under"],delete m.height,m={...m,minHeight:n,alignSelf:"flex-start"},s=u.HOVER_EFFECT_NONE);let E=l.default.createElement(c,{className:r.join(" "),"data-can-favorite":e.canFavorite||null,"data-disabled":e.disabled||null,"data-testid":o,"data-hidden":e.hidden||null,"data-hover-effect":s||null,"data-index":"number"==typeof e.index?e.index:null,"data-is-collected":e.isCollected||null,"data-is-favorite":e.isFavorite||null,"data-overflow":e.overflow,"data-selected":e.selected||null,"data-type":e.type,"data-id":e.uniqueId,href:e.linkUrl||null,style:m,title:e.title||null,onContextMenu:this._handleContextMenu,onClick:this._handleClick,onDoubleClick:this._handleDoubleClick},this._renderContent(),this._renderMeta());return e.onTap?l.default.createElement(d.default,{onTap:this._handleTap},E):E}_renderContent(){let e,t=this.props,a={};return t.imageUrl?e=l.default.createElement(r.default,{alt:t.title||"",height:t.imageHeight,protected:t.protected,style:t.imageStyle,url:t.imageUrl,width:t.imageWidth}):t.contentIcon&&(e=l.default.createElement("div",null,l.default.createElement(i.default,{className:"sm-tiles-v2-content-icon",name:t.contentIcon,size:t.contentIconSize||i.default.SIZE_LARGE}),t.contentIconLabel&&l.default.createElement("p",{className:"sm-tiles-v2-content-icon-label"},t.contentIconLabel))),t.infoStyle===u.INFO_STYLE_UNDER&&(a={width:t.width,height:t.height}),l.default.createElement("div",{style:a,className:"sm-tiles-v2-content sm-flex sm-flex-items-center sm-flex-justify-center"},e)}_renderMeta(){let e=this._renderMetaBottom(),t=this._renderMetaOver(),a=this._renderMetaTop();if(a||e||t)return l.default.createElement("div",{className:"sm-tiles-v2-meta"},l.default.createElement("div",{className:"sm-tiles-v2-meta-under"},a,e),t)}_renderMetaBottom(){let e=this.props,t=e.showCaption&&e.caption,a=e.showTitle&&e.title;if(t||a)return l.default.createElement("div",{className:"sm-tiles-v2-meta-bottom sm-flex","data-alignment":e.infoAlignment},a&&l.default.createElement("div",{className:"sm-tiles-v2-meta-title"},e.title),t&&l.default.createElement("div",{className:"sm-tiles-v2-meta-caption"},e.caption))}_renderMetaHidden(){if(this.props.hidden)return l.default.createElement("div",{className:"sm-tiles-v2-meta-hidden sm-flex sm-flex-justify-center sm-flex-items-center"},l.default.createElement(i.default,{name:"Hide",size:i.default.SIZE_SMALL}))}_renderMetaOver(){let e=this._renderMetaSelected(),t=this._renderMetaHidden();if(t||e)return l.default.createElement("div",{className:"sm-tiles-v2-meta-over"},t,e)}_renderMetaSelected(){if(this.props.selected)return l.default.createElement("div",{className:"sm-tiles-v2-meta-selected sm-flex sm-flex-justify-center sm-flex-items-center"},l.default.createElement(i.default,{name:"Checkmark",size:i.default.SIZE_SMALL}))}_renderMetaTop(){let e=this.props;if(e.disabled)return;let t=e.showBuyButton&&e.canBuy,n=e.showCollectedIcon&&e.isCollected,s=e.showDownloadButton&&e.canDownload,o=e.showExpandButton,r=e.showFavoriteButton&&e.canFavorite,c=e.showMetaIcon&&e.metaIcon;if(!(c||t||s||o||r||n))return;let f={};e.infoStyle===u.INFO_STYLE_UNDER&&(f={marginTop:-1*e.height});let m=n||c;return l.default.createElement("div",{className:"sm-tiles-v2-meta-top sm-flex sm-flex-justify-between sm-flex-items-center",style:f},m&&l.default.createElement("div",{className:"sm-tiles-v2-meta-top-left sm-flex sm-flex-items-center"},n&&l.default.createElement(i.default,{className:"sm-tiles-v2-meta-collected-icon",name:"ActionRedo",size:i.default.SIZE_SMALL}),c&&l.default.createElement(i.default,{className:"sm-tiles-v2-meta-icon",name:e.metaIcon,size:i.default.SIZE_SMALL}),e.metaIconLabel&&l.default.createElement("div",{className:"sm-tiles-v2-meta-icon-label"},e.metaIconLabel)),l.default.createElement("div",{className:"sm-tiles-v2-meta-top-right"},o&&l.default.createElement(d.default,{onTap:this._onExpandClick},l.default.createElement(a.default,{className:"sm-tiles-v2-button",noChrome:!0,size:"small",value:"expand",onClick:this._onExpandClick,title:"Expand Image"},l.default.createElement(i.default,{name:"FullScreen",size:i.default.SIZE_SMALL}))),s&&l.default.createElement(d.default,{onTap:this._onDownloadClick},l.default.createElement(a.default,{className:"sm-tiles-v2-button",noChrome:!0,size:"small",value:"download",onClick:this._onDownloadClick,title:"Download original"},l.default.createElement(i.default,{className:"sm-tiles-v2-download-icon",name:"Download",size:i.default.SIZE_SMALL}))),t&&l.default.createElement(a.default,{className:"sm-tiles-v2-button",noChrome:!0,size:"small",value:"buy",onClick:this._onBuyClick,title:"Buy"},l.default.createElement(i.default,{className:"sm-tiles-v2-buy-icon",name:"Cart",size:i.default.SIZE_SMALL})),r&&l.default.createElement(a.default,{className:"sm-tiles-v2-button",noChrome:!0,size:"small",value:"favorite",onClick:this._onFavoriteClick},l.default.createElement(i.default,{className:"sm-tiles-v2-favorite-icon",name:e.isFavorite?"Star":"Star2"}))))}_handleButtonClick(e,t){t.button>0||(t.preventDefault(),t.stopPropagation(),this.props[e]&&this.props[e](t,this.props.uniqueId))}_handleClick(e){this.props.disabled?e.preventDefault():this.props.onClick&&(e.preventDefault(),this.props.onClick(e,this.props.uniqueId))}_handleDoubleClick(e){e.preventDefault(),this.props.disabled||this.props.onDoubleClick&&this.props.onDoubleClick(e,this.props.uniqueId)}_handleContextMenu(e){this.props.protected&&(e.preventDefault(),SM.import("sm-page-tooltip").showAtXY(SM.env.rightClickMessage,e.pageX,e.pageY,{className:"sm-right-click-message"}))}_handleTap(e){this.props.disabled?e.preventDefault():n.default.closest(e.target,".sm-tiles-v2-button")?e.allowClick():this.props.onTap(e,this.props.uniqueId)}}exports.default=u,u.HOVER_EFFECT_NONE="none",u.HOVER_EFFECT_HIDE="hide",u.HOVER_EFFECT_SHOW="show",u.INFO_STYLE_OFF="never",u.INFO_STYLE_UNDER="after",u.INFO_STYLE_BOTTOM_BAR="over",u.OVERFLOW_CONTAIN="contain",u.OVERFLOW_CROP="crop",u.INFO_ALIGNMENT_LEFT="left",u.INFO_ALIGNMENT_CENTER="center",u.INFO_ALIGNMENT_RIGHT="right",u.TYPE_ARCHIVE="archive",u.TYPE_NODE="node",u.TYPE_PHOTO="photo",u.TYPE_VIDEO="video",u.TYPE_EXTERNAL_FOLDER="externalFolder",u.TYPE_EXTERNAL_PHOTO="externalPhoto",u.TYPE_EXTERNAL_VIDEO="externalVideo",u.itemPropTypes={caption:e.default.string,canBuy:e.default.bool,canDownload:e.default.bool,canFavorite:e.default.bool,contentIcon:e.default.string,contentIconSize:e.default.oneOf([i.default.SIZE_LARGE,i.default.SIZE_SMALL]),contentIconLabel:e.default.string,hidden:e.default.bool,imageSizes:e.default.oneOfType([e.default.instanceOf(s.default),e.default.instanceOf(o.default)]),isCollected:e.default.bool,isFavorite:e.default.bool,linkUrl:e.default.string,metaIcon:e.default.string,metaIconLabel:e.default.string,protected:e.default.bool,title:e.default.string,type:e.default.oneOf([u.TYPE_ARCHIVE,u.TYPE_NODE,u.TYPE_PHOTO,u.TYPE_VIDEO,u.TYPE_EXTERNAL_FOLDER,u.TYPE_EXTERNAL_PHOTO,u.TYPE_EXTERNAL_VIDEO]),uniqueId:e.default.string.isRequired,"data-testid":e.default.string},u.propTypes=Object.assign({className:e.default.oneOfType([e.default.arrayOf(e.default.string),e.default.string]),disabled:e.default.bool,height:e.default.number,hoverEffect:e.default.oneOf([u.HOVER_EFFECT_NONE,u.HOVER_EFFECT_HIDE,u.HOVER_EFFECT_SHOW]),imageHeight:e.default.number,imageStyle:e.default.object,imageUrl:e.default.string,imageWidth:e.default.number,index:e.default.number,infoAlignment:e.default.oneOf([u.INFO_ALIGNMENT_LEFT,u.INFO_ALIGNMENT_CENTER,u.INFO_ALIGNMENT_RIGHT]),infoStyle:e.default.oneOf([u.INFO_STYLE_OFF,u.INFO_STYLE_UNDER,u.INFO_STYLE_BOTTOM_BAR]),overflow:e.default.oneOf([u.OVERFLOW_CONTAIN,u.OVERFLOW_CROP]),selected:e.default.bool,showBuyButton:e.default.bool,showCaption:e.default.bool,showCollectedIcon:e.default.bool,showDownloadButton:e.default.bool,showExpandButton:e.default.bool,showFavoriteButton:e.default.bool,showMetaIcon:e.default.bool,showTitle:e.default.bool,style:e.default.object,width:e.default.number,onBuyClick:e.default.func,onClick:e.default.oneOfType([e.default.func,e.default.oneOf([!1])]),onDownloadClick:e.default.func,onExpandClick:e.default.func,onDoubleClick:e.default.func,onFavoriteClick:e.default.func,onTap:e.default.func},u.itemPropTypes),u.itemDefaultProps={type:u.TYPE_PHOTO},u.defaultProps=Object.assign({className:[],disabled:!1,height:240,hoverEffect:u.HOVER_EFFECT_HIDE,infoAlignment:u.INFO_ALIGNMENT_LEFT,infoStyle:u.INFO_STYLE_BOTTOM_BAR,overflow:u.OVERFLOW_CONTAIN,style:{},width:240},u.itemDefaultProps)}(),SM.currentModule=null}),"",{requires:["prop-types","react","sm-component-button","sm-dom","sm-component-icon","sm-icon","sm-image-sizes","sm-image-sizes-external","sm-tappable","sm-tiles-v2-tile-image"]});
YUI.add("sm-component-upload-button",(function(e){SM.currentModule="sm-component-upload-button";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),l=babelHelpers.interopRequireDefault(t("prop-types")),a=babelHelpers.interopRequireDefault(t("classnames")),r=babelHelpers.interopRequireDefault(t("sm-component-button")),s=babelHelpers.interopRequireDefault(t("sm-icon")),i=babelHelpers.interopRequireDefault(t("sm-image-sizes")),o=babelHelpers.interopRequireDefault(t("sm-progressbar")),u=babelHelpers.interopRequireDefault(t("sm-tiles-v2-tile"));class n extends e.default.PureComponent{constructor(...e){super(...e),babelHelpers.defineProperty(this,"state",{coveredImg:{}}),babelHelpers.defineProperty(this,"_createImageSizesObj",()=>{let{imageUrl:e,imageWidth:t,imageHeight:l}=this.props,a={ImageSizeOriginal:{Url:e,Width:t,Height:l},UsableSizes:["ImageSizeOriginal"]},r=new i.default(a).cover(60,60);this.setState({coveredImg:r})})}componentDidMount(){this._createImageSizesObj()}componentDidUpdate(e){let{imageUrl:t}=this.props;t!==e.imageUrl&&this._createImageSizesObj()}render(){let{primaryUpload:t,complete:l,errorMessage:i,heading:n,imageUrl:m,imageWidth:d,imageHeight:p,isUploading:c,onSelectFilesClick:f,percentComplete:b,placeholderIcon:g,subtext:h,...U}=this.props,{coveredImg:H}=this.state,S=(0,a.default)("sm-upload-button-preview-img",{"sm-upload-button-placeholder":!H.Url});return e.default.createElement(e.default.Fragment,null,e.default.createElement(r.default,babelHelpers.extends({className:"".concat(t?"sm-upload-primary":""," sm-upload-button sm-flex sm-flex-justify-between sm-flex-items-center sm-flex-wrap"),title:n,"data-complete":l,"data-error":!!i||null,onClick:f,size:"huge"},U),e.default.createElement("div",{className:"sm-flex sm-flex-items-center sm-upload-button-img-text"},e.default.createElement(u.default,{className:S,uniqueId:H.Url||"placeholder",key:H.Url||"placeholder",imageUrl:H.Url,overflow:"crop",imageWidth:H.DisplayWidth,imageHeight:H.DisplayHeight,width:60,height:60,contentIcon:g}),e.default.createElement("div",{className:"sm-upload-button-text"},e.default.createElement("p",{className:"sm-upload-button-heading"},n),e.default.createElement("p",{className:"sm-upload-button-subtext"},h))),e.default.createElement(s.default,{className:"sm-upload-indicator",name:"PlusSlim",size:"small"}),c&&e.default.createElement(o.default,{percentComplete:b||null})),i&&e.default.createElement("div",{className:"sm-form-field-error-msg sm-upload-button-error"},i))}}n.displayName="UploadButton",n.propTypes={primaryUpload:l.default.bool,complete:l.default.bool,errorMessage:l.default.string,heading:l.default.string.isRequired,imageUrl:l.default.string,imageWidth:l.default.number,imageHeight:l.default.number,isUploading:l.default.bool,onSelectFilesClick:l.default.func.isRequired,orientation:l.default.number,percentComplete:l.default.number,placeholderIcon:l.default.string,subtext:l.default.string},n.defaultProps={placeholderIcon:"Gallery"};var m=n;exports.default=m}(),SM.currentModule=null}),"",{requires:["react","react-dom","sm","sm-component-button","sm-icon","sm-tiles-v2-tile","sm-progressbar"]});
YUI.add("invariant",(function(r){SM.currentModule="invariant";var module=SM.modules[SM.currentModule]={exports:{},name:SM.currentModule};SM._requireShim;!function(){"use strict";module.exports=function(r,e,n,i,o,t,a,u){if(void 0===e)throw new Error("invariant requires an error message argument");if(!r){var d;if(void 0===e)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,i,o,t,a,u],l=0;(d=new Error(e.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw d.framesToPop=1,d}}}(),SM.currentModule=null}),"",{requires:[],node_modules:!0});