/*











//DECLARANDO VARIAVEIS

//Indefinida
let nome;
console.log(nome)
//vazia
let disciplina = null;
console.log(disciplina)
//com valor
let aluno = "Fiapinho";
console.log(aluno)

//Conversão
//float to int
let numero = 123.456;
console.log(parseInt(numero))

//string = float
let numero1 = "123.456";
console.log(parseFloat(numero1))

//float = string
let numero2 = 123.456;
console.log(numero2.toString())

//identificar o tipo da variavel
let numero3 =123.456;
let num = numero3.toString()
let verificar = typeof num;
console.log(verificar)

//Manipulação com metodos
//indexOf()
let texto ="As CPs estão chegando";
console.log(texto.indexOf("ão"))

//lastindexOf()

let texto1 ="Vocês vão tirar notas boas";
console.log(texto1.lastIndexOf("ra"))

//slice
let texto2 ="Corinthians pior time do mundo";
console.log(texto2.slice(12,16));

//length
let frase= "O cidade é o melhor professor do mundo!";
console.log(frase.length)
//alert(frase.length)
document.write(frase.length)

//Concatenação
document.write("<br>")
let nome1 ="Calçada"
document.write("Professor " + nome1)
let nome2 ="Fiap"
document.write("<br>")
document.write("A Faculdade " +nome2+ "!!!!")
*/

//Estruuras condicionais
if(10>8){
    document.write("Verdadeiro")
}
document.write("<br>")
if(8>10){
    document.write("10 é maior que 8")
}
else{
    document.write("10 não é maior que 8")
}

let valor =10

if(valor>7){
    document.write("valor maior")

}
document.write("<br>")


let idade = 18; 
if(idade<=12){
    document.write("é uma criança")
}
else if(idade <= 17){
    document.write("é um aborrencente")
}
else if(idade <= 29){
    document.write("adulto")

}