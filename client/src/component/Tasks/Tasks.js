import React,{useEffect,useState} from 'react'
import "./tasks.css"
import Task from "./task/Task"
import {useSelector} from "react-redux"
import {CircularProgress} from "@material-ui/core"
export const Tasks = ({currentId,setCurrentId}) => {

   const task= useSelector(state => state.task)
   
   
    return (
       
        !task.length ? <CircularProgress className="circular"/> :(



            <div className="tasks__container">
               { task.map(singleTask => <Task key={singleTask._id} 
               image={singleTask}
                currentId={currentId}
                setCurrentId={setCurrentId}
               />)}

            </div>
        )
    )
}
