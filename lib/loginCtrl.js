'use strict';

exports.__esModule = true;
exports.LoginCtrl = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

require('./loginCtrl.css');

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var LoginCtrl = exports.LoginCtrl = function (_React$Component) {
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

        if (this.state.alert == true) return _react2.default.createElement(
            'div',
            { style: style.alertStyle },
            'Invalid Login Crendentials. Please try again.'
        );else return _react2.default.createElement('h4', null);
    };

    LoginCtrl.prototype.render = function render() {

        var msg = this.showAlert();

        return _react2.default.createElement(
            'div',
            { style: style.aligner },
            _react2.default.createElement(
                'div',
                { style: style.alignerItem },
                _react2.default.createElement(
                    _reactBootstrap.Form,
                    { horizontal: true },
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formHorizontalEmail' },
                        _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 3 }),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 9 },
                            _react2.default.createElement(_TextField2.default, {
                                label: 'Email Address',
                                type: 'email',
                                onChange: this.handleChangeEmail.bind(this)
                            })
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'formHorizontalPassword' },
                        _react2.default.createElement(_reactBootstrap.Col, { componentClass: _reactBootstrap.ControlLabel, sm: 3 }),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { sm: 9 },
                            _react2.default.createElement(_TextField2.default, {
                                label: 'Password',
                                type: 'password',
                                onChange: this.handleChangePassword.bind(this)
                            })
                        )
                    ),
                    _react2.default.createElement('br', null),
                    msg,
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { smOffset: 3, sm: 9 },
                            _react2.default.createElement(
                                _Button2.default,
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
}(_react2.default.Component);