import {storage} from './storage.js';
import { projectContent } from './projectContent.js';
import {projectsDialog} from './projectsDialog.js';



export const sidebar = {
    createSidebar() {
        let projects = storage.getProjects();
        let sidebarItemsDiv = document.querySelector('#sidebar-items-div');
        sidebarItemsDiv.innerHTML = '';
        let ul = document.createElement('ul');
        projects.forEach((project) => {
            const liDiv = document.createElement('div');
            liDiv.className = 'li-div';
            let li = document.createElement('li');
            li.textContent = project.title;
            li.classList.add('sidebar-li');

            //listening for clicks to change content
            li.addEventListener('click', (event) => {
               projectContent.createContents(event.target.textContent);
            });

            liDiv.appendChild(li);
            const button = document.createElement('button');
            button.className = 'delete-project';
            button.textContent = 'Delete';

            button.addEventListener('click', () => {
                const newProjects = projects.filter(p => p.title !== project.title);
                storage.storeProjects(newProjects);
                this.createSidebar();

            });

            if (project.title !== 'Default') {
                liDiv.appendChild(button);
            }

            ul.appendChild(liDiv);
        });

        sidebarItemsDiv.appendChild(ul);



    }



}

const addBtn = document.getElementById('addProjectBtn');
addBtn.addEventListener('click', (event) => {
    projectsDialog.openDialog();
})