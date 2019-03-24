import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container, ListGroup} from 'react-bootstrap';

class Methods extends Component{

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
              <section className='wrapper' id='best-self'>
                <h1>The Reflected Best-Self</h1>
                <h2>Developed by Laura Morgan Roberts of Harvard Business School and Jane E. Dutton et. al of University of Michigan</h2>
                <p>Reflected Best-Self seeks to improve the individuals self-potential through individual assessment and interpersonal feedback. </p>
                <p className='quote'>"Being extraordinary does not necessarily mean obtaining a position of honor or glory or even of becoming successful in other people's eyes. It means being true to self. It means pursuing our full potential" -Quinn & Quinn, 2002.</p>
              </section>
            </Container>
        );
     }
}

export default Methods;
