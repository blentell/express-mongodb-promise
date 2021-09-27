var express = require("express");
var router = express.Router();
const {
	getAllTodo,
	createTodo,
	updateTodoByID,
	deleteTodoByID,
} = require("./controller/todoController");

/* GET home page. */

router.get('/', function (req, res, next) {
    
    getAllTodo({})
        .then((payload) => {
            res.json({ message: "success", payload });
        })
        .catch((error) => {
            res.status(500).json({ message: "failure", error: error.message });
    });
});

router.post("/create-todo", function (req, res, next) {
  
	createTodo(req.body)
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

router.put("/update-todo-by-id/:id", function (req, res, next) {
	updateTodoByID(req.params.id, req.body)
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

router.delete("/delete-todo-by-id/:id", function (req, res, next) {
	deleteTodoByID(req.params.id, req.body)
		.then((payload) => {
			res.json({ message: "success", payload });
		})
		.catch((error) => {
			res.status(500).json({ message: "failure", error: error.message });
		});
});

module.exports = router;