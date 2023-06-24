import React, { useState } from 'react';
import { FriendsData } from '../src/FriendsData';
import Friend from './componenet/Friend';
import './App.css';

function App() {
  const [billValue, setBillValue] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  const [thePersonWhoWouldPay, seThePersonWhoWouldPay] = useState('you');
  const [splitBillWith, setSplitBillWith] = useState(undefined)
  const [data, setData] = useState(FriendsData)


  const handleBillValueChange = (e) => {
    setBillValue(e.target.value);
  };

  const handleYourExpenseChange = (e) => {
    setYourExpense(e.target.value);
  };

  const handleFriendExpenseChange = (e) => {
    setFriendExpense(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    seThePersonWhoWouldPay(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform splitting bill logic here using the state values
    // You can access billValue, yourExpense, friendExpense, and paymentOption here
    console.log('Splitting bill...');

    const updatedData = FriendsData.map(friend => {
      if (friend.name === splitBillWith) {
        const status = `${thePersonWhoWouldPay === "you" ? splitBillWith + " owes you " + friendExpense : "You owe " + splitBillWith + " " + yourExpense}£`
        return { ...friend, statusWithThisFriend: status, color: status.startsWith('You') ? ' text-red-500 ' : " text-green-500" };
      }
      return friend;
    });

    setData(updatedData);


    setBillValue('')
    setFriendExpense('')
    setYourExpense('')
  };

  const handleFriendSelected = (name) => setSplitBillWith(name)



  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div className="bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md">
          {data.map(({ image, name, statusWithThisFriend, color }) => {
            return <Friend image={image} color={color} name={name} handleFriendSelected={handleFriendSelected} statusWithThisFriend={statusWithThisFriend} />;
          })}
        </div>
        {/* form section */}
        {splitBillWith && <form className="bg-[#fefefe] text-[#1a1a1a] w-fit p-6 rounded-md" onSubmit={handleSubmit}>
          <h1 className="text-xl">SPLIT A BILL WITH {splitBillWith}</h1>
          <div className="mt-3">
            <label htmlFor="billValue">Bill value </label>
            <input
              className="bg-transparent border mx-3 border-black rounded-md"
              id="billValue"
              type="number"
              value={billValue}
              onChange={handleBillValueChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="yourExpense">Your expense </label>
            <input
              className="bg-transparent border mx-3 border-black rounded-md"
              id="yourExpense"
              type="number"
              value={yourExpense}
              onChange={handleYourExpenseChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="friendExpense">{splitBillWith} expense </label>
            <input
              className="bg-transparent border mx-3 border-black rounded-md"
              id="friendExpense"
              type="number"
              value={friendExpense}
              onChange={handleFriendExpenseChange}
            />
          </div>
          <div>
            <label htmlFor="paymentOption">Who's paying the bill</label>
            <select id="paymentOption" value={thePersonWhoWouldPay} onChange={handlePaymentOptionChange}>
              <option value="you">You</option>
              <option value="friend">Friend</option>
            </select>
          </div>
          <button className="text-white mt-7 bg-[#1a1a1a]" type="submit">
            Split bill
          </button>
        </form>}
      </div>
    </>
  );
}

export default App;
