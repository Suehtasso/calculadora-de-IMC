
let classificacao 
let IMC
function calcularIMC (peso, altura) {
    IMC = (peso / altura**2)
}

function classificarIMC (IMC) {
    if (IMC <= 18.5) {
        classificacao = "Magreza"
    } else if (IMC <= 24.9) {
        classificacao = "Peso Adequado"
    } else if (IMC <= 29.9) {
        classificacao = "Sobrepeso"
    } else if (IMC <= 34.9) {
        classificacao = "Obesidade I"
    } else if (IMC <= 39.9) {
        classificacao = "Obesidade II"
    } else if (IMC >=40) {
        classificacao = "Obesidade III"
    } else {
        console.log(Erro)
    }
}

calcularIMC(77, 1.80)
classificarIMC(IMC)

console.log("IMC: " + IMC)
console.log("classificação: " + classificacao)