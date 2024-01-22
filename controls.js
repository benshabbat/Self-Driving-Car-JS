class Controls {
  constructor() {
    this.forward = false;
    this.reverse = false;
    this.left = false;
    this.right = false;

    this.#addKeyboardListeners();
  }
  #addKeyboardListeners() {
    document.onkeydown = (e) => {
      console.log(e);
    };
  }
}
