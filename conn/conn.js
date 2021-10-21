const mongoose = require('mongoose');
const Conn = (url,user,pass,data) => {
  mongoose.connect('mongodb://localhost:27017/tarefas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB CONECTADO!')
  }).catch((err) => console.log("Falha na Canexao", err));
}

module.exports = Conn;