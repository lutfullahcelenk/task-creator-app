import React from 'react';

function TaskItem({task ,onDelete ,toggleDone}) {
    return (
        <div className={`task ${task.isDone ? "done" : ""}`} onDoubleClick={() =>toggleDone(task.id)}>
            <h3>
                {task.text}
                <button 
                    className="btn"
                    style={{cursor:"pointer" , backgroundColor:"red"}}
                    onClick={() => onDelete(task.id)}
                >Delete</button>
            </h3>
            <p> {task.day} </p>
        </div>
    )
}

export default TaskItem
