import React from 'react';
import TaskItem from './TaskItem';

function Tasks({tasks ,onDelete}) {
    return (
        <div>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task} onDelete={onDelete}
                />
            })}
        </div>
    )
}

export default Tasks
