import assert from 'node:assert';
import { test, describe } from 'node:test';
import { calcularPartidasRankeadas, determinarNivel } from '../src/calculator.js';

describe('Suíte de Testes: Validação de Todas as Faixas de Ranking', () => {

    test('1. Deve classificar como Ferro (V_E <= 10)', () => {
        const resultado = calcularPartidasRankeadas(8, 2);
        assert.strictEqual(resultado.nivel, 'Ferro');
        assert.strictEqual(resultado.saldoVitorias, 6);
    });

    test('2. Deve classificar como Bronze (V_E entre 11 e 20)', () => {
        const resultado = calcularPartidasRankeadas(20, 5);
        assert.strictEqual(resultado.nivel, 'Bronze');
        assert.strictEqual(resultado.vitoriasEquivalentes, 15);
    });

    test('3. Deve classificar como Prata (V_E entre 21 e 50)', () => {
        const resultado = calcularPartidasRankeadas(45, 10);
        assert.strictEqual(resultado.nivel, 'Prata');
        assert.strictEqual(resultado.vitoriasEquivalentes, 40);
    });

    test('4. Deve classificar como Ouro (V_E entre 51 e 80)', () => {
        const resultado = calcularPartidasRankeadas(80, 15);
        assert.strictEqual(resultado.nivel, 'Ouro');
        assert.strictEqual(resultado.vitoriasEquivalentes, 76);
    });

    test('5. Deve classificar como Diamante (V_E entre 81 e 90)', () => {
        const resultado = calcularPartidasRankeadas(90, 20);
        assert.strictEqual(resultado.nivel, 'Diamante');
        assert.strictEqual(resultado.vitoriasEquivalentes, 86);
    });

    test('6. Deve classificar como Lendário (V_E entre 91 e 100)', () => {
        const resultado = calcularPartidasRankeadas(95, 20);
        assert.strictEqual(resultado.nivel, 'Lendário');
        assert.strictEqual(resultado.vitoriasEquivalentes, 93);
    });

    test('7. Deve classificar como Imortal (V_E >= 101)', () => {
        const resultado = calcularPartidasRankeadas(130, 10);
        assert.strictEqual(resultado.nivel, 'Imortal');
        assert.ok(resultado.vitoriasEquivalentes >= 101);
    });

    test('8. Garantia de Justiça: Saldo neutro ou negativo deve obrigatoriamente cair em Ferro', () => {
        const neutro = calcularPartidasRankeadas(50, 50);
        const negativo = calcularPartidasRankeadas(10, 30);
        
        assert.strictEqual(neutro.nivel, 'Ferro');
        assert.strictEqual(negativo.nivel, 'Ferro');
    });
});