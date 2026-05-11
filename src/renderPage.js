import { sidebar } from './sidebar.js';
import { projectContent } from './projectContent.js';
import {storage} from './storage.js';


export const renderPage = {

    init() {
        // console.log('renderPage.init()');
        sidebar.createSidebar();
        projectContent.createContents('Default');
    }

}
