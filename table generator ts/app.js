var inputForm = document.querySelector("#table");
var input = document.querySelector("#inp");
var table = document.querySelector("#time");
inputForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var tableOf = input.value;
    table.innerHTML = "";
    for (var i = 1; i <= 10; i++) {
        var message = "".concat(tableOf, " X ").concat(i, " = ").concat(tableOf * i);
        table.innerHTML += "".concat(message, " <br>");
    }
});
