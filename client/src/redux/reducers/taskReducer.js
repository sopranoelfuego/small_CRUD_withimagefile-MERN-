import {ADD_TASK,DELETE_TASK,ALL_TASKS}from "../types"



const task=(state=[],action)=>{
      switch (action.type) {
          case ADD_TASK:
                return [...state,...action.payload]
              
              break;
          case ALL_TASKS :
              return [...state,...action.payload]
              break;
      
          default:
              return state
              break;
      }

}

export default task


