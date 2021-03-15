
import axios from "axios"
const url="http://localhost:5000/api"
// "http://localhost:5000/api/addTask"


const getAllTasks=()=>axios.get(`${url}/getImage`)
const createTask=(dataTosubmit)=> axios.post(`${url}/addImage`,dataTosubmit)

export {getAllTasks,createTask}