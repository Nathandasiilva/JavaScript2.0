let cpf = '705.484.450-52';
let cpflimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpflimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));