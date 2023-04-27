class UI {
  symbols = "123456789abcdef";

  wrapper = document.querySelector(".box");
  cardElm = document.querySelector(".card span");
  moreElm = document.querySelector(".more");
  clickElm = document.querySelector(".click span");
  reloadElm = document.querySelector(".reload");

  randColor() {
    let color = "#";

    for (let i = 0; i < 6; i++) {
      const idx = Math.floor(Math.random() * this.symbols.length);
      color += this.symbols[idx];
    }

    return color;
  }

  renderCell() {
    for (let i = 0; i < 8; i++) {
      const cell = document.createElement("div");

      cell.textContent = this.randColor();
      cell.style.backgroundColor = cell.textContent;
      cell.classList.add("cell");

      this.wrapper.appendChild(cell);
    }

    [...this.wrapper.children].forEach((cell, idx) => {
      cell.addEventListener("click", () => {
        document.body.style.backgroundColor = cell.textContent;
        this.clickElm.textContent = idx + 1;
      });
    });
  }

  handlerMore() {
    this.moreElm.addEventListener("click", () => {
      this.renderCell();
      this.wrapper.style.overflowY = "scroll";
      this.cardElm.textContent = +this.cardElm.textContent + 8;
    });
  }

  handlerReload() {
    this.reloadElm.addEventListener("click", () => {
      [...this.wrapper.children].forEach((cell) => cell.remove());
      setTimeout(() => {
        this.renderCell();
      }, 100);
      this.cardElm.textContent = 8;
      this.clickElm.textContent = "";
      document.body.style.backgroundColor = "#fff";
      this.wrapper.style.overflowY = "hidden";
    });
  }

  init() {
    this.renderCell();
    this.handlerMore();
    this.handlerReload();
  }
}

const renderColors = new UI();

renderColors.init();
