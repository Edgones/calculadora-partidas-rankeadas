import readline from 'node:readline';
import { gerarSimulacaoCompleta } from './generator.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function exibirMenu() {
    console.log("\n========================================================");
    console.log("   ⚔️ CALCULADORA DE RANKEADAS - GERADOR AUTOMÁTICO    ");
    console.log("========================================================");
    console.log(" [1] Simular 1 Clique (Gerar jogadores em TODAS as faixas)");
    console.log(" [0] Sair");
    console.log("--------------------------------------------------------");
    
    rl.question("Escolha uma opção: ", (opcao) => {
        if (opcao === '0') {
            console.log("\nEncerrando a aplicação. Até logo!");
            rl.close();
            return;
        }

        if (opcao === '1' || opcao === '') {
            console.log("\n🎲 GERANDO PARTIDAS ALEATÓRIAS PARA TODAS AS FAIXAS...\n");
            
            const simulacao = gerarSimulacaoCompleta();

            console.table(simulacao.map(j => ({
                Jogador: j.nome,
                Vitórias: j.vitorias,
                Derrotas: j.derrotas,
                Saldo: j.saldo,
                Nível: j.nivel
            })));

            console.log("\n--- Mensagens Oficiais Formatadas ---");
            simulacao.forEach(j => console.log(j.mensagem));
            
            exibirMenu();
        } else {
            console.log("\nOpção inválida! Digite 1 ou 0.");
            exibirMenu();
        }
    });
}

exibirMenu();