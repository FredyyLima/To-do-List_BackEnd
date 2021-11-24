const mongoose = require('mongoose');

const tarefaSchema = new mongoose.Schema({
  titulo: {type: String, required: true},
  descricao: {type: String, required: true},
  prioridade: {type: String, required: true},
  stats: {type: String, required: true },
  prazo: {type: String, required: true },
  dataCriacao: { type: Date, default: Date.now }
})

const tarefaModel = mongoose.model('tarefas', tarefaSchema);

module.exports = tarefaModel;



