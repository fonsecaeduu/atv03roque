const prompt = require('prompt-sync')();
let saldo = 0;

function verificarSaldo() {
  console.log(`Seu saldo atual é de: ${saldo}`)
}

function realizarSaque() {
  const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
  if (valorSaque <= saldo) {
    saldo -= valorSaque;
    console.log(`Saque realizado com sucesso. Saldo atual: R$${saldo}`);
  } else {
    console.log("Saldo insuficiente");
  }
}

function realizarDeposito() {
  const valorDeposito = parseFloat(prompt("Digite o valor do depósito: "));
  saldo += valorDeposito;
  console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldo}`);
}

function realizarTransferencia() {
  const valorTransferencia = parseFloat(prompt("Digite o valor da transferência: "));
  if (valorTransferencia <= saldo) {
    const destino = parseFloat(prompt("Digite o número da conta de destino: "));
    saldo -= valorTransferencia;
    console.log(`Transferência de R$${valorTransferencia} para a conta ${destino} realizada com sucesso`);
  } else {
    console.log("Saldo insuficiente para transferência");
  }
}

function checarChequeEspecial() {
  if (saldo < 0) {
    console.log("Dentro do limite do cheque especial");
  } else {
    console.log("Fora do limite do cheque especial");
  }
}

function atualizarCadastro() {
  const cadastroAtivo = prompt("O cadastro está ativo? (1 - Sim / 2 - Não): ");
  if (cadastroAtivo === '1') {
    if (saldo > 0) {
      console.log("Cadastro ativo e saldo positivo");
    } else {
      console.log("Cadastro ativo mas precisa regularizar saldo");
    }
  } else if (cadastroAtivo === '2') {
    console.log("Por favor, atualize seu cadastro");
  } else {
    console.log("Opção inválida");
  }
}

function avaliarCredito() {
  const historicoCredito = prompt("O histórico de crédito é bom? (1 - Sim / 2 - Não): ");
  const rendaMensal = parseFloat(prompt("Digite a renda mensal: "));
  if (historicoCredito === '1' && saldo > 1000 && rendaMensal > 3000) {
    console.log("Crédito aprovado");
  } else {
    console.log("Crédito negado");
  }
}

function menu() {
  console.log("Escolha uma opção:");
  console.log("1 - Verificar Saldo");
  console.log("2 - Realizar Saque");
  console.log("3 - Realizar Depósito");
  console.log("4 - Realizar Transferência");
  console.log("5 - Checar Cheque Especial");
  console.log("6 - Atualizar Cadastro");
  console.log("7 - Avaliar Crédito");
  console.log("8 - Sair");

  const opcao = parseInt(prompt("Digite o número da opção desejada: "));

  switch (opcao) {
    case 1:
      verificarSaldo();
      break;
    case 2:
      realizarSaque();
      break;
    case 3:
      realizarDeposito();
      break;
    case 4:
      realizarTransferencia();
      break;
    case 5:
      checarChequeEspecial();
      break;
    case 6:
      atualizarCadastro();
      break;
    case 7:
      avaliarCredito();
      break;
    case 8:
      console.log("Saindo...");
      return;
    default:
      console.log("Opção inválida");
      break;
  }

  const continuar = prompt("Deseja realizar outra operação? (1 - Sim / 2 - Não): ");
  if (continuar === '1') {
    menu();
  } else if (continuar === '2') {
    console.log("Saindo...");
  } else {
    console.log("Opção inválida, saindo...");
  }
}

menu();
