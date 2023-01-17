//Обращаемся к элементам
const new_task_input = document.querySelector("#new_task_input");
const new_task_add_btn = document.querySelector('#new_task_add_btn');
const tasks = document.querySelector('.tasks');
const empty_tasks = document.querySelector('.empty_tasks')
let new_task_text = ""

//Функция, которая запускается при нажатии на кнопку добавления задания
function taskSave() {

    //Получение введенного задания в переменной
    new_task_text = new_task_input.value
    
    //Формирование блока с текстом нового задания
    new_task_html = `<div class = "one_task">
                        <div class = "content">${new_task_text}</div>
                        <div class = "buttons">
                            <button class = "edit">Edit</button>
                            <button class = "delete">Delete</button>
                        </div>
                        </div>`

    //Добавление блока с текстом нового задания
    tasks.insertAdjacentHTML("beforeend", new_task_html)

    //Очищаем поле ввода и возвращаем фокус
    new_task_input.value = ""
    new_task_input.focus()

    //Если добавляется задание, то скрывается надпись "No tasks found"
    if (tasks.children.length > 0) {
        empty_tasks.classList.add('none')
    }

}

new_task_add_btn.addEventListener('click', taskSave);