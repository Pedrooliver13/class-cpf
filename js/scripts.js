import ValidateCpf from './modules/cpf.js';

const inCpfInput = document.querySelector('#cpf');
const validateCpf = new ValidateCpf(inCpfInput);

validateCpf.init();