import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';

import * as actions from '../../actions';
 
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <fieldset className="form-group">
    <label htmlFor={input.name}>{label}</label>
    <input className="form-control" {...input} type={type}/>
    { touched && error && <span className="text-danger">{error}</span> }
  </fieldset>
)
 
class Signup extends Component {
 

  handleFormSubmit({ email, password}){
    this.props.signupUser({email, password});
  }


  renderAlert(){
      if(this.props.errorMessage){
          return (
              <div className="alert alert-danger">
                  <strong>Oops!</strong> {this.props.errorMessage}
             </div>
          )
      }
  }
 
  render(){
    const { handleSubmit } = this.props
 
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="email" component={renderField} type="email" label="Email"/>
        <Field name="password" component={renderField} type="password" label="Password"/>
        <Field name="passwordConfirm" component={renderField} type="password" label="Password Confirmation"/>
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}


function mapStateToProps(state){
    return { errorMessage: state.auth.error}
}


function validate(values){
    const errors = {};


    if(!values.password){
      errors.password = 'Required'
    }
    else if(values.password != values.passwordConfirm){
        errors.password = 'Passwords must match!'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors;
}
 
Signup =  reduxForm({ form: 'signup' , validate})(Signup)
export default connect(mapStateToProps, actions)(Signup);