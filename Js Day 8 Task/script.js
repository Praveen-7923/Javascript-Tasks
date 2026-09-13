
        function validateForm() {
            let First_name = document.getElementById("First_Name").value.trim();
			let Last_name = document.getElementById("Last_name").value.trim();
            let Email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value;
			let Confirm_password = document.getElementById("Confirm_password").value;
            // Clear previous errors
            document.getElementById("nameError").textContent = "";
			document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("passwordError").textContent = "";
			document.getElementById("passwordError").textContent = "";
            let isValid = true;
            // Name Validation
            if (First_Name === "") {
                document.getElementById("nameError").textContent = "Name is required";
                isValid = false;
            }
            // Email Validation
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "") {
                document.getElementById("emailError").textContent = "Email is required";
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Enter a valid email";
                isValid = false;
            }
            // Password Validation
            if (password === "") {
                document.getElementById("passwordError").textContent = "Password is required";
                isValid = false;
            } else if (password.length < 6) {
                document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
                isValid = false;
            }
            return isValid;
        }