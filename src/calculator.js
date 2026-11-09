import { REGRAS_RANKING } from './rules.js';

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

    // -------------------------------------------------------------
    // SUA FILOSOFIA DE CÁLCULO (Passo a Passo Simples)
    // -------------------------------------------------------------

    // A. Taxa de Habilidade (Win Rate de 0.0 a 1.0)
    const taxaHabilidade = v / totalPartidas;

    // B. Fator de Constância (Bônus por volume de partidas jogadas)
    let fatorConstancia = 1.0;
    if (totalPartidas >= 100) {
        fatorConstancia = 1.3; // Veterano experiente (30% de bônus)
    } else if (totalPartidas >= 50) {
        fatorConstancia = 1.2; // Jogador constante (20% de bônus)
    } else if (totalPartidas >= 20) {
        fatorConstancia = 1.1; // Jogador em evolução (10% de bônus)
    }

    // C. Fator de Dominância (Bônus para quem tem Taxa de Vitória acima de 70%)
    let fatorDominancia = 1.0;
    if (taxaHabilidade >= 0.70) {
        fatorDominancia = 1.15; // Dominante no servidor (15% de bônus)
    }

    // D. Cálculo final das Vitórias Equivalentes
    const pontuacaoBruta = saldoVitorias * taxaHabilidade * fatorConstancia * fatorDominancia;
    const vitoriasEquivalentes = Math.round(pontuacaoBruta);

    // -------------------------------------------------------------
    // 2. Busca o Nível na Tabela usando if/else tradicional
    // -------------------------------------------------------------
    let nivel = "Ferro";
    
    if (vitoriasEquivalentes >= 101) {
        nivel = "Imortal";
    } else if (vitoriasEquivalentes >= 91) {
        nivel = "Lendário";
    } else if (vitoriasEquivalentes >= 81) {
        nivel = "Diamante";
    } else if (vitoriasEquivalentes >= 51) {
        nivel = "Ouro";
    } else if (vitoriasEquivalentes >= 21) {
        nivel = "Prata";
    } else if (vitoriasEquivalentes >= 11) {
        nivel = "Bronze";
    }

    // 3. Retorno da mensagem oficial do desafio
    const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;

    return {
        saldoVitorias,
        vitoriasEquivalentes,
        nivel,
        mensagem
    };
}