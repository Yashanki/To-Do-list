document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.querySelector(".todo-input");
    const todoBtn = document.querySelector(".todo-btn");
    const todoList = document.querySelector(".todo-list");
    const themeButtons = document.querySelectorAll(".theme-btn");

    // Set Theme
    function changeTheme(theme) {
        document.body.className = theme;
        localStorage.setItem("savedTheme", theme);
    }

    // Load saved theme
    const savedTheme = localStorage.getItem("savedTheme") || "standard";
    changeTheme(savedTheme);

    themeButtons.forEach(btn => {
        btn.addEventListener("click", () => changeTheme(btn.classList[0].replace("-theme", "")));
    });

    // Add Task
    todoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (!todoInput.value.trim()) return;

        const todoItem = document.createElement("li");
        todoItem.classList.add("todo");
        todoItem.innerHTML = `
            <span class="todo-text">${todoInput.value}</span>
            <button class="check-btn"><i class="fas fa-check"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
        `;

        todoList.appendChild(todoItem);
        todoInput.value = "";
    });
});
