class TodoItem {
    constructor({ name }) {
        this.id = new Date().getTime()
        this.name = name
        this.isCompleted = false
    }
}

class TodoList {
    constructor() {
        this.todoList = []
        this.count = 0
    }

    addTodo(todoObj) {
        const todoItem = new TodoItem(todoObj)
        this.todoList.push(todoItem)
        this.count++
    }

    delTodo(todoId) {
        const todoItemIndex = this.todoList.find(item => item.id === todoId)
        this.todoList.splice(todoItemIndex, 1)
        this.count--
    }

    updateTodo({ todoId, name, isCompleted }) {
        const todoItemIndex = this.todoList.find(item => item.id === todoId)
        this.todoList[todoItemIndex].name = name
        this.todoList[todoItemIndex].isCompleted = isCompleted
    }

    changeTodoStatus(todoId) {
        const todoItemIndex = this.todoList.find(item => item.id === todoId)
        this.todoList[todoItemIndex].isCompleted = !this.todoList[todoItemIndex].isCompleted
    }

    getAllTodo() {
        return this.todoList
    }

}

const todoList = new TodoList()