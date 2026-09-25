 function convertTemperature() {

            // Get the value from input
            let celsius = document.getElementById("celsius").value;

            // Convert Celsius to Fahrenheit
            let fahrenheit = (celsius * 9 / 5) + 32;

            // Display the result
            document.getElementById("result").innerText =
                "Temperature: " + fahrenheit + " °F";

        }