"use strict";(globalThis.webpackChunktinode_webapp=globalThis.webpackChunktinode_webapp||[]).push([[520],{1520:(e,d,a)=>{a.r(d),a.d(d,{default:()=>h});var t=a(6376),o=a.n(t),i=a(6648),l=a(8224),s=a(4048),c=a(4652);const r=(0,i.defineMessages)({password_reset_email_sent:{id:"password_reset_email_sent",defaultMessage:"An email with security code has been sent.",description:"Notification that the email with password reset instructions has been sent"},password_reset_sms_sent:{id:"password_reset_sms_sent",defaultMessage:"A text message with security code has been sent.",description:"Notification that the SMS with password reset instructions has been sent"}});class n extends o().PureComponent{constructor(e){super(e),this.state={tel:"",email:"",password:"",sent:!1,haveCode:!1,code:""},this.handleSubmit=this.handleSubmit.bind(this),this.handleEmailChange=this.handleEmailChange.bind(this),this.handlePasswordChange=this.handlePasswordChange.bind(this),this.handleCodeChange=this.handleCodeChange.bind(this),this.handleShowCodeField=this.handleShowCodeField.bind(this),e.tinode.connect().catch((e=>{this.props.onError(e.message,"err")}))}componentDidMount(){const e=c.c.parseUrlHash(window.location.hash),d={token:e.params.token,scheme:e.params.scheme,code:e.params.code||""};this.savedCred=e.params.cred,this.props.reqCredMethod&&e.params.cred&&(d[this.props.reqCredMethod]=this.savedCred),this.setState(d)}componentDidUpdate(e,d){e.reqCredMethod!=this.props.reqCredMethod&&this.props.reqCredMethod&&this.setState({[this.props.reqCredMethod]:this.savedCred||""})}handleSubmit(e){if(e.preventDefault(),this.state.token)this.props.onReset(this.state.password.trim(),{scheme:"token",secret:this.state.token});else if(this.state.code&&this.props.reqCredMethod){const e="email"==this.props.reqCredMethod?this.state.email.trim():this.state.tel.trim();this.props.onReset(this.state.password.trim(),{scheme:"code",secret:btoa(`${this.state.code}:${this.props.reqCredMethod}:${e}`)})}else{const e=this.state.email.trim(),d=this.state.tel.trim();this.setState({email:e,tel:d}),this.props.onRequest(this.props.reqCredMethod,e||d).then((e=>{this.setState({sent:!0});const d="email"==this.props.reqCredMethod?r.password_reset_email_sent:"tel"==this.props.reqCredMethod?r.password_reset_sms_sent:null;d&&this.props.onError(this.props.intl.formatMessage(d),"info")}))}}handleEmailChange(e){this.setState({email:e.target.value})}handlePasswordChange(e){this.setState({password:e.target.value})}handleCodeChange(e){this.setState({code:e.target.value.replace(/[^\d]/g,"")})}handleShowCodeField(e){e.preventDefault(),this.setState({haveCode:!0})}render(){const e=!((this.state.token||this.state.code&&this.props.reqCredMethod)&&this.state.scheme),d=!e||this.state.haveCode||this.state.sent,a=o().createElement(o().Fragment,null,o().createElement("label",{className:"small gray",htmlFor:"new-password"},o().createElement(i.FormattedMessage,{id:"label_new_password",defaultMessage:"New password",description:"Label for entering a new password"})),o().createElement(i.FormattedMessage,{id:"new_password_placeholder",defaultMessage:"Enter new password",description:"Placeholder for entering new password"},(e=>o().createElement(s.c,{id:"new-password",placeholder:e,autoComplete:"new-password",value:this.state.password,required:!0,autoFocus:!0,onChange:this.handlePasswordChange})))),t=o().createElement(o().Fragment,null,this.state.haveCode?null:o().createElement("label",{htmlFor:"inputEmail"},o().createElement(i.FormattedMessage,{id:"label_reset_password",defaultMessage:"Send a password reset email",description:"Label for password reset field"})),o().createElement(i.FormattedMessage,{id:"credential_email_prompt",defaultMessage:"Your registration email",description:"Placeholder for entering email"},(e=>o().createElement("input",{type:"email",id:"inputEmail",placeholder:e,autoComplete:"email",value:this.state.email,onChange:this.handleEmailChange,required:!0,autoFocus:!0})))),c=o().createElement(o().Fragment,null,this.state.haveCode?null:o().createElement("div",null,o().createElement("label",null,o().createElement(i.FormattedMessage,{id:"label_reset_password_tel",defaultMessage:"Send SMS to reset password",description:"Label for password reset field by phone"}))),o().createElement("div",null,o().createElement("label",{className:"small gray"},o().createElement(i.FormattedMessage,{id:"mobile_phone_number",defaultMessage:"Mobile phone number",description:"Prompt for entering a mobile phone number"}))),o().createElement("div",{className:"panel-form-row"},o().createElement(l.c,{autoFocus:!0,onShowCountrySelector:this.props.onShowCountrySelector,onSubmit:e=>this.setState({tel:e})}))),r=o().createElement(o().Fragment,null,o().createElement("div",null,o().createElement("label",{className:"small gray",htmlFor:"enter-confirmation-code"},o().createElement(i.FormattedMessage,{id:"enter_confirmation_code_prompt",defaultMessage:"Confirmation code",description:"Request to enter confirmation code"}))),o().createElement("div",null,o().createElement(i.FormattedMessage,{id:"numeric_confirmation_code_prompt",defaultMessage:"Numbers only",description:"Prompt for numeric conformation code"},(e=>o().createElement("input",{type:"text",id:"enter-confirmation-code",placeholder:e,maxLength:10,value:this.state.code,onChange:this.handleCodeChange,required:!0}))))),n="email"==this.props.reqCredMethod?t:"tel"==this.props.reqCredMethod?c:null;return o().createElement("form",{id:"password-reset-form",onSubmit:this.handleSubmit},!this.state.sent&&e?n:null,this.state.haveCode||this.state.sent?r:null,d?a:null,o().createElement("div",{className:"dialog-buttons"},this.state.haveCode||this.state.sent||this.state.token||this.state.code?null:o().createElement("a",{href:"#",onClick:this.handleShowCodeField,style:{marginRight:"auto"}},o().createElement(i.FormattedMessage,{id:"password_i_have_code",defaultMessage:"I have code",description:"Call to open field to enter password reset code"})),o().createElement("button",{className:"primary",type:"submit"},d?o().createElement(i.FormattedMessage,{id:"button_reset",defaultMessage:"Reset",description:"Button [Reset]"}):o().createElement(i.FormattedMessage,{id:"button_send_request",defaultMessage:"Send request",description:"Button [Send request]"}))))}}const h=(0,i.injectIntl)(n)},8224:(e,d,a)=>{a.d(d,{c:()=>u});var t=a(6376),o=a.n(t),i=a(6648),l=a(9780),s=a(4880),c=a(428),r=a(6088),n=a(7770),h=a(7928);const m=(0,i.defineMessages)({mobile_number_required:{id:"mobile_number_required",defaultMessage:"Mobile phone number required",description:"Error message"}});class p extends o().PureComponent{constructor(e){super(e),this.codeMap={},n.forEach((e=>{this.codeMap[e.code]=e.dial}));const d=e.countryCode||"US",a=this.codeMap[d];this.state={countryCode:d,dialCode:a,localNumber:"",placeholderNumber:this.placeholderNumber(d,a)},this.handleChange=this.handleChange.bind(this),this.handleFinished=this.handleFinished.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.showCountrySelector=this.showCountrySelector.bind(this)}handleChange(e){const d=`+${this.state.dialCode}`;let a=(new l.C).input(`${d}${this.filterNumber(e.target.value)}`);a=a.substring(d.length).trim(),this.setState({localNumber:a})}handleFinished(e){e.preventDefault();const d=`${this.state.dialCode}${this.state.localNumber.trim()}`.replace(/[^\d]/g,"");let a=null;try{a=(0,s._)(`+${d}`)}catch(e){}a&&a.isValid()?(this.inputField.setCustomValidity(""),this.props.onSubmit(a.format("E.164"))):this.inputField.setCustomValidity(this.props.intl.formatMessage(m.mobile_number_required))}handleKeyDown(e){"Enter"===e.key&&this.handleFinished(e)}showCountrySelector(){this.props.onShowCountrySelector(this.state.countryCode,this.state.dialCode,((e,d)=>{this.setState({countryCode:e,dialCode:d,placeholderNumber:this.placeholderNumber(e,d)})}))}filterNumber(e){return e?e.replace(/[^-\s().\d]/g,""):e}placeholderNumber(e,d){const a=(0,c.M)(e,r.c);return a?a.formatInternational().substring(d.length+1).trim():"123 0123"}render(){return o().createElement(o().Fragment,null,o().createElement("span",{className:"dial-code",onClick:this.showCountrySelector},o().createElement("span",{className:"country-flag"},(0,h.tQ)(this.state.countryCode)," "),"+",this.state.dialCode," "),o().createElement("input",{type:"tel",ref:e=>{this.inputField=e},placeholder:this.state.placeholderNumber,value:this.state.localNumber,onChange:this.handleChange,maxLength:17,onKeyDown:this.handleKeyDown,onBlur:this.handleFinished,required:!0,autoFocus:this.props.autoFocus}))}}const u=(0,i.injectIntl)(p)},7770:e=>{e.exports=JSON.parse('[{"dial":"93","code":"AF"},{"dial":"355","code":"AL"},{"dial":"213","code":"DZ"},{"dial":"1-684","code":"AS"},{"dial":"376","code":"AD"},{"dial":"244","code":"AO"},{"dial":"1-264","code":"AI"},{"dial":"672","code":"AQ"},{"dial":"1-268","code":"AG"},{"dial":"54","code":"AR"},{"dial":"374","code":"AM"},{"dial":"297","code":"AW"},{"dial":"61","code":"AU"},{"dial":"43","code":"AT"},{"dial":"994","code":"AZ"},{"dial":"1-242","code":"BS"},{"dial":"973","code":"BH"},{"dial":"880","code":"BD"},{"dial":"1-246","code":"BB"},{"dial":"375","code":"BY"},{"dial":"32","code":"BE"},{"dial":"501","code":"BZ"},{"dial":"229","code":"BJ"},{"dial":"1-441","code":"BM"},{"dial":"975","code":"BT"},{"dial":"591","code":"BO"},{"dial":"387","code":"BA"},{"dial":"267","code":"BW"},{"dial":"55","code":"BR"},{"dial":"246","code":"IO"},{"dial":"1-284","code":"VG"},{"dial":"673","code":"BN"},{"dial":"359","code":"BG"},{"dial":"226","code":"BF"},{"dial":"257","code":"BI"},{"dial":"855","code":"KH"},{"dial":"237","code":"CM"},{"dial":"1","code":"CA"},{"dial":"238","code":"CV"},{"dial":"1-345","code":"KY"},{"dial":"236","code":"CF"},{"dial":"235","code":"TD"},{"dial":"56","code":"CL"},{"dial":"86","code":"CN"},{"dial":"61","code":"CX"},{"dial":"61","code":"CC"},{"dial":"57","code":"CO"},{"dial":"269","code":"KM"},{"dial":"682","code":"CK"},{"dial":"506","code":"CR"},{"dial":"385","code":"HR"},{"dial":"53","code":"CU"},{"dial":"599","code":"CW"},{"dial":"357","code":"CY"},{"dial":"420","code":"CZ"},{"dial":"243","code":"CD"},{"dial":"45","code":"DK"},{"dial":"253","code":"DJ"},{"dial":"1-767","code":"DM"},{"dial":"1-809, 1-829, 1-849","code":"DO"},{"dial":"670","code":"TL"},{"dial":"593","code":"EC"},{"dial":"20","code":"EG"},{"dial":"503","code":"SV"},{"dial":"240","code":"GQ"},{"dial":"291","code":"ER"},{"dial":"372","code":"EE"},{"dial":"251","code":"ET"},{"dial":"500","code":"FK"},{"dial":"298","code":"FO"},{"dial":"679","code":"FJ"},{"dial":"358","code":"FI"},{"dial":"33","code":"FR"},{"dial":"689","code":"PF"},{"dial":"241","code":"GA"},{"dial":"220","code":"GM"},{"dial":"995","code":"GE"},{"dial":"49","code":"DE"},{"dial":"233","code":"GH"},{"dial":"350","code":"GI"},{"dial":"30","code":"GR"},{"dial":"299","code":"GL"},{"dial":"1-473","code":"GD"},{"dial":"1-671","code":"GU"},{"dial":"502","code":"GT"},{"dial":"44-1481","code":"GG"},{"dial":"224","code":"GN"},{"dial":"245","code":"GW"},{"dial":"592","code":"GY"},{"dial":"509","code":"HT"},{"dial":"504","code":"HN"},{"dial":"852","code":"HK"},{"dial":"36","code":"HU"},{"dial":"354","code":"IS"},{"dial":"91","code":"IN"},{"dial":"62","code":"ID"},{"dial":"98","code":"IR"},{"dial":"964","code":"IQ"},{"dial":"353","code":"IE"},{"dial":"44-1624","code":"IM"},{"dial":"972","code":"IL"},{"dial":"39","code":"IT"},{"dial":"225","code":"CI"},{"dial":"1-876","code":"JM"},{"dial":"81","code":"JP"},{"dial":"44-1534","code":"JE"},{"dial":"962","code":"JO"},{"dial":"7, 997","code":"KZ"},{"dial":"254","code":"KE"},{"dial":"686","code":"KI"},{"dial":"383","code":"XK"},{"dial":"965","code":"KW"},{"dial":"996","code":"KG"},{"dial":"856","code":"LA"},{"dial":"371","code":"LV"},{"dial":"961","code":"LB"},{"dial":"266","code":"LS"},{"dial":"231","code":"LR"},{"dial":"218","code":"LY"},{"dial":"423","code":"LI"},{"dial":"370","code":"LT"},{"dial":"352","code":"LU"},{"dial":"853","code":"MO"},{"dial":"389","code":"MK"},{"dial":"261","code":"MG"},{"dial":"265","code":"MW"},{"dial":"60","code":"MY"},{"dial":"960","code":"MV"},{"dial":"223","code":"ML"},{"dial":"356","code":"MT"},{"dial":"692","code":"MH"},{"dial":"222","code":"MR"},{"dial":"230","code":"MU"},{"dial":"262","code":"YT"},{"dial":"52","code":"MX"},{"dial":"691","code":"FM"},{"dial":"373","code":"MD"},{"dial":"377","code":"MC"},{"dial":"976","code":"MN"},{"dial":"382","code":"ME"},{"dial":"1-664","code":"MS"},{"dial":"212","code":"MA"},{"dial":"258","code":"MZ"},{"dial":"95","code":"MM"},{"dial":"264","code":"NA"},{"dial":"674","code":"NR"},{"dial":"977","code":"NP"},{"dial":"31","code":"NL"},{"dial":"599","code":"CW"},{"dial":"687","code":"NC"},{"dial":"64","code":"NZ"},{"dial":"505","code":"NI"},{"dial":"227","code":"NE"},{"dial":"234","code":"NG"},{"dial":"683","code":"NU"},{"dial":"850","code":"KP"},{"dial":"1-670","code":"MP"},{"dial":"47","code":"NO"},{"dial":"968","code":"OM"},{"dial":"92","code":"PK"},{"dial":"680","code":"PW"},{"dial":"970","code":"PS"},{"dial":"507","code":"PA"},{"dial":"675","code":"PG"},{"dial":"595","code":"PY"},{"dial":"51","code":"PE"},{"dial":"63","code":"PH"},{"dial":"64","code":"PN"},{"dial":"48","code":"PL"},{"dial":"351","code":"PT"},{"dial":"1-787, 1-939","code":"PR"},{"dial":"974","code":"QA"},{"dial":"242","code":"CG"},{"dial":"262","code":"RE"},{"dial":"40","code":"RO"},{"dial":"7","code":"RU"},{"dial":"250","code":"RW"},{"dial":"590","code":"BL"},{"dial":"290","code":"SH"},{"dial":"1-869","code":"KN"},{"dial":"1-758","code":"LC"},{"dial":"590","code":"MF"},{"dial":"508","code":"PM"},{"dial":"1-784","code":"VC"},{"dial":"685","code":"WS"},{"dial":"378","code":"SM"},{"dial":"239","code":"ST"},{"dial":"966","code":"SA"},{"dial":"221","code":"SN"},{"dial":"381","code":"RS"},{"dial":"248","code":"SC"},{"dial":"232","code":"SL"},{"dial":"65","code":"SG"},{"dial":"1-721","code":"SX"},{"dial":"421","code":"SK"},{"dial":"386","code":"SI"},{"dial":"677","code":"SB"},{"dial":"252","code":"SO"},{"dial":"27","code":"ZA"},{"dial":"82","code":"KR"},{"dial":"211","code":"SS"},{"dial":"34","code":"ES"},{"dial":"94","code":"LK"},{"dial":"249","code":"SD"},{"dial":"597","code":"SR"},{"dial":"47","code":"SJ"},{"dial":"268","code":"SZ"},{"dial":"46","code":"SE"},{"dial":"41","code":"CH"},{"dial":"963","code":"SY"},{"dial":"886","code":"TW"},{"dial":"992","code":"TJ"},{"dial":"255","code":"TZ"},{"dial":"66","code":"TH"},{"dial":"228","code":"TG"},{"dial":"690","code":"TK"},{"dial":"676","code":"TO"},{"dial":"1-868","code":"TT"},{"dial":"216","code":"TN"},{"dial":"90","code":"TR"},{"dial":"993","code":"TM"},{"dial":"1-649","code":"TC"},{"dial":"688","code":"TV"},{"dial":"1-340","code":"VI"},{"dial":"256","code":"UG"},{"dial":"380","code":"UA"},{"dial":"971","code":"AE"},{"dial":"44","code":"GB"},{"dial":"1","code":"US"},{"dial":"598","code":"UY"},{"dial":"998","code":"UZ"},{"dial":"678","code":"VU"},{"dial":"379","code":"VA"},{"dial":"58","code":"VE"},{"dial":"84","code":"VN"},{"dial":"681","code":"WF"},{"dial":"212","code":"EH"},{"dial":"967","code":"YE"},{"dial":"260","code":"ZM"},{"dial":"263","code":"ZW"}]')}}]);
//# sourceMappingURL=520.prod.js.map