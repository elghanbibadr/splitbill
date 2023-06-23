import { useState } from 'react'
import { FriendsData } from "../src/FriendsData"
import Friend from './componenet/Friend'
import './App.css'

function App() {

  return (
    <>
      <div className='grid grid-cols-2 p-10'>
        <div className='bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md'>
          {FriendsData.map(({ image, name, statusWithThisFriend }) => {
            return <Friend image={image} name={name} statusWithThisFriend={statusWithThisFriend} />
          })}
        </div>
        {/* form section */}
        <form className='bg-[#fefefe] text-[#1a1a1a] w-fit p-6 rounded-md'>
          <h1 className='text-xl'>SPLIT A BILL WITH ANTHONY</h1>
          <div className='mt-3'>
            <label htmlFor="bill value">Bill value </label>
            <input className='bg-transparent border mx-3 border-black rounded-md' id='bill value' type="number" />
          </div>
        </form>
      </div>

    </>
  )
}

export default App
