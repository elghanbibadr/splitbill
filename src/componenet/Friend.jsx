import React from 'react'

const Friend = (props) => {
    return (
        <div className='text-white'>
            <img className='float-left' src={props.image} alt="" />
            <div>
                <h2>{props.friendName}</h2>
                <p>{props.statusWithThisFriend}</p>
            </div>
        </div>
    )
}

export default Friend