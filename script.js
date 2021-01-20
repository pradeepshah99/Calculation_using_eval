
function dis(val) {
    document.getElementById("data").value += val
}

function solve() {
    let x = document.getElementById("data").value
    let y = eval(x)
    document.getElementById("data").value = y
}

function clearScreen() {
    document.getElementById("data").value = ""
}