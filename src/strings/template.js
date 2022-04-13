const btn = document.querySelector("button");
const main = document.getElementById("main");

function defineMensagem(strings, ...values) {
    let hour = values[1];
    let turn;

    if (hour > 6 && hour < 12) {
        turn = "Bom dia";
    } else if (hour > 12 && hour < 18) {
        turn = "Boa tarde";
    } else {
        turn = "Boa noite";
    }
    return `${turn} ${values[0]}, ${hour} horas!`;
}

function render(name) {
    let horas = new Date().getHours();
    let msg = defineMensagem`Bom dia ${name}, São ${horas} horas!`;

    return msg;
}

btn.addEventListener("click", function () {
    let p = document.createElement("p");
    p.textContent = render("Herlon Costa");
    main.innerHTML = "";
    main.appendChild(p);
});
