function input() {
  const input = document.querySelector("#email");

  input.addEventListener("input", function () {
      const inputWidth = this.value.length * 1.2 + 22;
      const maxWidth = 32; 

      if (inputWidth > maxWidth) {
          this.style.width = maxWidth + "em";
      } else {
          this.style.width = inputWidth + "em";
      }
  });
}

// Chame a função input() para ativar o evento de input
input();
