import React, { Component } from 'react';
import LoginForm from '../Account/LoginForm';
import ReactDOM from 'react-dom';
import Register from '../Account/RegisterForm';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <div><GuestGreeting /> <Register /></div>;
  }
function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

class Account extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
    
      render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let loginForm;
        
        if (isLoggedIn) {
          button = <LoginButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LogoutButton onClick={this.handleLoginClick} />;
            loginForm = <LoginForm />
        }
    
        return (
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
            {loginForm}
          </div>
        );
      }
    }
    
    ReactDOM.render(
      <Account />,
      document.getElementById('root')
    );

    export default Account;