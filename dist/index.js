const obsHandler = ({ show, delay }) => {
  const observer = new IntersectionObserver((elems) => {
    elems.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add(show)
        e.target.classList.add(delay)
      } else {
        e.target.classList.remove(show)
      }
    })
  })
  return observer
}

const hidden = document.querySelectorAll('.js-hidden')
const hiddenDelayed = document.querySelectorAll('.js-hidden-delayed')

hiddenDelayed.forEach((elem) => {
  obsHandler({ show: 'js-show', delay: 'js-delay-500' }).observe(elem)
})

hidden.forEach((elem) =>
  obsHandler({ show: 'js-show', delay: 'js-delay' }).observe(elem)
)

const dateElem = document.querySelector('.year')
dateElem.innerHTML = new Date().getFullYear()

const scrollBtn = document.querySelector('.scroll-top-btn')
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
