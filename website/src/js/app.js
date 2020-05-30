/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

// External
import 'airbnb-browser-shims'

// Internal
import './modules/helpers'
import budgetController from './modules/budgetcontroller'
import UIController from './modules/uicontroller'

// Remove loading class from body on window load.
const body = document.querySelector('body')

window.onload = () => {
  window.setTimeout(() => {
    body.classList.remove('is-loading')
  }, 100)
}

// Create the main controller for the app
// eslint-disable-next-line no-unused-vars
const controller = ((budgetCtrl) => {
  const form = document.querySelector('.add__form')
  const type = document.querySelector('.add__type')
  const desc = document.querySelector('.add__description')
  const value = document.querySelector('.add__value')
  const check = document.querySelector('#check')

  const UICtrl = new UIController(type, desc, value)

  // Toggle the submit new cost from either income or expense.
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
    if (type.options.selectedIndex === 1) {
      check.classList.add(type.value)
      options[0].removeAttribute('selected', 'selected')
      options[1].setAttribute('selected', 'selected')
    } else {
      options[1].removeAttribute('selected', 'selected')
      options[0].setAttribute('selected', 'selected')
      check.classList.remove('exp')
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Get filed input data
    const input = UICtrl.getInput()
    if (process.env.NODE_ENV !== 'production') {
      console.log(input)
      console.log(typeof input.value)
    }

    // Clear the form fields
    form.reset()

    // Only run calculations if valid inputs are entered
    if (input.desc !== '' && !isNaN(input.value) && input.value > 0) {
      // Add the item to the budget
      const newItem = budgetCtrl.addItem(
        input.type,
        input.description,
        input.value
      )

      // Calculae the budget and update the UI
      UICtrl.render(newItem, input.type) // Add items to income or expenses list
      UICtrl.updateBudget() // Output the new budget
      UICtrl.updatePercentages() // Output the new percentages

      if (process.env.NODE_ENV !== 'production') {
        console.log('form submitted!')
        console.log(newItem)
      }
    }
  })

  // Delete an added income or expense
  UICtrl.deleteItem()
})(budgetController)
