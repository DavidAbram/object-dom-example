class List {

  constructor() {
    this.tagName = 'list';
  }

  addListItem(text) {
    const li = document.createElement('li');
    li.innerText = text;
    return li;
  }

  init(list) {
    const ul = document.createElement('ul');

    for(let i = 0; i < 10; i++) {
      ul.appendChild(this.addListItem(`listItem${i}`));
    }

    const counterElement = document.createElement('li');
    const counter = new Counter();
    counter.init(counterElement);
    counterElement.innerText = 0;
    ul.appendChild(counterElement);

    list.appendChild(ul);

    
  }
  
}

const list = new List();
list.init(document.querySelector('div#list'));