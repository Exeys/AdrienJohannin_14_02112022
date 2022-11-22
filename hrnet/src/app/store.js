import { configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

/**
 *  The store is saved in storage variable that represent localStorage
 */
const persistConfig = {
    key: 'root',
    storage
}

/**
 * The initial state is an empty array of employees list
 */
const initialState = {
    employees: []
}

/**
 * The reducer works with param action that update the store
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function employeesReducer(state = initialState, action) {
    switch (action.type) {
        /**
         * In this case we want to add an employee to the list with the payload content 
         * including his informations
         */
        case "addEmployee":
            return {
                ...state,
                employees: state.employees.concat(action.payload)
            }
        default:
            return state
    }
}

/**
 * We make the reducer persistent with the config
 */
const persistedReducer = persistReducer(persistConfig, employeesReducer)


export const store = configureStore({
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
            },
        }),

})

export const persistor = persistStore(store)

