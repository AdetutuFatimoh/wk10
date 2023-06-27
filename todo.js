const formEL = document.querySelector('form')
const ulEl = document.querySelector('ul')
const inputEL = document.querySelector('input')

formEL.addEventListener('submit', handleSummit)

function handleSummit(e){
    e.preventDefault()
    todoList()
}
function todoList(){
    // alert(inputEL.value)
    const liEl = document.createElement('li')
    const liElSpan1 = document.createElement('span')
    const liElSpan2 = document.createElement('span')
    const liElSpan3 = document.createElement('span')

    ulEl.appendChild(liEl)
    liEl.appendChild(liElSpan1)
    liEl.appendChild(liElSpan2)
    liEl.appendChild(liElSpan3)
    
    liElSpan1.innerText = inputEL.value
    liElSpan2.innerText = 'mark'
    liElSpan3.innerText = 'delete'

    
    liElSpan2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-cyan-500">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
  `
    liElSpan3.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-cyan-500">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  `


    inputEL.value = ''

    liElSpan2.addEventListener('click' , ()=>{
        liElSpan1.classList.toggle('line-through')
        liElSpan1.classList.toggle('text-[#FF6000]')
        
    })
    liElSpan3.addEventListener('click',()=>{
        liEl.remove()
    })
}