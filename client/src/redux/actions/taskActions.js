
import {ADD_TASK,DELETE_TASK,UPDATE_TASK,ALL_TASKS}from "../types"
import {getAllTasks,createTask,updatetask} from "../../api/api"

const addTask=(dataTosubmit)=>async(dispatch)=>{
    try {
        
        const {data}=await createTask(dataTosubmit)
        dispatch({
            type:ADD_TASK,
            payload:data
        })
    } catch (error) {
        console.log("error acure")
        
    }
   
   
}
const allTasks =()=>async(dispatch)=>{
    try {
        
        const {data}=await getAllTasks()
        dispatch({
            type:ALL_TASKS,
            payload:data
        })
    } catch (error) {
        console.log("error acure...",error)
        
    }
}
const updateTask =(id,dataTosubmit)=>async(dispatch)=>{

      try {
             const {data}=await updatetask(id,dataTosubmit)
             dispatch({
                 type:UPDATE_TASK,
                 payload:data
             })
      } catch (err) {
             console.log(err)
      }

}
export {addTask,allTasks,updateTask}