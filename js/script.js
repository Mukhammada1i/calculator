// const  input = document.querySelector('input')
//
//  input.addEventListener('keydown', (e) =>{
//  e.preventDefault()
//
//      if ((e.key > 0 && e.key <= 9) || e.key !== 'Backspace'){
// input.value += e.key
//      }
//  })



// input.addEventListener('keydown', (event) => {
//     console.log('keydown', event.key)
// }
// )


const leftInput =  document.querySelector('#left-input')
const rightInput =  document.querySelector('#right-input')
const result =  document.querySelector('#result')
const symb = document.querySelector('#symb')

const history = document.querySelector('#history')
const cleanBtn = document.querySelector('#clean')

const addHistory = () => {
    const li = document.createElement('li')
    li.textContent = `${leftInput.value} ${symb.textContent} ${rightInput.value} ${result.value}`

    history.append(li)
}
cleanBtn.addEventListener('click', () =>{
   if (confirm('вы уверены?')) {
       history.innerHTML = ''
   }
})

const addHistoryMaxMin = () => {
    const li = document.createElement('li')
    li.textContent = `${maxMin} => ${resultMaxMin.value}`
    history.append(li)
}

const disBtns = () => {

    if (leftInput.value === '' || rightInput.value === ''){
        plus.disabled = true
        minus.disabled = true
        division.disabled = true
        multiplication.disabled = true
        degree.disabled = true
        // root.disabled = true
    }else {
        plus.disabled = false
        minus.disabled = false
        division.disabled = false
        multiplication.disabled = false
        degree.disabled = false
        // root.disabled = false
    }

}

leftInput.addEventListener('input', disBtns)
rightInput.addEventListener('input', disBtns)

const plus = document.querySelector('#plus')

plus.addEventListener('click', () => {
 result.value =  +leftInput.value + +rightInput.value
 symb.textContent = '+'
    addHistory()
})


const minus = document.querySelector('#minus')

minus.addEventListener('click', () => {
    result.value =  leftInput.value - rightInput.value
    symb.textContent = '-'
    addHistory()

})



const division = document.querySelector('#division')

division.addEventListener('click', () => {
    if (+rightInput.value === 0){
        confirm('на нуль не делится')
        result.value = ''
        return ;
    }
    result.value =  leftInput.value / rightInput.value
    symb.textContent = '/'
    addHistory()

})



const multiplication = document.querySelector('#multiplication')

multiplication.addEventListener('click', () => {
    result.value =  leftInput.value * rightInput.value
    symb.textContent = '*'
    addHistory()

})


const degree = document.querySelector('#degree')
const root = document.querySelector('#root')




degree.addEventListener('click', () =>{
result.value = leftInput.value ** rightInput.value
    symb.textContent = '**'
    addHistory()

})

root.addEventListener('click', ()=>{
    result.value = Math.sqrt(leftInput.value)
    addHistory()

})

const maxMin = document.querySelector('#maxmin-input')
const resultMaxMin = document.querySelector('#maxmin-result')
const max = document.querySelector('#max')
const min = document.querySelector('#min')






max.addEventListener('click', () =>{
    resultMaxMin.value = Math.max(...maxMin.value.split(' ').trim())
    addHistoryMaxMin()
})
min.addEventListener('click', () =>{
    resultMaxMin.value = Math.min(...maxMin.value.split(' '))
    addHistoryMaxMin()
})

maxMin.addEventListener('keydown', (e) =>{
    if (!(e.key > 0 && e.key <= 9) && e.key !== 'Backspace'){
     e.preventDefault()
    }
})





