import React, { Component } from 'react';
import AddCard from '../profile_match/AddCard';
// import { exists } from 'fs';
import NavBar from './NavBar';


class Profile extends Component {
    state = {
        data: null
    };
    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/Profile');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message) 
        }
        this.setState({data: body});
        console.log(this.state.data);
        return body;
    };
    render() {
           if (typeof this.state.data === "string") {
               var obj = JSON.parse(this.state.data)[0];
               // console.log(obj);
                return (
                   <div>
                    <h2>Profile</h2>
                    <AddCard props = {obj}/>
                    </div>
                );
            }
           else 
               return null;
  }
}

export default Profile;