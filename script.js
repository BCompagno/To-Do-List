function addTodo() {
    // Get input value
    let todoText = document.getElementById('newTodo').value;

    // Check if the input is not empty
    if (todoText.trim() !== '') {
        // Create a new list item
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(todoText));

        // Add click event to remove the item
        li.addEventListener('click', function () {
            li.classList.add('completed');
            setTimeout(function () {
                li.remove();
            }, 1000);
        });

        // Append the new list item to the ul
        document.getElementById('todoList').appendChild(li);

        // Clear the input
        document.getElementById('newTodo').value = '';
    }
}


let button = document.getElementById("submit");
button.addEventListener("click", addTodo);