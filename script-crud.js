//encontrar o botão para adicionar nova tarefa
const addNewTaskBtn = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');





addNewTaskBtn.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
})

