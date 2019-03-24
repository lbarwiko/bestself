import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Login, RequestFeedback, MyFeedback} from './index.js';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'


class Home extends Component{
    constructor(props){
        super();
        console.log(props);
    }

    render(){
        return (
            <Router>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="">Self Woke</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link><Link to="./feedback">Request Feedback</Link></Nav.Link>
                        <Nav.Link><Link to="./profile">My Feedback</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">About</Nav.Link>
                            <Nav.Link href="#methods">Methodology</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">Github</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path="/home" component={RequestFeedback} />
                <Route path="/home/feedback" component={RequestFeedback} />
                <Route path="/home/profile" component={MyFeedback} />
            

            </Router>
        );
     }
}

export default Home;
