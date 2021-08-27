import React from 'react'

function Button({text ,color}) {
    return (
        <div>
            <button
                className="btn"
                style = {{backgroundColor: color}}
            >
                {text}
            </button>
        </div>
    )
}

export default Button
