function calculaNivel(saldoVitorias) {
  if (saldoVitorias < 10) {
    return "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias < 20) {
    return "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias < 50) {
    return "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias < 80) {
    return "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias < 90) {
    return "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias < 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

function calculaSaldoVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

function escreveMensagem(vitorias, derrotas) {
  let saldoVitorias = calculaSaldoVitorias(vitorias, derrotas);
  let nivel = calculaNivel(saldoVitorias);

  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  );
}

function main() {
  for (let i = 0; i < 5; i++) {
    let vitorias = Math.floor(Math.random() * 200) + 1;
    let derrotas = Math.floor(Math.random() * 100) + 1;
    escreveMensagem(vitorias, derrotas);
  }
}

main();
