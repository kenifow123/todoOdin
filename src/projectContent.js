import { storage } from './storage.js';
import { dialog } from './dialog.js';

export const projectContent = {
    createContents(title) {
        let projects = storage.getProjects();
        let currProject = projects.find(p => p.title === title);
        let projectTitle = document.getElementById('project-title');
        projectTitle.innerText = currProject.title;

        let ul = document.querySelector('#todo-ul')
        ul.innerHTML = '';
        currProject.todos.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        })

    }

}

let addButton = document.getElementById('add-todo-btn');
addButton.addEventListener('click', (event) => {
    dialog.openDialog();
});