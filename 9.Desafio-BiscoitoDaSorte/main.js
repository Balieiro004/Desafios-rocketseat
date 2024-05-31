let randomNumber = 0
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
const frasesDaSorte = ['A sorte favorece os corajosos.', 'Grandes oportunidades estão a caminho.', 'A felicidade é uma escolha. Escolha ser feliz', 'Seu sorriso ilumina o mundo.', 'Acredite nos seus sonhos e eles se realizarão.', 'Uma surpresa agradável espera por você.', 'O sucesso está mais perto do que você imagina.', 'A vida é uma aventura, aproveite cada momento.', 'A gentileza é a chave para corações felizes.', 'A paciência é a virtude dos vencedores.', 'O amor está ao seu redor, basta perceber.']

btnOpen.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event){
    event.preventDefault()

    randomNumber = Math.round(Math.random() * 10)

    toggleScreen()

    document.querySelector(".screen2 span").innerHTML = frasesDaSorte[randomNumber]
    console.log(frasesDaSorte[randomNumber])
    console.log(randomNumber)
}

function handleResetClick(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}