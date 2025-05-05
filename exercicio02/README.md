# Exercício 2: Implementar o Repositório de Usuários com Prisma

## 📌 Objetivo

Implementar o repositório da entidade **User** utilizando o **Prisma**, respeitando os princípios da **Clean Architecture**.

---

## 🧩 Necessidade

Permitir a **persistência dos dados** da entidade `User`, garantindo a **abstração da camada de domínio**, ou seja, separando regras de negócio da implementação concreta de acesso ao banco de dados.

---

## ✅ Requisitos

- Criar uma **interface `UserRepository`** na camada de **domínio**
- Criar uma implementação chamada **`PrismaUserRepository`** na camada de **infraestrutura**

---

## 🗂️ Sugestão de Estrutura
/domain
└── /repositories
└── UserRepository.ts

/infrastructure
└── /repositories
└── PrismaUserRepository.ts

---

## 🛠️ Tecnologias Utilizadas

- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)