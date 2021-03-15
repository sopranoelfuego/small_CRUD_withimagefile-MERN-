
import {ADD_TASK,DELETE_TASK,ALL_TASKS}from "../types"
import {getAllTasks,createTask} from "../../api/api"

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
export {addTask,allTasks}