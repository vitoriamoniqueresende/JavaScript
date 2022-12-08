console.log(`Trabalhando com Condicionais`);
const idadeComprador = 15;
// maior de idade declarado como verdadeiro
const estaAcompanhada = false;
let passagemcomprada = false;
const destino = "Salvador";
const listaDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`);
console.log(`Os destinos disponíveis são: ` + listaDestinos);

//Passei a verificação para uma variável
const podeComprar= idadeComprador >= 18 || estaAcompanhada == true;
//Para verificar se é possível embarcar de acordo com o destino, usarei o While
//Assim, declaramos um contador e ENQUANTO O CONTADOR FOR MENOR QUE A QUANTIDADE DE ELEMENTOS DA LISTA
 
//Contador começa em ZERO
let contador= 0;
//Criando a variável destinoExiste fora do loop para não ser executada toda vez que o loop rodar
let destinoExiste = false;
//Zero é menor que 3? Sim, então imprime os valores de listaDestinos
while (contador <3 ){
    
        //Condição para o contador exibir apenas o elemento que for igual ao valor do destino
    if (listaDestinos[contador] == destino){
        console.log("Destino existe");
        destinoExiste = true;
        break;
    }else{
    console.log("Destino não existe");
}
//Para rodar a lista inteira sem entrar em loop infinito, pois o valor do contador seria sempre zero, caso não o altere após rodar o bloco de código
//Após uma rodada, ele irá verificar se o valor do contador ainda é menor que 3 e realizar as instruções do bloco, a menos que não seja menor que 3, parando o programa
contador += 1;
}

console.log("Destino existe:", destinoExiste);
//------------------------------------------------------
//UTILIZANDO O FOR 
//let cont = 0 é a inicialização da variável
//inicialização, condição, regra a ser executada ao final do loop
for (let cont= 0; cont < 3; cont= cont++) {

    //Condição para o contador exibir apenas o elemento que for igual ao valor do destino
    if (listaDestinos[cont] == destino) {
        console.log("Destino existe");
        destinoExiste = true;   
    }
}
