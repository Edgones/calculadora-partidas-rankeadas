/**
 * Tabela imutável com as regras de classificação por vitórias.
 * Intervalos explícitos evitam erros de ordenação e zonas de sombra.
 */
export const REGRAS_RANKING = Object.freeze([
    { min: 0,   max: 10,       nivel: "Ferro" },
    { min: 11,  max: 20,       nivel: "Bronze" },
    { min: 21,  max: 50,       nivel: "Prata" },
    { min: 51,  max: 80,       nivel: "Ouro" },
    { min: 81,  max: 90,       nivel: "Diamante" },
    { min: 91,  max: 100,      nivel: "Lendário" },
    { min: 101, max: Infinity, nivel: "Imortal" }
]);