let inputForm = document.querySelector("#table")!
let input = document.querySelector("#inp")!x
let table = document.querySelector("#time")!

inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let tableOf = input.value;

    table.innerHTML = "";

    for (let i = 1; i <= 10; i++) {

    const message = `${tableOf} X ${i} = ${tableOf * i}`;

    table.innerHTML += `${message} <br>`;
}
});