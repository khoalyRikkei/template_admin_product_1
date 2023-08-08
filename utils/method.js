const $ = document.querySelector.bind(document);

const data = [
  { color: "green", amount: 95, title: "Total" },
  { color: "blue", amount: 90, title: "User active" },
  { color: "red", amount: 5, title: "Users inactive" },
];

const dataOrders = [
  { color: "blue", amount: 90, title: "Tổng" },
  { color: "red", amount: 10, title: "Đơn mới" },
  { color: "green", amount: 50, title: "Đơn đã đóng gói" },
  { color: "green", amount: 30, title: "Đơn đang giao" },
  { color: "green", amount: 10, title: "Đơn hoàn thành" },
];

class ChartTable {
  constructor(data, idElement) {
    this.data = data.sort((a, b) => b.amount - a.amount);
    this.id = idElement;

    this.createChart = () => {
      const element = $(`#${this.id}`);

      // caclulate step

      const maxRow = Math.ceil(this.data[0].amount * 0.1);
      const maxRowString = maxRow.toString();
      const unit = maxRowString.length;

      let content = "<table>";
      for (let index = 0; index <= 10; index++) {
        content += `<tr   style="${index == 10 ? "border-bottom:none" : ""}">`;
        content += data
          .map((item, col) => {
            const title =
              index === 9
                ? `<span class='col' style='background:${item.color}; height: ${
                    item.amount * 10
                  }%; '></span>`
                : index === 10
                ? `${item.title}`
                : "";
            if (col == 0) {
              return `<td><span class='x'>${
                index != 10 ? (9 - index) * maxRow : ""
              }</span>${title}</td>`;
            } else {
              return `<td>${title}</td>`;
            }
          })
          .join("");
        content += "</tr>";
      }
      content += "</table>";
      element.innerHTML = content;
    };
  }
}

const test = new ChartTable(data, "chart-user");
test.createChart();
