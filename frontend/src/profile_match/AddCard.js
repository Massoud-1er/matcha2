import CArd from './Card';
import React from 'react';
// import getUser from '../../../Userdb';

function AddCard(props) {
//console.log(props.props.id);
console.log(props);
  // getUser(1);
    var user = {
        name: props.props.first_name,
        intro: props.props.intro,
        desc : props.props.description,
        photo: ["./natalie1.jpg", "./natalie2.jpg",  "./natalie3.jpg"]
      };

        return (
          <div>
    <CArd {...user}/>
    </div>
      );
    }
export default AddCard;