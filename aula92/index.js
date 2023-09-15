//fetch('pessoas.json')
//.then(resposta => resposta.json())
//.then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
   .then(resposta =>carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
     for (let pessoa of json) { 
        const tr = document.createElement('tr');

        let tabelaNome = document.createElement('td');
        tabelaNome.innerHTML = pessoa.nome;
        tr.appendChild(tabelaNome);
        
        let tabelaIdade = document.createElement('td');
        tabelaIdade.innerHTML = pessoa.idade;
        tr.appendChild(tabelaIdade);
        
        let tabelaSalario = document.createElement('td');
        tabelaSalario.innerHTML = pessoa.salario;
        tr.appendChild(tabelaSalario);

        table.appendChild(tr);
     }

     const resultado = document.querySelector('.resultado');
     resultado.appendChild(table);
}
