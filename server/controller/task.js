
const Task =require("../models/taskModel")


const allTasks=async(req,res)=>{
  
     try {
         const data=await Task.find({})
         res.status(200).json(data)
     } catch (error) {
         res.status(404).json(err)
     }

}
