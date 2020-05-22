const UIController = (() => {
  const DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputVal: '.add__value',
  }
  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: document.querySelector(DOMStrings.inputVal).value,
      }
    },
    addListItem: (obj, type) => {
      const item = type === 'exp' ? 'expenses' : 'income'
      let html
      // Create HTML string with placeholder
      html = `
      <li class='${item}__item' id='${type}-${obj.id}'>
        <div class='item-desc'>${obj.desc}</div>
        <div class='item-value'>${obj.val}</div>
      `
      if (type === 'exp') {
        html += `
          <div class="item-percent">21%</div>
        `
      }
      html += `
        <button class='btn btn--sm item-del'>Delete</button>
      </li>
      `
      // Insert HTML into the DOM
      const list = document.querySelector(`.${item}__list`)
      list.innerHTML += html
    },
    getDOMStrings: () => {
      return DOMStrings
    },
  }
})()

export default UIController
