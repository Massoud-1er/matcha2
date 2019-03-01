import React, { Component } from 'react';
import './HomePageStyle.css';
import RegisterForm from '../Account/RegisterForm'
import LoginForm from '../Account/LoginForm';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
     chooseForm: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    handleSubmit = () => {
      var value = 1;
      if (this.state.chooseForm === 1)
          value = 0;
      this.setState({chooseForm: value});
    }
  
  render() {
    console.log(this.state.chooseForm);

      return (
        <div>
        <section className="section parallax parallax-1">
          <button onClick={this.handleSubmit}type="submit" className="btn btn-primary">login</button>
  <div className="container">
  <div className="regis">
  {/* <LoginForm /> */}
    <RegisterForm chooseForm = {this.state.chooseForm}/>

    </div>
    <h1>matcha</h1>
  </div>
</section>
<section className="section content">
  <div className="container">
    <h2>connecte toi</h2>
  </div>
</section>
     {/* <section class="section parallax parallax-2">
       <div class="container">
         <h1>Section 2</h1>
       </div>
     </section>
     <section class="section content">
       <div class="container">
         <h2>Simple title 2</h2>
         <p>Nam imperdiet posuere bibendum. Aliquam nec consectetur metus. Aliquam egestas a elit at malesuada...</p>
         <p>...Nam imperdiet posuere bibendum. Aliquam nec consectetur metus. Aliquam egestas a elit at malesuada...
        etur metus. Aliquam egestas a elit at malesuada...
         Nam imperdiet posuere bibendum. Aliquam nec consectetur metus. Aliquam egestas a elit at malesuada...
    
         </p>
         <p>...</p>
         <p>...</p>
       </div>
     </section>
     <section class="section parallax parallax-3">
       <div class="container">
         <h1>Section 3</h1>
       </div>
     </section>
     <section class="section content">
       <div class="container">
         <h2>Simple title 3</h2>
         <p>Proin tempor urna vitae tortor porttitor, ac malesuada elit lacinia. Nulla ac tellus nulla. Donec iaculis...</p>
         <p>...</p>
         <p>...</p>
         <p>...</p>
  </div>
   </section> */}
        </div>
    );
}
}

export default HomePage;