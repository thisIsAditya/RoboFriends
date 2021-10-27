import React from "react";
import Card from "./card";

const CardList = ({robots}) => {
    const cardsList = robots.map((user) => {
        return(
            <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        );
    });
    return(
        <div>
            {cardsList}
        </div>
    );
}

export default CardList;
