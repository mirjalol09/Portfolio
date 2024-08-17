let prev = document.querySelector('.minus-btn')
let next = document.querySelector('.plus-btn')
let counter = document.querySelector('.counts .count-num')
prev.addEventListener('click', ()=>{
    if(counter.innerHTML <= 1){
        counter.innerHTML = 1
        alert('minimum 1 ta odam kiritish mumkin')
    }
    else{
        counter.innerHTML--
    }
})
next.addEventListener('click', ()=>{
    counter.innerHTML++
})
let { form } = document.forms

function showErr(parentElement, msgElement, message){
  msgElement.textContent = message
  parentElement.classList.add('error')
}

function hideError(parentElement, msgElement){
  msgElement.textContent = ""
  parentElement.classList.remove('error')
}

for(let inp of form){
  let {name} = inp
  if(name){
    inp.addEventListener('input', validateInput)
  }
}

function validateInput(e){
  let target = e.target
  let formGroup = target.parentElement
  let errorElement = target.nextElementSibling
  
  if(target.name === 'name'){
    if(target.value.length <= 2){
      showErr(formGroup, errorElement, 'This field is required')
      nameStatus = false
    }else{
      hideError(formGroup, errorElement)
      nameStatus = true
    }
  }else if(target.name === 'email'){
    if(!target.value.includes("@")){
      showErr(formGroup, errorElement, 'This field is required')
      emailStatus = false
    }else{
      hideError(formGroup, errorElement)
      emailStatus = true
    }
}
}
let pickAdate = document.querySelector('#date')
let month = document.querySelector('#month')
for (let i = 1; i <= 12; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${ i }`
   } else {
      op.text = i
   }
   op.value = i
   month.appendChild(op)
   }

let year = document.querySelector('#year')
let day = document.querySelector('#day')
for (let i = 1; i <= 30; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${i}`
   } else {
      op.text = i
   }
   op.value = i
   day.appendChild(op)
}
let hoursSelect = document.querySelector('#hour')
for (let i = 1; i <= 12; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${i}`
   } else {
      op.text = i
   }
   op.value = i
   hoursSelect.appendChild(op)
}
let minutesSelect = document.querySelector('#minut')
for (let i = 1; i <= 59; i++) {
   let op = document.createElement('option')
   if (i < 10) {
      op.text = `0${i}`
   } else {
      op.text = i
   }
   op.value = i
   minutesSelect.appendChild(op)
}
month.addEventListener('blur', ()=>{
   if(month.value == 0){
      pickAdate.nextElementSibling.innerText = 'this a requaset'
      pickAdate.nextElementSibling.style.color = 'red'
      monthStatus = false
   }
   else{
      monthStatus = true
      pickAdate.nextElementSibling.innerHTML = ''
   }
})
day.addEventListener('blur', () => {
   if (day.value == 0) {
      pickAdate.nextElementSibling.innerText = 'this a requaset'
      pickAdate.nextElementSibling.style.color = 'red'
      dayStatus = false
   }
   else {
      pickAdate.nextElementSibling.innerHTML = ''
      dayStatus = true
   }
})
year.addEventListener('blur', () => {
   if (year.value == 0) {
      pickAdate.nextElementSibling.innerText = 'this a requaset'
      pickAdate.nextElementSibling.style.color = 'red'
      yearStatus = false
   }
   else {
      pickAdate.nextElementSibling.innerHTML = ''
      yearStatus = true
   }
})
