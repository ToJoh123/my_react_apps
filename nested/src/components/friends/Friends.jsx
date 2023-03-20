import React from 'react'
import FriendList from './FriendList'

export default function Friends({ friend }) {
    return (
        <div key={friend.ID}>
            <h2>{friend.Name}</h2>
            {
                friend.List?.map((friendItem) => (
                    <FriendList friendItem={friendItem} key={friendItem.ID} />
                ))
            }
        </div>
    )
}
