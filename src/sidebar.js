import {storage} from './storage.js';
import { projectContent } from './projectContent.js';



export const sidebar = {
    createSidebar() {
        let projects = storage.getProjects();
        let sidebarItemsDiv = document.querySelector('#sidebar-items-div');
        let ul = document.createElement('ul');
        projects.forEach((project) => {
           let li = document.createElement('li');
           li.textContent = project.title;
           li.classList.add('sidebar-li');

           //listening for clicks to change content
           li.addEventListener('click', (event) => {

               projectContent.createContents(event.target.textContent);
           });


           ul.appendChild(li);
        });

        sidebarItemsDiv.appendChild(ul);

    }

}