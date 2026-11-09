Aqui está o texto integral em bloco único Markdown. Basta copiar a caixa abaixo inteira e colar diretamente dentro do seu arquivo **`README.md`**:

```markdown
# ⚔️ Calculadora de Partidas Rankeadas Ponderada

Módulo de cálculo e classificação de saldo de partidas rankeadas para heróis, desenvolvido com foco em Clean Code, arquitetura modular e testes unitários automatizados no Node.js como parte dos desafios de Lógica de Programação da DIO.me.

---

## 📐 Arquitetura e Decisões Técnicas

A solução foi projetada seguindo boas práticas de engenharia de software e padrões de design:

- **Single Responsibility Principle (SRP):** As regras de faixas de ranking (`src/rules.js`), a lógica matemática e classificação (`src/calculator.js`), o ponto de entrada (`src/index.js`) e os testes unitários (`tests/calculator.test.js`) estão isolados em módulos ES nativos.
- **Filosofia de Cálculo Ponderado:** Além do saldo simples de vitórias, o algoritmo avalia a performance real do jogador aplicando três pilares:
  - **Taxa de Habilidade (*Win Rate*):** Proporção decimal entre vitórias e total de partidas disputadas.
  - **Fator de Constância:** Bonificação progressiva baseada no volume de partidas jogadas (Veterano, Constante ou em Evolução).
  - **Fator de Dominância:** Bônus adicional para jogadores que mantêm uma Taxa de Vitória igual ou superior a 70%.
- **Programação Defensiva:** Sanitização e conversão estrita de tipos nas entradas de dados, garantindo estabilidade contra valores nulos, negativos ou `NaN`.
- **Testes Unitários Automatizados & CI/CD:** Suíte completa de testes utilizando a API nativa `node:test` e `node:assert`, com pipeline de integração contínua configurado via GitHub Actions.

---

## ⚙️ Regras e Tabela de Ranks

O algoritmo calcula a pontuação ponderada para definir as **Vitórias Equivalentes ($V_E$)** e encaixar o Herói nas faixas imutáveis do projeto:

| Faixa de Vitórias ($V_E$) | Nível Correspondente |
| :--- | :--- |
| 0 a 10 | **Ferro** |
| 11 a 20 | **Bronze** |
| 21 a 50 | **Prata** |
| 51 a 80 | **Ouro** |
| 81 a 90 | **Diamante** |
| 91 a 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

### Formato da Mensagem Oficial
```text
O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**

```

---

## 🚀 Como Executar e Testar o Projeto

### Pré-requisitos

* **Node.js** v18 ou superior instalado.

### Passo a Passo

1. **Clonar o repositório:**
```bash
git clone [https://github.com/Edgones/calculadora-partidas-rankeadas.git](https://github.com/Edgones/calculadora-partidas-rankeadas.git)
cd calculadora-partidas-rankeadas

```


2. **Executar a suíte de testes unitários:**
```bash
npm test

```


3. **Executar a aplicação:**
```bash
npm start

```


4. **Exemplo de importação modular:**
```javascript
import { calcularPartidasRankeadas } from './src/calculator.js';

const resultado = calcularPartidasRankeadas(90, 20);
console.log(resultado.mensagem);
// Saída: O Herói tem de saldo de **70** está no nível de **Diamante**

```



---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES Modules)
* **Runtime:** Node.js (v24.14.1)
* **Test Runner:** API Nativa (`node:test` e `node:assert`)
* **Integração Contínua:** GitHub Actions (`Node.js CI`)

```

```