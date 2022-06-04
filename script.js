"use strict";

const week = document.querySelector(".chartview");

const expenseData = async () => {
  const res = await fetch("/expenses-chart-component-main/data.json");
  const data = await res.json();

  data.map((days, index) => {
    const chart = document.createElement("div");
    chart.style.height = ` ${days.amount * 2}px`;
    week.appendChild(chart);

    const weekDay = document.createElement("span");
    weekDay.classList.add("week");
    weekDay.innerHTML = `${days.day}`;
    chart.appendChild(weekDay);

    const amount = document.createElement("span");
    amount.className = "amount";
    amount.classList.add("hidden");
    amount.innerHTML = "$" + `${days.amount}`;
    chart.prepend(amount);

    chart.lastElementChild.textContent.includes("wed") &&
      (chart.style.backgroundColor = "hsl(186, 34%, 60%)");
  });
};

expenseData();

//   : (chart.style.backgroundColor = "hsl(10, 79%, 65%)");
