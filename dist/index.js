// const obsHandler = ({ show, delay }) => {
//   const observer = new IntersectionObserver((elems) => {
//     elems.forEach((e) => {
//       if (e.isIntersecting) {
//         e.target.classList.add(show)
//         e.target.classList.add(delay)
//       } else {
//         e.target.classList.remove(show)
//       }
//     })
//   })
//   return observer
// }

// const hidden = document.querySelectorAll('.js-hidden')
// const hiddenDelayed = document.querySelectorAll('.js-hidden-delayed')

// hiddenDelayed.forEach((elem) => {
//   obsHandler({ show: 'js-show', delay: 'js-delay-500' }).observe(elem)
// })

// hidden.forEach((elem) =>
//   obsHandler({ show: 'js-show', delay: 'js-delay' }).observe(elem)
// )

// const dateElem = document.querySelector('.year')
// dateElem.innerHTML = new Date().getFullYear()

// const scrollBtn = document.querySelector('.scroll-top-btn')
// scrollBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   })
// })

let tl = gsap.timeline()

const gsapCommonConfig = {
  opacity: 0,
  y: 50,
  duration: 0.5,
}

const imgBox = document.querySelector('.imgBox')
const heroImg = document.querySelector('.heroImg')
const heroIntro = document.querySelector('.hero-intro')
const heroDesc = document.querySelector('.hero-desc')
const logo = document.querySelector('.logo')
const perks = document.querySelector('.perks')
const introNameSpan = document.querySelector('.name')
const introName = 'Vaibhav Prajapat'
const splittedIntroName = introName.split('')

const introNameSpans = splittedIntroName
  .map((l) => {
    return `<span class="nameLetter inline-block">${l}</span>`
  })
  .join('')

introNameSpan.innerHTML = introNameSpans

const introNameSpanJoins = document.querySelectorAll('.nameLetter')
tl.from(logo, {
  opacity: 0,
  y: -100,
  duration: 0.5,
  delay: 0.5,
})
tl.from(imgBox, {
  ...gsapCommonConfig,
})
tl.to(heroImg, {
  'border-radius': '70% 30% 71% 29% / 30% 73% 27% 70%',
})

tl.from(heroIntro, {
  ...gsapCommonConfig,
})
introNameSpanJoins.forEach((e) => {
  tl.from(e, {
    opacity: 0,
    y: 20,
    duration: 0.07,
    stagger: 0.1,
  })
})

tl.from(heroDesc, {
  ...gsapCommonConfig,
})
tl.from(perks, {
  ...gsapCommonConfig,
})

let projectSectionTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#project-section',
    start: 'top 80%',
    end: 'top 0',
  },
})

projectSectionTl.from(
  '.project-card-left-1',
  {
    opacity: 0,
    x: -100,
    duration: 0.5,
    stagger: 1,
  },
  'line1'
)
projectSectionTl.from(
  '.project-card-right-1',
  {
    opacity: 0,
    x: 100,
    duration: 0.5,
    stagger: 1,
  },
  'line1'
)
projectSectionTl.from('.project-card-left-2', {
  opacity: 0,
  x: -100,
  duration: 0.5,
  delay: 0.5,
  stagger: 1,
})
projectSectionTl.from('.project-card-right-2', {
  opacity: 0,
  x: 100,
  duration: 0.5,
  delay: 0.5,
  stagger: 1,
})
projectSectionTl.from('.project-card-left-3', {
  opacity: 0,
  x: -100,
  duration: 0.5,
  delay: 0.5,
  stagger: 1,
})
projectSectionTl.from('.project-card-right-3', {
  opacity: 0,
  x: 100,
  duration: 0.5,
  delay: 0.5,
  stagger: 1,
})

let techStackTl = gsap.timeline({
  scrollTrigger: {
    trigger: '#tech-stack',
    start: 'top 80%',
  },
})

techStackTl.from('.tech-stack-content', {
  opacity: 0,
  y: 50,
  duration: 0.5,
  stagger: 1,
})

techStackTl.from('.contact-element', {
  opacity: 0,
  y: 20,
  duration: 0.2,
  stagger: 1,
})
techStackTl.from('.footer-elem', {
  opacity: 0,
  y: 20,
  duration: 0.2,
  stagger: 1,
})

const yearSpan = document.querySelector('.year')
const scrollTopBtn = document.querySelector('.scroll-top-btn')

const year = new Date().getFullYear()
yearSpan.innerHTML = year

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
