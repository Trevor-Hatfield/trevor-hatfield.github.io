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

// Add secret message in local storage
const key = `It's a secret to everybody.`
const span = document.querySelector('span')
const userInput = document.querySelector('#input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    const input = userInput.value
    localStorage.setItem(key, userInput.value)
    if (key == userInput.value)
    {
        span.textContent = `"You need a couple more heart containers before facing Gannon"`
        
    }

})
