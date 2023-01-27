const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


// Contador funcion
document
  .querySelectorAll(".btn-mas>span:first-child, .btn-mas>span:last-child")
  .forEach((span) => {
    span.addEventListener("click", function (el) {
      const element = this.parentElement.querySelector(".numero");
      let num = element.innerText;
      if (this.innerText == "+") {
        // incrementamos
        num++;
      } else {
        // decrementanos
        num--;
      }
      element.innerText = num;
    });
  });


// navbar reponsive?

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



//Create launch static backdrop modal cart shopping?



//crear reloj? 
const reloj = document.getElementById("reloj"); 

function actualizarReloj() {
  const fecha = new Date(); 
  const hora = fecha.getHours(); 
  const minutos = fecha.getMinutes(); 
  const segundos = fecha.getSeconds(); 

  reloj.innerHTML = `${hora}:${minutos}:${segundos}`; 
}

setInterval(actualizarReloj, 1000); 
actualizarReloj(); 







