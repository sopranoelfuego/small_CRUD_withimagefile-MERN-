const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const Img = require("./models/taskModel")
const multer =require("multer")
const taskRoute=require('./routes')
const fs =require('fs')



const PORT =process.env.PORT || 5000
const app=express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/imagedownload",{
    useUnifiedTopology:true,
    useNewUrlParser:true
  }).then(response => app.listen(PORT,()=>console.log("connected succefuly on port",PORT)))
  .catch(err => console.log(err))

// app.use("/api",require('./routes'))

  const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads/')
    }
});
/* name:String,
    file:{
        data:Buffer,//
        contentType:String
    } */

    /**
     * 
     * 
     * 
     *   *   *   */
const upload=multer({storage})
  app.post("/api/addImage",upload.single('file'),(req,res)=>{
       const image=new Img()
       const {name,description,date}=req.body
       console.log(req.body)
       /**
        * 
        * 
        */
       image.name=name
       image.description=description
       image.date=date
       image.file.data= fs.readFileSync(req.file.path)
       image.file.contentType="image/jpeg"
       image.save((err,doc)=>{
         if(err)res.status(500).send("error file not saved")
         res.status(201).json({message:"saved succefully"})
       })
  })
  app.get('/api/getImage',(req,res)=>{ 
      Img.find({},(err,doc)=>{
          if(err) res.send(err)
          console.log("images from database",doc)       
          res.send(doc)        
      })
    })

    app.patch('/api/:id',upload.single('file'),(req,res)=>{
          const {id:_id}=req.params
          if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("error no post with that id")
          const {name,date,description}=req.body
          
          let file={
            data:"",
            contentType:""
          }
          file.data=fs.readFileSync(req.file.path)
          file.contentType="image/jpeg"
          console.log("valeu for update",{name,date,description,file})


          
          try {
            
          } catch (error) {
            
          }
    })
  



















  