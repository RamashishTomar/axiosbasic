import React, { Component } from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';



class App extends Component {
  state = {
    repos: null
  }

 getUser=(e) => {
           e.preventDefault();
           const user = e.target.elements.username.value;
            if(user){
                       axios.get(
                     `https://api.github.com/users/${user}`)
                     .then((res)=>
                
                      { const repos=res.data.public_repos;this.setState({repos:repos});})
                     }
            else
            return;
              
              
 }
 
  
  render() {
    return (
      <div >
        <header >
          <h1 >HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser}/>
          {this.state.repos?<p>Number of repositories{this.state.repos}</p>:<p>Please Enter A username</p>}
          
      </div>
    );
  }
};

export default App;