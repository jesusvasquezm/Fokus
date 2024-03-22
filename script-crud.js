//encontrar o botão para adicionar nova tarefa
const addNewTaskBtn = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');
const ulTask = document.querySelector('.app__section-task-list');
const cancelBtn = document.querySelector('.app__form-footer__button--cancel');

const taskList = JSON.parse(localStorage.getItem('tasks')) || [];



function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(taskList)); //o JSON. stringify transforma o conteudo da taskList numa string
}

function createTaskElement(task) {
    //Criei uma li e adicionei uma classe a ela.
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
        <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
</svg> 
`

    const paragraph = document.createElement('p');
    paragraph.textContent = task.description;
    paragraph.classList.add('app__section-task-list-item-description');

    const button = document.createElement('button');
    button.classList.add('app_button-edit');
    const imgBtn = document.createElement('img');
    imgBtn.setAttribute('src', '/imagens/edit.png');
    button.append(imgBtn);

    button.onclick = () => {
        debugger
        const newDescription = prompt("Nome da nova tarefa: ");
        console.log("Nova tarefa: " + newDescription);
        if(newDescription){
            paragraph.textContent = newDescription;
            task.description = newDescription;
            updateTask();
        }
        
    }

    li.append(svg);
    li.append(paragraph);
    li.append(button);

    return li;
}

const cancelTaskElement = () => {
    textArea.value = '';
    formAddTask.classList.toggle('hidden');
}




cancelBtn.addEventListener('click', cancelTaskElement);

addNewTaskBtn.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();

    const task = {
        description: textArea.value
    }
     
    taskList.push(task)
    const taskElement = createTaskElement(task);
    ulTask.append(taskElement);
    updateTask();
    textArea.value = '';
    formAddTask.classList.add('hidden');
})


taskList.forEach(task => {
    const taskElement = createTaskElement(task);
    ulTask.append(taskElement);
});