console.log("Atribuição de Variáveis em JavaScript")

const idade=25;
//Atribuimos o texto "Vitória" a variável nome
let nome= "Vitória";
const sobrenome = "Monique";


//É possível unir as variáveis da seguinte forma para que estejam espaçadas da forma correta.

console.log(nome, sobrenome);
console.log(nome+" "+ sobrenome);

//O JavaScript também imprime textos através da crase.
console.log('Meu nome é');

//INTERPOLAÇÃO DE VARIÁVEIS: Permite injetar variáveis,
// chamadas de funções e expressões aritméticas diretamente em uma string.
console.log(`Meu nome é ${nome} ${sobrenome}`);

//Sobreescrevendo uma variável
//Para podermos sobreescrever uma variável, precisamos declarar ela utilizando o Let, pois o const mantém a alocação da memória para aquele valor constante.
//Não é possível atribuir novos valores a variáveis declaradas como const. (variáveis imutaveis)
nome= nome + sobrenome;

