

const items = [
"Vanilla Ice Cream",
"Chocolate Ice Cream",
"Strawberry Ice Cream",
"Oreo Sundae",
"Caramel Sundae",
"Mango Ice Cream"
];

const search = document.getElementById("search");
const result = document.getElementById("result");

search.addEventListener("keyup", function () {

    let value = search.value.toLowerCase();

    result.innerHTML = "";

    if (value == "") {
        result.classList.add("hidden");
        return;
    }

    let found = false;

    for (let i = 0; i < items.length; i++) {

        if (items[i].toLowerCase().includes(value)) {

            found = true;

            result.innerHTML += `
            <div class="px-4 py-2 hover:bg-pink-100 cursor-pointer">
                ${items[i]}
            </div>`;
        }

    }

    if (!found) {

        result.innerHTML = `
        <div class="px-4 py-2 text-gray-500">
            No Result Found
        </div>`;
    }

    result.classList.remove("hidden");

});

document.addEventListener("click", function (e) {

    if (!e.target.closest(".relative")) {

        result.classList.add("hidden");

    }

});

