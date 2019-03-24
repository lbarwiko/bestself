import React, { Component } from 'react';
import { Form, Button, Container, Navbar, Nav } from 'react-bootstrap';
import {Auth} from '../services/';
import { Redirect } from 'react-router';

/*import Button from 'react-Bootstrap/Button';


*/

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        fullname: '',
        username: '',
        password: '',
        rootUser: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  didComponentUpdate(prevState){
    if (this.state.passMatch !== prevState.passMatch){
      
    }
  }

  handleNameChange(event){
    this.setState( {fullname: event.target.value} );
  }

  handleUsernameChange(event){
    this.setState( {username: event.target.value} );
  }

  handlePasswordChange(event){
    this.setState( {password: event.target.value} );
  }


  isPasswordSame(){
    if (this.state.valuePassInitial === this.state.valuePassConfirm){
      this.setState( {passMatch: true} );
    } else {
      this.setState( {passMatch: false} );
    }
  }

  

  handleSubmit(event){
    var payload = {
        name: this.state.fullname,
        username: this.state.username,
        password: this.state.password
    }

    Auth.register(payload)
    .then(rootUser=>{
        this.setState({
            rootUser: rootUser
        })

    }) 
    .catch(err=>{
        console.log(err);
        console.log(err.err);
        if(err.err){
             alert(err.err);
             return;
        }else{
            alert(err);
        }
    })

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
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="">Self Woke</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">                           
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About</Nav.Link>
                        <Nav.Link href="#methods">Methodology</Nav.Link>
                        <Nav.Link eventKey={2} href="https://github.com/lbarwiko/bestself">Github</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Form style={{paddingTop: '10px'}}>
                <Form.Group controlId='formBasicUsername'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onChange={(event)=>this.handleNameChange(event)} type='text' placeholder='Enter what you go by!' />
                </Form.Group>
                <Form.Group controlId='formBasicUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={(event)=>this.handleUsernameChange(event)} type='text' placeholder='Enter username' />
                    <Form.Text className='text-muted'>Pick a username you'll go by!</Form.Text>
                </Form.Group>
                <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(event)=>this.handlePasswordChange(event)} type='password' placeholder='Choose a password' />
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
                <Button variant='primary' onClick={this.handleSubmit}>Submit</Button>
                </Form>
            </Container>
        </div>

    );
  }

}

export default Register;