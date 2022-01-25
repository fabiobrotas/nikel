const nome = "Fábio Costa";
let nome2 = "";
let pessoaDefault = {
nome: "Fábio Costa",
idade: "25",
trabalho: "Atendente"
}

let nomes = ["Fábio Costa", "Maria Silva", "Caio Souza"];

let pessoasListaVazia = [];

let pessoas = [
    {
    
    nome: "Fábio Costa",
    idade: "25",
    trabalho: "Atendente"
    },
    {
    nome: "Maria Silva",
    idade: "33",
    trabalho: "Desingner"
    }
]


function alterarNome () {
    nome2 = "Maria Silva";
    console.log ("Valor Alterado:");
    console.log (nome2);
}

function receberEalterarNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log (pessoa);

    console.log ("Nome:");
    console.log (pessoa.nome);
    
    console.log ("Idade:");
    console.log (pessoa.idade);
    
    console.log ("Trabalho:");
    console.log (pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas(){
    console.log("---------IMPRIMIR PESSOAS---------");
    pessoas.forEach((item) => {
        console.log("None:");
        console.log(item.nome);

        console.log ("Idade:");
        console.log (item.idade);
    
        console.log ("Trabalho:");
        console.log (item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Caio Souza",
    idade: "22",
    trabalho: "Gari"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);


//imprimirPessoa({
//    nome: "Maria Silva",
//idade: "33",
//trabalho: "Designer"
//});


