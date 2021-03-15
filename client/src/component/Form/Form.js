import React,{useState,useEffect,useRef} from 'react'
import axios from "axios"

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export const Form = () => {
    const [files,setfiles]=useState([])
    const ref = useRef(null)
    const [image,setImage]=useState({
        name:"",
        file:{}
    })
    // useEffect(() => {
    //       setImage({...image,file:ref.current.getFile()})
    
    // }, [files])
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(image)
        const formToSubmit=new FormData()
        formToSubmit.append("file",image.file)
        formToSubmit.append("name",image.name)
        axios.post("http://localhost:5000/api/addImage",formToSubmit).then(response =>{
            console.log("reponse is back",response)
        })

    }
    
    return (
        <div className="m-5">
            <form id="form" onSubmit={handleSubmit}>

                <label>name</label>
                <input type="text" 
                className="form-control"  
                name="name"
                onChange={e => setImage({...image,name:e.target.value})}
                />
                <label>image</label>
                <input type="file"
                className="filepond"
                 name="file"
                 
                onChange={e => setImage({...image,file:e.target.files && e.target.files[0]})}
                 />
                    {/* <FilePond
                       files={files}
                       onupdatefiles={setfiles}
                       allowMultiple={false}
                       maxFiles={3}
                       
                       name="file" 
                       ref={ref}
                       labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                /> */}

                <input 
                type="submit" 
                className="btn btn-primary btn-block" 
                name="submit" 
                label="submit"
                />
                


            </form>

            
        </div>
    )
}
