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

  const UICtrl = new UIController(type, desc, value)

  // Shoe the latest date
  UICtrl.displayDate()

  // Toggle the submit new cost from either income or expense.
  UICtrl.changeType()

  budgetCtrl.testing()

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
    budgetCtrl.testing()
  })
  // Delete an added income or expense
  UICtrl.deleteItem()
})(budgetController)
