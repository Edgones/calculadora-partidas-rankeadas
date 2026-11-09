# ⚔️ Calculadora de Partidas Rankeadas

[![Node.js CI](https://github.com/SEU_USUARIO/calculadora-partidas-rankeadas/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/calculadora-partidas-rankeadas/actions)
![License](https://img.shields.io/badge/license-MIT-green)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)

Módulo de cálculo e classificação de saldo de partidas rankeadas para heróis, desenvolvido como parte dos desafios práticos de Lógica de Programação da [DIO.me](https://www.dio.me/).

## 📐 Arquitetura e Decisões Técnicas

A solução foi projetada seguindo boas práticas de engenharia de software e Clean Code:

- **Separação de Responsabilidades (SRP):** As regras de nível (`rules.js`), a lógica de cálculo (`calculator.js`) e a execução (`index.js`) estão isoladas em módulos distintos.
- **Programação Defensiva:** O sistema realiza sanitização de tipos nas entradas de dados, garantindo estabilidade contra valores nulos ou inválidos (`NaN`).
- **Escalabilidade Teórica:** Os intervalos de nível utilizam limites explícitos `[min, max]`, tornando o algoritmo imune a problemas de ordenação.
- **Testes Unitários Automatizados:** Cobertura de cenários normais e de borda utilizando o Test Runner nativo do Node.js.

---

## ⚙️ Funcionalidades

Dada a quantidade de vitórias e derrotas de um jogador:
1. Calcula o **Saldo de Rankeadas** ($Vitórias - Derrotas$).
2. Determina o **Nível** com base na tabela de regras:

| Faixa de Vitórias | Nível Correspondente |
| :--- | :--- |
| Menor que 10 | **Ferro** |
| 11 a 20 | **Bronze** |
| 21 a 50 | **Prata** |
| 51 a 80 | **Ouro** |
| 81 a 90 | **Diamante** |
| 91 a 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

3. Retorna a mensagem formatada:
> `"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"`

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior instalada.

### Passo a passo
1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/calculadora-partidas-rankeadas.git](https://github.com/SEU_USUARIO/calculadora-partidas-rankeadas.git)
   cd calculadora-partidas-rankeadas