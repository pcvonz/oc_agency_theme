let loadingFinished = [
  {
    opacity: '1',
    paddingTop: '0'

  },
  {
    opacity: '0',
    paddingTop: '200px',
    display: 'none'
  }
]

let stroke = [
  {
    strokeDashoffset: '1870'
  },
  {
    strokeDashoffset: '0'
  }
]

let strokeTime = {
  duration: 2000,
  fill: 'forwards',
  iterations: 1
}

let loadingFinishedTime = {
  duration: 500,
  fill: 'forwards',
  iterations: 1,
  easing: 'ease-in-out'
}
let loading = document.querySelector('.load-container')
if (window.location.hash === '') {
  loading.style = 'display: flex;'
}
export default function playSplash () {
  let svg = document.querySelector('#loader svg')
  if (window.location.hash === '') {
    svg.animate(
      stroke,
      strokeTime
    ).onfinish = () => {
      setTimeout(() => {
        loading.animate(
          loadingFinished,
          loadingFinishedTime
        ).onfinish = () => {
          loading.style = 'display: none'
        }
      }, 500)
    }
    window.location.hash = 'home'
  }
}
