import React from 'react';
import Button from './Button';

function Header({title ,toggleShow, isTaskBarShowed}) {
    return (
        <header className="header">

            <h1> {title} </h1>

            <Button 
                text = {isTaskBarShowed? "Hide Create a Task Bar" : "Show Create a Task Bar"}
                color = {isTaskBarShowed? "steelblue" : "purple"}
                toggleShow={toggleShow}
                />

        </header>
    )
}

export default Header
