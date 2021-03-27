const form = document.getElementById("add-todo");
const addTodoInput = document.getElementById("todo_input")
const itemList = document.getElementById("items");


form.addEventListener("submit",addTodo);
itemList.addEventListener("click",removeItem);
document.getElementById("search_items").addEventListener("keyup",searchItem);

function addTodo(e){
    e.preventDefault();
    const inputField = Array.from(document.querySelectorAll("#add-todo input")).reduce((acc,input)=>({...acc,[input.id]:input.value}),{});
    if(inputField.todo_input.trim()){
        const item = document.createElement("li");

        const text = document.createElement("span");
        text.appendChild(document.createTextNode(inputField.todo_input.trim()));
        text.className = "text-container";

        const deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.className = "delete-button";

        item.appendChild(text);
        item.appendChild(deleteBtn);

        itemList.appendChild(item);
        Array.from(form.getElementsByTagName("input")).forEach(input=>{
            input.value = "";
        })
    }
}

function removeItem(e){
    if(e.target.classList.contains("delete-button")){
        if(confirm("Are you sure?")){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function searchItem(e){
    const text = e.target.value.trim().toLowerCase();
    const items = itemList.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        const itemName = item.firstElementChild.textContent.toLowerCase();
        if(itemName.indexOf(text) != -1 || !text){
            item.style.display = "flex";
        } else{
            item.style.display = "none";
        }
    })
    // console.log(text);
}