import { common } from '@material-ui/core/colors'
import React ,{useEffect,useState}from 'react'

import "./task.css"
export const Task = ({image}) => {
 
   const {_id,name,file}= image
   const [imageFile, setImage] = useState("")
//    THIS FUNCTION TRY TO DECODE THE BUFFER DATA INTO A HEXDECIMAL STRING
   const arrayBufferToBase64=(buffer) =>{
                var binary = '';
                var bytes = [].slice.call(new Uint8Array(buffer));
                bytes.forEach((b) => binary += String.fromCharCode(b));
                return window.btoa(binary);
            }
       
  let comb=""
    useEffect(() => {
        
         let  mimeType=`data:${file.contentType};base64,`
         var imageString=arrayBufferToBase64(file.data.data)
         comb=mimeType + imageString
         comb.toString()
         setImage(comb)
    //    console.log("thi is combe",comb)
    }, [])
    console.log("this imagefile outside",imageFile)
    return (
        <div className="task__container">
            
            <img src={imageFile} alt="this is image" className="task__img"/>
            <div>
            <h4>{name}</h4>
            </div>
            
        </div>
    )
}

export default Task