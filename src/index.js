import React, {Component} from 'react'
import {LoginCtrl} from './loginCtrl'

export default class extends Component {
  //Function to be called by login control to check credentials.
  validate(email, password){

    //Add funtionality to test credentials.
    return false;
  }
  //Function containing action to perform on successful login. 
  validateAction()
  {
      //Add action to perform on successful login.
      window.open('add url here', '_self');
  }
  //Pass your custom validate function and your custom validateAction function. 
  render() {
    return <div>
      <LoginCtrl validate = {this.validate.bind(this)} validateAction = {this.validateAction.bind(this) }/>
    </div>
  }
}
