// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { actionDeposit, actionWithdraw } from "../../redux/contactsSlice";


// const HomePage = () => {
//     const dispatch = useDispatch();
//     const [value, setValue] = useState(0);
//     const [name, setName] = useState('');
//     const [secondName, serSecondName] = useState('');

//     const handleDeposit = () => {
//         dispatch(actionDeposit(value))
//     }

//     const handleWithdraw = () => {
//         dispatch(actionWithdraw(value))
//     }

//     const handleSubmit = () => {
//         e.preventDefault()
//         // dispatch(actionNewItem({name: 'qwe', age: 123}))
//         dispatch(actionNewItem({name, secondName, createAt: new Date() }))
//     }
// return (
//     <div>
//         HomePage
//         <br />
//         Balance: {balanceValue}
//         <br/>
//         <input
//             type='number'
//             value={value}
//             onChange={({ target: { value } }) => setValue(Number(value))}
//         />
//         <hr />
//         <button onClick={handleDeposit}>Deposit</button>
//         <button onClick={handleWithdraw} Withdraw></button>
//         <hr />
//         <form onSubmit={handleSubmit}>
//             <input
//         </form>
//         <button onClick={handleNewItem}>New Item</button>
//     </div>
// }


// //const handleNewItem = () => {
// //     dispatchEvent(actionNewItem(name: 'qwe', age: 123))
// // }
// // return (
// //     <div>
// //         <button onClick={handleNewItem}>New Item</button>
// //     </div>
// // )