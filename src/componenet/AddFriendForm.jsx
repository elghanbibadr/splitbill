import React from 'react'
import Button from './Button';
import { useState } from 'react'

const AddFriendForm = (props) => {
    const [friendName, setFriendName] = useState('');
    const [friendImage, setFriendImage] = useState('');

    const handleFriendAdded = (e) => {
        e.preventDefault();
        props.setData(prv => [...prv, {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            name: "Jack ",
            statusWithThisFriend: "you and Jack are even",
        },
        ])

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