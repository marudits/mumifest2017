const panels = document.querySelectorAll('.panel')

function toggleOpen() {
  this.classList.toggle('open')
}

function toggleActive(e) {
  const has_open_class = Array.from(e.srcElement.classList).includes("open")
  const is_flex_event = e.propertyName === 'flex-grow' || e.propertyName === 'flex'
  if (is_flex_event) {
    this.classList.toggle('open-active', has_open_class)
  }
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen)
  panel.addEventListener('dblclick', toggleOpen)
  panel.addEventListener('transitionend', toggleActive)
})