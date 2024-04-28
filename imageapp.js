const image = document.getElementById("image");
const input = document.getElementById("input");
const button = document.getElementById("submit");
image.src = "https://icons8.com/icons/set/javascript";

button.addEventListener("click" ,()=>{
    image.src = input.value;

})
