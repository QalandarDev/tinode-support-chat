"use strict";
(globalThis["webpackChunktinode_webapp"] = globalThis["webpackChunktinode_webapp"] || []).push([["src_views_account-settings-view_jsx"],{

/***/ "./src/views/account-settings-view.jsx":
/*!*********************************************!*\
  !*** ./src/views/account-settings-view.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AccountSettingsView)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libphonenumber_js_mobile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! libphonenumber-js/mobile */ "./node_modules/libphonenumber-js/mobile/exports/parsePhoneNumberWithError.js");
/* harmony import */ var _widgets_avatar_upload_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/avatar-upload.jsx */ "./src/widgets/avatar-upload.jsx");
/* harmony import */ var _widgets_badge_list_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/badge-list.jsx */ "./src/widgets/badge-list.jsx");
/* harmony import */ var _lib_blob_helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/blob-helpers.js */ "./src/lib/blob-helpers.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.js */ "./src/config.js");
/* harmony import */ var _widgets_credential_edit_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/credential-edit.jsx */ "./src/widgets/credential-edit.jsx");
// Edit account parameters.








function _clip(str, length) {
  return str && str.substring(0, length);
}
class AccountSettingsView extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    const me = this.props.tinode.getMeTopic();
    this.state = {
      fullName: _clip(me.public ? me.public.fn : undefined, _config_js__WEBPACK_IMPORTED_MODULE_5__.MAX_TITLE_LENGTH),
      description: _clip(me.public ? me.public.note : undefined, _config_js__WEBPACK_IMPORTED_MODULE_5__.MAX_TOPIC_DESCRIPTION_LENGTH),
      avatar: (0,_lib_blob_helpers_js__WEBPACK_IMPORTED_MODULE_4__.makeImageUrl)(me.public ? me.public.photo : null),
      credentials: me.getCredentials() || [],
      credEdit: undefined
    };
  }
  componentDidMount() {
    const me = this.props.tinode.getMeTopic();
    me.onCredsUpdated = _ => this.setState({
      credentials: me.getCredentials()
    });
  }
  componentWillUnmount() {
    const me = this.props.tinode.getMeTopic();
    me.onCredsUpdated = null;
  }
  render() {
    if (this.state.credEdit) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_widgets_credential_edit_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
        method: this.state.credEdit.meth,
        val: this.state.credEdit.val,
        done: this.state.credEdit.done,
        onShowCountrySelector: this.props.onShowCountrySelector,
        onCredAdd: this.props.onCredAdd,
        onCredConfirm: this.props.onCredConfirm,
        onCancel: _ => this.setState({
          credEdit: undefined
        }),
        onError: this.props.onError
      });
    }

    // Count how many times each method is validated.
    const validated = {};
    this.state.credentials.forEach(cred => {
      if (cred.done) {
        validated[cred.meth] = (validated[cred.meth] || 0) + 1;
      }
    });
    const credentials = [];
    this.state.credentials.forEach((cred, idx) => {
      if (!['email', 'tel'].includes(cred.meth)) {
        // Skip unknown methods.
        return;
      }
      let val = cred.val;
      if (cred.meth == 'tel') {
        const number = (0,libphonenumber_js_mobile__WEBPACK_IMPORTED_MODULE_7__.parsePhoneNumberWithError)(cred.val);
        val = number ? number.formatInternational() : cred.val;
      }
      credentials.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "group quoted",
        key: idx
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tt", {
        className: "clickable",
        onClick: e => {
          e.preventDefault();
          this.setState({
            credEdit: cred
          });
        }
      }, val), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", cred.done ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "material-icons"
      }, "pending"), "\xA0", !cred.done || validated[cred.meth] > 1 || this.props.reqCredMethod != cred.meth ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
        href: "#",
        onClick: e => {
          e.preventDefault();
          this.props.onCredDelete(cred.meth, cred.val);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "material-icons"
      }, "delete")) : null)));
    });
    if (credentials.length > 0) {
      // Add title as the first element.
      credentials.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
        className: "small",
        key: 'title'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
        id: "label_user_contacts",
        defaultMessage: "Contacts",
        description: "Label for user contacts"
      })));
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "scrollable-panel"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "flat-button float-right",
      onClick: e => {
        e.preventDefault();
        this.props.onNavigate('general');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "material-icons"
    }, "edit"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "button_edit",
      defaultMessage: "Edit",
      description: "Call to action [Edit]"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_widgets_avatar_upload_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tinode: this.props.tinode,
      avatar: this.state.avatar,
      readOnly: true,
      uid: this.props.myUserId,
      title: this.state.fullName
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "label_your_name",
      defaultMessage: "Your name",
      description: "Label for full name editing"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "large ellipsized"
    }, this.state.fullName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "label_user_id",
      defaultMessage: "ID:",
      description: "Label for user address (ID)"
    })), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tt", null, this.props.myUserId)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_widgets_badge_list_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      trustedBadges: this.props.trustedBadges
    })), this.state.description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "label_description",
      defaultMessage: "Description",
      description: "Label for editing topic description"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "quoted"
    }, this.state.description)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "hr"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, credentials)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "hr"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-column"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "flat-button",
      onClick: e => {
        e.preventDefault();
        this.props.onNavigate('notif');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "material-icons"
    }, "notifications"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "sidepanel_title_acc_notifications",
      defaultMessage: "Notifications",
      description: "Sidepanel title for AccNotificationsView."
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "flat-button",
      onClick: e => {
        e.preventDefault();
        this.props.onNavigate('security');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "material-icons"
    }, "security"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "button_security",
      defaultMessage: "Security",
      description: "Navigaton button for security panel."
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      className: "flat-button",
      onClick: e => {
        e.preventDefault();
        this.props.onNavigate('support');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "material-icons"
    }, "contact_support"), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "sidepanel_title_acc_support",
      defaultMessage: "Support",
      description: "Sidepanel title for AccSupportView."
    }))));
  }
}
;

/***/ }),

/***/ "./src/widgets/credential-edit.jsx":
/*!*****************************************!*\
  !*** ./src/widgets/credential-edit.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phone_edit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-edit.jsx */ "./src/widgets/phone-edit.jsx");
/* harmony import */ var libphonenumber_js_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libphonenumber-js/mobile */ "./node_modules/libphonenumber-js/mobile/exports/parsePhoneNumberWithError.js");
// Enter one credential at a time.





const messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.defineMessages)({
  password_reset_email_sent: {
    id: 'password_reset_email_sent',
    defaultMessage: 'An email with security code has been sent.',
    description: 'Notification that the email with password reset instructions has been sent'
  },
  password_reset_sms_sent: {
    id: 'password_reset_sms_sent',
    defaultMessage: 'A text message with security code has been sent.',
    description: 'Notification that the SMS with password reset instructions has been sent'
  }
});
class CredentialEdit extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      tel: '',
      email: '',
      sent: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }
  static formatPhoneNumber(raw) {
    let number;
    try {
      number = (0,libphonenumber_js_mobile__WEBPACK_IMPORTED_MODULE_3__.parsePhoneNumberWithError)(raw);
    } catch (err) {}
    return number ? number.formatInternational() : raw;
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePhoneChange(number) {
    this.setState({
      tel: number
    });
  }
  handleCodeChange(e) {
    this.setState({
      code: e.target.value.replace(/[^\d]/g, '')
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const value = this.props.method == 'email' ? this.state.email : this.state.tel;
    if (this.state.code) {
      this.props.onError(null);
      this.props.onCredConfirm(this.props.method, this.state.code);
    } else if (value) {
      this.props.onCredAdd(this.props.method, value);
      this.setState({
        sent: true
      });
      const msg = this.props.method == 'email' ? messages.password_reset_email_sent : messages.password_reset_sms_sent;
      this.props.onError(this.props.intl.formatMessage(msg), 'info');
    }
  }
  render() {
    const readyForCode = this.state.sent || !this.props.done;
    const rawValue = readyForCode ? this.state.tel || this.state.email : this.props.val;
    const formattedValue = this.props.method == 'tel' ? CredentialEdit.formatPhoneNumber(rawValue) : rawValue;
    const changeEmail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "large"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "change_email",
      defaultMessage: "Change email",
      description: "Prompt to change current email"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "current_email",
      defaultMessage: "Current email",
      description: "Label for old email"
    }))));
    const changePhone = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "large"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "change_phone",
      defaultMessage: "Change phone number",
      description: "Prompt to change current phone number"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "current_phone",
      defaultMessage: "Current phone number",
      description: "Label for old phone"
    }))));
    const newEmailLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "new_email",
      defaultMessage: "New email",
      description: "Prompt for entering a new email"
    }));
    const newEmailInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, newEmailLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "email_prompt",
      defaultMessage: "Email, e.g. jdoe@example.com",
      description: "Input placeholder for email entry"
    }, email_prompt => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "email",
      placeholder: email_prompt,
      autoComplete: "email",
      value: this.state.email,
      onChange: this.handleEmailChange,
      required: true
    }))));
    const newPhoneLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "new_phone_number",
      defaultMessage: "New phone number",
      description: "Prompt for entering a new telephone number"
    }));
    const newPhoneInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, newPhoneLabel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_phone_edit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      autoFocus: true,
      onShowCountrySelector: this.props.onShowCountrySelector,
      onSubmit: this.handlePhoneChange
    })));
    const codeInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "enter_confirmation_code_prompt",
      defaultMessage: "Confirmation code",
      description: "Request to enter confirmation code"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "numeric_confirmation_code_prompt",
      defaultMessage: "Numbers only",
      description: "Prompt for numeric conformation code"
    }, numbers_only => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      placeholder: numbers_only,
      maxLength: 10,
      value: this.state.code,
      onChange: this.handleCodeChange,
      required: true
    }))));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      className: "panel-form-column",
      onSubmit: this.handleSubmit
    }, readyForCode ? this.props.method == 'email' ? newEmailLabel : this.props.method == 'tel' ? newPhoneLabel : null : this.props.method == 'email' ? changeEmail : this.props.method == 'tel' ? changePhone : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tt", {
      className: "quoted"
    }, formattedValue)), readyForCode ? null : this.props.method == 'email' ? newEmailInput : this.props.method == 'tel' ? newPhoneInput : null, readyForCode ? codeInput : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "dialog-buttons"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "secondary",
      onClick: this.props.onCancel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "button_cancel",
      defaultMessage: "Cancel",
      description: "Button [Cancel]"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "primary",
      type: "submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "button_ok",
      defaultMessage: "OK",
      description: "Button [OK]"
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(CredentialEdit));

/***/ })

}]);
//# sourceMappingURL=src_views_account-settings-view_jsx.dev.js.map