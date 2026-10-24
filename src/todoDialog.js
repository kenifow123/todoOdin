import { storage } from './storage.js';
import { Project } from './project.js';
import { sidebar } from './sidebar.js';
import { projectContent } from './projectContent.js';

export const todoDialog = {
    openDialog() {
        const dialog = document.createElement('dialog');
        dialog.innerHTML = `
            <div class="dialog-div">
                <h1>Add To Do</h1>
                <form id="dialog-form" novalidate>
                    <label for="todo">To Do:</label>
                    <input type="text" class="text-input" id="todo">
                </form>
                <div class="buttons-div">
                    <button id="dialog-submit">Submit</button>
                    <button id="dialog-cancel">Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);
        dialog.showModal();

        //validity
        const email = document.getElementById("todo");

        email.addEventListener("input", (event) => {
            if (email.validity.typeMismatch) {
                email.setCustomValidity("I am expecting an email address!");
                email.reportValidity();
                event.preventDefault();
            } else {
                email.setCustomValidity("");
            }
        });

        const form = document.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        });


        let submitBtn = document.getElementById('dialog-submit');
        let cancelBtn = document.getElementById('dialog-cancel');


        //adding to todo, finds and removes current Project obj and pushes updated Project with todo back into storage
        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            let projects = storage.getProjects();
            const projectTitle = document.getElementById('project-title');
            const found = projects.find(p => p.title === projectTitle.textContent);
            projects = projects.filter(p => p.title !== projectTitle.textContent);
            const currProject = new Project();
            currProject.convert(found);
            const newTodo = document.getElementById('todo').value;
            currProject.addTodo(newTodo);
            projects.push(currProject);
            storage.storeProjects(projects);
            dialog.close();
            dialog.remove();

            projectContent.createContents(found.title);
            sidebar.createSidebar();
        });

        cancelBtn.addEventListener('click', (event) => {
            dialog.close();
            dialog.remove();
        })
    }
}