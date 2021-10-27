import React from "react";
const Card = (props) => {
    return(
        <div style={{width:'30%', border:'3px dashed grey', textAlign:'center',margin:'10px'}} >
            <img src={`https://robohash.org/${props.name}?200x200`} alt='Robots' />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;