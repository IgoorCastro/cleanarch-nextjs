# 🧠 Exercício 7: Criar Serviço de Autenticação

## 📌 Objetivo

Criar um **use case de autenticação** com validação de credenciais do usuário.

---

## 🧩 Necessidade

Permitir um **login seguro e estruturado**, respeitando os princípios da Clean Architecture.

---

## ✅ Requisitos

- Utilizar **bcrypt** para validar a senha do usuário
- Retornar:
  - Um **token JWT** em caso de sucesso
  - Um **erro** em caso de falha na autenticação

---

## 🗂️ Sugestão de Estrutura

/application
└── /use-cases
└── AuthenticateUserUseCase.ts

/infrastructure
└── /services
└── JwtService.ts
