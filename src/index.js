import { renderPage } from './renderPage.js';
// import { sidebar } from './sidebar.js';
import { Project } from './project.js';
import { storage } from './storage.js';
import "./styles.css";


let p = new Project('Default2', 'descrip', 'due', 'priority')
// let x = new Project('Default2', 'descrip', 'due', 'priority')
// let s = new Storage();
// s.storeProjects(arr);

// s.getProjects();

// let x = new Project('Default', 'descrip', 'due', 'priority');
// x.addTodo("make website");
// x.addTodo("make todo list");
//
// let arr = [x, p];
// storage.storeProjects(arr);
//
//
window.storage = storage;
window.Project = Project;
//

renderPage.init();