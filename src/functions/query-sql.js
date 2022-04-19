const montaQuerySelect = (tabela, ...cols) => {
    let colsQuery = "";
    if (cols.length > 1) {
        colsQuery = cols.reduce((query, col) => (query += `${col}, `), "");
        colsQuery = colsQuery.slice(0, colsQuery.length - 2); // `col1`
    } else {
        colsQuery = "*";
    }
    return `SELECT ${colsQuery} from ${tabela}`; // SELECT * FROM tabela
};

const query1 = montaQuerySelect("tabela");
const query2 = montaQuerySelect("tabela", "col1");
const query3 = montaQuerySelect("tabela", "col1", "col2");

montaQuerySelect(); // SELECT * FROM undefined
console.log(query1); // SELECT * FROM tabela
console.log(query2); // SELECT col1 FROM tabela
console.log(query3); // SELECT col1, col2 FROM tabela
