# Exercício 3: Criar Use Case para Cadastro de Usuário

## 📌 Objetivo

Implementar o caso de uso de criação de usuários com regras de validação.

---

## 🧩 Necessidade

Separar a regra de negócio da persistência, garantindo uma boa organização e flexibilidade no código.

---

## ✅ Requisitos

- Validar se o e-mail informado já existe no banco de dados.
- Usar o repositório via injeção de dependência para garantir um baixo acoplamento.
- Retornar o `id` do usuário criado.

---

## 🗂️ Estrutura Sugerida

Para organizar o código de maneira eficiente, sugerimos a seguinte estrutura:
/application
└── /use-cases
└── CreateUserUseCase.ts

---

### Descrição do Arquivo

O arquivo `CreateUserUseCase.ts` será responsável por implementar a lógica de criação do usuário. Nele, serão feitas as validações necessárias, como a verificação de existência do e-mail, e a interação com o repositório para salvar o usuário.

---

## Detalhes de Implementação

1. **Validação do E-mail**: Antes de criar o usuário, será necessário verificar se o e-mail informado já está cadastrado no banco. Caso já exista, o sistema deve lançar um erro ou retornar uma mensagem apropriada.

---
   
2. **Injeção de Dependência**: O repositório de usuários deve ser injetado no `CreateUserUseCase`, permitindo a interação com a camada de persistência de forma desacoplada.

---

3. **Retorno do ID**: Após a criação do usuário, o caso de uso deve retornar o `id` do usuário recém-criado, garantindo que a operação foi realizada com sucesso.
