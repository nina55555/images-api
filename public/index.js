
showAllImages();

// firebaseAuth = require('firebase-auth')
// firebaseAuth.createUser({
// username: 'bonjour',
// email: 'a@mail.com'
// paswword: '123',
// })
// l'utilisateur a été créé
// firebaseAuth.getUser('ABC1')

function showAllImages() {
fetch('http://127.0.0.1:5600/api/photos' /*, {mode: 'no-cors'}*/)
    .then ((response) => response.json() )
      
     
   
    
    .then ((data) => {
        const boxItems = document.getElementsByClassName('container');
        console.log(boxItems);
        console.log(data);
        
            const cardsItem = document.createElement('div');
            cardsItem.classList.add('cards');
            console.log(cardsItem);

            const imageItem = document.createElement('img');
            imageItem.classList.add('img');
            imageItem.src = data.imageURL;
            imageItem.setAttribute('alt', 'image of api');
            console.log(imageItem);

            cardsItem.appendChild(imageItem);
            boxItems.appendChild(cardsItem);
        
    })
} 