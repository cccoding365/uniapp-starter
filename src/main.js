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
        const todoItemIndex = this.todoList.findIndex(item => item.id === todoId)
        this.todoList.splice(todoItemIndex, 1)
        this.count--
    }

    updateTodo({ todoId, name, isCompleted }) {
        const todoItemIndex = this.todoList.findIndex(item => item.id === todoId)
        this.todoList[todoItemIndex].name = name
        this.todoList[todoItemIndex].isCompleted = isCompleted
    }

    findTodo(todoId) {
        return this.todoList.findIndex(item => item.id === todoId)
    }

    changeTodoStatus(todoId) {
        const todoItemIndex = this.todoList.findIndex(item => item.id === todoId)
        this.todoList[todoItemIndex].isCompleted = !this.todoList[todoItemIndex].isCompleted
    }

    getAllTodo() {
        return this.todoList
    }

    getCompletedTodo() {
        return this.todoList.filter(item => item.isCompleted)
    }

    getUncompletedTodo() {
        return this.todoList.filter(item => !item.isCompleted)
    }

    completedAllTodo() {
        this.todoList.forEach(item => item.isCompleted = true)
    }

}

const todoList = new TodoList()