//encontrar o botão para adicionar nova tarefa
const addNewTaskBtn = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const taskList = [];


addNewTaskBtn.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
        description : textArea.value
    }
    taskList.push(task)
    localStorage.setItem('task', taskList);
})