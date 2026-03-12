// Situação 7: Calculadora de salário com imposto de renda progressivo
// Problema: Crie um programa que calcule o salário líquido de um
// funcionário após aplicar o imposto de renda baseado nas seguintes faixas:

// Salário até R$2.000: isento de imposto
// Salário entre R$2.001 e R$3.500: 10% de imposto
// Salário entre R$3.501 e R$5.000: 15% de imposto
// Salário acima de R$5.000: 20% de imposto
// Desafio extra: Exiba a quantia exata que foi descontada em impostos e o salário líquido final.


console.log("\n..... Calculadora de salário com imposto de renda progressivo .....\n\n");

const prompt = require(`prompt-sync`)()

// Obter altura e peso do usuário
let salarioBruto = parseFloat(prompt('Digite seu salário R$'));
let imposto;
let salarioLiquido;

if (salarioBruto <= 2000) {
  imposto = 0;

} else if (salarioBruto <= 3500) {
  imposto = salarioBruto * 0.10;

} else if (salarioBruto <= 5000) {
  imposto = salarioBruto * 0.15;

} else {
  imposto = salarioBruto * 0.20;
}

salarioLiquido = salarioBruto - imposto;
console.log(`Imposto descontado: R$${imposto}`+`\n`);
console.log(`-> Seu salário líquido é de R$${salarioLiquido}`+`\n\n`);