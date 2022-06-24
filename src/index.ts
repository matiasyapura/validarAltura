let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");

rotulo.innerHTML = "Ingrese Altura:";

btnEnviar.addEventListener("click", () => {
  let altura: number = Number(dato.value);

  if (altura >= 1.3) {
    console.log("Usted puede pasar..");
  } else {
    console.log("Usted no puede subir a la Montaña rusa");
  }
});
