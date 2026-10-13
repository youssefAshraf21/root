var button = document.querySelector(`button`)
var div = document.querySelector("div")

button.addEventListener(`click`,function(){
    if(div.classList.contains("bg-danger")) {
        div.classList.remove("bg-danger")
        div.classList.add("bg-warning")
        button.classList.remove("btn-primary")
        button.classList.add("btn-danger")  
    }else {
        div.classList.remove("bg-warning")
        div.classList.add("bg-danger")
        button.classList.remove("btn-danger")
        button.classList.add("btn-primary")
    }
})