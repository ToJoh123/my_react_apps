import React from 'react'
import FriendTask from './FriendTask'

export default function FriendList({ friendItem }) {
  return (
    <div key={friendItem.ID} >
      {friendItem.ListName}
      <ul>
        {
          friendItem.Task?.map((taskItem) => (
            <FriendTask taskItem={taskItem} key={taskItem.ID} />
          ))
        }
      </ul>
    </div>
  )
}
