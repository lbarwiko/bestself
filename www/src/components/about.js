import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container, ListGroup} from 'react-bootstrap';

class About extends Component{

    constructor(props){
        super();
        if(props){
            this.state = {
            }
        }
    }

    render(){
        return (
            <Container>
                <h1>About Self Woke</h1>

            </Container>
        );
     }
}

export default About;
