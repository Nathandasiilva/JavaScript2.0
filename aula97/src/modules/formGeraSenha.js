import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMainusculas = document.querySelector('.chk-mainusculas');
const chkMinusculas  = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gera-senha')


export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = 
    });
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMainusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );
    return senha || 'Nada Selecionado.';
}