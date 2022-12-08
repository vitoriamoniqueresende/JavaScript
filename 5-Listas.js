console.log(`Trabalhando com listas`);
//Como declarar um array (lista)
const listaDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`);
console.log(listaDestinos);

//Adicionando novos elementos a lista utilizando o comando PUSH
//Funciona mesmo que a lista seja declarada como CONST, pois não está mudando o array e sim um dos valores presentes nele
listaDestinos.push(`Curitiba`);
console.log(listaDestinos);

//Removendo um item do array
// Dentro do parênteses, passamos os parâmetros posição (que queremos deletar) e quantos quantos elementos
//A contagem começa em ZERO, então para deletar São Paulo, a posição será 1.
listaDestinos.splice(1, 1)
console.log(listaDestinos);

//Acessar (mostrar) um unico elemento da lista
//Passamos em colchetes a posição que condiz com o elemento que queremos imprimir na tela
console.log(listaDestinos[1])

