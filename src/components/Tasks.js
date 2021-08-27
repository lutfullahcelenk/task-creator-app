import React from 'react';
import TaskItem from './TaskItem';

function Tasks({tasks ,onDelete ,toggleDone}) {
    return (
        <div>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} onDelete={onDelete} toggleDone={toggleDone}
                />
            })}
        </div>
    )
}

export default Tasks
