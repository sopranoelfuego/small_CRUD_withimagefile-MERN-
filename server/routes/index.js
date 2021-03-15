const express=require("express")
const multer=require("multer")

const {allTasks,addImage}=require('../controller/task')


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, '../uploads/')
    }
});
const upload=multer({storage})
const router=express.Router()


router.post(`/addImage`,upload.single('file'),addImage)
router.get(`/getImage`,allTasks)

module.exports =router