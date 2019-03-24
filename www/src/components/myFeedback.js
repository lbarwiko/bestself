import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container, ListGroup} from 'react-bootstrap';
import {ApiEndpoints} from '../services/';

class RequestFeedback extends Component{

    constructor(props){
        super();
        if(props){
            this.state = {
                rootUser: props.rootUser || props.location.state.rootUser,
                feedback: []
            }
        }
        this.getFeedback();
    }

    getFeedback(){
        var url = ApiEndpoints.feedback;


        console.log(this.state.rootUser);

        return fetch(url,{
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.state.rootUser.token
            }
        })
        .then(res=>{
           return res.json();
        })
        .then(res=>{
            console.log(res);
            this.setState({
                feedback: res
            })
        })
        .catch(err=>console.log(err));
    }

    getFeedbackView(data){
        return (
            <ListGroup.Item>{data}</ListGroup.Item>
        );
    }

    render(){
        var listItems = this.state.feedback.map(this.getFeedbackView);
        return (
            <Container>
                <h1>My Feedback</h1>
                <ListGroup>
                    {listItems}
                </ListGroup>
            </Container>
        );
     }
}

export default RequestFeedback;
