import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {Auth} from '../services/';
import {Login, Home} from '../components/';

class Splash extends Component{

    constructor(){
        super();
        this.state = {
            loggedIn: false,
            rootUser: null
        }
    }

    componentDidMount(){
        if(!this.state.loggedIn){
            Auth.init()
            .then(res=>{
                console.log(res);
                this.setState({
                    loggedIn: true,
                    rootUser: res
                });
            })
            .catch(err=>{
                this.setState({
                    loggedIn: true
                });
                console.log(err);
            });
        }
    }    

    render(){
        if(this.state.loggedIn){
            if(!this.state.rootUser){
                return (<Redirect to="/login" />);
            }else{
                return (<Redirect to={{
                    pathname: '/home/',
                    state: { rootUser: this.state.rootUser }
                }}/>);
            }
        }

        return (
            <div>
                <h2>Splash</h2>
            </div>
        );
     }
}

export default Splash;