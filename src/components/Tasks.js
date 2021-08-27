import React from 'react';

function Tasks({tasks}) {
    return (
        <div>
            {tasks.map((task) => {
                return task.text
            })}
        </div>
    )
}

export default Tasks
