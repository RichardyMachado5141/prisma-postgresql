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
- Principais dificuldades: A maior dificuldade foi configurar o Prisma para funcionar com o PostgreSQL dentro do Docker. Também tive um problema com a porta 5432, porque já havia um PostgreSQL instalado no computador usando essa mesma porta. Depois de ajustar isso, foi necessário configurar as migrations e testar a conexão entre o Prisma e o banco.
- Importância do ORM: Na minha opinião, o Prisma facilita bastante o desenvolvimento porque evita ter que escrever várias consultas SQL diretamente. Também ajuda a organizar os modelos e os relacionamentos do banco e facilita o controle das alterações através das migrations. Isso acaba deixando o desenvolvimento mais rápido e organizado.
