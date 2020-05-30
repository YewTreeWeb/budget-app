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

  formatNumber(number, type) {
    /**
     * + or - before the number
     * exactly 2 decimal points
     * comma seperating the thousands
     *
     * 2310.4567 = + 2,310.46
     */
    let num = Math.abs(number)
    num = num.toFixed(2)

    const numSplit = num.split('.')
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
      html += '<div class="items__percent"><p>0&#37;</p></div>'
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

  displayBudget(obj) {
    const type = obj.budget > 0 ? 'inc' : 'exp'
    const types = type === 'exp' ? 'expenses' : 'income'
    const budget = document.querySelector('.budget__value .budget')
    const inc = document.querySelector(
      `.budget__income .budget__amount .amount`
    )
    const exp = document.querySelector(
      `.budget__expenses .budget__amount .amount`
    )

    budget.textContent = obj.budget
    inc.textContent = obj.totalInc
    exp.textContent = obj.totalExp

    if (process.env.NODE_ENV !== 'production') {
      console.log(`The ${types} is/are ${obj.budget}`)
      console.log(inc, exp)
    }
  }

  displayPercentage(percentage) {
    const percent = document.querySelector('.percentage')

    if (percentage > 0) {
      percent.classList.add('show')
      percent.innerHTML = `${percentage}&#37;`
    } else {
      percent.classList.remove('show')
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log(percent)
    }
  }

  updateBudget() {
    // 1. Check localStorage for save budget data, else get new data
    const getData = budgetController.calculateBudget()

    // 2. Return the budget
    const newBudget = this.getBudget(getData)

    if (process.env.NODE_ENV !== 'production') {
      console.log(newBudget)
    }

    // 3. Display the updated budget
    this.displayBudget(newBudget)

    // 4. Display the new overall budget percentage
    this.displayPercentage(newBudget.percent)
  }

  displayPercentages(percentages) {
    const fields = document.querySelectorAll('.items__percent')
    const nodeListForEach = (list, cb) => {
      for (let i = 0; i < list.length; i++) {
        cb(list[i], i)
      }
    }
    nodeListForEach(fields, (current, index) => {
      if (percentages[index] > 0) {
        current.classList.add('show')
        current.innerHTML = `${percentages[index]}&#37;`
      } else {
        current.classList.remove('show')
        current.innerHTML = '0&#37;'
      }
    })
  }

  updatePercentages() {
    // 1. Calulate percentages
    budgetController.calculatePercentages()

    // 2. Read percentages from budget controller
    const percentages = budgetController.getPercentages()

    // 3. Update UI to show new percentages
    this.displayPercentages(percentages)
  }

  deleteItem() {
    const item = document.querySelector('.income-expenses')
    item.addEventListener('click', (e) => {
      if (e.target.id === 'delete') {
        const target = e.target.closest('.items').parentElement
        const splitID = target.id.split('-')
        const type = splitID[0]
        const ID = Number(splitID[1])

        if (process.env.NODE_ENV !== 'production') {
          console.log(e.target, target, splitID, type, ID)
        }

        // 1. Delete the item from the data structure
        budgetController.removeItem(type, ID)

        // 2. Delete the item from the UI
        target.remove()

        // 3. Update and show the new budget
        this.updateBudget()

        // 4. Update and show the new percentages
        this.updatePercentages()
      }
    })
  }
}

export default UIController
