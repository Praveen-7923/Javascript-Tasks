 function showTime() {

            // Get current time
            let time = new Date();

            // Get hours, minutes and seconds
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();

            // Display the time
            document.getElementById("clock").innerText =
                hours + ":" + minutes + ":" + seconds;
        }

        // Run the function every 1 second
        setInterval(showTime, 1000);