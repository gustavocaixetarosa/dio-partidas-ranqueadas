const readline = require('readline');

function receberInput(pergunta) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise((resolve) => {
        rl.question(pergunta, (resposta) => {
            resolve(resposta);
            rl.close();
        });
    });
}

function saldoDeVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

function nivelRanqueado(saldo){
    if(saldo > 100){
        return 'Imortal';
    } else if(saldo > 90){
        return 'Lendário';
    } else if(saldo > 80){
        return 'Diamante';
    } else if(saldo > 50){
        return 'Ouro';
    } else if(saldo > 20){
        return 'Prata';
    } else if(saldo > 10){
        return 'Bronze';
    } else {
        return 'Ferro';
    }
}

async function main(){ 
    const vitorias = await receberInput('Qual o número de vitórias? ');

    const derrotas = await receberInput('Qual o número de derrotas? ');

    const saldo = saldoDeVitorias(vitorias, derrotas)
    const nivelAtual = nivelRanqueado(saldo);

    console.log(`O Herói tem saldo de vitórias ${saldo} e está no nível de ${nivelAtual}`);
}

main();