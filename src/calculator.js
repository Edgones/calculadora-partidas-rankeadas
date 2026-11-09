import { REGRAS_RANKING } from './rules.js';

/**
 * Determina o nível consultando a tabela imutável original.
 */
export function determinarNivel(vitoriasEquivalentes) {
    const faixa = REGRAS_RANKING.find(
        f => vitoriasEquivalentes >= f.min && vitoriasEquivalentes <= f.max
    );
    return faixa ? faixa.nivel : "Ferro";
}

/**
 * Calculadora de Partidas Rankeadas Ponderada
 * Aplica os conceitos de Justiça, Habilidade, Constância e Dominância.
 */
export function calcularPartidasRankeadas(vitorias, derrotas) {
    const v = Math.max(0, Math.floor(Number(vitorias)) || 0);
    const d = Math.max(0, Math.floor(Number(derrotas)) || 0);

    const totalPartidas = v + d;
    const saldoVitorias = v - d;

    // Se não há partidas ou o saldo não é positivo, o nível base é Ferro (0 pts)
    if (totalPartidas === 0 || saldoVitorias <= 0) {
        const nivel = "Ferro";
        const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
        return { saldoVitorias, vitoriasEquivalentes: 0, nivel, mensagem };
    }

    // 1. Habilidade (Win Rate em decimal: 0.0 a 1.0)
    const winRate = v / totalPartidas;

    // 2. Constância (Fator Logarítmico Suave)
    const fatorConstancia = 1 + Math.log10(1 + (totalPartidas / 100));

    // 3. Cálculo final das Vitórias Equivalentes para encaixe nas faixas originais
    const vitoriasEquivalentes = Math.round(saldoVitorias * winRate * fatorConstancia);

    // Determina o nível usando a tabela imutável do desafio
    const nivel = determinarNivel(vitoriasEquivalentes);

    // Formatação de saída estrita do desafio
    const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;

    return {
        saldoVitorias,
        vitoriasEquivalentes,
        nivel,
        mensagem
    };
}