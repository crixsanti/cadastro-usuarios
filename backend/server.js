// JEITO ANTIGO
// const express = require("express")

// JEITO NOVO
import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json()) // comando para usar o json no body params

app.use(cors({
  origin: 'https://cadastro-usuarios-ivory.vercel.app'  // <== substitua aqui se quiser restringir
}))

const users = []

// (request, response)
app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

//---------------------------------------------------------

app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name,
        }
    })
    res.status(201).json(user)
})

//---------------------------------------------------------

app.put('/usuarios/:id', async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    console.log(user)

    res.status(201).json(user)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "Usuário deletado com sucesso!" })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

//app.listen(3000)

// req - requisição
// res - resposta
// http://localhost:3000

/*
    mongoDB
    username: christopher
    senha: Zt354xH33c59W7T7
*/

/*
    ok - CRIAR
    ok - LER
    ok - EDITAR
    ok - DELETAR

    CRUD:
        - CREATE
        - READ
        - UPDATE
        - DELETE
    
*/