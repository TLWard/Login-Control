function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Form, FormGroup, Col, ControlLabel } from 'react-bootstrap';
import './loginCtrl.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

var style = {
    container: {
        width: '100 %',
        height: '100 %',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'inherit',
        minWidth: '300px'
    },
    lineItem: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: '30 %',
        height: '10 %',
        fontSize: '20px',
        padding: '30px',
        minWidth: '300px',
        minHeight: '75px'
    },
    aligner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20%'
    },
    alignerItem: {
        maxWwidth: '50 %'
    },
    alertStyle: {
        color: 'red'
    }

};

export var LoginCtrl = function (_React$Component) {
    _inherits(LoginCtrl, _React$Component);

    function LoginCtrl() {
        _classCallCheck(this, LoginCtrl);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this));

        _this.state = { email: '', password: '', alert: false };
        return _this;
    }

    LoginCtrl.prototype.SetState = function SetState(email, password, alert) {

        this.setState({ email: email, password: password, alert: alert });
    };

    LoginCtrl.prototype.handleChangeEmail = function handleChangeEmail(e) {

        var email = e.target.value;
        this.SetState(email, this.state.password, this.state.alert);

        e.preventDefault();
    };

    LoginCtrl.prototype.handleChangePassword = function handleChangePassword(e) {

        var password = e.target.value;
        this.SetState(this.state.email, password, this.state.alert);

        e.preventDefault();
    };

    LoginCtrl.prototype.handleSubmit = function handleSubmit() {

        if (this.props.validate != undefined) {
            if (this.props.validate(this.state.email, this.state.password) == true) this.props.validateAction();else this.SetState(this.state.email, this.state.password, true);
        } else this.SetState(this.state.email, this.state.password, true);
    };

    LoginCtrl.prototype.handleCloseAlert = function handleCloseAlert() {

        this.SetState(this.state.email, this.state.password, false);
    };

    LoginCtrl.prototype.showAlert = function showAlert() {

        if (this.state.alert == true) return React.createElement(
            'div',
            { style: style.alertStyle },
            'Invalid Login Crendentials. Please try again.'
        );else return React.createElement('h4', null);
    };

    LoginCtrl.prototype.render = function render() {

        var msg = this.showAlert();

        return React.createElement(
            'div',
            { style: style.aligner },
            React.createElement(
                'div',
                { style: style.alignerItem },
                React.createElement(
                    Form,
                    { horizontal: true },
                    React.createElement(
                        FormGroup,
                        { controlId: 'formHorizontalEmail' },
                        React.createElement(Col, { componentClass: ControlLabel, sm: 3 }),
                        React.createElement(
                            Col,
                            { sm: 9 },
                            React.createElement(TextField, {
                                label: 'Email Address',
                                type: 'email',
                                onChange: this.handleChangeEmail.bind(this)
                            })
                        )
                    ),
                    React.createElement(
                        FormGroup,
                        { controlId: 'formHorizontalPassword' },
                        React.createElement(Col, { componentClass: ControlLabel, sm: 3 }),
                        React.createElement(
                            Col,
                            { sm: 9 },
                            React.createElement(TextField, {
                                label: 'Password',
                                type: 'password',
                                onChange: this.handleChangePassword.bind(this)
                            })
                        )
                    ),
                    React.createElement('br', null),
                    msg,
                    React.createElement('br', null),
                    React.createElement(
                        FormGroup,
                        null,
                        React.createElement(
                            Col,
                            { smOffset: 3, sm: 9 },
                            React.createElement(
                                Button,
                                { variant: 'outlined', onClick: this.handleSubmit.bind(this), label: 'Login' },
                                'Login'
                            )
                        )
                    )
                )
            )
        );
    };

    return LoginCtrl;
}(React.Component);