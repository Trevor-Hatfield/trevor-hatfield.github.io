// query selector variables
const key = 'todo-list'
const todoList = document.querySelector('.todo-list')
const todo = document.querySelector('#new-todo')
const todoButton = document.querySelector('button')
const checkboxList = document.querySelector('.todo-chkbx')

// Clear the li's before we recreate them
todoList.innerHTML = ''

// Get the list from local storage
const todos = JSON.parse(localStorage.getItem(key)) || []

// Create an array from local storage parse to add to ul
todos.reduce((acc, {text, completed}) => {
    // if nothing exists in local storage then start a new list with no accumulator
    if(!acc[{text, completed}]) acc[{text, completed}] = [{text, completed}]
    // if a single object exists already then add new objects by looping
    else acc[{text, completed}].push({text, completed})
    // return the array of objects 
    return acc
}, {})

// create a new variable that cycles through the object array extracting the text property
const textList = todos.forEach((todo) => {
    // create new list item for each add it to li variable
    const li = document.createElement('li')
    // Pull the text from the input box and add it to the li variable
    li.textContent = todo.text
    // Add the li variable text to the todoList
    todoList.append(li)
    // Add checkboxes next to the list items for future use. 
    const liChkbx = document.createElement('li')
    liChkbx.innerHTML = '<input type="checkbox">'
    checkboxList.append(liChkbx)
})

// Add click function to button
todoButton.addEventListener('click', () => {
    // Creates next list item like the for each loop 
    li = document.createElement('li')
    li.textContent = todo.value
    todoList.append(li)
    // push new item to the local storage value
    todos.push({text: todo.value, completed: false})
    // create new checkboxes for new items
    const liChkbx = document.createElement('li')
    liChkbx.innerHTML = '<input type="checkbox">'
    checkboxList.append(liChkbx)
    // Save the list to local storage
    localStorage.setItem(key, JSON.stringify(todos))
})






