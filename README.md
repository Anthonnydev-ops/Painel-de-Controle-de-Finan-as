# 💰 Controle Financeiro

Um painel de controle financeiro desenvolvido com **React** para auxiliar no gerenciamento de receitas e despesas de forma simples, prática e intuitiva.

## 📌 Sobre o Projeto

O **Controle Financeiro** é uma aplicação web que permite registrar movimentações financeiras classificadas como **Entradas** e **Saídas**.

A aplicação realiza automaticamente o cálculo dos valores totais e exibe um histórico completo das transações cadastradas, proporcionando uma visão clara da situação financeira do usuário.

---

## 🚀 Funcionalidades

- ✅ Cadastro de novas transações
- ✅ Registro de entradas financeiras
- ✅ Registro de saídas financeiras
- ✅ Cálculo automático do saldo total
- ✅ Exibição do total de entradas
- ✅ Exibição do total de saídas
- ✅ Histórico de transações
- ✅ Remoção de transações
- ✅ Interface moderna e responsiva
- ✅ Atualização em tempo real utilizando React

---

## 🎯 Como Funciona

### Adicionando uma Transação

1. Informe uma descrição.
2. Digite o valor da movimentação.
3. Escolha o tipo:
   - 🟢 Entrada
   - 🔴 Saída
4. Clique em **Adicionar Transação**.

### Atualização Automática

Após o cadastro, o sistema:

- Atualiza o total de entradas.
- Atualiza o total de saídas.
- Recalcula o saldo geral.
- Adiciona a movimentação ao histórico.

### Removendo uma Transação

Basta clicar no ícone de lixeira para excluir o registro. Os valores do dashboard serão recalculados automaticamente.

---

## 🖥️ Interface

O painel apresenta:

### 💚 Entradas
Valor total recebido.

### ❤️ Saídas
Valor total gasto.

### 💙 Saldo Total
Diferença entre entradas e saídas.

### 📋 Histórico de Transações

Lista de todas as movimentações cadastradas contendo:

- Descrição
- Valor
- Data
- Ação de exclusão

---

## ⚛️ Tecnologias Utilizadas

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Hooks
- Vite

---

## 📂 Estrutura do Projeto

```bash
controle-financeiro/
│
├── public/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│
├── package.json
└── README.md
```

---

## ⚙️ Como Executar

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/controle-financeiro.git
```

### Entre na pasta do projeto

```bash
cd controle-financeiro
```

### Instale as dependências

```bash
npm install
```

### Execute o projeto

```bash
npm run dev
```

### Acesse no navegador

```text
http://localhost:5173
```

---

## 📈 Exemplo de Uso

| Descrição | Tipo | Valor |
|------------|--------|--------|
| E-commerce | Entrada | R$ 25.000,00 |
| Marketing | Saída | R$ 5.000,00 |

Resultado:

```text
Entradas: R$ 25.000,00
Saídas:   R$ 5.000,00
Saldo:    R$ 20.000,00
```

---

## 🎓 Conceitos Aplicados

- Componentização com React
- Gerenciamento de estado com Hooks
- Manipulação de formulários
- Renderização dinâmica de listas
- Atualização reativa da interface
- Responsividade
- Organização de componentes

---

## 👨‍💻 Autor

Desenvolvido por **Anthonny José Dantas de Almeida**.

---

## 📄 Licença

Este projeto está sob a licença MIT.
