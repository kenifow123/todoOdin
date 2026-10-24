import { Project } from './project.js';
import { projectContent } from './projectContent.js';


export const storage = {
    storeProjects(project){
        localStorage.setItem('projects', JSON.stringify(project));
    },

    getProjects() {
        const info = localStorage.getItem('projects');
        if (!info) return null;
        const objects = JSON.parse(info);
        let newArr = [];
        objects.forEach(object => {
            const p = new Project();
            p.convert(object);
            newArr.push(p);
        })

        return newArr;

    },

    clearStorage() {
        localStorage.removeItem('projects');
    }

}