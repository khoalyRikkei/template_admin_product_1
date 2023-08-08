function TableElement(idElement, thData, data, action) {
  this.id = idElement;
  this.thData = thData;
  this.data = data;
  this.action = action;
  this.createTable = () => {
    const tableElement = $(`#${this.id}`);
    const theadContent = thData
      .map((item) => `<th>${item.title}</th>`)
      .join("");
    const tbodyContent = data
      .map((item, index) => {
        let content = "<tr>";

        content += thData
          .map((td) => {
            if (td.title == "#") {
              return `<td>${index + 1}</td>`;
            } else if (td.title == "action") {
              return `<td>${action
                .map((btn) => "<button>" + btn + "</button>")
                .join("")}</td>`;
            }
            return `<td>${item[td.key]}</td>`;
          })
          .join("");

        content += "</tr>";
        return content;
      })
      .join("");
    tableElement.innerHTML = `<thead>${theadContent}</thead><tbody>${tbodyContent}</tbody>`;
  };
}
