import {combineReducers}from "redux"

import task from "./taskReducer"


export const rootReducer=combineReducers({
    task
})