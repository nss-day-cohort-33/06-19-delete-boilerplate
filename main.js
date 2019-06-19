
let url = "http://localhost:3000/todos" // NOTE! Use your json server's url here
function getTodos() {
  fetch(url)
  .then( data => data.json())
  .then( todos => {
    console.log(todos)
    todos.forEach( todo => {
      let todoItem = document.createElement("li")
      todoItem.innerHTML = `${todo.task}: Assigned to ${todo.assigned_to}`
      let btn = document.createElement("button")
      btn.setAttribute("id", todo.id)
      btn.textContent = "delete"
      btn.addEventListener("click", () => {
        let id = event.target.id
        console.log(id)
        // WRITE THIS FUNCTION
        // deleteTodo(id)
      })
      todoItem.appendChild(btn)
      document.querySelector("#todo-list").appendChild(todoItem)
    })
  })
}

getTodos()
