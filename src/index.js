const burgerBtn = document.querySelector('.burger-button')
const navBar = document.querySelector('.navigation-menu')
const darkLayer = document.querySelector('.mobile-dark-layer')

const leftBtn = document.getElementById('moveToLeft')
const rightBtn = document.getElementById('moveToRight')

const titles = document.querySelectorAll('.carousel-title')
const paragraphs = document.querySelectorAll('.carousel-paragraph')

const images = document.querySelectorAll('.carousel-image')


const image = Array.from(images)
const title = Array.from(titles)
const paragraph = Array.from(paragraphs)


burgerBtn.addEventListener('click', () => {
    const actual = burgerBtn.getAttribute('aria-expanded')
    const next = actual === "true" ? "false" : "true"

    burgerBtn.setAttribute('aria-expanded', next)
    navBar.setAttribute('menu-visible', next)
    darkLayer.setAttribute('navbar-open', next)
})


rightBtn.addEventListener('click', () => {
  const index = title.findIndex(title => title.getAttribute('display') == "true")
  title[index].setAttribute('display', 'false')
  paragraph[index].setAttribute('display', 'false')
  image[index].setAttribute('display', 'false')

  const next = index === title.length - 1 ? 0 : index + 1

  title[next].setAttribute('display', 'true')
  paragraph[next].setAttribute('display', 'true')
  image[next].setAttribute('display', 'true')
})

leftBtn.addEventListener('click', () => {
  const index = title.findIndex(title => title.getAttribute('display') == "true")
  title[index].setAttribute('display', 'false')
  paragraph[index].setAttribute('display', 'false')
  image[index].setAttribute('display', 'false')

  const next = index === 0 ? title.length - 1 : index - 1

  title[next].setAttribute('display', 'true')
  paragraph[next].setAttribute('display', 'true')
  image[next].setAttribute('display', 'true')


})
