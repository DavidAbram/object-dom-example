class Select {

  constructor() {
    this.tagName = 'select';
  }

  addOptions(value, text) {
    const option = document.createElement('option');
    option.setAttribute('value', value);
    option.innerText = text;
    return option;
  }


  init(select, options, onChange) {
    const selectElement = document.createElement('select');
    options.forEach(option => {
      selectElement.appendChild(this.addOptions(option.value, option.text));
    });
    selectElement.addEventListener('change', onChange);
    select.appendChild(selectElement);
  }
  
}