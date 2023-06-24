import React, { useState } from 'react';
import { FriendsData } from '../src/FriendsData';
import Friend from './componenet/Friend';
import SplitBillForm from './componenet/SplitBillForm';
import Button from './componenet/Button';
import AddFriendForm from './componenet/AddFriendForm';
import './App.css';

function App() {

  const [splitBillWith, setSplitBillWith] = useState(undefined)
  const [data, setData] = useState(FriendsData)


  const handleFriendSelected = (friendId) => setSplitBillWith(friendId)
  const handleDataChanged = (items) => setData(items)

  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div className="bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md">
          {data.map(({ id, image, name, statusWithThisFriend, color }) => {
            return <Friend id={id} key={id} image={image} color={color} name={name} handleFriendSelected={handleFriendSelected} statusWithThisFriend={statusWithThisFriend} />;
          })}
        </div>
        <SplitBillForm splitBillWith={splitBillWith} handleDataChanged={handleDataChanged} />
        <AddFriendForm setData={setData} />
      </div>
    </>
  );
}

export default App;
