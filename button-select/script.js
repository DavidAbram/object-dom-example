function clickButton() {
  alert(state.select.selectedValue);
}

function changeSelect(event) {
  state.select.selectedValue = event.target.value;
}

const state = {
  select: {
    selectedValue: 'coca-cola',
    options: [
      {
        value: 'coca-cola',
        text: 'Coca Cola 0.5l'
      },
      {
        value: 'sprite',
        text: 'Sprite 0.5l'
      },
      {
        value: 'fanta',
        text: 'Fanta 0.5l'
      }
    ],
    onChange: changeSelect,
  },
  button: {
    text: 'Show selection',
    onClick: clickButton,
  }
};

const button = new Button();
button.init(document.querySelector('div#button'), state.button.text, state.button.onClick);

const select = new Select();
select.init(document.querySelector('div#select'), state.select.options, state.select.onChange);