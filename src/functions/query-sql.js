function montaQuerySelect() {
    const tabela = arguments[0];
    const qtdArgs = arguments.length;
    let cols = "";
    if (qtdArgs > 1) {
        for (let index = 1; index < qtdArgs; index++) {
            cols += `${arguments[index]}, `; // `col1, `
        }
        cols = cols.substring(0, cols.length - 2); // `col1`
    } else {
        cols = "*";
    }
    return `SELECT ${cols} from ${tabela}`; // SELECT * FROM tabela
}
const query1 = montaQuerySelect("tabela");
const query2 = montaQuerySelect("tabela", "col1");
const query3 = montaQuerySelect("tabela", "col1", "col2");

montaQuerySelect(); // SELECT * FROM undefined
console.log(query1); // SELECT * FROM tabela
console.log(query2); // SELECT col1 FROM tabela
console.log(query3); // SELECT col1, col2 FROM tabela
