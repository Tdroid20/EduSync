let morango = parseFloat(prompt(`Quantos quilos de Morango você deseja comprar`));
let apple = parseFloat(prompt(`Quantos quilos de maças você deseja comprar`));

function StrawberryPrice(morango) {
    if(morango <= 5) {
        let price = morango * 2.50
        return price;
    } else {
        let price = morango * 2.20;
        return price;
    }
}
function ApplePrice(apple) {
    if(apple <= 5) {
        let price = apple * 1.80
        return price;
    } else {
        let price = apple * 1.50
        return price;
    }
}

const calc = StrawberryPrice(morango) + ApplePrice(apple)

let carrinho = morango + apple

function Subtotal() {
    if(calc >= 25 || carrinho > 8) {
        let total = calc * 0.9;
        return total;
    } else {
        let total = Subtotal()
        return total;
    }
}

console.log(`Seu total foi de ${Subtotal(calc, morango, apple).toFixed(2)}`)

let finish = document.querySelector('.tot')

finish.innerHTML = `Seu total foi de ${Subtotal(calc, morango, apple).toFixed(2)}`