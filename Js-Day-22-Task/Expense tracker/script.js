  let total = 0;

        function addExpense() {

            // Get expense name
            let expenseName = document.getElementById("expenseName").value;

            // Get amount
            let amount = Number(document.getElementById("amount").value);

            // Check if input is empty
            if (expenseName == "" || amount == "") {
                alert("Please enter expense and amount");
                return;
            }

            // Create a new list item
            let listItem = document.createElement("li");

            // Add expense to list
            listItem.innerText = expenseName + " - ₹" + amount;

            // Display expense
            document.getElementById("expenseList").appendChild(listItem);

            // Add amount to total
            total = total + amount;

            // Display total
            document.getElementById("total").innerText = total;

            // Clear inputs
            document.getElementById("expenseName").value = "";
            document.getElementById("amount").value = "";
        }
