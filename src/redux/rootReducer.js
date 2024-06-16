import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
	key: 'items',
	storage,
	whitelist: ['value'],
	// blacklist:['']
}

// const persistConfig2 = {
// 	key: 'filter',
// 	storage,
// }

const contactsPersistedReducer = persistReducer(persistConfig, contactsReducer)
// const filterPersistedReducer = persistReducer(persistConfig2, filterReducer)

export const rootReducer = {
	contacts: contactsPersistedReducer,
    filters: filterReducer,
    // filter: filterSlice.reducer,
}