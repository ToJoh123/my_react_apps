import React, { useState, useEffect } from 'react'
import { getLists as getListsAPI, createList as createListAPI, createTask as createTaskAPI, deleteList as deleteListAPI, deleteTask as deleteTaskAPI } from '../api'
import List from './List';
import ListForm from './ListForm';
export default function Lists() {
  const [userLists, setUserLists] = useState([])
  const [friendsLists, setFriendsLists] = useState([])

  const findIndexOfTasks = (listID) => {
    const searchParam = listID;
    //find the list index in the userLists array
    const listIndex = userLists.findIndex((list) => list.ID === searchParam);
    //return the tasks array from the list
    //if the list is not found, return an empty array
    // if (listIndex === -1) return [];
    return userLists[listIndex].Task;
  }
  useEffect(() => {
    getListsAPI().then((data) => {
      setUserLists(data.List);
      setFriendsLists(data.Friends);
    });
  }, []);
  console.log(userLists);

  return (
    <div className='lists'>
      <div>
        <h2>My Lists</h2>
        {userLists.map((listItem) => (
          <List key={listItem.ID} listItem={listItem} taskItem={findIndexOfTasks(listItem.ID)} />
        ))}
      </div>
    </div>
  )
}
