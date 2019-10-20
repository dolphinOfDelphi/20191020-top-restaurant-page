import {page} from "./index";

export const menu = (() => {
    const table = document.createElement("table");
    table.classList.add("page-element");
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        const itemCol = document.createElement("td");
        itemCol.textContent = "Lorem ipsum .....";
        const priceCol = document.createElement("td");
        priceCol.textContent = "$0.00";
        row.append(itemCol, priceCol);
        table.appendChild(row);
    }

    return page(table);
})();