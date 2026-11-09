import { REGRAS_RANKING } from './rules.js';

/**
 * Função auxiliar para buscar o Nível na Tabela
 */
export function determinarNivel(vitoriasEquivalentes) {
    if (vitoriasEquivalentes >= 101) return "Imortal";
    if (vitoriasEquivalentes >= 91) return "Lendário";
    if (vitoriasEquivalentes >= 81) return "Diamante";
    if (vitoriasEquivalentes >= 51) return "Ouro";
    if (vitoriasEquivalentes >= 21) return "Prata";
    if (vitoriasEquivalentes >= 11) return "Bronze";
    return "Ferro";
}

/**
 * Calculadora de Partidas Rankeadas Ponderada
 * Mantém a filosofia de Habilidade, Constância e Dominância com código elementar.
 */
export function calcularPartidasRankeadas(vitorias, derrotas) {
    // 1. Tratamento básico de entradas
    const v = Number(vitorias) || 0;
    const d = Number(derrotas) || 0;
    const totalPartidas = v + d;
    const saldoVitorias = v - d;

    // Se não jogou ou não tem saldo positivo, cai direto em Ferro
    if (totalPartidas === 0 || saldoVitorias <= 0) {
        const nivel = "Ferro";
        const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
        return { saldoVitorias, vitoriasEquivalentes: 0, nivel, mensagem };
    }

    // A. Taxa de Habilidade (Win Rate)
    const taxaHabilidade = v / totalPartidas;

    // B. Fator de Constância
    let fatorConstancia = 1.0;
    if (totalPartidas >= 100) {
        fatorConstancia = 1.3;
    } else if (totalPartidas >= 50) {
        fatorConstancia = 1.2;
    } else if (totalPartidas >= 20) {
        fatorConstancia = 1.1;
    }

    // C. Fator de Dominância
    let fatorDominancia = 1.0;
    if (taxaHabilidade >= 0.70) {
        fatorDominancia = 1.15;
    }

    // D. Vitórias Equivalentes
    const pontuacaoBruta = saldoVitorias * taxaHabilidade * fatorConstancia * fatorDominancia;
    const vitoriasEquivalentes = Math.round(pontuacaoBruta);

    // Determina o Nível
    const nivel = determinarNivel(vitoriasEquivalentes);

    // Mensagem oficial
    const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;

    return {
        saldoVitorias,
        vitoriasEquivalentes,
        nivel,
        mensagem
    };
}