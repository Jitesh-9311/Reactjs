const id = document.getElementById("cont")
const button = document.getElementById("button")


// button.addEventListener("click",function(){
//     id.classList.remove("container")
// })
// const heading  = document.getElementById("heading")
// button.addEventListener("click",function(){
//     // id.classList.toggle("container")
//     heading.style.fontSize = "100px"
// })
// const head = document.createElement("h1")
// head.textContent = "javascript" 
// id.appendChild(head)


const alert = document.getElementById("alert")
alert.addEventListener("click",function(){
    // alert("alert button is pressed")
    window.alert("hello")
    console.log("alert is clciked")
})