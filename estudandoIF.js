// let ehLigado = true
// //Estrutura do if. if(){}
// //Primeiros parentêses do if devem ser booleanos ou alguma expressão
// if(ehLigado){
//     console.log("executou o comando ")
// }
// console.log(ehLigado)

// let possuiLeite = "leite"
// let possuiOvo = "ovo"
// if(possuiLeite + possuiOvo){
//     console.log("pode comprar tem leite e ovo")
// }

//Looping
//break = Se não colocar o break, quando der certo um todos os que vem em seguida irão dar como certo, break resolve esse problema parando a ação quando finaliza no primeiro.
//case = significa "caso" caso a variavel possua "laranja" sera impresso no console ("suco de laranja").
//default = Defini uma mensagem padrão para caso não haja valores compativeis na variavel 

let fruta = ""

switch (fruta){
    case "laranja":
    console.log("suco de laranja")
    break

    case "maçã":
    console.log("suco de maçã")
    break
    
    case "banana":
    console.log("suco de banana")
    break

    default:
    console.log("suco generico")
}