const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Tarefa = require('./models/tarefa');
const app = express();
app.use(cors());
app.use(express.json());

const Conn = require('./conn/conn');
Conn();

app.get('/tarefas', (req, res) => {
  Tarefa.find()
  .then((tarefas) => {
    console.log(tarefas);
    res.send(tarefas);
  })
  .catch((err) => console.log(err));
})

app.get('/tarefaslista', async (req, res) => {
  const tarefas = await Tarefa.find();
  console.log(tarefas);
  res.send(tarefas);
})

app.get('/tarefas/findById/:id', async (req, res) => {
  const tarefaById = await Tarefa.findOne({ _id: req.params.id })
  res.send(tarefaById);
})

app.get('/tarefas/findByTitulo/:titulo', async (req, res) => {
  const tarefaByTitulo = await Tarefa.find({ titulo: req.params.titulo })
  res.send(tarefaByTitulo);
})

app.delete('/tarefas/delete/:id', async (req, res) => {
  await Tarefa.deleteOne({ _id: req.params.id });
  res.status(200).send({
    message: 'Excluido com sucesso',
  })
})


app.post('/tarefas/add', async (req, res) => {
  await Tarefa.create(req.body)
  .then(() => {
    res.status(201).send({
      message: 'Criado com sucesso'
    })
  })
  .catch((err) => {
    res.status(400).send({
      error: 'Algo deu errado, tente novamente'
    })
    console.log(err);
  })
})


app.put('/tarefas/update/:id', async (req, res) => {
  await Tarefa.updateOne({ _id: req.params.id }, req.body)
  .then(() => {
    res.status(200).send({
      message: 'Atualizado com sucesso',
    })
    .catch((err) => {
      console.log(err),
      res.status(400).send({
        error: err
      })
    })
  })
})





const port = 3001;
app.listen(port, () => {
  console.log(`App rodando na porta ${port}!!`);
})