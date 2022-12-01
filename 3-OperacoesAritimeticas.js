console.log("Operações Aritméticas");
console.log(2+2);
console.log(10+8*2); //resultado 26
//Executa as operações de multiplicação e divisão, antes das operações de soma e subtração
//Para ordenar as operações que desejamos, colocar entre parênteses, assim como na matemática.

console.log((10+8)*2); //resultado 38

//Para juntar dois tipos de variáveis, precisamos de uma conversão,
// pois o código abaixo irá apenas concatenar, entendendo ambos os valores como textos.
console.log("ano"+2020);
console.log("2"+"1");

//Realizando a conversão do tipo texto para número

console.log(parseInt("2") + parseInt("2"));
console.log(parseInt("2") / parseInt("2"));
console.log(parseInt("2") % parseInt("2"));

//Para dividir dois números, mesmo em formato de texto, o JS realiza a conversão automaticamente.
console.log("2" / "2");
console.log("7" / "2");
//Utilizar o ponto para valores decimais
console.log("10.5" / "2");
//Erro NaN= Not a Number -> não é possível dividir um texto por um número
console.log("Ricardo" / "2");