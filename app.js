document.addEventListener('DOMContentLoaded', () => {

        //card options 
        const cardArray = [{
                name: 'Blue',
                img: 'Images/Blue.jpg'
            },
            {
                name: 'Blue',
                img: 'Images/Blue.jpg'
            },
            {
                name: 'Green',
                img: 'Images/Green.png'
            },
            {
                name: 'Green',
                img: 'Images/Green.png'
            },
            {
                name: 'Pink',
                img: 'Images/Pink.jpg'
            },
            {
                name: 'Pink',
                img: 'Images/Pink.jpg'
            },
            {
                name: 'Purple',
                img: 'Images/Purple.jpg'
            },
            {
                name: 'Purple',
                img: 'Images/Purple.jpg'
            },
            {
                name: 'Red',
                img: 'Images/Red.jpg'
            },
            {
                name: 'Red',
                img: 'Images/Red.jpg'
            },
            {
                name: 'Yellow',
                img: 'Images/Yellow.jpg'
            },
            {
                name: 'Yellow',
                img: 'Images/Yellow.jpg'
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
        card.setAttribute('src', 'Images/Blank.jpg')
        card.setAttribute('data-id', i)
            //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}