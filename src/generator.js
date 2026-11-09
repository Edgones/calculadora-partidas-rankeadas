import { REGRAS_RANKING } from './rules.js';
import { calcularPartidasRankeadas } from './calculator.js';

// Pool expandido de nomes de heróis
const NOMES_JOGADORES = [
    "Axe", "Invoker", "Juggernaut", "Mirana", "Phantom",
    "Sven", "Viper", "Windranger", "Zeus", "Kael",
    "Pudge", "Lina", "Crystal Maiden", "Slark", "Sniper"
];

/**
 * Gera um número inteiro aleatório entre um intervalo [min, max].
 */
function gerarNumeroAleatorio(min, max) {
    const limiteSuperior = max === Infinity ? 180 : max;
    return Math.floor(Math.random() * (limiteSuperior - min + 1)) + min;
}

/**
 * Gera um jogador aleatório cujas Vitórias Equivalentes caiam garantidamente na faixa informada.
 * @param {Object} faixa - Elemento do array REGRAS_RANKING
 * @returns {Object} Dados do jogador gerado e resultado da classificação
 */
export function gerarJogadorPorFaixa(faixa) {
    // Seleciona um nome aleatório
    const nome = NOMES_JOGADORES[Math.floor(Math.random() * NOMES_JOGADORES.length)];

    // Sorteia um valor alvo de Vitórias Equivalentes (V_E) dentro da faixa desejada
    const targetVe = gerarNumeroAleatorio(faixa.min, faixa.max === Infinity ? 150 : faixa.max);

    // Ajusta V e D mantendo um Win Rate alto (~80% a 90%) para atingir a meta
    const winRateSimulado = 0.8 + (Math.random() * 0.1); // 80% a 90%
    const vitorias = Math.max(targetVe + 1, Math.round(targetVe / winRateSimulado));
    const derrotas = Math.max(0, Math.round(vitorias * (1 - winRateSimulado)));

    // Processa os dados pela calculadora oficial
    const resultado = calcularPartidasRankeadas(vitorias, derrotas);

    return {
        nome,
        vitorias,
        derrotas,
        saldo: resultado.saldoVitorias,
        vitoriasEquivalentes: resultado.vitoriasEquivalentes,
        nivel: resultado.nivel,
        mensagem: resultado.mensagem
    };
}

/**
 * Gera uma simulação cobrindo exatamente 1 jogador para cada faixa do ranking.
 * @returns {Array<Object>} Lista de simulação ordenada por faixa
 */
export function gerarSimulacaoCompleta() {
    return REGRAS_RANKING.map(faixa => gerarJogadorPorFaixa(faixa));
}