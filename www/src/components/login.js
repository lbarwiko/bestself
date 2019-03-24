//Home
import React, { Component } from 'react';

class Login extends Component{
  constructor(props);
    super(props);
    this.state = {
      value = '';
    }

    handleChange(event){
      this.setState( {value: event.target.value} );
    }

    handleLoginSubmit(event){

    }
  render(){
    return (
      <article>
        <form onSubmit={(event)=this.handleLoginSubmit(event)}>
            <input placeholder='Username'
                   type='text'
                   value={this.state.value}
                   onChange={(event)=>this.handleChange(event)}></input>
            <input type='submit'
                   value='Send'></input>
            <input>Submit</input>
        </form>
      </article>
    );
  }
}

export default Login;
