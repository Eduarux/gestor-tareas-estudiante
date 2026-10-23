document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Agregar evento para eliminar tarea al hacer clic
        li.addEventListener('click', function() {
            this.remove();
        });

        document.getElementById('task-list').appendChild(li);
        input.value = '';
    }
});