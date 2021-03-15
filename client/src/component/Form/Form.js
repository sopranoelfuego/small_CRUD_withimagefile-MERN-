import React,{useState,useEffect,useRef} from 'react'
import axios from "axios"
import {useDispatch} from "react-redux"
import {addTask} from "../../redux/actions/taskActions"
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { FilePond, File, registerPlugin } from 'react-filepond'
import TextField from "@material-ui/core/TextField"
import './Form.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
/**
 * 
 *  name:String,
    description:String,
    date:Date,
    file:{
        data:Buffer,
        contentType:String
    }
 */
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export const Form = () => {
    const [files,setfiles]=useState([])
    const ref = useRef(null)
    const [image,setImage]=useState({

        name:"",
        description:"",
        date:"",
        file:{}
    })
    const dispatch = useDispatch()
    // useEffect(() => {
    //       setImage({...image,file:ref.current.getFile()})
    
    // }, [files])
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(image)

        const formToSubmit=new FormData()
        formToSubmit.append("file",image.file)
        formToSubmit.append("name",image.name)
        dispatch(addTask(formToSubmit))
        // axios.post("http://localhost:5000/api/addImage",formToSubmit).then(response =>{
        //     console.log("reponse is back",response)
        // })

    }
    
    return (
        <div className="m-5">
            <form id="form" onSubmit={handleSubmit}>
                <div className="item">


                <TextField 
                id="outlined-basic"
                type="text" 
                variant="outlined"
                className="form-control"  
                name="name"
                label="name"
                onChange={e => setImage({...image,name:e.target.value})}
                />
                </div>

                <div className="item">
                    <TextField type="text" 
                    id="outlinded-basic"
                    variant="outlined"
                    className="form-control"
                    label="description" 
                    name="description"/>
                 </div>
                  <div className="item">
                       
                        <TextField 
                        id="date"
                        variant="outlined"
                        type="date"
                        label="to be release"
                        defaultValue="2021-02-24"
                        className="date"
                        name="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                      />
                  </div>

              <div className="item">

                        <label for="file">

                            <div className="input__image__container">
                                    <p>+</p>
                            </div>
                        </label>
                            <input 
                            style={{display:"none"}}
                            id="file"
                            type="file"
                            className="filepond"
                            name="file"
                            
                            onChange={e => setImage({...image,file:e.target.files && e.target.files[0]})}
                            />
              </div>
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
