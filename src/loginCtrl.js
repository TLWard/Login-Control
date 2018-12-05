import React from 'react';
import {Form, FormGroup, Col, ControlLabel} from 'react-bootstrap'
import './loginCtrl.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const style =
    {
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
    lineItem :{
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
     aligner:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '20%'  
        },
     alignerItem :{
        maxWwidth: '50 %'
        },
     alertStyle:{
            color: 'red'
        }

    };

export class LoginCtrl extends React.Component{

    constructor() {
        super();

        this.state = { email: '', password: '', alert:false };
    }
    SetState(email, password, alert) {

        this.setState({ email: email, password: password, alert: alert });
    }
    handleChangeEmail(e) {

        let email = e.target.value;
        this.SetState(email, this.state.password, this.state.alert );

        e.preventDefault();
    }
    handleChangePassword(e) {

        let password = e.target.value;
        this.SetState(this.state.email, password, this.state.alert);

        e.preventDefault();
    }
    handleSubmit() {

        if( this.props.validate != undefined ){
             if( this.props.validate( this.state.email, this.state.password ) == true )
                this.props.validateAction();
                else
            this.SetState(this.state.email, this.state.password, true);
            
        }
        else
            this.SetState(this.state.email, this.state.password, true);
        
    }
    handleCloseAlert() {

        this.SetState(this.state.email, this.state.password, false);
    }
    showAlert(){

        if( this.state.alert == true )
            return <div style={ style.alertStyle}>Invalid Login Crendentials. Please try again.</div>
        else
            return <h4></h4>;
    }
    render() {
        
        const msg = this.showAlert();

         return<div style={style.aligner} >

             <div style={style.alignerItem}>
                
               <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={3}>
                    </Col>
                        <Col sm={9}>

                                <TextField
                                   label="Email Address"
                                   type="email"
                                   onChange={this.handleChangeEmail.bind(this)}
                                />
                                   
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={3}>
                    </Col>
                        <Col sm={9}>

                            <TextField
                                label="Password"
                                type="password"
                                onChange={this.handleChangePassword.bind(this)}
                                />

                    </Col>
                </FormGroup>
        
                <br/>
                {msg}<br/>
               
                <FormGroup>
                        <Col smOffset={3} sm={9}>

                                <Button  variant="outlined" onClick={this.handleSubmit.bind(this)} label="Login">
                                Login</Button>

                    </Col>
                </FormGroup>
                </Form>
            
                </ div>
                
          </div>         

    }
}