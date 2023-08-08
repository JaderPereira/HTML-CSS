var pen = document.getElementById('pen')
var dinheiro = document.getElementById('dinheiro')
pen.addEventListener('click', click)

var money = parseInt(0)
 

function click() {
    money += 1
    return dinheiro.innerHTML = money
}