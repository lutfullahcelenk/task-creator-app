import React from 'react';
import TaskItem from './TaskItem';

function Tasks({tasks}) {
    return (
        <div>
            {tasks.map((task) => {
                return <TaskItem key={task.id} task={task}
                />
            })}
        </div>
    )
}

export default Tasks
