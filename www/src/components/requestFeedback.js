import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, InputGroup, DropdownButton, Dropdown,FormGroup, FormControl} from 'react-bootstrap';
import {ApiEndpoints} from '../services/';

class RequestFeedback extends Component{

    constructor(props){
        super();
        console.log(props);

        this.addNumber = this.addNumber.bind(this);
        this.getRequestItem = this.getRequestItem.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleRelationChange = this.handleRelationChange.bind(this);
        this.sendRequests = this.sendRequests.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            rootUser: props.rootUser || props.location.state.rootUser,
            numberInput: null,
            relationInput: 'Peer',
            requests:[],
            uid: 0
        }

        console.log(this.state);
    }

    sendRequests(){
        var numbers = this.state.requests.map(item=>{
            return item.number
        });

        var url = ApiEndpoints.request;

        var payload = {
            numbers: numbers
        }
        console.log(this.state.rootUser);
        console.log(payload);

        return fetch(url,{
            method: 'Post',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': this.state.rootUser.token
            },
            body:JSON.stringify(payload)
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
    }

    handleNumberChange(event){
        this.setState({
            numberInput: event.target.value
        })
        console.log(event);
    }  

    handleRelationChange(event){
        this.setState({
            relationInput: event.target.value
        })
        console.log(event);
    }

    addNumber(){
        console.log(this.state);
        if(!this.state.relationInput || !this.state.numberInput){
            return;
        }

        this.setState(prev=>{
            return {
                requests: prev.requests.concat({
                    number: prev.numberInput,
                    relation: prev.relationInput
                }),
                number: null,
                relation: 'Peer'
            }
        })

        console.log(this.state);
    }

    getRequestItem(data){
        return (
            <div key={data.number}>
                <p>{data.number} - {data.relation}</p>
            </div>
        );
    }

    handleSubmit(event){
        this.sendRequests();
        event.preventDefault();
      }

    render(){
        var requests = this.state.requests.map(this.getRequestItem);

        return (
            <div style={styles.wrapper}>
                <Form
                    
                >
                    <InputGroup style={styles.padDat}>
                        <FormControl
                            placeholder="Feedback Giver's Phone #"
                            aria-label="Phone Number"
                            aria-describedby="basic-addon2"
                            onChange={(event)=>this.handleNumberChange(event)} 
                        />

                        <Form.Control 
                            as="select"
                            onChange={(event)=>this.handleRelationChange(event)} 
                        >
                            <option>Peer</option>
                            <option>Important Adult</option>
                            <option>Crush</option>
                        </Form.Control>
                    </InputGroup>
                    {requests}
                    <FormGroup>
                        <Button style={styles.buttons} variant="secondary" onClick={this.addNumber}>
                            Add Number
                        </Button>
                    </FormGroup>
                    <Button style={styles.buttons} variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
     }
}

const styles = {
    buttons:{
        padding: 10
    },
    padDat:{
        paddingBottom: 30
    },
    wrapper:{
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop:30,
        justifyContent:'center', 
        maxWidth: 600
    }
}

export default RequestFeedback;
