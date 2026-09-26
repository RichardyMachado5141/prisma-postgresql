require('dotenv').config()
const express = require('express')
const { PrismaClient } = require('@prisma/client')
const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/', (req, res) => res.send('Prisma + PostgreSQL Example'))

app.get('/courses', async (req, res) => {
  const courses = await prisma.course.findMany({ include: { modules: true } })
  res.json(courses)
})

app.post('/courses', async (req, res) => {
  const { title, slug, description } = req.body
  const course = await prisma.course.create({ data: { title, slug, description } })
  res.status(201).json(course)
})

app.get('/modules', async (req, res) => {
  const modules = await prisma.module.findMany({ include: { course: true } })
  res.json(modules)
})

const port = process.env.PORT || 3333
app.listen(port, () => console.log('Server running on port', port))
