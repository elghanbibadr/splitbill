import React from 'react'

const Button = ({ children, onClick }) => {
    return (
        <button className='text-white mt-7 bg-[#1a1a1a]' onClick={onClick}>{children}</button>
    )
}

export default Button