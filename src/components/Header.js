import React from 'react';
import Button from './Button';

function Header({title}) {
    return (
        <header className="header">

            <h1> {title} </h1>

            <Button 
                text = {"Show Create a Task Bar"}
                color = "purple"
                />

        </header>
    )
}

export default Header
