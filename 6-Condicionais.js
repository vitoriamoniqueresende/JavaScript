console.log(`Trabalhando com Condicionais`);
const idadeComprador=15;
// maior de idade declarado como verdadeiro
const estaAcompanhada = true;
const passagemcomprada= true;
const listaDestinos = new Array(
    `Salvador`,
    ` São Paulo`,
    ` Rio de Janeiro`);
console.log(`Os destinos disponíveis são: ` + listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade, posso vender");
    listaDestinos.splice(1, 1); //removendo item
   
} else {
    console.log("Não é maior de idade, não posso vender")
}
console.log("Embarque: \n \n")
    if(idadeComprador>18 && passagemcomprada){
        console.log("Boa Viagem");

    }else{
        console.log("Não pode embarcar");
    }

