import React, { useState } from 'react'
import Button from './Button';
import { FriendsData } from '../FriendsData';
const SplitBillForm = (props) => {
    const [billValue, setBillValue] = useState('');
    const [yourExpense, setYourExpense] = useState('');
    const [friendExpense, setFriendExpense] = useState('');
    const [thePersonWhoWouldPay, seThePersonWhoWouldPay] = useState('you');


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

        const updatedData = FriendsData.map(friend => {
            if (friend.name === props.splitBillWith) {
                const status = `${thePersonWhoWouldPay === "you" ? props.splitBillWith + " owes you " + friendExpense : "You owe " + splitBillWith + " " + yourExpense}£`
                return { ...friend, statusWithThisFriend: status, color: status.startsWith('You') ? ' text-red-500 ' : " text-green-500" };
            }
            return friend;
        });

        props.handleDataChanged(updatedData);
        setBillValue('')
        setFriendExpense('')
        setYourExpense('')
    };


    return (
        <>
            {props.splitBillWith && <form className="bg-[#fefefe] text-[#1a1a1a] w-fit p-6 rounded-md" onSubmit={handleSubmit}>
                <h1 className="text-xl">SPLIT A BILL WITH {props.splitBillWith}</h1>
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
                    <label htmlFor="friendExpense">{props.splitBillWith} expense </label>
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
                <Button type="submit">
                    Split bill
                </Button>
            </form>}
        </>
    )
}

export default SplitBillForm