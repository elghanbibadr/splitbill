import React, { useState } from 'react';
import { FriendsData } from '../src/FriendsData';
import Friend from './componenet/Friend';
import './App.css';

function App() {
  const [billValue, setBillValue] = useState('');
  const [yourExpense, setYourExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  const [paymentOption, setPaymentOption] = useState('you');

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
    setPaymentOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform splitting bill logic here using the state values
    // You can access billValue, yourExpense, friendExpense, and paymentOption here
    console.log('Splitting bill...');
    setBillValue('')
    setFriendExpense('')
    setYourExpense('')
  };

  return (
    <>
      <div className="grid grid-cols-2 p-10">
        <div className="bg-[#fefefe] text-[#1a1a1a] w-fit p-3 rounded-md">
          {FriendsData.map(({ image, name, statusWithThisFriend }) => {
            return <Friend image={image} name={name} statusWithThisFriend={statusWithThisFriend} />;
          })}
        </div>
        {/* form section */}
        <form className="bg-[#fefefe] text-[#1a1a1a] w-fit p-6 rounded-md" onSubmit={handleSubmit}>
          <h1 className="text-xl">SPLIT A BILL WITH ANTHONY</h1>
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
            <label htmlFor="friendExpense">Anthony's expense </label>
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
            <select id="paymentOption" value={paymentOption} onChange={handlePaymentOptionChange}>
              <option value="you">You</option>
              <option value="friend">Friend</option>
            </select>
          </div>
          <button className="text-white mt-7 bg-[#1a1a1a]" type="submit">
            Split bill
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
