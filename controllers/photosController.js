//modules necessaires:
const express = require('express');
const router = express.Router();
const ObjectId =require('mongoose').Types.ObjectId;


//recuperation des fichiers externes necessaires:
const { PhotosModel } = require('../models/photosModel');




//déclaration des fonctions du router methode CRUD:
//pour lire les articles:
router.get('/photos', (req, res) => {
   
    PhotosModel.find((err, docs) => {
        console.log(docs)
        if(!err) res.send(docs);
        
        else console.log ('error:'+ err);
    })
});


//pour créer des articles:
router.post('/new',(req, res) => {
    const newRecord = new PhotosModel({
        name: req.body.name,
        description: req.body.description,
        imageURL: req.body.imageURL
    });
        console.log(newRecord)
    newRecord.save((err, docs) => {
         if (!err) res.send (docs);
        else console.log ('error creating new data:' +err)
    })
} );


//pour modifier des articles:
router.put('/:id', (req,res) =>{
    if(!ObjectId.isValid(req.params.id)
    )
    return res.status(400).send('id non valide'+req.params.id)

    const photoModifiée = {
        name: req.body.name,
        description: req.body.description,
        imageURL: req.body.imageURL
    };

    PhotosModel.findByIdAndUpdate(
        req.params.id,
        {$set: photoModifiée},
        {new: true},
        (err, docs) =>{
            if(!err) res.send(docs);
            else console.log('update error:'+err);
        }
    )
});

//pour effacer un article:
router.delete('/:id', (req,res) => {
    if(!ObjectId.isValid(req.params.id) )
    return res.status(404).send('detete error:' +err)

    PhotosModel.findByIdAndRemove(
        req.params.id, 
        (err, docs) =>{
        if(!err)res.send(docs);
        else console.log('delete error:'+err)
        }
    )
});


    
//exportation du router:
module.exports = router