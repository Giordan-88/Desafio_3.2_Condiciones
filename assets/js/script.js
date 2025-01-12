let imagenBordes = document.getElementById("imgborder");
imagenBordes.addEventListener("click", function () {
  if (imagenBordes.style.border !== "2px solid red") {
    imagenBordes.style.border = "2px solid red";
  } else {
    imagenBordes.style.border = "";
  }
});

/* Código que se utiliza para multiples en vez de función anónima
/* function imgborderfun() {
  if (imagenbordes.style.border !== "2px solid red") {
    imagenbordes.style.border = "2px solid red";
  } else {
    imagenbordes.style.border = "";
  }
}
 */

const inputA = document.getElementById("bichoA");
const inputB = document.getElementById("bichoB");
const inputC = document.getElementById("bichoC");
let conteo = document.getElementById("conteo");
let contadorTotal = 0;
let check = document.getElementById("mensaje");

inputA.addEventListener("input", actualizarTotal);
inputB.addEventListener("input", actualizarTotal);
inputC.addEventListener("input", actualizarTotal);

function actualizarTotal() {
  contadorTotal = suma(inputA, inputB, inputC);

  conteo.innerText = contadorTotal;
}

function suma(a, b, c) {
  console.log(a);
  const sumaTotal = Number(a.value) + Number(b.value) + Number(c.value);
  return sumaTotal > 0 ? sumaTotal : 0;
}

function verificar() {
  if (contadorTotal > 10) {
    check.innerText = "Llevas demasiados bichos";
    check.style.color = "red";
    check.style.fontWeight = "bold";
    check.style.fontSize = "20px";
  } else if (contadorTotal > 1 && contadorTotal <= 10) {
    check.innerText = `Estás llevando ${contadorTotal} bichos`;
    check.style.color = "black";
    check.style.fontWeight = "normal";
    check.style.fontSize = "20px";
  } else if (contadorTotal == 1) {
    check.innerText = "Estas llevando 1 bicho";
    check.style.color = "black";
    check.style.fontWeight = "normal";
    check.style.fontSize = "20px";
  } else {
    check.innerText = "No has seleccionado bichos.";
    check.style.color = "black";
    check.style.fontWeight = "normal";
    check.style.fontSize = "20px";
  }
}

let pd1 = document.getElementById("p1");
let pd2 = document.getElementById("p2");
let pd3 = document.getElementById("p3");

// Función para verificar el código
function verificarP() {
  let passMessage = document.getElementById("pass");
  let passTotal =
    pd1.value.toString() + pd2.value.toString() + pd3.value.toString();
  console.log(passTotal);
  if (passTotal == "911") {
    passMessage.innerText = "Password 1 correcto";
    passMessage.style.color = "blue";
    passMessage.style.fontWeight = "normal";
  } else if (passTotal == "714") {
    passMessage.innerText = "Password 2 correcto";
    passMessage.style.color = "blue";
    passMessage.style.fontWeight = "normal";
  } else {
    passMessage.innerText = "Código incorrecto";
    passMessage.style.color = "red";
    passMessage.style.fontWeight = "bold";
  }
}
