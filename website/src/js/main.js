/* eslint-disable no-undef */

// External
import 'airbnb-browser-shims'

// Internal
import './modules/helpers'

const body = document.getElementsByTagName('body')
const html = document.getElementsByTagName('html')

// Remove loading class from body on window load.
window.onload = () => {
  window.setTimeout(() => {
    body.classList.remove('is-loading')
  }, 100)
}

html.setAttribute('data-browser', browser.name)

// LocalStorage.
if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme')
    body.removeAttribute('data-theme', 'light')
    body.removeAttribute('data-theme', 'dark')
    body.setAttribute('data-theme', theme)
  }
}

// set dark mode if user's system prefers it.
if (window.matchMedia) {
  if (process.env.NODE_ENV !== 'production') {
    console.log('supports matchmedia')
  }
  if (
    matchMedia('(prefers-color-scheme: dark)').matches &&
    localStorage.getItem('theme') === null
  ) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('prefers dark')
    }
    body.removeAttribute('data-theme', 'light')
    body.setAttribute('data-theme', 'dark')
  }
}

// Switch between dark and light mode.
const switchTheme = document.getElementById('switch-theme')

switchTheme.addEventListener('click', (e) => {
  e.preventDefault()

  body.classList.add('color-theme-in-transition')
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    body.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
  window.setTimeout(() => {
    body.classList.remove('color-theme-in-transition')
  }, 1500)
})
