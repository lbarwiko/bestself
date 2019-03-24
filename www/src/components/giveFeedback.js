import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown,Button, Form} from 'react-bootstrap';
import {ApiEndpoints} from '../services/';

class giveFeedback extends Component{

    constructor(props){
        super();

        this.state = {
            user_id: props.match.params.userId,
            comment: null,
            submitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log(this.state.user_id);
    }

    handleChange(event){
        this.setState( {comment: event.target.value })
    }


    handleSubmit(){
        var url = ApiEndpoints.feedback;
        var payload = {
            user_id: this.state.user_id,
            comment: this.state.comment
        }
        return fetch(url,{
            method: 'Post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(payload)
        })
        .then(res=>{
            window.location.replace('http://selfwoke.co')
        })
        .catch(err=>console.log(err));
    }

    render(){
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
                <Container >
                    <h1 style={styles.header}>Give Feedback</h1>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Where does this person excel?</Form.Label>
                            <Form.Control  onChange={(event)=>this.handleChange(event)} as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant='primary' onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>
        );
     }
}

const styles = {
    header:{
        paddingTop: '10px'
    }
}

export default giveFeedback;
