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
      `
      if (type === 'exp') {
        html += `
          <div class="item-percent">0&#37;</div>
        `
      }
      html += `
        <div class="items">
          <div class='items__value'>&pound;${obj.val}</div>
          <button class='btn btn--clear items__del'>
            <svg id="delete" class="icon" width="20" height="20" aria-hidden="true">
              <use xlink:href="/assets/images/icons.svg#icon-delete"></use>
            </svg>
          </button>
        </div>
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
