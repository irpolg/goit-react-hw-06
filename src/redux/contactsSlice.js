// // ТЗ
// //Слайс контактів
// // У файлі contactsSlice.js оголоси слайс контактів, використовуючи функцію createSlice().

// // Екшени слайса для використання в dispatch:
// //      addContact - додавання нового контакту до властивості items
// //      deleteContact - видалення контакту за id з властивості items

// // Оголоси функції-селектори для використання в useSelector:
// //      selectContacts - повертає список контактів з властивості items.

// // З файла слайса експортуй редюсер, а також його екшени і селектори.

// // Початковий стан
// // Нехай початковий стан Redux виглядає наступним чином.
// // {
// //   contacts: {
// // 		items: []
// // 	},
// //   filters: {
// // 		name: ""
// // 	}
// // }
// //Тут ми виділимо два слайси - контакти(поле contacts) і фільтри(поле filters).
    
// import { createSlice } from '@reduxjs/toolkit'
// import {persistReducer} from 
// const contactsSlice = createSlice({
// 	name: 'contacts',
// 	initialState: {
// 		value: 1000,
// 		comment: '',
// 	},
// 	reducers: {
// 		deposit: (state, { payload }) => {
// 			state.value += payload
// 		},
// 		withdraw: (state, { payload }) => {
// 			return {
// 				...state,
// 				value: state.value - payload,
// 			}
// 		},
// 	},
// })





// // вебінар 14-06-2024
// // const handleDeposit = () => {
// //     dispatch(actionDeposit(value)) 
// // }

// // = (value) => ({
// //     type: 'balance/deposit',
// //     payload: value,

// // import { createAction } from '@reduxjs/toolkit';

// // export const actionDeposit = createAction('balance/deposit');
// // // console.log('actionDeposit>> ', actionDeposit(10));
// // // console.log('actionDeposit>> ', actionDeposit.type);
// // export const actionWithdraw = createAction('balance/withdraw');

// // export const balanceReducer = (
// //     state = {
// //         value: 1000,
// //         comment: '',
// //     },
// //     action) => {
// //     switch (action.type) {
// //         case actionDeposit.type:
// //             return {
// //                 ...state,
// //                 value: state.value + action.payload,
// //             }
// //         case actionWithdraw.type:
// //             return {
// //                 ...state,
// //                 value: state.value - action.payload,
// //             }
// //         default:
// //             return state
// //     }
// // }
