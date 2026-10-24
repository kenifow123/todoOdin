export class Project {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.todos = [];
    }

    convert(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.dueDate = obj.dueDate;
        this.priority = obj.priority;
        if (obj.todos === '') {
            obj.todos = [];
        } else {
            this.todos = obj.todos;
        }
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoStr) {
        this.todos = this.todos.filter(todo => todo !== todoStr);
    }


}