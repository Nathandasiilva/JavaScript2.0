const produto = {nome: 'produto', preco: 1.8}
Object.getOwnPropertyDescriptor(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome',));
produto.nome = 'outra coisa';
console.log(produto);