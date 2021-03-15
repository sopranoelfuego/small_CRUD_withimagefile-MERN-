import React,{useEffect,useState} from 'react'
import {Form} from "./component/Form/Form"
import {useDispatch} from "react-redux"
import {allTasks} from "./redux/actions/taskActions"
import {Tasks} from "./component/Tasks/Tasks"

import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

function App() {

  const dispatch = useDispatch()
   const [currentId, setCurrentId] = useState(null)
  const fecththem=async()=>{
    const {data}= await axios.get("http://localhost:5000/api/getImage")
    
  }
  useEffect(() => {
        dispatch(allTasks())
        fecththem()
  }, [])
  return (
    <div>
      <div className="row">
         <div className="col-8">

           <Tasks currentId={currentId} setCurrentId={setCurrentId}/>
         </div>
           
         <div className="col-4">
         <Form currentId={currentId}/>
         </div>

      </div>
      
    </div>
  )
}

export default App
