

showAllImages();

function showAllImages() {
    fetch('http://localhost:5500/')
    .then ((response) => response.json()) 
    
    .then ((data) => {
        const boxItems = document.getElementsByClassName('container');
        console.log(boxItems)
        console.log(data)
        for (const item of data){
            const cardsItem = document.createElement('div')
            cardsItem.classList.add('cards')

            const imageItem = document.createElement('img')
            imageItem.classList.add('img')
            imageItem.src = item.imageURL
            imageItem.src = ('images/images/1637878595338--pexels-messala-ciulla-942872.jpg')
            imageItem.setAttribute('alt', 'image of api')

            cardsItem.appendChild(imageItem)
            boxItems.appendChild(cardsItem)
        }
    })
} 