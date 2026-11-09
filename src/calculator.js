import { REGRAS_RANKING } from './rules.js';

export function determinarNivel(vitoriasEquivalentes) {
    const faixa = REGRAS_RANKING.find(
        f => vitoriasEquivalentes >= f.min && vitoriasEquivalentes <= f.max
    );
    return faixa ? faixa.nivel : "Ferro";
}

export function calcularPartidasRankeadas(vitorias, derrotas) {
    const v = Math.max(0, Number(vitorias) || 0);
    const d = Math.max(0, Number(derrotas) || 0);
    const totalPartidas = v + d;
    const saldoVitorias = v - d;

    if (totalPartidas === 0 || saldoVitorias <= 0) {
        const nivel = "Ferro";
        const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
        return { saldoVitorias, vitoriasEquivalentes: 0, nivel, mensagem };
    }

    const taxaHabilidade = v / totalPartidas;

    let fatorConstancia = 1.0;
    if (totalPartidas >= 100) {
        fatorConstancia = 1.3;
    } else if (totalPartidas >= 50) {
        fatorConstancia = 1.2;
    } else if (totalPartidas >= 20) {
        fatorConstancia = 1.1;
    }

    let fatorDominancia = 1.0;
    if (taxaHabilidade >= 0.70) {
        fatorDominancia = 1.15;
    }

    const pontuacaoBruta = saldoVitorias * taxaHabilidade * fatorConstancia * fatorDominancia;
    const vitoriasEquivalentes = Math.round(pontuacaoBruta);
    const nivel = determinarNivel(vitoriasEquivalentes);
    const mensagem = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;

    return {
        saldoVitorias,
        vitoriasEquivalentes,
        nivel,
        mensagem
    };
}