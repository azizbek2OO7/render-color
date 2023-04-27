var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
var UI = /** @class */ (function () {
  function UI() {
    this.symbols = "123456789abcdef";
    this.wrapper = document.querySelector(".box");
    this.cardElm = document.querySelector(".card span");
    this.moreElm = document.querySelector(".more");
    this.clickElm = document.querySelector(".click span");
    this.reloadElm = document.querySelector(".reload");
  }
  UI.prototype.randColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      var idx = Math.floor(Math.random() * this.symbols.length);
      color += this.symbols[idx];
    }
    return color;
  };
  UI.prototype.renderCell = function () {
    var _this = this;
    for (var i = 0; i < 8; i++) {
      var cell = document.createElement("div");
      cell.textContent = this.randColor();
      cell.style.backgroundColor = cell.textContent;
      cell.classList.add("cell");
      this.wrapper.appendChild(cell);
    }
    __spreadArray([], this.wrapper.children, true).forEach(function (
      cell,
      idx
    ) {
      cell.addEventListener("click", function () {
        document.body.style.backgroundColor = cell.textContent;
        _this.clickElm.textContent = idx + 1;
      });
    });
  };
  UI.prototype.handlerMore = function () {
    var _this = this;
    this.moreElm.addEventListener("click", function () {
      _this.renderCell();
      _this.wrapper.style.overflowY = "scroll";
      _this.cardElm.textContent = +_this.cardElm.textContent + 8;
    });
  };
  UI.prototype.handlerReload = function () {
    var _this = this;
    this.reloadElm.addEventListener("click", function () {
      __spreadArray([], _this.wrapper.children, true).forEach(function (cell) {
        return cell.remove();
      });
      setTimeout(function () {
        _this.renderCell();
      }, 100);
      _this.cardElm.textContent = 8;
      _this.clickElm.textContent = "";
      document.body.style.backgroundColor = "#fff";
      _this.wrapper.style.overflowY = "hidden";
    });
  };
  UI.prototype.init = function () {
    this.renderCell();
    this.handlerMore();
    this.handlerReload();
  };
  return UI;
})();
var renderColors = new UI();
renderColors.init();
