document.addEventListener("DOMContentLoaded", () => {
  const frase = document.querySelector(".frase");
  const foto = document.querySelector(".foto");
  
  frase.addEventListener("click", () => {
    alert("This is my favorite phrase");
  });
  
  foto.addEventListener("click", () => {
    alert("Hey haha, this is my picture 🤫")
      });
  });