import React, { useState } from 'react';
import ListForm from './ListForm';
import Task from './Task'

export default function List({ listItem, onDeleteList, onEditList, onAddTask, setActiveList, activeList, childOnDeleteTask, onEditTask }) {
    // const isCurrentList = activeList.id === listItem.ID && activeList.type === "list-item";
    // const isEditing = activeList.id === listItem.ID && activeList.type === "edit";

    const isEditing =
        activeList &&
        activeList.id === listItem.ID &&
        activeList.type === "edit";

    const isItemType =
        activeList &&
        activeList.id === listItem.ID &&
        activeList.type === "task";

    const isEditingTask =
        activeList &&
        activeList.id === listItem.ID &&
        activeList.type === "edit-task";

    function handleDeleteList() {
        onDeleteList(listItem.ID);
    }
    // function handleEditList() {
    //     //will be removed
    //     onEditList(listItem.ID);
    // }

    function handleDeleteTask(taskID) {
        childOnDeleteTask(listItem.ID, taskID);

        // console.log("delete task", taskID, "from list", listItem.ID);
    }
    function handleEditTask(taskID) {
        setActiveList({ id: listItem.ID, taskId: taskID, type: "edit-task" });
    }

    return (
        <ul>
            <p>{listItem.ListName}</p>

            <button onClick={handleDeleteList}>x</button>
            <button onClick={() => setActiveList({ id: listItem.ID, type: "edit" })}>edit list</button>
            <button onClick={() => setActiveList({ id: listItem.ID, type: "task" })}>add task</button>
            {isEditing && <ListForm
                submitLabel="edit list"
                handleSubmit={(text) => onEditList(listItem.ID, text)}
                handleCancel={() => { setActiveList(null) }}
                initialText={listItem.ListName}
                hasCancelButton
            />
            }
            {isItemType && <ListForm submitLabel="add task"
                handleSubmit={(text) => onAddTask(listItem.ID, text)}
                handleCancel={() => { setActiveList(null) }} />
            }
            {isEditingTask && <ListForm submitLabel="edit task"
                handleSubmit={(text) => onEditTask(listItem.ID, activeList.taskId, text)} //get text from form, and sending listID and taskID to parent
                handleCancel={() => { setActiveList(null) }}
                initialText={listItem.Task.find((task) => task.ID === activeList.taskId).Text}
                hasCancelButton
            />
            }
            {listItem.Task?.map((task) => (
                <Task key={task.ID} task={task} onEditTask={handleEditTask} onDeleteTask={handleDeleteTask} />
            ))}
        </ul>
    )
}
