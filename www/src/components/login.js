import React, { Component } from 'react';

class Login extends Component{
<<<<<<< HEAD
    render(){
        return (
            <div>
                <h2>Login</h2>
            </div>
        );
     }
=======
  constructor(props){
    super(props);
    this.state = {
      valueUser: '',
      valuePass: ''
    }
  }

  handleUserChange(event){
    this.setState( {valueUser: event.target.value} );
  }

  handlePassChange(event){
    this.setState( {valuePass: event.target.value })
  }

  handleLoginSubmit(event){
    let username = this.state.valueUser;
    let pass = this.state.valuePass;

    // check in database

    event.preventDefault();
  }
  render(){
    return (
      <article>
        <form onSubmit={(event)=>this.handleLoginSubmit(event)}>
            <input placeholder='Username'
                   type='text'
                   value={this.state.valueUser}
                   onChange={(event)=>this.handleUserChange(event)} />
            <input placeholder='Password'
                   type='password'
                   value={this.state.valuePass}
                   onChange={(event)=>this.handlePassChange(event)} />
            <input type='submit'
                   value='Send' />
        </form>
      </article>
    );
  }
>>>>>>> landing
}

export default Login;