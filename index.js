let heading = document.querySelector("h2")
let addfriend = document.querySelector("#Add")
let removefriend = document.querySelector("#remove")


addfriend.addEventListener("click", function(){
    heading.innerHTML="You are friends now "

    heading.style.color="black"
})

removefriend.addEventListener("click", function(){
    heading.innerHTML="Stranger"
    heading.style.color="red"
})