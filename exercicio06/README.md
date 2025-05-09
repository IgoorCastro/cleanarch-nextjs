# 🧠 Exercício 6: Criar Use Case para Listagem de Usuários

## 📌 Objetivo

Implementar a **listagem paginada de usuários** como um caso de uso na camada de aplicação.

---

## 🧩 Necessidade

Oferecer um **use case** que permita consultar todos os usuários de forma **paginada**, respeitando os princípios da **Clean Architecture**.

---

## ✅ Requisitos

- Receber os parâmetros:
  - `page`
  - `limit`
- Retornar:
  - Lista de usuários
  - Total de páginas

---

## 🗂️ Sugestão de Estrutura

/application
└── /use-cases
└── ListUsersUseCase.ts

---

## 💡 Exemplo de Chamada

```ts
UserRepository.list({ page, limit })