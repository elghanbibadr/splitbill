import { useState } from 'react'
import { FriendsData } from "../src/FriendsData"
import Friend from './componenet/Friend'
import './App.css'

function App() {

  return (
    <>
      {FriendsData.map(({ image, name, statusWithThisFriend }) => {
        return <Friend image={image} name={name} statusWithThisFriend={statusWithThisFriend} />
      })}

    </>
  )
}

export default App
