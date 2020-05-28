/* eslint-disable class-methods-use-this */

import budgetController from './budgetcontroller'

/* eslint-disable prefer-destructuring */
class UIController {
  constructor(cost, description, value) {
    this.inputType = cost
    this.inputDesc = description
    this.inputVal = value
  }

  getInput() {
    return {
      type: this.inputType.value, // Will be either inc or exp
      description: this.inputDesc.value,
      value: Number(this.inputVal.value),
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render(obj, type) {
    const item = type === 'exp' ? 'expenses' : 'income'
    const list = document.querySelector(`.${item}__list`)
    let html

    // Create HTML string with placeholder
    html = `
    <li class='${item}__item' id='${type}-${obj.id}'>
      <div class='item-desc'><p>${obj.desc}</p></div>
      <div class="items">
        <div class='items__value'><p><span>&pound;</span>${obj.val}</p></div>
    `

    if (type === 'exp') {
      html += '<div class="item-percent"><p>0&#37;</p></div>'
    }

    html += `
        <button class='btn btn--clear items__del'>
          <svg id="delete" class="icon" width="20" height="20" aria-hidden="true">
            <use xlink:href="/assets/images/icons.svg#icon-delete"></use>
          </svg>
        </button>
      </div>
    </li>
    `

    // Insert HTML into the DOM
    list.innerHTML += html
  }

  getBudget(data) {
    return {
      budget: data.budget,
      totalInc: data.totals.inc,
      totalExp: data.totals.exp,
      percent: data.percent,
    }
  }

  updateBudget(type, data) {
    const types = type === 'exp' ? 'expenses' : 'income'
    const budget = document.querySelector('.budget__value .budget')
    const percent = document.querySelector('.budget__percentage')
    const amount = document.querySelector(
      `.budget__${types} .budget__amount .amount`
    )

    const newBudget = this.getBudget(data)

    budget.textContent = newBudget.budget
    amount.innerHTML =
      type === 'exp' ? `- ${newBudget.totalExp}` : `+ ${newBudget.totalInc}`

    if (newBudget.percent > 0) {
      percent.classList.add('show')
      percent.innerHTML = `${newBudget.percent}&#37;`
    } else {
      percent.classList.remove('show')
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(`The ${types} is/are ${newBudget.budget}`)
      console.log(amount, percent)
    }
  }

  deleteItem() {
    const item = document.querySelector('.income-expenses')
    item.addEventListener('click', (e) => {
      if (
        e.target.parentElement.tagName === 'BUTTON' &&
        e.target.id === 'delete'
      ) {
        const target = e.target.closest('.items').parentElement.id
        const splitID = target.split('-')
        const type = splitID[0]
        const ID = splitID[1]

        console.log(target, splitID, type, ID)

        // 1. Delete the item from the data structure
        budgetController.removeItem(type, ID)

        // 2. Delete the item from the UI

        // 3. Update and show the new budget
      }
    })
  }
}

export default UIController
