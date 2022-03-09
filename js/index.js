//  SELECTORS

//btns main page
const addButton = document.querySelector("#add")



//Display to crete todos
const closeSection = document.querySelector("#close")
const addSection = document.querySelector(".add_todo_section")
const addTitle = document.querySelector("#title_add")
const addDesc = document.querySelector("#des_add")
const createBtn = document.querySelector(".btn")



const mainTodos = document.querySelector(".main_section_todos")
// const todoHeader = document.querySelector(".todo_name")



// EVENTS

addButton.addEventListener("click", function(e){
    addSection.classList.add("trans_add")
})

closeSection.addEventListener("click", function(e){
    addSection.classList.remove("trans_add")
})





createBtn.addEventListener("click", function(e){
    e.preventDefault()

    // close add block
    addSection.classList.remove("trans_add")



    // create todo block
    const divTodoBlock = document.createElement("div")
    divTodoBlock.classList.add("todoblock")

    console.log(divTodoBlock)


    // create icon
    const iconsBlock = document.createElement("div")
    iconsBlock.classList.add("icons")

    const checkBtn = document.createElement("i")
    checkBtn.classList.add("fa-solid")
    checkBtn.classList.add("fa-clipboard-check")

    const removeBtn = document.createElement("i")
    removeBtn.classList.add("fa-solid")
    removeBtn.classList.add("fa-trash-can")


    console.log(checkBtn)
    console.log(removeBtn)
    console.log(iconsBlock)


    // create todo block texts
    const todoHeading = document.createElement("h2")
    todoHeading.classList.add("todo_name")
    console.log(todoHeading)

    const todoDescr = document.createElement("p")
    todoDescr.classList.add("todo_desc")
    console.log(todoDescr)


    const todoCreatedAt = document.createElement("p")
    todoCreatedAt.classList.add("created")
    console.log(todoCreatedAt)

    
    // append all children
    divTodoBlock.appendChild(iconsBlock)
    divTodoBlock.appendChild(todoHeading)
    divTodoBlock.appendChild(todoDescr)
    divTodoBlock.appendChild(todoCreatedAt)
    iconsBlock.appendChild(checkBtn)
    iconsBlock.appendChild(removeBtn)
    console.log(divTodoBlock)


    // inserting input values to todo block

    const today = new Date().toLocaleDateString("en-US", {day: '2-digit', month: '2-digit', year: 'numeric'})
    console.log(today)

    todoHeading.textContent = addTitle.value
    todoDescr.textContent = addDesc.value
    todoCreatedAt.textContent = today



    // add to main container
    mainTodos.appendChild(divTodoBlock)

    addTitle.value = "" 
    addDesc.value = ""
    
})


// FUNCTIONS


