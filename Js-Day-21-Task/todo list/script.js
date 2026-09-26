 function addTask() {
            // Get the task entered by the user
            let task = document.getElementById("task").value;
            // Check if the input is empty
            if (task == "") {
                alert("Please enter a task");
                return;
            }
            // Create a new list item
            let listItem = document.createElement("li");
            // Put the task inside the list item
            listItem.innerText = task;
            // Add the task to the list
            document.getElementById("taskList").appendChild(listItem);
            // Clear the input box
            document.getElementById("task").value = "";
        }