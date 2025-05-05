# 🧼 Clean Architecture com Next.js + Prisma

Este repositório contém uma série de **10 exercícios práticos** voltados para o aprendizado de **Clean Architecture aplicada a projetos com Next.js e Prisma**. A proposta é construir uma base sólida para aplicações web modernas, com foco em **boas práticas de arquitetura de software, separação de responsabilidades, testes e manutenibilidade**.

---

## 📚 Objetivos

- Compreender e aplicar os **princípios da Clean Architecture**.
- Utilizar o **Next.js** como framework principal para interface e rotas.
- Adotar o **Prisma ORM** para persistência de dados de forma segura e tipada.
- Separar corretamente as camadas de domínio, aplicação, infraestrutura e interface.
- Criar APIs limpas, testáveis e independentes de framework.

---

## 📦 Tecnologias Utilizadas

- **Next.js** (App Router)
- **Prisma ORM**
- **Typescript**
- **PostgreSQL** (ou outro banco compatível com Prisma)
- **Zod** ou **class-validator** (validação de DTOs)
- **Bcrypt** (hash de senha)
- **JWT** (autenticação)

---

## 🧪 Estrutura dos Exercícios

Cada exercício representa um **passo de evolução incremental** no projeto, focando em uma responsabilidade específica da aplicação:

| Nº | Exercício | Descrição |
|----|-----------|-----------|
| 01 | Estrutura base | Criação do projeto com divisão em camadas (domain, application, infrastructure, interfaces). |
| 02 | Repositório Prisma | Implementação de repositórios seguindo a abstração da Clean Architecture. |
| 03 | Caso de uso: cadastro de usuário | Criação do use case com regras de negócio e injeção de dependência. |
| 04 | Exposição via API | Conexão do use case com o endpoint HTTP da interface (Next.js). |
| 05 | DTOs e validação | Criação de objetos de entrada/saída padronizados e validados. |
| 06 | Listagem paginada | Use case com paginação e retorno padronizado. |
| 07 | Autenticação | Implementação de login com bcrypt e JWT. |
| 08 | Middleware e autorização | Criação de middleware para proteger rotas privadas. |
| 09 | Testes unitários | Testar os casos de uso e repositórios com mocks. |
| 10 | Refatoração e boas práticas | Aplicação de refinamentos, extrações e melhorias de arquitetura. |

---

## 🗂 Estrutura de Pastas Esperada

```bash
src/
├── domain/           # Entidades e interfaces (regras de negócio puras)
├── application/      # Casos de uso, serviços e DTOs
├── infrastructure/   # Prisma, serviços externos, repositórios concretos
├── interfaces/       # Rotas HTTP, controle de entrada e saída
├── shared/           # Middlewares, helpers, validações, erros globais