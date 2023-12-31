import React, { useState } from 'react';
import { FriendsData } from '../src/FriendsData';
import Friend from './componenet/Friend';
import SplitBillForm from './componenet/SplitBillForm';
import Button from './componenet/Button';
import AddFriendForm from './componenet/AddFriendForm';
import './App.css';

function App() {

  const [splitBillWith, setSplitBillWith] = useState(undefined)
  const [friendAdded, setFriendAdded] = useState(false)
  const [data, setData] = useState(FriendsData)

  console.log(data)
  const handleFriendSelected = (friendToSplitBillWith) => setSplitBillWith({ id: friendToSplitBillWith.id, name: friendToSplitBillWith.name, });
  const handleFriendAdded = (friend) => {
    setData(prv => [...prv, friend])
    setFriendAdded(true)
  }

  const handleBillSplited = (updatedFriendsData) => {
    console.log(updatedFriendsData)
    setData(updatedFriendsData)
  }
  return (
    <>
      <div className="md:grid md:grid-cols-2 p-10">
        <div className="bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md">
          {data.map(({ id, image, name, balance, color }) => {
            return <Friend id={id} key={id} image={image} color={color} name={name} handleFriendSelected={handleFriendSelected} balance={balance} />;
          })}
        </div>
        {splitBillWith && <SplitBillForm splitBillWith={splitBillWith} onSplitBillWithFriend={handleBillSplited} friendsData={data} />}
        {!friendAdded && <AddFriendForm onAddFriend={handleFriendAdded} />}
      </div>
    </>
  );
}

export default App;
