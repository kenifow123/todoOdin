import { storage } from './storage.js';
import { Project } from './project.js';
import { sidebar } from './sidebar.js';

export const projectsDialog = {
    openDialog() {
        const dialog = document.createElement('dialog');
        dialog.innerHTML = `
            <div class="dialog-div">
                <h1>Add a project</h1>
                <form id="dialog-form">
                    <div class="form-field-left">
                        <label for="title">Title:</label>
                            <input type="text" class="text-input" id="title">
                        
                        <label for="description">Description:</label>
                            <textarea id="description"></textarea>
                    </div>
                
                    <div class="form-field-right">
                        <label for="dueDate">Due Date:</label>
                            <input type="date" class="text-input" id="dueDate">
                        
                        <label for="priority">Priority:</label>
                            <input type="text" class="text-input" id="priority">
                    </div>
                </form>
                <div class="buttons-div">
                    <button id="dialog-submit">Submit</button>
                    <button id="dialog-cancel">Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);
        // console.log('appended');
        dialog.showModal();

        let submitBtn = document.getElementById('dialog-submit');
        let cancelBtn = document.getElementById('dialog-cancel');

        submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const title = document.getElementById('title').value;
            const description = document.getElementById('description').value;
            const dueDate = document.getElementById('dueDate').value;
            const priority = document.getElementById('priority').value;

            let p = new Project(title, description, dueDate, priority);
            const projects = storage.getProjects();
            projects.push(p);
            storage.storeProjects(projects)
            dialog.close();
            dialog.remove();
            sidebar.createSidebar();

        });

        cancelBtn.addEventListener('click', (event) => {
            console.log('close');
            dialog.close();
            dialog.remove();
        })
    }
}