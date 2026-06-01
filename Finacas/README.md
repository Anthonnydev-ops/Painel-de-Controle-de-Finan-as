# 💰 Personal Finance Dashboard

Um dashboard moderno e responsivo de finanças pessoais desenvolvido em React. A aplicação permite que o usuário gerencie suas receitas e despesas em tempo real, fornecendo cálculos automatizados de saldo e mantendo a persistência de dados localmente.

---

## 🛠️ Tecnologias Utilizadas

* **React (v19)** — Componentização e SPA (Single Page Application).
* **Vite** — Build tool ultra-rápido para desenvolvimento moderno.
* **Tailwind CSS (v4)** — Estilização utilitária e design system nativo em modo escuro.
* **Context API & Custom Hooks** — Gerenciamento de estado global centralizado e limpo, evitando prop-drilling.
* **Web Storage API (LocalStorage)** — Persistência reativa de dados no navegador do usuário.

---

## 🏗️ Arquitetura e Decisões Técnicas

A estrutura do projeto foi planejada seguindo os princípios de separação de responsabilidades (SoC) e alta escalabilidade:

* `src/contexts/`: Centralização das regras de negócio e reatividade dos cálculos (saldo, entradas totais e saídas totais).
* `src/hooks/`: Isolamento da lógica do `localStorage` através de um hook customizado (`useLocalStorage`), tornando o componente visual puramente representativo.
* `src/utils/`: Funções utilitárias de formatação puras (`formatCurrency` e `formatDate`), garantindo reaproveitamento de código e facilitando futuros testes unitários.
* `src/components/`: Divisão modular da interface em componentes focados, isolando o formulário capturador de dados e a tabela histórico de transações.

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone [https://github.com/Anthonnydev-ops/Painel-de-Controle-de-Finan-as.git](https://github.com/Anthonnydev-ops/Painel-de-Controle-de-Finan-as.git)

2. Acesse a pasta do projeto:
    ```bash
    cd Finacas

3. Instale as dependências:
    ```bash
    npm install

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev