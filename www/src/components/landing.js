import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container, ListGroup} from 'react-bootstrap';

class Landing extends Component{

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
                <h1>The Reflected Best Self</h1>

            </Container>
        );
     }
}

export default Landing;
