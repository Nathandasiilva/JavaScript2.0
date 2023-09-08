const pessoas = [
    {id: 3, nome: 'Nathna'},
    {id: 2, nome: 'João'},
    {id: 1, nome: 'Fernado'},
];

//const novasPessoas = {};
//for( const pessoas of pessoas) {
//    const {id} = pessoas;
//    novasPessoas[id] = {...pessoa};
//}

const novasPessoas = new Map();
for( const pessoas of pessoas) {
    const { id } = pessoas;
    novasPessoas.set(id, {...pessoa});
}

for (const pessoas of novasPessoas.values) {
    console.log(pessoas);
}

novasPessoas.delete(2);
console.log(novasPessoas);