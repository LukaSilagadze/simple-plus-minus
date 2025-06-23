let number = 0;
let button_minus = document.getElementById("button_minus");
let button_plus = document.getElementById("button_plus");




button_minus.addEventListener("click", function(){
    number--;
    article.textContent = number;
})

button_plus.addEventListener("click", function(){
    number++;
    article.textContent = number;
})