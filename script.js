const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const dateInput = document.getElementById("date");
dateInput.setAttribute("min", tomorrow.toISOString().split("T")[0]);

const datalist = document.getElementById("godziny");
  const options = datalist.getElementsByTagName("option");
  const firstHour = 9;
  const lastHour = 21;
  const step = 30;

  for (let i = firstHour; i < lastHour; i++) {
    for (let j = 0; j < 60; j += step) {
      const hour = i < 10 ? "0" + i : i;
      const minute = j === 0 ? "00" : j;
      const time = hour + ":" + minute;
      const option = document.createElement("option");
      option.value = time;
      datalist.appendChild(option);
    }
  }

const pizzaBtns = document.querySelectorAll('.btn-pizza');
const pizzaSelect = document.querySelector('#choose-pizza');

pizzaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const pizza = btn.getAttribute('data-pizza');
        const options = pizzaSelect.options;
        for (let i = 0; i < options.length; i++) {
          options[i].selected = false;
        }
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === pizza) {
            options[i].selected = true;
            break;
          }
        }
      });
    });