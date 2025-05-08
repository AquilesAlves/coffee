const botaoAbrir = document.querySelector("#botao-abrir")
const botaoFechar = document.querySelector("#botao-fechar")

botaoAbrir.addEventListener("click", () =>{
    document.body.classList.toggle("show-mobile-menu")
})

botaoFechar.addEventListener("click", () => botaoAbrir.click()
)