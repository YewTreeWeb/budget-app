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
const controller = ((budgetCtrl, UICtrl) => {
  const DOM = UICtrl.getDOMStrings()
  const form = document.querySelector('.add__form')
  const type = document.querySelector('.add__type')
  const check = document.querySelector('#check')

  type.addEventListener('change', (e) => {
    console.log(e)
    const options = Array.from(type.options)
    console.log(options)
    if (type.value === 'exp') {
      check.classList.add(type.value)
      type.options[0].removeAttribute('selected')
      type.options.selectedIndex.setAttribute('selected')
    } else {
      // options[1].removeAttribute('selected')
      // options[0].setAttribute('selected')
      check.classList.remove('exp')
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    // Get filed input data
    const input = UICtrl.getInput()

    // Add the item to the budget
    const newItem = budgetCtrl.addItem(
      input.type,
      input.description,
      input.value
    )

    // Add item to the UI
    UICtrl.addListItem(newItem, input.type)

    // Calculate the budget

    // Update the UI

    form.reset()
    if (process.env.NODE_ENV !== 'production') {
      console.log('form submitted!')
      console.log(input)
      console.log(newItem)
    }
  })
})(budgetController, UIController)