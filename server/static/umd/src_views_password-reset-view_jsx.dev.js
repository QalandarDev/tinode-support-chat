"use strict";
(globalThis["webpackChunktinode_webapp"] = globalThis["webpackChunktinode_webapp"] || []).push([["src_views_password-reset-view_jsx"],{

/***/ "./src/views/password-reset-view.jsx":
/*!*******************************************!*\
  !*** ./src/views/password-reset-view.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widgets_phone_edit_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widgets/phone-edit.jsx */ "./src/widgets/phone-edit.jsx");
/* harmony import */ var _widgets_visible_password_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/visible-password.jsx */ "./src/widgets/visible-password.jsx");
/* harmony import */ var _lib_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/navigation.js */ "./src/lib/navigation.js");
// A password reset form.





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
class PasswordResetView extends (react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent) {
  constructor(props) {
    super(props);
    this.state = {
      tel: '',
      email: '',
      password: '',
      sent: false,
      haveCode: false,
      code: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleShowCodeField = this.handleShowCodeField.bind(this);

    // Connection will trigger change by changing the this.props.serverVersion.
    props.tinode.connect().catch(err => {
      this.props.onError(err.message, 'err');
    });
  }
  componentDidMount() {
    const parsed = _lib_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"].parseUrlHash(window.location.hash);
    const newState = {
      token: parsed.params.token,
      scheme: parsed.params.scheme,
      code: parsed.params.code || ''
    };
    this.savedCred = parsed.params.cred;
    if (this.props.reqCredMethod && parsed.params.cred) {
      newState[this.props.reqCredMethod] = this.savedCred;
    }
    this.setState(newState);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.reqCredMethod != this.props.reqCredMethod && this.props.reqCredMethod) {
      this.setState({
        [this.props.reqCredMethod]: this.savedCred || ''
      });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.token) {
      // Reset using token.
      this.props.onReset(this.state.password.trim(), {
        scheme: 'token',
        secret: this.state.token
      });
    } else if (this.state.code && this.props.reqCredMethod) {
      // Reset using security code.
      // The secret is structured as <code>:<cred_method>:<cred_value>, "123456:email:alice@example.com".
      const cred = this.props.reqCredMethod == 'email' ? this.state.email.trim() : this.state.tel.trim();
      this.props.onReset(this.state.password.trim(), {
        scheme: 'code',
        secret: btoa(`${this.state.code}:${this.props.reqCredMethod}:${cred}`)
      });
    } else {
      // Send email or SMS with the secret code.
      const email = this.state.email.trim();
      const tel = this.state.tel.trim();
      this.setState({
        email: email,
        tel: tel
      });
      this.props.onRequest(this.props.reqCredMethod, email || tel).then(_ => {
        this.setState({
          sent: true
        });
        const msg = this.props.reqCredMethod == 'email' ? messages.password_reset_email_sent : this.props.reqCredMethod == 'tel' ? messages.password_reset_sms_sent : null;
        if (msg) {
          this.props.onError(this.props.intl.formatMessage(msg), 'info');
        }
      });
    }
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  handleCodeChange(e) {
    this.setState({
      code: e.target.value.replace(/[^\d]/g, '')
    });
  }
  handleShowCodeField(e) {
    e.preventDefault();
    this.setState({
      haveCode: true
    });
  }
  render() {
    const showCredentialInput = !((this.state.token || this.state.code && this.props.reqCredMethod) && this.state.scheme);
    const showPasswordInput = !showCredentialInput || this.state.haveCode || this.state.sent;
    const passwordInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray",
      htmlFor: "new-password"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "label_new_password",
      defaultMessage: "New password",
      description: "Label for entering a new password"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "new_password_placeholder",
      defaultMessage: "Enter new password",
      description: "Placeholder for entering new password"
    }, placeholder => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_widgets_visible_password_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "new-password",
      placeholder: placeholder,
      autoComplete: "new-password",
      value: this.state.password,
      required: true,
      autoFocus: true,
      onChange: this.handlePasswordChange
    })));
    const emailInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.state.haveCode ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      htmlFor: "inputEmail"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "label_reset_password",
      defaultMessage: "Send a password reset email",
      description: "Label for password reset field"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "credential_email_prompt",
      defaultMessage: "Your registration email",
      description: "Placeholder for entering email"
    }, placeholder => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "email",
      id: "inputEmail",
      placeholder: placeholder,
      autoComplete: "email",
      value: this.state.email,
      onChange: this.handleEmailChange,
      required: true,
      autoFocus: true
    })));
    const phoneInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, this.state.haveCode ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "label_reset_password_tel",
      defaultMessage: "Send SMS to reset password",
      description: "Label for password reset field by phone"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "mobile_phone_number",
      defaultMessage: "Mobile phone number",
      description: "Prompt for entering a mobile phone number"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "panel-form-row"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_widgets_phone_edit_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
      autoFocus: true,
      onShowCountrySelector: this.props.onShowCountrySelector,
      onSubmit: number => this.setState({
        tel: number
      })
    })));
    const codeInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      className: "small gray",
      htmlFor: "enter-confirmation-code"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "enter_confirmation_code_prompt",
      defaultMessage: "Confirmation code",
      description: "Request to enter confirmation code"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "numeric_confirmation_code_prompt",
      defaultMessage: "Numbers only",
      description: "Prompt for numeric conformation code"
    }, numbers_only => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
      type: "text",
      id: "enter-confirmation-code",
      placeholder: numbers_only,
      maxLength: 10,
      value: this.state.code,
      onChange: this.handleCodeChange,
      required: true
    }))));
    const credentialInput = this.props.reqCredMethod == 'email' ? emailInput : this.props.reqCredMethod == 'tel' ? phoneInput : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
      id: "password-reset-form",
      onSubmit: this.handleSubmit
    }, !this.state.sent && showCredentialInput ? credentialInput : null, this.state.haveCode || this.state.sent ? codeInput : null, showPasswordInput ? passwordInput : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "dialog-buttons"
    }, this.state.haveCode || this.state.sent || this.state.token || this.state.code ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: "#",
      onClick: this.handleShowCodeField,
      style: {
        marginRight: 'auto'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "password_i_have_code",
      defaultMessage: "I have code",
      description: "Call to open field to enter password reset code"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "primary",
      type: "submit"
    }, showPasswordInput ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "button_reset",
      defaultMessage: "Reset",
      description: "Button [Reset]"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__.FormattedMessage, {
      id: "button_send_request",
      defaultMessage: "Send request",
      description: "Button [Send request]"
    }))));
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_1__.injectIntl)(PasswordResetView));

/***/ })

}]);
//# sourceMappingURL=src_views_password-reset-view_jsx.dev.js.map