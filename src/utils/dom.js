export const on = (function () {
  if (document.addEventListener) {
    return function (el, event, handler) {
      if (el && event) {
        el.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (el, event, handler) {
      if (el && event) {
        el.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (function () {
  if (document.removeEventListener) {
    return function (el, event, handler) {
      if (el && event) {
        el.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (el, event, handler) {
      if (el && event) {
        el.dispatchEvent('on' + event, handler)
      }
    }
  }
})()

export const once = function (el, event, handler) {
  var listener = function () {
    if (handler) {
      handler.apply(this, arguments)
    }
    off(el, event, handler)
  }
  on(el, event, listener)
}
