import React from 'react'
import { useState } from 'react'

const AddFriendForm = () => {
    const [friendName, setFriendName] = useState('');
    const [friendImage, setFriendImage] = useState('');


    return (
        <>
            <div className="mt-3">
                <label htmlFor="billValue">Friend Name </label>
                <input
                    className="bg-transparent border mx-3 border-black rounded-md"
                    id="billValue"
                    type="text"
                    value={friendName}
                    onChange={(e) => setFriendName(e.target.value)} />
            </div>
            <div className="mt-3">
                <label htmlFor="billValue">Image Url </label>
                <input
                    className="bg-transparent border mx-3 border-black rounded-md"
                    id="billValue"
                    type="text"
                    value={friendImage}
                    onChange={(e) => setFriendImage(e.target.value)} />
            </div>
        </>
    )
}

export default AddFriendForm