import React from 'react'
import ListForm from './ListForm'

export default function List({ listItem, taskItem }) {

    return (
        <div key={listItem.ID}>
            <h3>{listItem.ID}</h3>


            {taskItem.length > 0 && (


                <div className="tasks">
                    <p>{listItem.ID}</p>
                    {taskItem.map((task) => (
                        //here i am reusing the List component to render the tasks, but i am passing an empty array as the taskItem prop. Reason is to avoid going another component level deeper. 
                        <List key={task.ID} listItem={task} taskItem={[]} />
                    ))}
                </div>
            )}
        </div>
    )
}
