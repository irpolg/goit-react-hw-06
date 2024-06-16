// //ТЗ
// //Початковий стан
// //Нехай початковий стан Redux виглядає наступним чином.
// //{
// //  contacts: {
// //		items: []
// //	},
// //  filters: {
// //		name: ""
// //	}
// //}

// //Тут ми виділимо два слайси - контакти (поле contacts) і фільтри (поле filters).


// //import { configureStore } from '@reduxjs/toolkit';
// //import { rootReducer } from './rootReducer';
// //import { contactsPersistReducer } from './phoneBookSlice'
// // import {
// //   persistStore,
// //   FLUSH,
// //   REHYDRATE,
// //   PAUSE,
// //   PERSIST,
// //   PURGE,
// //   REGISTER,
// // } from 'redux-persist'

// // export const store = configureStore({
// //     reducer: {
// //         phoneBook: contactsPersistReducer,
// //         filter: filterSlice.reducer,
// //     },
// //     middleware: getDefaultMiddleware =>
// //         getDefaultMiddleware({
// //             serializableCheck: {
// //                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// //             },
// //         }),
// // });

// // export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootReducer';

// export const store = configureStore({
//     reducer: rootReducer,   
// })