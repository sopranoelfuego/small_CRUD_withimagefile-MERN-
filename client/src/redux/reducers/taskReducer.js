import {ADD_TASK,DELETE_TASK,UPDATE_TASK,ALL_TASKS}from "../types"



const task=(state=[],action)=>{
      switch (action.type) {
          case ADD_TASK:
                return [...state,...action.payload]
              
              break;
          case ALL_TASKS :
              return [...state,...action.payload]
              break;
         case UPDATE_TASK:
                state.map(task => task._id === action.payload._id ? action.payload : task)
          default:
              return state
              break;
      }

}

export default task


