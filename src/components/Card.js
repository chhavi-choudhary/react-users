import React from 'react'

const Card=(props) =>{
    console.log(props)
    return (
        <div>
            <h1>Identification Cards!!</h1>
            <section>
                <img src={props.imageUrl} alt="pet pictures"/>
                <h2>{props.firstName} {props.lastName}</h2>
                <p>Age:{props.age}</p>
            </section>
        </div>
    )
}
export default Card;