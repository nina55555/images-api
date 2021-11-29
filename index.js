

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
            console.log(cardsItem)

            const imageItem = document.createElement('img')
            imageItem.classList.add('img')
            imageItem.src = item.imageURL
            imageItem.setAttribute('alt', 'image of api')
            console.log(imageItem)

            cardsItem.appendChild(imageItem)
            boxItems.appendChild(cardsItem)
        }
    })
} 