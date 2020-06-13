/* eslint-disable class-methods-use-this */
import { format } from 'date-fns'
import budgetController from './budgetcontroller'
import PastBudget from './pastbudget'

const pastbudget = new PastBudget()

const formatNumber = (number, type, money = false, calc = true) => {
  /**
   * + or - before the number
   * exactly 2 decimal points
   * comma seperating the thousands
   *
   * 2310.4567 = + 2,310.46
   */
  let num = Math.abs(number)
  num = num.toFixed(2)

  const numSplit = num.split('.') // now a string and will split the . to replace with a ,
  let int = numSplit[0]
  let decimal = numSplit[1]
  decimal = Number(decimal) > 0 ? `.${decimal}` : ''

  if (int.length > 3) {
    // substr allows for only part of the string to be taken
    int = `${int.substr(0, int.length - 3)},${int.substr(int.length - 3, 3)}` // input 2310, output 2,310
  }

  let sign
  if (calc) {
    sign =
      type === 'exp'
        ? '<span class="sign">&#45;</span> '
        : '<span class="sign">&#43;</span> '
  } else {
    sign = ''
  }
  const currency = money ? '<span class="currency">&pound;</span>' : ''

  // Return the formatted string
  return `${sign}${currency}${int}${decimal}`
}

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
    const item =
      type === 'exp' ? 'expenses' : type === 'sav' ? 'savings' : 'income'
    const list = document.querySelector(`.${item}__list`)
    let html

    // Create HTML string with placeholder
    html = `
    <li class='${item}__item' id='${type}-${obj.id}'>
      <div class='item-desc'><p>${obj.desc}</p></div>
      <div class="items">
        <div class='items__value'><p>${formatNumber(
          obj.val,
          type,
          true,
          false
        )}</p></div>
    `

    if (type === 'exp' || type === 'sav') {
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
      totalSav: data.totals.sav,
      percentExp: data.percent.exp,
      percentSav: data.percent.sav,
    }
  }

  displayBudget(obj) {
    const type = obj.budget > 0 ? 'inc' : 'exp'
    const types = type === 'exp' ? 'expenses' : 'income'
    const budget = document.querySelector('.budget__value')
    const inc = document.querySelector(`.budget__income .budget__amount`)
    const exp = document.querySelector(`.budget__expenses .budget__amount`)
    const sav = document.querySelector(`.budget__savings .budget__amount`)

    budget.innerHTML = formatNumber(obj.budget, type, true)
    inc.innerHTML = formatNumber(obj.totalInc, 'inc')
    exp.innerHTML = formatNumber(obj.totalExp, 'exp')
    sav.innerHTML = formatNumber(obj.totalSav, 'exp')

    if (process.env.NODE_ENV !== 'production') {
      console.log(`The ${types} is/are ${obj.budget}`)
      console.log(inc, exp)
    }
  }

  displayPercentage(percentage, type) {
    const types = type === 'exp' ? 'expenses' : 'savings'
    const percent = document.querySelector(
      `.budget__${types} .budget__percentage`
    )

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
    this.displayPercentage(newBudget.percentExp, 'exp')
    this.displayPercentage(newBudget.percentSav, 'sav')
  }

  displayPercentages(percentages, type) {
    const types = type === 'exp' ? 'expenses' : 'savings'
    const fields = document.querySelectorAll(`.${types} .items__percent`)
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
    budgetController.calculatePercentages(this.inputType.value)

    // 2. Read percentages from budget controller
    const percentages = budgetController.getPercentages(this.inputType.value)

    // 3. Update UI to show new percentages
    this.displayPercentages(percentages, this.inputType.value)
  }

  displayDate() {
    const budgetDate = document.querySelector('.budget__date')
    const date = new Date()
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Sepetember',
      'October',
      'November',
      'December',
    ]
    budgetDate.textContent = `${months[date.getMonth()]} ${date.getFullYear()}`
  }

  changeType() {
    const type = this.inputType
    const check = document.querySelector('#check')

    // if (process.env.NODE_ENV !== 'production') {
    //   console.log(fields)
    // }

    type.addEventListener('change', (e) => {
      const options = Array.from(type.options)

      if (process.env.NODE_ENV !== 'production') {
        console.log(e)
        console.log(
          type.attributes,
          type.options,
          type.options.selectedIndex,
          options,
          options[1]
        )
      }

      options.forEach((option) => {
        if (option.selected) {
          option.setAttribute('selected', 'selected')
          check.classList.remove('exp', 'sav')
          if (option.value === 'exp') {
            check.classList.add('exp')
          } else if (option.value === 'sav') {
            check.classList.add('sav')
          }
        } else {
          option.removeAttribute('selected', 'selected')
        }
        if (process.env.NODE_ENV !== 'production') {
          console.log(`Value ${option.value}`)
        }
      })
    })
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

  saving() {
    const button = document.querySelector('#save')
    const data = budgetController.getData()
    button.addEventListener('click', () => {
      // const list = document.querySelector('.date-list')
      const input = document.querySelector('#chosen-ID')
      const ID = input.value || null
      let selected = false

      // Array.from(list.children).forEach((child) => {
      //   if (child.classList.contains('selected')) {
      //     // ID = child.getAttribute('data-id')
      //     selected = true
      //   }
      // })

      if (input.classList.contains('chosen')) {
        selected = true
      }

      if (process.env.NODE_ENV !== 'production') {
        console.log(data, data.allItems.inc, ID)
      }

      if (selected && ID) {
        pastbudget
          .updateBudget(data, ID)
          .then(() => {
            console.log('updated')
            button.textContent = 'Updated'
            button.classList.remove('btn--ghost')
            setTimeout(() => {
              button.textContent = 'Save'
              button.classList.add('btn--ghost')
            }, 2000)
          })
          .catch((err) => {
            console.error(err)
          })
      } else {
        pastbudget
          .saveBudget(data)
          .then(() => {
            console.log('saved')
            button.textContent = 'Saved'
            button.classList.remove('btn--ghost')
            setTimeout(() => {
              button.textContent = 'Save'
              button.classList.add('btn--ghost')
            }, 2000)
          })
          .catch((err) => {
            console.error(err)
          })
      }
    })
  }

  // saving() {
  //   const button = document.querySelector('#save')
  //   const data = budgetController.getData()
  //   const now = format(new Date(), 'dd/MM/yyyy')
  //   const items = []
  //   let found = false

  //   button.addEventListener('click', () => {
  //     const list = document.querySelectorAll('.date-list > li')
  //     const listItems = Array.from(list)
  //     listItems.forEach((item) => {
  //       items.push({ date: item.textContent, id: item.getAttribute('data-id') })
  //     })
  //     if (process.env.NODE_ENV !== 'production') {
  //       console.log(data, data.allItems.inc, items)
  //     }
  //     // Check if items array has the current date
  //     for (let i = 0; i < items.length; i++) {
  //       if (items[i].date === now) {
  //         found = true
  //         break
  //       }
  //     }

  //     // Update budget if it already exists or save a new budget
  //     if (found) {
  //       items.forEach((item) => {
  //         if (item.date === now) {
  //           pastbudget
  //             .updateBudget(data, item.id)
  //             .then(() => {
  //               console.log('updated')
  //               button.textContent = 'Updated'
  //               button.classList.remove('btn--ghost')
  //               setTimeout(() => {
  //                 button.textContent = 'Save'
  //                 button.classList.add('btn--ghost')
  //               }, 4000)
  //             })
  //             .catch((err) => {
  //               console.error(err)
  //             })
  //         }
  //       })
  //       if (process.env.NODE_ENV !== 'production') {
  //         console.log('has todays date')
  //       }
  //     } else {
  //       pastbudget
  //         .saveBudget(data)
  //         .then(() => {
  //           console.log('saved')
  //           button.textContent = 'Saved'
  //           button.classList.remove('btn--ghost')
  //           setTimeout(() => {
  //             button.textContent = 'Save'
  //             button.classList.add('btn--ghost')
  //           }, 4000)
  //         })
  //         .catch((err) => {
  //           console.error(err)
  //         })
  //       if (process.env.NODE_ENV !== 'production') {
  //         console.log('does not have todays date')
  //       }
  //     }
  //   })
  // }

  styledDropdown() {
    const input = document.querySelector('#chosen-date')
    const inputID = document.querySelector('#chosen-ID')
    const dropdown = document.querySelector('.date-list')

    input.addEventListener('focus', () => {
      input.placeholder = 'Type to filter'
      dropdown.classList.add('open')
    })

    input.addEventListener('blur', () => {
      dropdown.classList.remove('open')
      input.placeholder = 'Choose a date'
    })

    dropdown.addEventListener('click', (e) => {
      if (process.env.NODE_ENV !== 'production') console.log(e, e.target)
      inputID.classList.add('chosen')
      Array.from(dropdown.children).forEach((child) => {
        child.classList.remove('selected')
      })
      if (e.target.tagName === 'LI') {
        const targetTxt = e.target.textContent
        const targetID = e.target.getAttribute('data-id')
        input.setAttribute('value', targetTxt)
        input.placeholder = targetTxt
        inputID.setAttribute('value', targetID)
        e.target.classList.add('selected')
      }
    })
  }

  loading() {
    const dropdown = document.querySelector('.date-list')
    const dropdownList = document.querySelector('.date-list li')

    pastbudget.getBudget((budgets, id) => {
      const date = budgets.created_at.toDate()
      if (date) {
        const when = format(new Date(date), 'dd/MM/yyyy')
        const list = `<li class="date-list__item" data-id="${id}">${when}</li>`
        if (dropdownList.textContent === 'No saved dates') dropdownList.remove()
        dropdown.innerHTML += list
      }
    })

    this.styledDropdown()
    // todo: Need to add select interaction and apply class and input value to load data on page
  }
}

export default UIController
