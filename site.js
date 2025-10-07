const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

// Add a div element named 'welcome' to the header element to display above the nav bar
// Determine what condition to run at different times of the day for welcome message
const welcome = document.querySelector('#welcome');

    if (isMorning) 
    {
        welcome.textContent = 'Good Morning'
    }
    else if (isAfternoon) 
    {
        welcome.textContent = 'Good Afternoon'
    }
    else 
    {
        welcome.textContent = 'Good Evening'
    }

// comment out local storage assignment from before
//localStorage.setItem(`It's a secret to everybody.`, `You need a couple more heart containers before facing Gannon`)

// Carousel Assignment

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()

// add event listener for previous and next buttons.
// each click should increment/decrement current image then run show images function 

const next = document.querySelector('#next')
next.addEventListener('click', ()=> {
    currentImage++
    showImages(currentImage)
})

const prev = document.querySelector('#prev')
prev.addEventListener('click', ()=> {
    currentImage--
    showImages(currentImage)
})

// Add interval timer to cycle to next image automatically every 5 seconds

setInterval(cycleImages = () => {
    currentImage++
    showImages(currentImage)
}, 5000)



