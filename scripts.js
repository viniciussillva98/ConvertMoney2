const convertButton = document.querySelector(".conver-button")//botao mapeado//
const selectcurrencys = document.querySelector(".currency-select")//slect mapeado//



function convertvalues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //oque o usuario digitar//
    const currencyValueConverted = document.querySelector(".currency-value-to-convert")//moeda em real//
    const currencyconverted = document.querySelector(".currency-value") //outras moedas//

    ///-TIPOS DE MOEDAS PARA CONVERTER-//
    const dolartoday = 5.67
    const euroToday = 6.30
    const libraToday = 7.48

    if (selectcurrencys.value == "dolar") {
        currencyconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD" //se o valor so select for DOLAR executa aqui//
        }).format(inputCurrencyValue / dolartoday)
    }

    if (selectcurrencys.value == "euro") {
        currencyconverted.innerHTML = new Intl.NumberFormat("en-FR", {
            style: "currency",
            currency: "EUR" //se o valor do select for EURO executa aqui//
        }).format(inputCurrencyValue / euroToday)
    }

    if (selectcurrencys.value == "libra") {
        currencyconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"  //se valor for LIBRA executa aqui //
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL" //formatando o valor da moeda em real//
    }).format(inputCurrencyValue)

}

function mudarimagemetexto(){
    const textoparamudar = document.getElementById("currency-change")// paragrafo para mudar mapeado//
    const imagemparatrocar = document.querySelector(".currencyimgtroca")//imagem para trocar mapeado//
if(selectcurrencys.value =="dolar"){
    textoparamudar.innerHTML = "Dólar Americano"
    imagemparatrocar.src ="assets/eua.png" // se o evento change for DOLAR executa aqui //
}

if(selectcurrencys.value =="euro"){
    textoparamudar.innerHTML ="Euro"
    imagemparatrocar.src ="assets/euro.png" // se evento de change for EURO executa aqui //
}


if(selectcurrencys.value =="libra"){
textoparamudar.innerHTML = "Libra"
imagemparatrocar.src ="assets/libra.png" // se evento change for LIBRA executa aqui //
}


convertvalues() //chamando a funçao no evento change //



}

selectcurrencys.addEventListener("change" ,mudarimagemetexto) // evento change e chamando a funçao quando houver o evento //
convertButton.addEventListener("click", convertvalues) // evento click e chamando a funçao quando houver o evento //
 