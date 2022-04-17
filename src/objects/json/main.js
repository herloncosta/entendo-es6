const formData = document.getElementById("formData");
const render = document.getElementById("renderJson");

function getScreenData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const insurance = document.getElementById("insurance").value;

    return { name, age, gender, insurance };
}

function convertToJson(object) {
    let json = JSON.stringify(object);
    return json;
}

formData.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = getScreenData();
    render.textContent = convertToJson(data);
});
