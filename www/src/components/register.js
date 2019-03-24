import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
/*import Button from 'react-Bootstrap/Button';

<<<<<<< HEAD
class Register extends Component{
    render(){
        return (
            <div>
                <h2>Register</h2>
            </div>
        );
     }
=======

*/

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      valueUser: '',
      valuePassInitial: '',
      valuePassConfirm: '',
      passMatch: false
    }
  }

  didComponentUpdate(prevState){
    if (this.state.passMatch !== prevState.passMatch){
      
    }
  }

  handleUserChange(event){
    this.setState( {valueUser: event.target.value} );
  }

  handlePassInitialChange(event){
    this.setState( {valuePassInitial: event.target.value} );
    this.isPasswordSame();
  }

  handlePassConfirmChange(event){
    this.setState( {valuePassConfirm: event.target.value} );
    this.isPasswordSame();
  }

  isPasswordSame(){
    if (this.state.valuePassInitial === this.state.valuePassConfirm){
      this.setState( {passMatch: true} );
    } else {
      this.setState( {passMatch: false} );
    }
  }

  render(){
    return(
        <Form>
          <Form.Group controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control type='text' placeholder='Enter username' />
            <Form.Text className='text-muted'>Pick a username you'll go by!</Form.Text>
          </Form.Group>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Choose a password' />
            <Form.Text className='text-muted'>At least 8 characters or a phrase you'll remember.</Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type='password' placeholder='Confirm password' />
            <Form.Text className='text-muted'>Make sure your passwords match.</Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label ='I agree to the terms.'/>
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
    );
  }


>>>>>>> landing
}

export default Register;