let btnDOM = document.querySelector('#liveToastBtn')
let taskDOM = document.querySelector('#task')
let listDOM = document.querySelector('#list')
let ullength = document.getElementsByTagName("li")

for(let i = 0; i<ullength.length;i++){
    let closeButton = document.createElement("span")
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close")
    closeButton.onclick = removeButton
    ullength[i].append(closeButton)
    ullength[i].onclick = check
}

btnDOM.addEventListener('click', add)

function add(){
    if(taskDOM.value == "") {
        $(".error").toast("show")
    } else {
        $(".success").toast("show")

        let liDOM = document.createElement('li')
        listDOM.appendChild(liDOM)
        liDOM.innerHTML = task.value
        taskDOM.value = ""

        
    }
}

function removeButton(){
    this.parentElement.remove()
}

function check(){
    this.classList.toggle("checked")
}