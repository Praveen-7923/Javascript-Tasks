function fibonacci() {
    let n = Number(document.getElementById("number").value);
    let a = 0;
    let b = 1;
    let series = "";
    if (n <= 0) {
        document.getElementById("result").innerText =
            "Please enter a valid number";
        return;
    }
    for (let i = 1; i <= n; i++) {
        series = series + a + " ";
        let next = a + b;
        a = b;
        b = next;
    }
    document.getElementById("result").innerText = series;
}