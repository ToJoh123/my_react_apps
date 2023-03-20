import React, { useState, useEffect } from 'react'
import { getLists as getListsAPI, createList as createListAPI, createTask as createTaskAPI, deleteList as deleteListAPI, deleteTask as deleteTaskAPI } from '../api'
import FriendList from './friends/FriendList';
import Friends from './friends/Friends';
import List from './List';
import ListForm from './ListForm';
export default function Lists() {
  const [userLists, setUserLists] = useState([])
  const [friendsLists, setFriendsLists] = useState([])
  const [activeList, setActiveList] = useState(null)

  //simple counter to generate unique IDs
  let counter = 100;
  function increment() {
    return ++counter;
  }
  const findIndexOfTasks = (listID) => {
    const searchParam = listID;
    //find the list index in the userLists array
    const listIndex = userLists.findIndex((list) => list.ID === searchParam);
    //return the tasks array from the list
    //if the list is not found, return an empty array
    // if (listIndex === -1) return [];
    return userLists[listIndex].Task;
  }

  const addList = (text) => {
    const randomID = increment();
    console.log("New list with name", text);
    setUserLists([...userLists, { ID: randomID, ListName: text, Task: [] }]);
  }

  useEffect(() => {
    getListsAPI().then((data) => {
      setUserLists(data.List);
      setFriendsLists(data.Friends);
    });
  }, []);


  function handleDeleteList(listID) {
    setUserLists(userLists.filter((list) => list.ID !== listID));
    console.log("delete list", listID);
  }

  function handleEditList(listID, text) {
    setUserLists(userLists.map((list) => {
      if (list.ID === listID) {
        return { ...list, ListName: text };
      }
      return list;
    }));
    console.log("edit list", listID, "to", text);
  }
  function handleAddTask(listID, text) {
    setUserLists(userLists.map((list) => {
      if (list.ID === listID) {
        const randomID = increment();
        return { ...list, Task: [...list.Task, { ID: randomID, Text: text }] };
      }
      return list;
    }));
    console.log("add task", text, "to list", listID);
  }
  function handleEditTask(listID, taskID, text) {
    setUserLists(userLists.map((list) => {
      if (list.ID === listID) {
        return {
          ...list, Task: list.Task.map((task) => {
            if (task.ID === taskID) {
              return { ...task, Text: text };
            }
            return task;
          })
        };
      }
      return list;
    }));
    console.log("edit task", taskID, "in list", listID, "to", text);
  }

  function handleDeleteTask(listID, taskID) {
    setUserLists(userLists.map((list) => {
      if (list.ID === listID) {
        return { ...list, Task: list.Task.filter((task) => task.ID !== taskID) };
      }
      return list;
    }));
    console.log("delete task", taskID, "from list", listID);
  }
  console.log(friendsLists)
  return (
    <div className='lists'>
      <div>
        <ListForm submitLabel="add list" handleSubmit={addList} />
        <h2>My Lists</h2>
        {userLists.map((listItem) => (
          <List
            key={listItem.ID}
            listItem={listItem}
            taskItem={findIndexOfTasks(listItem.ID)}
            onDeleteList={handleDeleteList}
            onEditList={handleEditList}
            onAddTask={handleAddTask}
            setActiveList={setActiveList}
            activeList={activeList}
            childOnDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />
        ))}
        {friendsLists?.map((friend) => (
          <Friends
            key={friend.ID}
            friend={friend}
          />
        ))
        }
      </div>
    </div>
  )
}
