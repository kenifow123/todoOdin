import { storage } from './storage.js';
import { Project } from './project.js';
import { sidebar } from './sidebar.js';
import { projectContent } from './projectContent.js';


export const editDialog = {
    openEdit(currProject, currTodo) {
        const dialog = document.createElement('dialog');
        dialog.innerHTML = `
            <div class="dialog-div">
                <h1>Edit</h1>
                <form id="dialog-form">
                    <label for="editTodo">New Todo:</label>
                    <input type="text" class="text-input" id="editTodo">
                </form>
                <div class="buttons-div">
                    <button id="dialog-submit">Submit</button>
                    <button id="dialog-cancel">Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);
        dialog.showModal();

        //button listeners
        const submitBtn = document.getElementById('dialog-submit');
        const cancelBtn = document.getElementById('dialog-cancel');

        submitBtn.addEventListener('click', (event) => {
            const newTodo = document.querySelector('input').value;
            let allProjects = storage.getProjects();
            const foundProject = allProjects.find(p => p.title === currProject.title);
            foundProject.todos = foundProject.todos.filter(t => t !== currTodo);
            foundProject.todos.push(newTodo);
            allProjects = allProjects.filter(p => p.title !== foundProject.title);
            allProjects.push(foundProject);
            storage.storeProjects(allProjects);
            dialog.close();
            dialog.innerHTML = '';
            projectContent.createContents(currProject.title);


        });

    }
}