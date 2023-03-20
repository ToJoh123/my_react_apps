import React from 'react'

export default function Task({ task, onDeleteTask, onEditTask }) {
    function handleDeleteTask() {
        onDeleteTask(task.ID);
    }
    function handleEditTask() {
        onEditTask(task.ID);

    }
    return (
        <React.Fragment>
            <li key={task.ID}> {task.Text}
                <button onClick={handleDeleteTask}>x</button>
                <button onClick={handleEditTask}>edit</button>
            </li>

        </React.Fragment>
    )
}
