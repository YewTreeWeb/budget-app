/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-multi-assign */

// Avoid `console` errors in browsers that lack a console.
{
  let method
  const noop = () => {}
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn',
  ]
  let { length } = methods
  const console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
}

// Add tabbing indicator to window
const handleFirstTab = (e) => {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing')
    window.removeEventListener('keydown', handleFirstTab)
  }
}

window.addEventListener('keydown', handleFirstTab)

// Add a brower indicator to the HTML element.
const html = document.querySelector('html')
html.setAttribute('data-browser', browser.name)

// Detect if mobile or desktop.
const body = document.querySelector('body')

breakpoints({
  xlarge: ['1281px', '1680px'],
  large: ['981px', '1280px'],
  medium: ['737px', '980px'],
  small: ['481px', '736px'],
  xsmall: [null, '480px'],
})

if (browser.mobile) {
  body.classList.add('is-mobile')
} else {
  breakpoints.on('>medium', () => {
    body.classList.remove('is-mobile')
    body.classList.add('is-desktop')
  })
  breakpoints.on('<=medium', () => {
    body.classList.remove('is-desktop')
    body.classList.add('is-mobile')
  })
}

// Log if running in localhost when in development mode.
if (
  window.location.hostname === 'localhost' &&
  process.env.NODE_ENV !== 'production'
) {
  console.log('localhost detected!')
}

// Reassign an array as an Object
// eslint-disable-next-line import/prefer-default-export
export const arrayReassign = (ar) => {
  return ar.map((obj) => {
    // eslint-disable-next-line prefer-object-spread
    return Object.assign({}, obj)
  })
}
