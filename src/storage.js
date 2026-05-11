import { Project } from './project.js';
import { projectContent } from './projectContent.js';


export const storage = {
    storeProjects(project){
        localStorage.setItem('projects', JSON.stringify(project));
        console.log('stored');
    },

    getProjects() {
        const info = localStorage.getItem('projects');
        // console.log(info);
        if (!info) return null;

        return JSON.parse(info);
        // console.log(parsed);

    },

    clearStorage() {
        localStorage.removeItem('projects');
    }

}