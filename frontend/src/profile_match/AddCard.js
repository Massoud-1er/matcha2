import CArd from './Card';
import React from 'react';

function AddCard() {
    
    var user = {
        name: "freda",
        desc: "j'aime le caca",
        photo: ["./julie1.jpg", "./julie2.jpg", "./julie3.jpg"]
      };
    var user1 = {
        name: "natalie",
        desc: "je ne sais quoi faire",
        photo: ["./natalie1.jpg", "./natalie2.jpg",  "./natalie3.jpg"]
      };

        return (
          <div>
    <CArd {...user}/>
    <CArd {...user1}/>
    </div>
      );
    }
export default AddCard;