export class Project {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        console.log('push');
    }

    removeTodo(id) {
        this.todo = this.todo.filter(item => item.id !== id);
    }


}