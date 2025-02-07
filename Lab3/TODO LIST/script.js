const _add = document.getElementById("add-btn");
const tasks = document.getElementById("tasks");
const _input = document.getElementById("addTask");


_add.addEventListener('click', () => {
    tasks.innerHTML += `
        <div class="task">
            <input class="checkbox" type="checkbox">
            <span class="task-text">${_input.value}</span>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    _input.value = "";

    let delete_btn = document.getElementsByClassName("delete-btn");
    [...delete_btn].forEach(element => {
        element.addEventListener('click', () => {
            element.parentElement.remove();
        });
    });

    let crossed = document.getElementsByClassName("checkbox");
    [...crossed].forEach(el => {
        el.addEventListener('click', () => {
            if (!el.checked) {
                el.nextElementSibling.classList.remove("crossed");
            } else {
                el.nextElementSibling.classList.add("crossed");
            }
        });
    });
});