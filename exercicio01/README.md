# Exercício 1: Criação da Estrutura Base com Clean Architecture

## 🎯 Objetivo

Criar a fundação de um projeto respeitando os princípios da **Clean Architecture**, garantindo uma separação clara entre as responsabilidades de cada camada.

## 🧱 Estrutura Necessária

O projeto será estruturado em camadas conforme o padrão da Clean Architecture:

- **domain/** – Entidades e regras de negócio
- **application/** – Casos de uso e lógica de aplicação
- **infrastructure/** – Implementações concretas de acesso a dados, serviços, etc.
- **interfaces/** – Camada de apresentação (ex: APIs, páginas)

## 🛠 Requisitos

- [ ] Criar um projeto com **Next.js**
- [ ] Criar as seguintes pastas base:
  - `/domain`
  - `/application`
  - `/infrastructure`
  - `/interfaces`
- [ ] Configurar o **Prisma**:
  - Inicializar o Prisma
  - Criar o `schema.prisma`
  - Gerar o cliente do Prisma
- [ ] Criar uma entidade `User` na camada de domínio

---

## 📦 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)

## 📁 Exemplo de Estrutura Inicial

```plaintext
/project-root
├── domain/
│   └── entities/
│   └── User.ts
│
├── application/
│   └── use-cases/
│
├── infrastructure/
│   └── prisma/
│   └── schema.prisma
│
├── interfaces/
│   └── api/
│
├── node_modules/
├── package.json
└── tsconfig.json