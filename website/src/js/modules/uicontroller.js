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

// Grab search term and filter.
const filterTerms = (el, term) => {
  Array.from(el.children)
    .filter((item) => !item.textContent.toLowerCase().includes(term))
    .forEach((item) => item.classList.add('filtered'))
  Array.from(el.children)
    .filter((item) => item.textContent.toLowerCase().includes(term))
    .forEach((item) => item.classList.remove('filtered'))
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

  loadedRender(data, id) {
    const { allItems } = data
    const input = document.querySelector('#chosen-ID')
    const localData = budgetController.getData()
    const budgetDate = document.querySelector('.budget__title')

    if (id === input.value) {
      // Change the date for the available budget from today's date
      const date = data.created_at.toDate()
      const past = format(new Date(date), 'do MMMM yyyy')
      budgetDate.textContent = `Available budget saved on ${past}`

      // Display the saved data
      this.displayBudget(data)
      this.displayPercentage(data.percentExp, 'exp')
      this.displayPercentage(data.percentSav, 'sav')

      // Push the saved Firebase data to the budgetcontroller data object
      localData.budget = data.budget
      localData.totals.inc = data.totalInc
      localData.totals.exp = data.totalExp
      localData.totals.sav = data.totalSav
      localData.percent.exp = data.percentExp
      localData.percent.sav = data.percentSav

      // Loop through the Firebase allItems object, render it in the UI and push to the budgetcontroller data object
      allItems.inc.forEach((inc) => {
        this.render(inc, 'inc')
        budgetController.addItem('inc', inc.desc, inc.val)
      })
      allItems.exp.forEach((exp) => {
        this.render(exp, 'exp')
        budgetController.addItem('exp', exp.desc, exp.val)
        this.updatePercentages('exp')
      })
      allItems.sav.forEach((sav) => {
        this.render(sav, 'sav')
        budgetController.addItem('sav', sav.desc, sav.val)
        this.updatePercentages('sav')
      })
      if (process.env.NODE_ENV !== 'production') {
        console.log(
          // id,
          // data.budget,
          // data.totalInc,
          // data.totalExp,
          // allItems,
          // allItems.hasOwnProperty('inc'),
          // typeof allItems.inc,
          // allItems.exp,
          localData
        )
      }
    }
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
    const budget = document.querySelector('.budget__value')
    const inc = document.querySelector(`.budget__income .budget__amount`)
    const exp = document.querySelector(`.budget__expenses .budget__amount`)
    const sav = document.querySelector(`.budget__savings .budget__amount`)

    budget.innerHTML = formatNumber(obj.budget, type, true)
    inc.innerHTML = formatNumber(obj.totalInc, 'inc')
    exp.innerHTML = formatNumber(obj.totalExp, 'exp')
    sav.innerHTML = formatNumber(obj.totalSav, 'exp')
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

  updatePercentages(data) {
    const input = data || this.inputType.value
    // 1. Calulate percentages
    budgetController.calculatePercentages(input)

    // 2. Read percentages from budget controller
    const percentages = budgetController.getPercentages(input)

    // 3. Update UI to show new percentages
    this.displayPercentages(percentages, input)
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
    let timesClicked = 0
    item.addEventListener('mouseout', (e) => {
      timesClicked = 0
      const btn = e.target.closest('.items__del')
      if (btn) {
        e.target.parentElement.parentElement.classList.remove('confirm')
        e.target.parentElement.previousSibling.textContent = ''
      }
    })
    item.addEventListener('click', (e) => {
      const btn = e.target.closest('.items__del')
      if (btn) {
        const target = e.target.closest('.items').parentElement
        const splitID = target.id.split('-')
        const type = splitID[0]
        const ID = Number(splitID[1])
        timesClicked += 1

        if (process.env.NODE_ENV !== 'production') {
          console.log(e.target, target, splitID, type, ID)
        }

        // Check if user has confirmed deletion before deleting
        if (timesClicked > 1) {
          // 1. Delete the item from the data structure
          budgetController.removeItem(type, ID)

          // 2. Delete the item from the UI
          target.remove()

          // 3. Update and show the new budget
          this.updateBudget()

          // 4. Update and show the new percentages
          this.updatePercentages()
        } else {
          e.target.parentElement.parentElement.classList.add('confirm')
          e.target.parentElement.previousSibling.textContent =
            'Confirm deletion'
        }
      }
    })
  }

  saving() {
    const button = document.querySelector('#save')
    const data = budgetController.getData()
    button.addEventListener('click', () => {
      const input = document.querySelector('#chosen-ID')
      const ID = input.value || null
      let selected = false

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

    input.addEventListener('input', (e) => {
      const term = input.value.trim().toLowerCase()
      filterTerms(dropdown, term)
      if (process.env.NODE_ENV !== 'production') console.log(e)
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

  Loaded() {
    const form = document.querySelector('.load-budgets')
    const localData = budgetController.getData()
    const income = document.querySelector('.income__list')
    const expenses = document.querySelector('.expenses__list')
    const savings = document.querySelector('.savings__list')
    let dataLoaded = 0

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      dataLoaded += 1

      if (dataLoaded > 1) {
        localData.allItems.inc = []
        localData.allItems.exp = []
        localData.allItems.sav = []
        income.innerHTML = ''
        expenses.innerHTML = ''
        savings.innerHTML = ''
        console.log(localData.allItems.inc)
      }
      pastbudget.getBudget((data, id) => this.loadedRender(data, id))
      form.reset()
    })
  }

  loading() {
    const dropdown = document.querySelector('.date-list')
    const dropdownList = document.querySelector('.date-list li')

    // Get saved entry dates from Firebase
    pastbudget.getBudget((budgets, id) => {
      const date = budgets.created_at.toDate()
      if (date) {
        const when = format(new Date(date), 'dd/MM/yyyy')
        const list = `<li class="date-list__item" data-id="${id}">${when}</li>`
        if (dropdownList.textContent === 'No saved dates') dropdownList.remove()
        dropdown.innerHTML += list
      }
    })

    // Add functionality to dropdown search
    this.styledDropdown()
    // Load the data from Firebase once date is chosen
    this.Loaded()
  }
}

export default UIController
