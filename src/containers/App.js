import React, { useState, useEffect } from "react";
import CardList from '../components/CardList';
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

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
        <div style={{textAlign:'center'}}>
            <h1 style={{fontWeight:'900', fontSize:'50px'}}>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <CardList robots = {filteredRobots} />  
            </Scroll>
        </div>
    );
}

export default App;