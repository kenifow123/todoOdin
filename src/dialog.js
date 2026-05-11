export const dialog = {
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
                            <input type="text" class="text-input" id="description">
                        
                        
                    </div>
                
                    <div class="form-field-right">
                        <label for="dueDate">Due Date:</label>
                            <input type="text" class="text-input" id="dueDate">
                        
                        <label for="priority">Priority:</label>
                            <input type="text" class="text-input" id="priority">
                    </div>
               </form>
                
                
            </div>
            
        `;

        document.body.appendChild(dialog);
        dialog.showModal();
    }
}