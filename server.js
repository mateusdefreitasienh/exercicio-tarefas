import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 8080;
const app = express();

app.use(express.json());

const tarefas = [];

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tarefas", (req, res) => {
	res.json(tarefas);
});

app.get("/tarefas/:indice", (req, res) => {
	const indice = req.params.indice;

	res.json(tarefas[indice]);
});

app.post("/tarefas", (req, res) => {
	const tarefa = req.body.tarefa;

	tarefa.length >= 4 && tarefa.length <= 128
	? (tarefas.push(tarefa), res.json({success: true}))
	: res.json({success: false, "error": "Tarefa deve ter entre 4 e 128 caracteres."});

});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});