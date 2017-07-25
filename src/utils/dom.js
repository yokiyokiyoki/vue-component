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

export const hasClass = function (el, className) {
  if (!el || !className) return false
  if (className.indexOf(' ') == -1) throw new Error('类名不能有空格')
  if (el.classList) {
    return el.classList.contains(className)
  } else {
    return el.className.indexOf(className) > -1
  }
}

export const addClass = function (el, className) {
  if (!el) return false
  let curClass = el.className
  let classes = (className || '').split(' ')
  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!className) continue
    if (el.classList) {
      el.classList.add(className)
    } else {
      if (!hasClass(el, className)) {
        curClass += ' ' + className
      }
    }
  }
  if (!el.classList) {
    el.className += ' ' + curClass
  }
}

export const removeClass = function (el, className) {
  if (!el) return false
  let curClass = ' ' + el.className + ' '
  let classes = (className || '').split(' ')
  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i]
    if (!className) continue
    if (el.classList) {
      el.classList.remove(className)
    } else {
      if (hasClass(el, className)) {
        curClass = curClass.replace(' ' + className + ' ', '')
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

export default {
  on,
  off,
  once,
  addClass,
  removeClass
}
