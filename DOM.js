const id = document.getElementById("root")
id.textContent = ""
const heading = document.getElementById("heading")
heading.textContent = "javascript"

const heading = document.getElementsByClassName("heading")[0]
heading.textContent = "javascript"

const heading = document.getElementsByTagName("h1")[0]
heading.textContent = "javascript"

const image = document.getElementById("image")

 image.setAttribute("src","https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg")
image.removeAttribute("src")

const heading = document.getElementById("heading")
heading.classList.remove("heading")