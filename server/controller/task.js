const multer =require("multer")
const Img = require("../models/taskModel")
const fs =require('fs')



const storage=multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, './server/uploads/')
        
    }
})
const addImage=async(req,res)=>{
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
   await image.save((err,doc)=>{
      if(err)res.status(500).send("error file not saved")
      res.status(201).json({message:"saved succefully"})
    })
}

const allTasks=async(req,res)=>{
    
    Img.find({},(err,doc)=>{
        if(err) res.send(err)
        console.log("images from database",doc)
        
        res.send(doc)

          
    })
}
module.exports ={allTasks,addImage}