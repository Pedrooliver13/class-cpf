export default class ValidateCpf {
  constructor(element) {
    this.element = element;
  }
  clear(cpf) {
    return cpf.replace(/\D/g, "");
  }
  constructorCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  format(value) {
    const CpfClear = this.clear(value);
    return this.constructorCpf(CpfClear);
  }
  validate(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);

    return matchCpf && matchCpf[0] === cpf;
  }
  validateChange(cpfElement) {
    if (this.validate(cpfElement.value)) {
      cpfElement.value = this.format(cpfElement.value);
      cpfElement.classList.add("available");
      cpfElement.classList.remove("error");
      cpfElement.nextElementSibling.classList.remove("active");

    } else {
      cpfElement.classList.add("error");
      cpfElement.classList.remove("available");
      cpfElement.nextElementSibling.classList.add("active");

    }
  }
  addErrorSpan() {
    const erroElement = document.createElement("span");
    erroElement.classList.add("erro-text");
    erroElement.innerText = "CPF Inválido";

    this.element.parentElement.insertBefore(
      erroElement,
      this.element.nextElementSibling // antes di proximo elemento;
    );
  }
  EventListener() {
    this.element.addEventListener("change", () => {
      this.validateChange(this.element);
    });
  }
  init() {
    this.EventListener();
    this.addErrorSpan();
    return this;
  }
}
