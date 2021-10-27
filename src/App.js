import React, { useState, useEffect } from "react";
// import { robots } from './robots';
import CardList from './CardList';
import SearchBox from "./SearchBox";

const App = () => {
    const [sRobots, setRobots] = useState([]);
    const [sF, setSF] = useState('');

    const onSearchChange = e => {
        setSF(e.target.value);
    } 

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    },[sF]);

    const filteredRobots = sRobots.filter(robot =>{
        return robot.name.toLocaleLowerCase().includes(sF.toLocaleLowerCase());
    });
    return(
        <div>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList robots = {filteredRobots} />
        </div>
    );
}

export default App;