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

// Pokemon API assignment

renderPokemon()

// Create function that creates a pokemon object
async function getRandomPokemon(){
    try{      
        const urlPoke = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)
        // response variable that waits to fetch the pokemon from the api
        const response = await fetch(urlPoke)
        // convert to JSON
        const pokeJson = await response.json()
        // return pokemon variable to use for rendering sprite
        return pokemon = pokeJson

    } catch(error){
        console.log(error)
    }
}

// render the pokemon object and add to div element
async function renderPokemon() {
    // wait for the pokemon object to the fully loaded
    await getRandomPokemon()
    const pokeDiv = document.querySelector('#pokemonSprite')
    // append an image to div using the sprites front default attribute 
    const img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name
    pokeDiv.append(img)
}


