// ES5
function sayHello(name) {
    return "Hello " + name + "!";
}
console.log(sayHello("Herlon"));

var students = {
    turma: "Front-End",
    names: ["Herlon", "Diego"],
    listNames: function () {
        var that = this;
        this.names.forEach(
            function (student) {
                console.log(this.turma + " => " + student); // undefined => Herlon ...
                console.log(this === global); // true
                console.log(that.turma); // Front-End
            } // .bind(this)
        );
    },
};
// nesse caso é necessário a definição de uma variável local ou o uso do método .bind() para definir o contexto
students.listNames();

// ES6
const sayHi = (name) => `Hello ${name}!`;
console.log(sayHi("Herlon"));

const animals = {
    group: "mammal",
    names: ["Dog", "Lion"],
    listNames: function () {
        this.names.forEach((name) => console.log(`${this.group} => ${name}`));
    },
};
// arrow functions tem o poder de acessar o this do seu contexto delimitador
// sem que seja necessário truques com variáveis ou o uso do método .bind()
animals.listNames();

// Assim o código fica mais limpo, simples e legível!! ;)
