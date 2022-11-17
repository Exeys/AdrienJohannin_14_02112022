import { configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const initialState = {
    employees: []
}

function employeesReducer(state = initialState, action) {
    switch (action.type) {
        case "addEmployee":
            return {
                ...state,
                employees: state.employees.concat(action.payload)
            }
        default:
            return state
    }
}

/* const employeesSlice = createSlice({
    name: "employees",
    initialState: [{
        firstName: "John",
        lastName: "Doe",
        birthDate: "11/11/2022",
        startDate: "15/08/2003",
        streetAddress: "streetAddress",
        cityAddress: "cityAddress",
        stateAddress: "stateAddress",
        zipAddress: "zipAddress",
        department: "department"
    }, {
        firstName: "John",
        lastName: "Doe",
        birthDate: "11/11/2022",
        startDate: "15/08/2003",
        streetAddress: "streetAddress",
        cityAddress: "cityAddress",
        stateAddress: "stateAddress",
        zipAddress: "zipAddress",
        department: "department"
    }],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload)
        }
    }
}) */

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

