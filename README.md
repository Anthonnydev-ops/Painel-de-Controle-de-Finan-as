# 💰 Controle Financeiro

Um painel de controle financeiro desenvolvido para auxiliar no gerenciamento de entradas e saídas de valores de forma simples e intuitiva.

## 📌 Sobre o Projeto

O **Controle Financeiro** é uma aplicação web que permite registrar movimentações financeiras, classificando-as como **Entrada** ou **Saída**. O sistema calcula automaticamente os totais e exibe um histórico completo das transações realizadas.

O objetivo do projeto é oferecer uma visualização rápida da situação financeira do usuário através de um dashboard moderno e responsivo.

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
- ✅ Interface moderna e intuitiva
- ✅ Layout responsivo

---

## 📷 Demonstração

### Dashboard Principal

![Dashboard](./assets/dashboard.png)

### Cadastro de Transações

![Cadastro](./assets/transacao.png)

> Substitua as imagens acima pelos prints do seu projeto.

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

### Entradas
Valor total recebido.

### Saídas
Valor total gasto.

### Saldo Total
Diferença entre entradas e saídas.

### Histórico de Transações
Lista de todas as movimentações cadastradas com:

- Descrição
- Valor
- Data
- Ação de exclusão

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage (caso esteja utilizando armazenamento local)

> Adicione ou remova tecnologias conforme o seu projeto.

---

## 📂 Estrutura do Projeto

```bash
controle-financeiro/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── dashboard.png
│   └── transacao.png
│
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

### Execute

Abra o arquivo `index.html` no navegador.

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

## 👨‍💻 Autor

Desenvolvido por **Anthonny José Dantas de Almeida**.

---

## 📄 Licença

Este projeto está sob a licença MIT.
