document.addEventListener('DOMContentLoaded', () => {

        //card options 
        const cardArray = [{
                name: 'Ainz',
                img: 'Images/Ainz.png'
            },
            {
                name: 'Ainz',
                img: 'Images/Ainz.png'
            },
            {
                name: 'Albedo',
                img: 'Images/Albedo.jpg'
            },
            {
                name: 'Albedo',
                img: 'Images/Albedo.jpg'
            },
            {
                name: 'Darling',
                img: 'Images/Darling.jpg'
            },
            {
                name: 'Darling',
                img: 'Images/Darling.jpg'
            },
            {
                name: 'Eren',
                img: 'Images/Eren.png'
            },
            {
                name: 'Eren',
                img: 'Images/Eren.png'
            },
            {
                name: 'Goku',
                img: 'Images/Goku.jpg'
            },
            {
                name: 'Goku',
                img: 'Images/Goku.jpg'
            },
            {
                name: 'Star',
                img: 'Images/Star.png'
            },
            {
                name: 'White',
                img: 'Images/White.png'
            }
        ]
    })
    //first pick out the element with class name 
    //grid and define it as grid for our java scrip 

const grid = document.querySelector('.grid')

// time to create the board

function createBoard() {
    for (let i = 0; i < cardArray.lenth; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'Images/White.png')
        card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}