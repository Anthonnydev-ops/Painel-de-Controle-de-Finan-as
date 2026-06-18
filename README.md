💰 Controle Financeiro

Um painel de controle financeiro desenvolvido com React, permitindo o gerenciamento de entradas e saídas financeiras de forma simples, rápida e intuitiva.

📖 Sobre o Projeto

O Controle Financeiro é uma aplicação web que possibilita o registro e acompanhamento de movimentações financeiras. O usuário pode adicionar receitas e despesas, visualizar o histórico completo das transações e acompanhar seu saldo atualizado em tempo real.

O projeto foi desenvolvido com foco em praticar conceitos de React, gerenciamento de estado e manipulação dinâmica de dados.

✨ Funcionalidades
📥 Adicionar entradas financeiras
📤 Adicionar saídas financeiras
📊 Atualização automática dos valores
💰 Cálculo do saldo total
📋 Histórico completo das transações
🗑️ Exclusão de transações
📅 Registro da data de cada movimentação
🎨 Interface moderna e responsiva
📸 Demonstração
Dashboard

Cadastro de Transações

🛠️ Tecnologias Utilizadas
⚛️ React
JavaScript (ES6+)
HTML5
CSS3
React Hooks (useState)
LocalStorage (se utilizado para persistência dos dados)
🎯 Como Funciona
Adicionar uma Transação
Informe a descrição da movimentação.
Digite o valor.
Escolha o tipo:
🟢 Entrada
🔴 Saída
Clique em Adicionar Transação.
Atualização Automática

Após o cadastro da transação, o sistema:

Atualiza o total de entradas.
Atualiza o total de saídas.
Recalcula o saldo geral.
Insere a movimentação no histórico.
Excluir uma Transação

Ao clicar no ícone de lixeira, a transação é removida e todos os valores são recalculados automaticamente.

📊 Exemplo
Descrição	Tipo	Valor
E-commerce	Entrada	R$ 25.000,00
Marketing	Saída	R$ 5.000,00
Resultado
Entradas: R$ 25.000,00
Saídas:   R$ 5.000,00
Saldo:    R$ 20.000,00
📂 Estrutura do Projeto
src/
│
├── components/
├── App.jsx
├── main.jsx
├── styles/
│
public/
│
package.json
README.md
🚀 Como Executar o Projeto
Clone o repositório
git clone https://github.com/seu-usuario/controle-financeiro.git
Acesse a pasta
cd controle-financeiro
Instale as dependências
npm install
Execute o projeto
npm run dev

A aplicação estará disponível em:

http://localhost:5173

Caso esteja utilizando Vite.

🎓 Conceitos Praticados
Componentização com React
Manipulação de estados com Hooks
Renderização dinâmica de listas
Eventos e formulários
Atualização reativa da interface
Organização de componentes
Responsividade e estilização moderna
👨‍💻 Autor

Anthonny José Dantas de Almeida

GitHub: https://github.com/seu-usuario

LinkedIn: https://linkedin.com/in/seu-perfil

📄 Licença

Este projeto está sob a licença MIT.

⭐ Projeto desenvolvido para fins de estudo e aprimoramento das habilidades em React e desenvolvimento Front-End.
