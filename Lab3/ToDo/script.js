class TodoList {
    constructor() {
        this.tasks = [];
        this.init();
    }

    init() {
        this.taskInput = document.querySelector('.input-field');
        this.addButton = document.querySelector('.add');
        this.taskList = document.querySelector('.task-list');

        this.addButton.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addTask();
            }
        });
    }

    addTask() {
        const taskText = this.taskInput.value.trim();
        if (taskText) {
            this.tasks.push({
                text: taskText,
                completed: false
            });
            this.taskInput.value = '';
            this.renderTasks();
        }
    }

    deleteTask(index) {
        this.tasks.splice(index, 1);
        this.renderTasks();
    }

    toggleTask(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.renderTasks();
    }

    renderTasks() {
        this.taskList.innerHTML = '';
        this.tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task-item';
            taskElement.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                </div>
                <button class="delete-btn">🗑️</button>
            `;

            const checkbox = taskElement.querySelector('.task-checkbox');
            const deleteBtn = taskElement.querySelector('.delete-btn');

            checkbox.addEventListener('change', () => this.toggleTask(index));
            deleteBtn.addEventListener('click', () => this.deleteTask(index));

            this.taskList.appendChild(taskElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoList();
});