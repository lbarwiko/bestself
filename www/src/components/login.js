import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Auth } from '../services/';
import { Redirect } from 'react-router';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      valueUser: '',
      valuePass: '',
      rootUser: null
    }
  }

  handleUserChange(event){
    this.setState( {valueUser: event.target.value} );
  }

  handlePassChange(event){
    this.setState( {valuePass: event.target.value })
  }

  handleSubmit(event){
    let username = this.state.valueUser;
    let pass = this.state.valuePass;

    Auth.login({
        username: username, 
        password: pass
    })
    .then(rootUser=>{
        this.setState({
            rootUser: rootUser
        })
    }) 
    .catch(err=>{
        console.log(err);
        alert(err);
    })

    // check in database
    console.log(username, pass);
    event.preventDefault();
  }
  render(){
    if(this.state.rootUser){
        console.log("HERE");
        return <Redirect to={{
            pathname: '/home/',
            state: { rootUser: this.state.rootUser }
        }}/>;
    }

    return (
        <Form
            onSubmit={e => this.handleSubmit(e)}
        >
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="username" 
                    placeholder="Username"
                    onChange={(event)=>this.handleUserChange(event)} 
                 />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={(event)=>this.handlePassChange(event)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
  }
}

export default Login;