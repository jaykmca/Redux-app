import { configureStore} from '@reduxjs/toolkit'
import combineReducers from './Reducers/index'

const store = configureStore({
    reducer : combineReducers
})

export default store