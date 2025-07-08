import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stock from './stock'

const reducer = combineReducers({ stock })
const store = configureStore({ reducer })

export default store
