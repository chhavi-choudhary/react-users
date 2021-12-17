import React from 'react';
import Card from './Card';

const CardList =(props) =>{
   
    return (
        <div>
            {props.users.map(user=> <Card {...user} key={user.id}/>)}
        </div>
    )
}

export default CardList;