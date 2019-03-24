import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Login, RequestFeedback, MyFeedback, About, Landing, Methods} from './index.js';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { Redirect } from 'react-router';


class Home extends Component{
    constructor(props){
        super();
        console.log(props);
        if(props && props.location && props.location.state){
            this.state = {
                rootUser: props.location.state.rootUser
            }
        }else{
            this.state = {
                rootUser: null
            }
        }
    }

    render(){
        if(!this.state.rootUser){
            return (<Redirect to="/" />);
            
        }
        return (
            <Router>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Self Woke</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to={{
                                pathname: "/home/feedback",
                                state: {
                                    rootUser: this.state.rootUser
                                }
                            }}>
                            Request Feedback
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={{
                                pathname: "/home/profile",
                                state: {
                                    rootUser: this.state.rootUser
                                }
                            }}>
                            My Feedback
                            </Link>
                        </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <Link to={{
                                    pathname: "/about",
                                    state: {
                                        rootUser: this.state.rootUser
                                    }
                                }}>
                                About
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to={{
                                    pathname: "/methods",
                                    state: {
                                        rootUser: this.state.rootUser
                                    }
                                }}>
                                Methods
                                </Link>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="https://github.com/lbarwiko/bestself">Github</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path="/home" render={(props) => <RequestFeedback {...props} rootUser={this.state.rootUser} />} />
                <Route path="/home/feedback" component={RequestFeedback} />
                <Route path="/home/profile" component={MyFeedback} />
                <Route exact path='/about' component={About} />
                <Route exact path='/landing' component={Landing} />
                <Route exact path='/methods' component={Methods} />
            

            </Router>
        );
     }
}

export default Home;
