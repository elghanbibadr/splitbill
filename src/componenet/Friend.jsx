import React from 'react'

const Friend = (props) => {
    const handleFriendSelected = () => props.handleFriendSelected({ id: props.id, name: props.name })

    return (
        <div className=' max-w-[410px]  my-8'>
            <div className="flex justify-between">
                <div className='flex'>
                    <img className=' mx-5 h-12 w-12 object-fill rounded-full' src={props.image} alt="" />
                    <div className='text-left '>
                        <h2 className='text-lg font-medium'>{props.name}</h2>
                        <p className={`mr-5 ${props.color}`} >{props.statusWithThisFriend}</p>
                    </div>
                </div>
                <button onClick={handleFriendSelected} className='text-white'>select</button>
            </div>
        </div>
    )
}

export default Friend