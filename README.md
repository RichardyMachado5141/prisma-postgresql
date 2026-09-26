# Projeto Exemplo: Prisma + PostgreSQL (Docker)

Este projeto demonstra o uso do ORM Prisma com um banco PostgreSQL executando em Docker.

Passos rápidos:

1. Instale dependências

```bash
npm install
```

2. Suba o Postgres em Docker

```bash
npm run docker:up
```

3. Gere o client Prisma e rode a migração

```bash
npm run prisma:generate
npm run migrate:dev
```

4. Rode o seed

```bash
npm run seed
```

5. Inicie o servidor

```bash
npm run dev
```

Observações:
- Publique o repositório em sua conta pública do GitHub.
- Principais dificuldades que podem aparecer: configuração do `DATABASE_URL`, mapeamento de portas Docker e diferenças entre ambientes host/container.
- Importância do ORM: acelera desenvolvimento, fornece abstração segura para consultas e migrações, gera client tipado e mantém modelo centralizado.
