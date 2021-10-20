const mongoose = require('mongoose');
const Conn = () => {
  mongoose.connect('mongodb://localhost:27017/tarefas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB CONECTADO!')
  }).catch((err) => console.log(err));
}

module.exports = Conn;