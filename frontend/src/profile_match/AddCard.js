import CArd from './Card';
import React from 'react';

function AddCard() {
    
    var user = {
        name: "freda",
        photo1: "./julie1.jpg",
        photo2: "./julie2.jpg",
        photo3: "./julie3.jpg",      
        desc: "j'aime le caca"
      };
    var user1 = {
        name: "natalie",
        photo1: "./natalie1.jpg",
        photo2: "./natalie2.jpg",
        photo3: "./natalie3.jpg",      
        desc: "je ne sais quoi faire"
      };

        return (
          <div>
    <CArd {...user}/>
    <CArd {...user1}/>
    </div>
      );
    }
export default AddCard;