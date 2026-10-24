import { storage } from './storage.js';
import { projectsDialog } from './projectsDialog.js';
import { todoDialog } from './todoDialog.js';
import {Project} from "./project";
import { editDialog } from './editDialog.js';

export const projectContent = {
    createContents(title) {
        let projects = storage.getProjects();
        let currProject = projects.find(p => p.title === title);
        let projectTitle = document.getElementById('project-title');
        projectTitle.innerText = currProject.title;

        let ul = document.querySelector('#todo-ul')
        ul.innerHTML = '';
        currProject.todos.forEach(item => {
            const liDiv = document.createElement('div');
            liDiv.className = 'li-div';
            const button = document.createElement('button');
            button.innerText = 'Delete';

            const editBtn = document.createElement('button');
            editBtn.innerText = 'Edit';



            let li = document.createElement('li');
            li.innerText = item;

            liDiv.appendChild(li);
            liDiv.appendChild(button);
            liDiv.appendChild(editBtn);

            ul.appendChild(liDiv);

            button.addEventListener('click', () => {
                const found = projects.find(p => p.title === projectTitle.textContent);
                found.removeTodo(li.innerText);
                projects = projects.filter(p => p.title !== found.title);
                projects.push(found);
                storage.storeProjects(projects);
                this.createContents(projectTitle.textContent);

            });

            editBtn.addEventListener('click', () => {
                const foundProject = projects.find(p => p.title === projectTitle.textContent);
                const currTodo = li.innerText;

                editDialog.openEdit(foundProject, currTodo);

            })
        })

    }

}

let addButton = document.getElementById('add-todo-btn');
addButton.addEventListener('click', (event) => {
    todoDialog.openDialog();
});