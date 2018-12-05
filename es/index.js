function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { LoginCtrl } from './loginCtrl';

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  //Function to be called by login control to check credentials.
  _default.prototype.validate = function validate(email, password) {

    //Add funtionality to test credentials.
    return false;
  };
  //Function containing action to perform on successful login. 


  _default.prototype.validateAction = function validateAction() {
    //Add action to perform on successful login.
    window.open('add url here', '_self');
  };
  //Pass your custom validate function and your custom validateAction function. 


  _default.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(LoginCtrl, { validate: this.validate.bind(this), validateAction: this.validateAction.bind(this) })
    );
  };

  return _default;
}(Component);

export { _default as default };