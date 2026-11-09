# ⚔️ Calculadora de Partidas Rankeadas Ponderada

Módulo de cálculo e classificação de saldo de partidas rankeadas para heróis, desenvolvido com foco em Clean Code, arquitetura modular e testes unitários automatizados no Node.js.

---

## 📐 Arquitetura e Decisões Técnicas

A solução foi projetada seguindo boas práticas de engenharia de software:

- **Single Responsibility Principle (SRP):** As regras de faixas (`rules.js`), a lógica matemática e classificação (`calculator.js`) e os testes unitários (`tests/calculator.test.js`) estão isolados em módulos ES.
- **Filosofia de Cálculo Ponderado:** Além do saldo bruto, o algoritmo avalia a performance real do jogador através de três fatores:
  - **Taxa de Habilidade (*Win Rate*):** Proporção entre vitórias e total de partidas.
  - **Fator de Constância:** Bonificação por volume de partidas disputadas.
  - **Fator de Dominância:** Bônus adicional para jogadores com Taxa de Vitória acima de 70%.
- **Programação Defensiva:** Sanitização e conversão estrita de tipos nas entradas, tratando nulos, negativos ou valores `NaN`.
- **Testes Unitários Automatizados:** Suíte de testes com a API nativa `node:test` e `node:assert`, cobrindo todas as faixas e cenários de borda.

---

## ⚙️ Regras e Tabela de Ranks

O algoritmo calcula a pontuação bruta ponderada para definir as **Vitórias Equivalentes ($V_E$)** e encaixar o Herói nas seguintes faixas:

| Faixa de Vitórias ($V_E$) | Nível Correspondente |
| :--- | :--- |
| Menor ou igual a 10 | **Ferro** |
| 11 a 20 | **Bronze** |
| 21 a 50 | **Prata** |
| 51 a 80 | **Ouro** |
| 81 a 90 | **Diamante** |
| 91 a 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

### Formato da Mensagem de Saída
```text
O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**