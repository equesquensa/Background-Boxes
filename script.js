const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  boxesContainer.classList.toggle('big')
  styleBoxes()
})


function createBoxes(){
  for(let i = 0; i < 4; i++){
       for(let j = 0; j < 4; j++){
         const box = document.createElement('div')
         box.classList = 'box'
         box.style.boxShadow = '10px 10px 15px rgba(0,0,0,0.5)'

         box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px `

         boxesContainer.appendChild(box)
       }
  }
}

createBoxes()

const styleBoxes = () => {
 
  const AllBoxes = document.querySelectorAll('.box')
  AllBoxes.forEach(box => {

    if(box.style.boxShadow !== 'none'){
      box.style.boxShadow = 'none'
      boxesContainer.style.boxShadow = '10px 10px 15px rgba(0,0,0,0.5)'
    } else{
      box.style.boxShadow = '10px 10px 15px rgba(0,0,0,0.5)'
      boxesContainer.style.boxShadow = 'none'
    }
    
  })
}