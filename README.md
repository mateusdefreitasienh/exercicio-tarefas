# Lista de Tarefas

Pequeno exercício com backend e frontend para gerenciar uma lista de tarefas.

## Backend

- Estado: `const tarefas = []` (ex.: `tarefas.push("estudar JS")`).

### Endpoints

1. **GET** `/tarefas`
	- Descrição: retorna a lista completa de tarefas (array de strings).

```json
["Estudar para prova", "Comprar leite"]
```

2. **GET** `/tarefas/:indice`
	- Descrição: retorna a tarefa no índice informado.

```json
"Estudar para prova"
```

3. **POST** `/tarefas`
	- Body (JSON): `{ "tarefa": "nome da tarefa" }`
	- Validações:
	  - mínimo: 4 caracteres
	  - máximo: 128 caracteres

```json
{ "success": true }
```

```json
{ "success": false, "error": "Tarefa deve ter entre 4 e 128 caracteres." }
```

## Frontend

- Formulário simples para adicionar tarefa:
  - Campo de texto + botão `Enviar`.
- Lista de tarefas exibida como bullets (`<ul>` / `<li>`).
- Ao carregar a página, buscar tarefas com **GET** `/tarefas`.