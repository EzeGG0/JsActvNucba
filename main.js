const btn = document.querySelector(".btn__form");
const search = document.querySelector(".inputSearch");
const container = document.querySelector(".container__pizzas");
search.value = "";
const arrayPizzas = [
  {
    id: 1,
    nombre: "Margarita",
    ingredientes: ["mozarella", "salsa", "pimienta"],
    precio: 600,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: ["tomate", "mozarella", "oregano"],
    precio: 670,
  },
  {
    id: 3,
    nombre: "Argentina",
    ingredientes: ["mozarella", "jamon", "huevo"],
    precio: 700,
  },
  {
    id: 4,
    nombre: "4 Quesos",
    ingredientes: [
      "mozarella",
      "queso gorgonzola",
      "queso provolone",
      "queso parmesano",
    ],
    precio: 730,
  },
  {
    id: 5,
    nombre: "Marinara",
    ingredientes: ["tomate", "ajo", "oregano"],
    precio: 670,
  },
  {
    id: 6,
    nombre: "Fugazza",
    ingredientes: ["mozarella", "cebolla", "parmesano"],
    precio: 620,
  },
];
function createHtml() {
  container.innerHTML = "";
  if (arrayPizzas.some((pizza) => pizza.id == search.value)) {
    arrayPizzas.forEach((pizza) => {
      if (pizza.id === search.valueAsNumber) {
        const h2 = document.createElement("h2");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");
        const button = document.createElement("button");
        container.classList.add("pizzaCard");
        button.textContent = "Borrar";
        button.classList.add("delete");
        h2.innerHTML = `${pizza.nombre}`;
        h3.innerHTML = `Ingredientes: ${pizza.ingredientes}`;
        h4.innerHTML = `$ ${pizza.precio}`;
        container.appendChild(h2);
        container.appendChild(h3);
        container.appendChild(h4);
        container.appendChild(button);
        button.addEventListener("click", (e) => {
          container.innerHTML = "";
          container.classList.remove("pizzaCard");
        });
      } else {
        return;
      }
    });
  } else {
    showError("No hay pizza con ese id");
    return;
  }
}

function showError(msgError) {
  const error = document.createElement("p");
  error.textContent = msgError;
  error.classList.add("error");
  container.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, 3000);
}
function buscarPizza(e) {
  e.preventDefault();
  const pizzaId = search.value;
  if (pizzaId == "") {
    showError("Ingrese un id valido");
    return;
  }
  createHtml();
  search.value = "";
}

btn.addEventListener("click", buscarPizza);
