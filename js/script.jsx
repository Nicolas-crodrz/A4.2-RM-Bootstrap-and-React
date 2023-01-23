// Elemento 1/3: Efecto hover sobre los productos
let elementos = document.querySelectorAll(".carta");

elementos.forEach(function (elemento) {
  elemento.addEventListener("mouseover", function () {
    elemento.style.transform = "scale(1.2)";
  });
  elemento.addEventListener("mouseout", function () {
    elemento.style.transform = "scale(1)";
  });
});

// Elemento 2/3: Carrito de compras falso.
let contador = document.querySelector(".contador");
let carts = document.querySelectorAll(".cart");

carts.forEach(function (cart) {
  cart.addEventListener("click", function () {
    contador.innerHTML++;
  });
});


// Elemento 3/3: Alerta de valoración enviada correctamente
let btnSend = document.querySelector(".btn-send");
let div = document.createElement("div");
div.style.position = "fixed";
div.style.top = "0";
div.style.right = "0";
div.style.width = "100%";
div.style.textAlign = "center";
div.style.zIndex = "100";
div.innerHTML = "Valoración enviada correctamente";
div.classList.add("alert", "alert-success", "alerta", "mt-3");
btnSend.addEventListener("click", function () {
  document.querySelector(".btn-send").appendChild(div);
});
