const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const course = await prisma.course.create({
    data: {
      title: 'Introdução ao Prisma',
      slug: 'intro-prisma',
      description: 'Curso introdutório sobre ORM Prisma',
      modules: {
        create: [
          { title: 'O que é ORM?', content: 'Conceitos básicos', order: 1 },
          { title: 'Modelando com Prisma', content: 'Schema e relações', order: 2 }
        ]
      }
    },
    include: { modules: true }
  })

  console.log('Seed criado:', course)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
