import { useState } from 'react'
import { FriendsData } from "../src/FriendsData"
import Friend from './componenet/Friend'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md'>
        {FriendsData.map(({ image, name, statusWithThisFriend }) => {
          return <Friend image={image} name={name} statusWithThisFriend={statusWithThisFriend} />
        })}
      </div>

    </>
  )
}

export default App
