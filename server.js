
const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');



const app = express();
app.use(cors() );



const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, './images')
    },
    filename: (req, file, cb)=> {
        cb(null, Date.now()+ '--'+ file.originalname)
    }
})

const upload = multer({storage: fileStorageEngine});



app.post('/single', upload.single('image'), (req, res)=> {
    console.log(req.file);
    res.send('Single image upload success')
} );


app.post('/multiple', upload.array('images',3), (req, res)=> {
    console.log(req.files);
    res.send('multiple images upload success');
} );



app.listen (5000, ()=> console.log('listening on port 5000'));