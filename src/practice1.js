const parseData = function ({ data, column }) {
    let columnNames = column.map(c => c.name);
    return data.map(row =>
        Object.assign({}, ... Object.keys(row).map(index =>
            ({
                [columnNames[index]]: row[index]
            }))
        )
    );
}
export { parseData };
