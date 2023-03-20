import React from 'react'

export default function FriendTask({ taskItem }) {
    return (
        <li className={taskItem.ID}>
            {taskItem.Text}
        </li>
    )
}
