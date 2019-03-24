import React, { Component } from 'react';
import { Form, Button, Container, Navbar, Nav, Row, Col, Carousel} from 'react-bootstrap';
import { Auth } from '../services/';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                <Row>
                    <Col>
                    <Carousel style={styles.carousel}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./onboarding1.png"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>What we do</h3>
                            <p>We take the praises from the people in your network that you trust and help you build your best-self portrait.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./onboarding2.png"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>What are we</h3>
                            <p>We do it all through the platform - connecting you and your network and compling how special you are to them.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./onboarding3.png"
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Step One</h3>
                            <p>Enlist Your Praise Squad</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./onboarding4.png"
                            alt="Fourth slide"
                            />
                            <Carousel.Caption>
                            <h3>Step Two</h3>
                            <p>Send Praise Invitations</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./onboarding5.png"
                            alt="Fourth slide"
                            />
                            <Carousel.Caption>
                            <h3>Step Three</h3>
                            <p>We'll Take Care of the Rest ;)</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                    <Col>
                        <Form
                            onSubmit={e => this.handleSubmit(e)}
                            style={{paddingTop: '100px'}}
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
                            <Form.Group>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form.Group>
                            <Link to={{
                                pathname: "./register",
                            }}>
                                Register
                            </Link>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
}

const styles = {
    form:{
        backgroundColor: 'white',
        opacity: 1,
      },
      carousel:{
      }
}

export default Login;