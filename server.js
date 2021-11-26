/*
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

*/



 //modules necessaires:
 const express = require('express');
 const app = express();
 const mongoose =require('mongoose');
 const cors = require('cors');


 //récupération des fichiers externes necessaire:
 require ("./models/dbConfig");
 const photosControl = require('./controllers/photosController');


//middlewares:
//pour lire (parser) le format json mis dans la methode post 
 app.use(express.json() );
//*si on veut gerer le middleware d'encodage d'url pour eviter les valeurs undefined 
 //app.use(express.urlencoded({extended: false}) );
 //*en cas de warning
 //mongoose.set('useFindAndModify', false);
 //pour gerer l'accés à l'api au public
 //app.use(cors({origin: '//adresse du site a qui l'ont veut donner accès'}))
 app.use(cors())
 app.use('/', photosControl);
 

 //lancement du port:
 app.listen(5500, () => console.log("Server listening on port 5500") );