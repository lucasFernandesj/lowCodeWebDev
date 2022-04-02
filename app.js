let scale = 1
let selected;

//add elements
const add =() => {
    let container = document.querySelector('.container')
    let tag = document.querySelector('#tag').value
    let bgc = document.querySelector('#BackgroundColor').value
    bgc = bgc.trim()
    let color = document.querySelector('#color').value
    let content = document.querySelector('#content').value
    let element = document.createElement(tag)
    element.innerText = content
    if (bgc.length > 0) {
        element.style.backgroundColor = bgc
    }
    if (color.length > 0) {
        element.style.color = color
    }
    // element.ondblclick = show
    element.addEventListener('contextmenu', function handleClick(event) {
      event.preventDefault()
      element.remove()
    })  
    element.addEventListener('click' , function click(event) {
     let changeText= document.querySelector('.changeText')
     changeText.classList.remove('hidden')
     selected = element
     
    })   
    
    element.onwheel = fontSize
    
    container.appendChild(element)
}


//toggle show css interface
document.querySelector('.displayCSS').addEventListener('click', () => {
  let css = document.querySelector('.css')
  if (css.classList.contains('hidden')) {
    css.classList.remove('hidden')
  } else {
    css.classList.add('hidden')
  }
})

function fontSize(event) {
   scale += event.deltaY * -0.001
   scale = Math.min(Math.max(0.125, scale), 4)
   this.style.transform = `scale(${scale})`
}


document.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    add()
  }
})



function changeText(){
  
  let newText = document.querySelector('.input-changeText').value
  selected.innerText = newText
  document.querySelector('.changeText').classList.add('hidden')
  
}