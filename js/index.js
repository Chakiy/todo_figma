const add = document.querySelector("#add")
const addSection = document.querySelector(".add_todo_section")
const close = document.querySelector("#close")



add.addEventListener("click", function(e){
    addSection.classList.toggle("trans_add")

})

close.addEventListener("click", function(e){
    addSection.classList.toggle("trans_add")


})




// add to do section


const addTitle = document.querySelector("#title_add")
const addDesc = document.querySelector("#des_add")
const btn = document.querySelector(".btn")


let mainTodos = document.querySelector(".main_section_todos")


const todoblock = document.querySelector(".todoblock")

// console.log(addTitle.value)


btn.addEventListener("click", function(e){
    // console.log(addTitle.value)
    // console.log(addDesc.value)
    // console.log(mainTodos)
    // console.log(addTitle.value.length)

    if(addTitle.value.length === 0){
        
        addTitle.style.border = 2 + "px solid red"
        
    }else {
        if(addTitle.value.length > 10 || addDesc.value.length > 150 ){
            console.log("alooo")
            addTitleShort = addTitle.value.substring(0,10) + "..."
            // console.log(addTitle.attributes.title )

            mainTodos.insertAdjacentHTML("afterbegin", `<div class="todoblock sec">
                                    <div class="icons">
                                    <i id="check" class="fa-solid fa-clipboard-check"></i>
                                
                                    <i id="delete" class="fa-solid fa-trash-can"></i>
                                    <i id="time" class="fa-solid fa-clock"></i>
                                    </div>
                                
                                    <h2 class="todo_name">${addTitleShort}</h2>
                                    <p class="todo_desc">${addDesc.value}</p>
                                    <p class="created">${Date()}</p>
                                </div>`)


            addTitle.value = ""
            addDesc.value = ""
            
            addSection.classList.toggle("trans_add")

           
        }else {
            mainTodos.insertAdjacentHTML("afterbegin", `<div class="todoblock sec">
            <div class="icons">
              <i id="check" class="fa-solid fa-clipboard-check"></i>
        
              <i id="delete" class="fa-solid fa-trash-can"></i>
              <i id="time" class="fa-solid fa-clock"></i>
            </div>
        
            <h2 class="todo_name">${addTitle.value}</h2>
            <p class="todo_desc">${addDesc.value}</p>
            <p class="created">${Date()}</p>
          </div>`
        )
            addTitle.style.border = 2 + "px solid #FFF"
            addTitle.value = ""
            addDesc.value = ""
            
            addSection.classList.toggle("trans_add")
        }

       
    }


    
})


