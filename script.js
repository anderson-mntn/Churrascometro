//Selectors
const adultos = document.querySelector('#adultos')
const criancas = document.querySelector('#criancas')
const duracao = document.querySelector('#duracao')
const res = document.querySelector('#res')
const calcBtn = document.querySelector('#calcBtn')

//Event Listeners
calcBtn.addEventListener('click', calc)

//Functions
function calc(){

    var adultosValue = adultos.value
    var criancaValue = criancas.value
    var duracaoValue = duracao.value
    
    if(adultosValue === '' || criancaValue === '' || duracaoValue === '' ){
        alert('Insira Quantidades Válidas em Todos os Campos')   
    } 
     else if (duracaoValue >= 6){
        let adultosCarne = adultosValue * 650
        let criancasCarne = criancaValue * 325
        let adultosCerv = adultosValue * 1800
        let adultosRefri = adultosValue * 1500
        let criancasRefri = criancaValue * 750
        let refriTotal = adultosRefri + criancasRefri

        res.innerHTML = '<h3>Você precisará de:</h3>'
        res.innerHTML += `<p>${adultosCarne + criancasCarne}g de Carne</p>`
        res.innerHTML += `<p> ${Math.floor(adultosCerv / 350)} Latas de Cerveja</p>`
        res.innerHTML += `<p>${Math.ceil(refriTotal / 2000)}  Garrafas Pet de 2L de Refrigerante</p>`

        

    } else {
        let adultosCarne = adultosValue * 400
        let criancasCarne = criancaValue * 200
        let adultosCerv = adultosValue * 1300
        let adultosRefri = adultosValue * 1000
        let criancasRefri = criancaValue * 500
        let refriTotal = adultosRefri + criancasRefri

        res.innerHTML = '<h3>Você precisará de:</h3>'
        res.innerHTML += `<p>${adultosCarne + criancasCarne}g de Carne</p>`
        res.innerHTML += `<p> ${Math.round(adultosCerv / 350)} Latas de Cerveja</p>`
        res.innerHTML += `<p> ${Math.ceil(refriTotal / 2000) } Garrafas Pet de 2L de Refrigerante</p>` 
    }

}