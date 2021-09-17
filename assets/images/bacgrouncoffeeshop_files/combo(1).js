YUI.add("sm-content-wizard-add-info-bg-img-ui",(function(e){SM.currentModule="sm-content-wizard-add-info-bg-img-ui";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("prop-types")),n=babelHelpers.interopRequireDefault(t("sm-content-wizard-upload-button-container")),r=t("sm-content-wizard-constants"),o=t("sm-content-wizard-helpers");const d=t=>{let{isExperimentDesign:a,errorMessage:d,markComplete:l,onImageExtracted:u,onImageSelected:i,percentComplete:s,thumbnailUrl:c,uploadStatus:p}=t,m=(0,o.calcUploadButtonLabel)("Homepage Background Photo",p),f=r.ADDITIONAL_CONTENT_UPLOAD_INFO_TEXT[r.UPLOAD_TYPES.BACKGROUND_IMAGE];return e.default.createElement("div",{className:"sm-cw-add-info-section"},e.default.createElement(n.default,{secondaryUpload:a,complete:l,dataTestIdPrefix:"contentwiz_uploadbackgroundimg_",errorMessage:d,heading:m,infoText:f,name:"backgroundImageUpload",onFilesSelected:i,onImageExtracted:u,percentComplete:s,thumbnailUrl:c,uploadStatus:p,uploadType:r.UPLOAD_TYPES.BACKGROUND_IMAGE}))};d.displayName="ContentWizard.AddInfo.BackgroundImage",d.propTypes={isExperimentDesign:a.default.bool,errorMessage:a.default.string,markComplete:a.default.bool,onImageExtracted:a.default.func.isRequired,onImageSelected:a.default.func.isRequired,uploadStatus:a.default.oneOf(r.UPLOAD_STATUSES).isRequired,percentComplete:a.default.number,thumbnailUrl:a.default.string};var l=d;exports.default=l}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-content-wizard-upload-button-container","sm-content-wizard-constants","sm-content-wizard-helpers"]});
YUI.add("sm-content-wizard-add-info-display-name-ui",(function(e){SM.currentModule="sm-content-wizard-add-info-display-name-ui";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("prop-types")),r=babelHelpers.interopRequireDefault(t("sm-component-overheadformfield")),l=babelHelpers.interopRequireDefault(t("sm-component-textbox"));class s extends e.default.PureComponent{constructor(...e){super(...e),babelHelpers.defineProperty(this,"state",{error:this.props.displayNameValue?null:"How should your name be displayed on your site? Add it here.",displayNameOnFocus:null}),babelHelpers.defineProperty(this,"_onFocus",()=>{this.setState({displayNameOnFocus:this.props.displayNameValue})}),babelHelpers.defineProperty(this,"_onBlur",()=>{let{displayNameValue:e,onTrackEvent:t}=this.props,{displayNameOnFocus:a}=this.state,r=e?null:"How should your name be displayed on your site? Add it here.";this.setState({error:r}),a!==e&&t("Edit Display Name",null,r)})}render(){let{onDisplayNameChange:t,displayNameValue:a}=this.props;return e.default.createElement("div",{className:"sm-cw-add-info-section"},e.default.createElement(r.default,{tooltip:"Display name will show up on your site. Use one that you want your visitors to see.",label:"Display Name",error:this.state.error},e.default.createElement(l.default,{name:"displayName",onBlur:this._onBlur,onChange:t,onFocus:this._onFocus,size:"large",type:"text",value:a,maxLength:100,"data-testid":"contentwiz_displayname_field"})))}}babelHelpers.defineProperty(s,"displayName","ContentWizard.AddInfo.DisplayName"),babelHelpers.defineProperty(s,"propTypes",{displayNameValue:a.default.string.isRequired,onDisplayNameChange:a.default.func.isRequired,onTrackEvent:a.default.func.isRequired});var o=s;exports.default=o}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-component-overheadformfield","sm-component-textbox"]});
YUI.add("sm-content-wizard-add-info-gallery-ui",(function(e){SM.currentModule="sm-content-wizard-add-info-gallery-ui";var exports={},l=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(l("react")),a=babelHelpers.interopRequireDefault(l("prop-types")),t=babelHelpers.interopRequireDefault(l("sm-icon")),r=babelHelpers.interopRequireDefault(l("sm-component-overheadformfield")),n=babelHelpers.interopRequireDefault(l("sm-component-textbox")),o=babelHelpers.interopRequireDefault(l("sm-content-wizard-upload-button-container")),s=l("sm-content-wizard-constants"),i=l("sm-content-wizard-helpers"),u=l("sm-node-settings-constants");class d extends e.default.PureComponent{constructor(...e){super(...e),babelHelpers.defineProperty(this,"state",{galleryNameOnFocus:null,galleryNameError:this.props.galleryNameValue?null:"Your gallery needs a name."}),babelHelpers.defineProperty(this,"_onGalleryNameFocus",()=>{this.setState({galleryNameOnFocus:this.props.galleryNameValue})}),babelHelpers.defineProperty(this,"_onGalleryNameBlur",()=>{let{galleryNameValue:e,onTrackEvent:l}=this.props,{galleryNameOnFocus:a}=this.state,t=e?null:"Your gallery needs a name.";this.setState({galleryNameError:t}),a!==e&&l("Edit Gallery Name",null,t)}),babelHelpers.defineProperty(this,"_onGalleryIconClick",()=>{this.props.onTrackEvent("Confusion Click","Gallery Icon")})}render(){let{acceptTypes:l,isExperimentDesign:a,firstGalleryType:d,galleryNameValue:c,galleryUploadError:p,onFilesSelected:m,onGalleryFilePickerError:f,onGalleryNameChange:y,onImageExtracted:E,percentComplete:g,thumbnailUrl:b,uploadStatus:T,uploadsCompleted:_,uploadsTotal:S}=this.props,h=(0,i.mapGalleryDescription)(d),N=(0,i.calcUploadButtonLabel)("Photos or Videos",T,!0),G=s.FIRST_GALLERY_UPLOAD_INFO_TEXT[d],P="Required";if(s.UPLOAD_STATUS_EMPTY!==T){let e,l=T===s.UPLOAD_STATUS_UPLOADING,a=T===s.UPLOAD_STATUS_WAITING,t=T===s.UPLOAD_STATUS_COMPLETE,r=T===s.UPLOAD_STATUS_ERROR;e=l||a||r?"".concat(_,"/").concat(S):S;let n="File".concat(t&&1===S?"":"s");P="".concat(e," ").concat(n," Uploaded")}return e.default.createElement("div",{className:"sm-cw-add-info-section sm-cw-add-info-gallery"},!a&&e.default.createElement("div",{className:"sm-cw-add-info-gallery-icon sm-flex",onClick:this._onGalleryIconClick},e.default.createElement(t.default,{name:"Gallery",size:t.default.SIZE_LARGE})),e.default.createElement("h2",{className:"sm-text-center"},"Create Your First Gallery"),e.default.createElement("p",{className:"sm-text-center"},h),e.default.createElement(r.default,{label:"Gallery Name",error:this.state.galleryNameError},e.default.createElement(n.default,{name:"galleryName",onBlur:this._onGalleryNameBlur,onChange:y,onFocus:this._onGalleryNameFocus,size:"large",type:"text",value:c,maxLength:u.NODE_NAME_MAX_LENGTH,"data-testid":"contentwiz_galleryname_field"})),e.default.createElement(o.default,{acceptTypes:l,primaryUpload:a,dataTestIdPrefix:"contentwiz_uploadgallery_",errorMessage:p,heading:N,infoText:G,multiple:!0,name:"galleryUpload",onFilesSelected:m,onGalleryFilePickerError:f,onImageExtracted:E,percentComplete:g,placeholderIcon:"Gallery",subtext:P,thumbnailUrl:b,uploadsCompleted:_,uploadStatus:T,uploadType:s.UPLOAD_TYPES.GALLERY}))}}babelHelpers.defineProperty(d,"displayName","ContentWizard.AddInfo.Gallery"),babelHelpers.defineProperty(d,"propTypes",{acceptTypes:a.default.array.isRequired,isExperimentDesign:a.default.bool,firstGalleryType:a.default.oneOf(s.FIRST_GALLERY_TYPE_VALUES).isRequired,galleryNameValue:a.default.string.isRequired,galleryUploadError:a.default.string,onGalleryFilePickerError:a.default.func.isRequired,onFilesSelected:a.default.func.isRequired,onGalleryNameChange:a.default.func.isRequired,onImageExtracted:a.default.func.isRequired,onTrackEvent:a.default.func.isRequired,percentComplete:a.default.number,thumbnailUrl:a.default.string,uploadStatus:a.default.oneOf(s.UPLOAD_STATUSES).isRequired,uploadsCompleted:a.default.number,uploadsTotal:a.default.number});var c=d;exports.default=c}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-icon","sm-component-overheadformfield","sm-component-textbox","sm-content-wizard-upload-button-container","sm-content-wizard-constants","sm-content-wizard-helpers","sm-node-settings-constants"]});
YUI.add("sm-content-wizard-add-info-footer",(function(e){SM.currentModule="sm-content-wizard-add-info-footer";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("prop-types")),n=babelHelpers.interopRequireDefault(t("classnames")),o=babelHelpers.interopRequireDefault(t("sm-component-button"));const l=t=>{let{onCancelClick:a,onSubmitClick:l,showBackButton:u,stackButtons:r}=t,s=(0,n.default)({"sm-button-stacked-group":r,"sm-cw-add-info-container":!0,"sm-flex-justify-between":u,"sm-flex-justify-center":!u,"sm-flex-large-and-up":!0,"sm-flex-row-reverse":u}),c=(0,n.default)({"sm-button-full-width":r});return e.default.createElement("footer",{className:"sm-cw-add-info-footer"},e.default.createElement("div",{className:s},e.default.createElement(o.default,{onClick:l,className:c,skin:"accent",size:"huge","data-testid":"contentwiz_continue_button"},"Show Me My ",u?"Site":"Gallery"),u&&e.default.createElement(o.default,{onClick:a,className:c,size:"huge","data-testid":"contentwiz_back_button"},"Back To Templates")))};l.displayName="ContentWizard.AddInfo.Footer",l.propTypes={onCancelClick:a.default.func.isRequired,onSubmitClick:a.default.func.isRequired,showBackButton:a.default.bool,stackButtons:a.default.bool};var u=l;exports.default=u}(),SM.currentModule=null}),"",{requires:["react","prop-types","classnames","sm-component-button"]});
YUI.add("sm-content-wizard-add-info-template-preview",(function(e){SM.currentModule="sm-content-wizard-add-info-template-preview";var exports={},a=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(a("react")),t=babelHelpers.interopRequireDefault(a("prop-types")),r=babelHelpers.interopRequireDefault(a("sm-icon"));const l=a=>{let{onClick:t,previewDesignName:l,previewImageUrl:i,showHeading:n}=a;return e.default.createElement("div",{className:"sm-cw-add-info-template-preview-container",onClick:t},n&&e.default.createElement("h5",null,"Your Design"),e.default.createElement("div",{className:"sm-cw-add-info-template-preview"},i&&e.default.createElement("img",{src:i,alt:l}),!i&&e.default.createElement("div",{className:"sm-cw-template-image-placeholder"},e.default.createElement("div",{className:"sm-cw-template-image-placeholder-message"},e.default.createElement(r.default,{name:"Warning",size:r.default.SIZE_LARGE}),e.default.createElement("span",null,"Missing preview image")))))};l.displayName="ContentWizard.AddInfo.TemplatePreview",l.propTypes={previewDesignName:t.default.string.isRequired,previewImageUrl:t.default.string.isRequired,showHeading:t.default.bool.isRequired};var i=l;exports.default=i}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-icon"]});
YUI.add("sm-content-wizard-add-info-logo-ui",(function(e){SM.currentModule="sm-content-wizard-add-info-logo-ui";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("prop-types")),o=babelHelpers.interopRequireDefault(t("sm-content-wizard-upload-button-container")),n=t("sm-content-wizard-constants"),r=t("sm-content-wizard-helpers");const l=t=>{let{isExperimentDesign:a,errorMessage:l,onImageExtracted:d,onImageSelected:u,percentComplete:i,thumbnailUrl:s,uploadStatus:c}=t,p=a?(0,r.calcUploadButtonLabelSansUpload)("Your Logo",c):(0,r.calcUploadButtonLabel)("Your Logo",c);return e.default.createElement("div",{className:"sm-cw-add-info-section"},e.default.createElement(o.default,{secondaryUpload:a,dataTestIdPrefix:"contentwiz_uploadlogo_",tooltip:"You can customize the size, shape and its position in the next step.",errorMessage:l,heading:p,name:"logoImageUpload",onFilesSelected:u,onImageExtracted:d,percentComplete:i,thumbnailUrl:s,uploadStatus:c,uploadType:n.UPLOAD_TYPES.LOGO_IMAGE}))};l.displayName="ContentWizard.AddInfo.Logo",l.propTypes={isExperimentDesign:a.default.bool,errorMessage:a.default.string,onImageExtracted:a.default.func.isRequired,onImageSelected:a.default.func.isRequired,percentComplete:a.default.number,thumbnailUrl:a.default.string,uploadStatus:a.default.oneOf(n.UPLOAD_STATUSES).isRequired};var d=l;exports.default=d}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-content-wizard-upload-button-container","sm-content-wizard-constants","sm-content-wizard-helpers"]});
YUI.add("sm-content-wizard-add-info-profile-ui",(function(e){SM.currentModule="sm-content-wizard-add-info-profile-ui";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("prop-types")),o=babelHelpers.interopRequireDefault(t("sm-content-wizard-upload-button-container")),r=t("sm-content-wizard-constants"),l=t("sm-content-wizard-helpers");const n=t=>{let{isExperimentDesign:a,coverErrorMessage:n,coverImageThumbnailUrl:d,coverPercentComplete:i,coverUploadStatus:u,profileErrorMessage:s,profileImageThumbnailUrl:c,profilePercentComplete:p,profileUploadStatus:f,onImageExtracted:m,onImageSelected:U}=t,S=a?(0,l.calcUploadButtonLabelSansUpload)("Profile Photo",f):(0,l.calcUploadButtonLabel)("Profile Photo",f),g=a?(0,l.calcUploadButtonLabelSansUpload)("Cover Photo",u):(0,l.calcUploadButtonLabel)("Cover Photo",u),E=r.ADDITIONAL_CONTENT_UPLOAD_INFO_TEXT[r.UPLOAD_TYPES.COVER_IMAGE];return e.default.createElement("div",{className:"sm-cw-add-info-section"},e.default.createElement(o.default,{secondaryUpload:a,dataTestIdPrefix:"contentwiz_uploadprofile_",heading:S,name:"profileImageUpload",onFilesSelected:U,onImageExtracted:m,percentComplete:p,thumbnailUrl:c,uploadStatus:f,uploadType:r.UPLOAD_TYPES.PROFILE_IMAGE,placeholderIcon:a?void 0:"Person",errorMessage:s}),e.default.createElement(o.default,{secondaryUpload:a,dataTestIdPrefix:"contentwiz_uploadcover_",heading:g,infoText:E,name:"coverImageUpload",onFilesSelected:U,onImageExtracted:m,percentComplete:i,thumbnailUrl:d,uploadStatus:u,uploadType:r.UPLOAD_TYPES.COVER_IMAGE,errorMessage:n}))};n.displayName="ContentWizard.AddInfo.Profile",n.propTypes={isExperimentDesign:a.default.bool,coverErrorMessage:a.default.string,coverImageThumbnailUrl:a.default.string,coverPercentComplete:a.default.number,coverUploadStatus:a.default.oneOf(r.UPLOAD_STATUSES).isRequired,profileErrorMessage:a.default.string,profileImageThumbnailUrl:a.default.string,profilePercentComplete:a.default.number,profileUploadStatus:a.default.oneOf(r.UPLOAD_STATUSES).isRequired,onImageSelected:a.default.func.isRequired,onImageExtracted:a.default.func.isRequired};var d=n;exports.default=d}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-content-wizard-upload-button-container","sm-content-wizard-constants","sm-content-wizard-helpers"]});
YUI.add("sm-content-wizard-add-info-social-input",(function(e){SM.currentModule="sm-content-wizard-add-info-social-input";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),r=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireDefault(t("sm-uri-deprecated")),i=t("sm-uri-helpers-deprecated"),a=babelHelpers.interopRequireDefault(t("sm-icon")),s=babelHelpers.interopRequireDefault(t("sm-component-affixedtextbox"));class o extends e.default.PureComponent{constructor(...e){super(...e),babelHelpers.defineProperty(this,"state",{error:this._validateUrl(),isFilled:!!this.props.value,isFocused:!1,valueOnFocus:null}),babelHelpers.defineProperty(this,"_onInputFocus",()=>{this.setState({isFocused:!0,valueOnFocus:this.props.value})}),babelHelpers.defineProperty(this,"_onInputBlur",()=>{let{valueOnFocus:e}=this.state,{fieldName:t,onTrackEvent:r,value:l}=this.props,i=this._validateUrl();this.setState({error:i,isFilled:!!l,isFocused:!1}),e!==l&&r("Edit Social Media",t,i)}),babelHelpers.defineProperty(this,"_onFieldChange",e=>{let t=this.props.fieldName,r=e.target.value;this.props.onSetSocialInfoField(t,r)})}render(){let{error:t,isFilled:r,isFocused:l}=this.state,{fieldName:i,focusedPlaceholder:o,iconName:n,placeholder:u,value:d}=this.props;return e.default.createElement(s.default,{iconPrefix:e.default.createElement(a.default,{name:n,size:a.default.SIZE_LARGE,className:"sm-icon-prefix"}),name:i,type:"url",onBlur:this._onInputBlur,onChange:this._onFieldChange,onFocus:this._onInputFocus,placeholder:l?o:u,size:"large",value:d,"data-testid":"contentwiz_".concat(i,"_field"),complete:r&&!t,error:t})}_validateUrl(){let e;if(this.props.value){let t=this.props.value,r=new l.default(t);r.protocol||(t="http://".concat(this.props.value),this.props.onSetSocialInfoField(this.props.fieldName,t),r=new l.default(t)),e=(0,i.checkUrl)(t)?null:"Enter a valid URL for your ".concat(this.props.placeholder," page.")}return e}}babelHelpers.defineProperty(o,"displayName","ContentWizard.AddInfo.Social.Input"),babelHelpers.defineProperty(o,"propTypes",{fieldName:r.default.string.isRequired,focusedPlaceholder:r.default.string.isRequired,iconName:r.default.string.isRequired,onSetSocialInfoField:r.default.func.isRequired,onTrackEvent:r.default.func.isRequired,placeholder:r.default.string.isRequired,value:r.default.string.isRequired});var n=o;exports.default=n}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-uri-deprecated","sm-uri-helpers-deprecated","sm-icon","sm-component-affixedtextbox"]});
YUI.add("sm-content-wizard-add-info-social-input-container",(function(e){SM.currentModule="sm-content-wizard-add-info-social-input-container";var exports={},n=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n("react-redux"),t=babelHelpers.interopRequireDefault(n("sm-content-wizard-add-info-social-input")),o=n("sm-content-wizard-actions"),i=n("sm-content-wizard-selectors");var a=(0,e.connect)((e,n)=>({value:(0,i.getSocialLink)(e,n.fieldName)}),e=>({onSetSocialInfoField:(n,t)=>{e((0,o.setSocialInfoField)(n,t))},onTrackEvent:(n,t,i)=>{e((0,o.trackEvent)(n,t,i))}}))(t.default);exports.default=a}(),SM.currentModule=null}),"",{requires:["react-redux","sm-content-wizard-add-info-social-input","sm-content-wizard-actions","sm-content-wizard-selectors"]});
YUI.add("sm-content-wizard-add-info-social-ui",(function(e){SM.currentModule="sm-content-wizard-add-info-social-ui";var exports={},t=(SM.modules[SM.currentModule]={exports,name:SM.currentModule},SM._requireShim);!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=babelHelpers.interopRequireDefault(t("react")),a=babelHelpers.interopRequireDefault(t("prop-types")),l=babelHelpers.interopRequireDefault(t("sm-component-button")),o=babelHelpers.interopRequireDefault(t("sm-icon")),r=babelHelpers.interopRequireDefault(t("sm-tooltip-hoc")),s=babelHelpers.interopRequireDefault(t("sm-content-wizard-add-info-social-input-container"));const i=(0,r.default)("div"),n=[{fieldName:"facebook",focusedPlaceholder:"https://www.facebook.com/UserName",iconName:"FacebookSquare",placeholder:"Facebook"},{fieldName:"twitter",focusedPlaceholder:"https://twitter.com/UserName",iconName:"Twitter",placeholder:"Twitter"},{fieldName:"instagram",focusedPlaceholder:"https://www.instagram.com/UserName",iconName:"Instagram",placeholder:"Instagram"},{fieldName:"pinterest",focusedPlaceholder:"https://www.pinterest.com/UserName",iconName:"Pinterest",placeholder:"Pinterest"},{fieldName:"fiveHundredPx",focusedPlaceholder:"https://500px.com/UserName",iconName:"500px",placeholder:"500px"},{fieldName:"flickr",focusedPlaceholder:"https://www.flickr.com/photos/UserName",iconName:"Flickr",placeholder:"Flickr"},{fieldName:"youTube",focusedPlaceholder:"https://www.youtube.com/UserName",iconName:"YouTube",placeholder:"YouTube"}];class d extends e.default.PureComponent{constructor(...t){super(...t),babelHelpers.defineProperty(this,"state",{showInputs:!1}),babelHelpers.defineProperty(this,"_onShowInputs",()=>{this.setState({showInputs:!0}),this.props.onTrackEvent("Add Social Media Links")}),babelHelpers.defineProperty(this,"_renderSocialInputs",()=>e.default.createElement("div",{className:"sm-cw-add-social-inputs"},n.map(t=>e.default.createElement(s.default,babelHelpers.extends({key:t.fieldName},t)))))}static getDerivedStateFromProps(e){return e.hasEnteredSocialInfo?{showInputs:!0}:null}render(){let{showInputs:t}=this.state;return e.default.createElement("div",{className:"sm-cw-add-info-section"},this.props.isExperimentDesign&&e.default.createElement(e.default.Fragment,null,e.default.createElement("div",{className:"sm-cw-add-info-social-label"},e.default.createElement("p",null,"Social Media Links"),e.default.createElement(i,{className:"sm-cw-add-info-social-tooltip",tooltipLabel:"The links you put in will become social icons on your site.",tooltipAlignment:i.TOOLTIP_ALIGN_RIGHT},e.default.createElement(o.default,{name:"HelpEncircled",size:o.default.SIZE_SMALL})))),!t&&e.default.createElement(l.default,{className:"sm-button-full-width",onClick:this._onShowInputs,"data-testid":"contentwiz_addsocial_button"},e.default.createElement(o.default,{name:"PlusSlim",size:o.default.SIZE_SMALL}),e.default.createElement("span",{className:"sm-button-label"},"Add Social Media Links")),!!t&&this._renderSocialInputs())}}babelHelpers.defineProperty(d,"displayName","ContentWizard.AddInfo.Social"),babelHelpers.defineProperty(d,"propTypes",{isExperimentDesign:a.default.bool,hasEnteredSocialInfo:a.default.bool,onTrackEvent:a.default.func.isRequired}),d.SOCIAL_INPUTS=n;var c=d;exports.default=c}(),SM.currentModule=null}),"",{requires:["react","prop-types","sm-component-button","sm-icon","sm-tooltip-hoc","sm-content-wizard-add-info-social-input-container"]});