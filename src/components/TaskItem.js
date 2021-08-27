import React from 'react';

function TaskItem({task}) {
    return (
        <div className="task">
            <h3>
                {task.text}
                <button 
                    className="btn"
                    style={{cursor:"pointer" , backgroundColor:"red"}}
                >Delete</button>
            </h3>
            <p> {task.day} </p>
        </div>
    )
}

export default TaskItem
