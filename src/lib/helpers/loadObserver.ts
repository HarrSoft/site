export const createLoadObserver = (handler: () => Function) => {
  let waiting = 0

  const onload = (el: Element) => {
      waiting++
      el.addEventListener('load', () => {
          waiting--
          if (waiting === 0) {
              handler()
          }
      })
  }
  
  return onload
}