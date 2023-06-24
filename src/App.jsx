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


  const handleFriendSelected = (name) => setSplitBillWith(name)
  const handleDataChanged = (items) => setData(items)

  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div className="bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md">
          {data.map(({ image, name, statusWithThisFriend, color }) => {
            return <Friend image={image} color={color} name={name} handleFriendSelected={handleFriendSelected} statusWithThisFriend={statusWithThisFriend} />;
          })}
        </div>
        {/* form section */}
        <SplitBillForm splitBillWith={splitBillWith} handleDataChanged={handleDataChanged} />
      </div>
      <AddFriendForm />
    </>
  );
}

export default App;
