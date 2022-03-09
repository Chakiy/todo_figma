const add = document.querySelector("#add")
const addSection = document.querySelector(".add_todo_section")
const close = document.querySelector("#close")



add.addEventListener("click", function(e){
    addSection.classList.toggle("trans_add")


    icons.forEach(icon => {
        if (!icon.classList.contains("display_none")){
            console.log("dont have")
            icon.classList.toggl("display_none")
        }
        
    })
})

close.addEventListener("click", function(e){
    addSection.classList.toggle("trans_add")
})


// add to do section


const addTitle = document.querySelector("#title_add")
const addDesc = document.querySelector("#des_add")
const btn = document.querySelector(".btn")



const todoHeader = document.querySelector(".todo_name")


let mainTodos = document.querySelector(".main_section_todos")


let icons = []


settings.addEventListener("click", function(e){
    
    icons.forEach(icon => {
        icon.classList.toggle("display_none")
    })
} )


btn.addEventListener("click", function(e){


    let today = new Date()
    console.log(today.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric"}))
    let todaysDate = today.toLocaleDateString("en-US", {day: "numeric", month: "long", year: "numeric"})



    if(addTitle.value.length === 0){
        
        addTitle.style.border = 2 + "px solid red"
        
    }else {
        if(addTitle.value.length > 15 || addDesc.value.length > 90 ){
            console.log("alooo")
           let addTitleShort = addTitle.value.substring(0,16) + " ..."
           let addDescShort = addDesc.value.substring(0,91) + " ..."
           console.log(addDescShort)
            // todoHeader.setAttribute('title', addTitle.value)

            mainTodos.insertAdjacentHTML("afterbegin", `<div class="todoblock normal">
                                    <div class="icons display_none">
                                    <i id="check" class="fa-solid fa-clipboard-check check"></i>
                                
                                    <i id="delete" class="fa-solid fa-trash-can delete"></i>
                                    <i id="time" class="fa-solid fa-clock time"></i>
                                    </div>
                                
                                    <h2 class="todo_name" title="${addTitle.value}">${addTitleShort}</h2>
                                    <p class="todo_desc">${addDescShort}</p>
                                    <p class="created">Created: ${todaysDate}</p>
                                </div>`)


            addTitle.value = ""
            addDesc.value = ""
            
            addSection.classList.toggle("trans_add")







            const todoblock = document.getElementsByClassName("todoblock")


            const settings = document.querySelector("#settings")
            icons.push(document.querySelector(".icons"))
            const checks = document.getElementsByClassName("check")
            const remove = document.querySelector(".delete")

           
        }else {
            mainTodos.insertAdjacentHTML("afterbegin", `<div class="todoblock normal">
            <div class="icons display_none">
              <i id="check" class="fa-solid fa-clipboard-check check"></i>
        
              <i id="delete" class="fa-solid fa-trash-can delete"></i>
              <i id="time" class="fa-solid fa-clock time"></i>
            </div>
        
            <h2 class="todo_name">${addTitle.value}</h2>
            <p class="todo_desc">${addDesc.value}</p>
            <p class="created">Created: ${todaysDate}</p>
          </div>`
        )
            addTitle.style.border = 2 + "px solid #FFF"
            addTitle.value = ""
            addDesc.value = ""
            
            addSection.classList.toggle("trans_add")



            const todoblock = document.getElementsByClassName("todoblock")


            const settings = document.querySelector("#settings")
            icons.push(document.querySelector(".icons"))
            console.log(icons)

            const checks = document.getElementsByClassName("check")
            const remove = document.querySelector(".delete")

        }

       
    }


    
})


