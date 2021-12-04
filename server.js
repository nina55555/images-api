
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
 app.use(express.urlencoded({extended: false}) );
 //en cas de warning
 //mongoose.set('useFindAndModify', false);
 //pour gerer l'accés à l'api au public
 //app.use(cors({origin: 'http://localhost:5500/'}))

//   app.use(
//       cors({ 
//           origin: "*",
//       })
//   );

app.use(express.static('public'))
 
app.use(cors());
app.use('/api', photosControl);
//app.use('/', index)
app.get('/test', function(req, res){
    res.send('Test');
});
 

 //lancement du port:
 //const PORT = process.env.PORT || 5600;
 //app.listen(PORT, () => console.log(`server listening on port ${PORT}`) );

 const PORT = 5600
 app.listen(PORT, () => console.log("Server listening on port ", PORT) );

