const acordeonTriggers = document.querySelectorAll(".arcodeon .trigger")

acordeonTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (el, pos0) => {
    trigger.parentNode.classList.toggle('open')
  })
})