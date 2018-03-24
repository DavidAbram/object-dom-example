class Counter {

  constructor() {
    this.tagName = 'counter';
  }

  init(counter) {
    counter.addEventListener('click', () => {
      counter.innerText++;
    })
  }
  
}

const counter = new Counter();
counter.init(document.querySelector('div#counter'));