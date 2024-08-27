let input = document.getElementById("limited-input")
let counter = document.getElementsByClassName("char-counter")[0]


function keyDownFunc() {
    let maxLength = parseInt(input.getAttribute("maxlength")) || 19;
    let inputLength = input.value.length
    let result = maxLength - inputLength

    counter.textContent = result;
}


input.addEventListener("input",keyDownFunc)