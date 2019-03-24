import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Form, Button, InputGroup, DropdownButton, Dropdown, FormControl} from 'react-bootstrap';


class RequestFeedback extends Component{

    constructor(){
        super();
        
        this.addNumber = this.addNumber.bind(this);
        this.getRequestItem = this.getRequestItem.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleRelationChange = this.handleRelationChange.bind(this);

        this.state = {
            numberInput: null,
            relationInput: 'Peer',
            requests:[],
            uid: 0
        }
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

    render(){
        var requests = this.state.requests.map(this.getRequestItem);

        return (
            <div style={styles.wrapper}>
                <Form>
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
                    <Button style={styles.buttons} variant="secondary" onClick={this.addNumber}>
                        Add Number
                    </Button>
                    <Button style={styles.buttons} variant="primary" type="submit">
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
