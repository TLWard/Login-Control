# loginCtrl

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React Login Control usiing React, Bootstrap, and Material-ui

## Usage: 
(1) Install Material-UI: npm install @material-ui/core

(2) Code Sample:

    //Required npm import.
    import { LoginCtrl } from 'loginctrl/es/loginCtrl'
    
    //Validation functions
    validate() {//Login Validation Code return true | false; }
    validateAction() { //Action to take on validate return true  };
     
    //HTML to include control in page:
    <LoginCtrl validate={this.validate.bind(this)} validateAction={this.validateAction.bind(this)} />

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo