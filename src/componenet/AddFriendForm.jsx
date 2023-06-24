import React from 'react'
import Button from './Button';
import { useState } from 'react'

const AddFriendForm = (props) => {
    const [friendName, setFriendName] = useState('');
    const [friendImage, setFriendImage] = useState('https://i.pravatar.cc/48');

    const handleFriendAdded = (e) => {
        e.preventDefault();
        if (!friendImage || !friendImage) return;
        const id = crypto.randomUUID()
        props.onAddFriend({
            id,
            image: `${friendImage}?=${id}`,
            name: "Jack ",
            statusWithThisFriend: "you and Jack are even",
        })
    }
    return (
        <form onSubmit={handleFriendAdded} className='bg-[#fefefe] text-[#1a1a1a]  mt-5  row-start-2 w-fit p-3 rounded-md'>
            <div className="mt-3 flex ">
                <label htmlFor="billValue">Friend Name </label>
                <input
                    className="bg-transparent border mx-3 border-black rounded-md"
                    id="billValue"
                    type="text"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)} />
            </div>
            <div className="mt-3 flex ml-4">
                <label htmlFor="billValue">Image Url </label>
                <input
                    className="bg-transparent border mx-3 border-black rounded-md"
                    id="billValue"
                    type="text"
                    value={friendImage}
                    onChange={(e) => setFriendImage(e.target.value)} />
            </div>
            <Button>Add Friend</Button>
        </form>
    )
}

export default AddFriendForm