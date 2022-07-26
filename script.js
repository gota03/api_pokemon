let campoBuscar = document.querySelector("#campoBusca")
let btnProcurar = document.querySelector("#btnProcurar")
let cardPrincpal = document.querySelector("#cardPrincipal")

async function mostrarPokemon(id){
    const url = "https://pokeapi.co/api/v2/pokemon-species/"
    const url1 = "https://pokeapi.co/api/v2/gender/"
   
    try {

        // PEGANDO OS DADOS DA URL

        let resultado = await fetch(url)
        let resultado1 = await fetch(url1)
   
        const dados = await resultado.json()
        const dados1 = await resultado1.json()

        let elementos = dados.results
        let elementos1 = dados1.results
       
        console.log(elementos)
        console.log(elementos1)

        // CRIANDO ELEMENTOS DO CARD DINAMICAMENTE 

        const divCard = document.createElement("div")
        divCard.classList.add("card")
        divCard.classList.add("text-center")
        divCard.classList.add("col-md-6")
        divCard.classList.add("col-sm-11")
        divCard.classList.add("mx-auto")
        divCard.classList.add("mt-4")

        const cardHeader = document.createElement("h4")
        cardHeader.classList.add("card-header")
        cardHeader.textContent = "Informações do pokémon"

        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        
        const cardTitle = document.createElement("h4")
        cardTitle.classList.add("card-title")
        cardTitle.textContent = `Nome: ${elementos[id].name}`

        const cardText = document.createElement("p")
        cardText.classList.add("card-text")
        cardText.classList.add("fw-semibold")
        cardText.textContent = `Genêro: ${elementos1[id].name}`

        // ADICIONANDO AS FILHAS AOS PAIS

        divCard.appendChild(cardHeader)
        divCard.appendChild(cardBody)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardPrincpal.appendChild(divCard)
        
    } catch (error) {
        console.log("o seguinte erro é: ", error)
    }
}

// FUNÇÃO DE PROCURAR COM O BOTÃO

btnProcurar.addEventListener("click", (evento)=>{
    evento.preventDefault()
    let id = campoBuscar
    
    if(id.value != ""){
        mostrarPokemon(id.value)
        console.log(id.value)
    }
    else{
        alert("Por favor, insira um valor")
    }
})

