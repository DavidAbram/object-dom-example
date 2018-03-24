class Button {

  constructor() {
    this.tagName = 'button';
  }

  init(button, text, onClick) {
    const input = document.createElement('input');
    input.value = text;
    input.type = 'button';
    input.addEventListener('click', onClick);
    button.appendChild(input);
  }
  
}