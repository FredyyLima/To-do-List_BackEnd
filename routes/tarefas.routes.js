const express = require("express");
const TarefasController = require("./../controllers/tarefa.controller");
const TarefasControllerFunc = require('./../controllers/tarefa.func.controller');
const tarefaController = new TarefasController();
const router = express.Router();

router.get("/", tarefaController.getTarefas);
router.get('/listar', TarefasControllerFunc.getAll);
router.get("/:id", tarefaController.getTarefaById);
router.post("/add", tarefaController.createTarefa);
router.put("/:id", tarefaController.editTarefa);
router.delete("/:id", tarefaController.deleteTarefa);

module.exports = router;
