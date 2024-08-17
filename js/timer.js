let day = document.querySelector(".days p")
let hour = document.querySelector(".hourse p")
let minute = document.querySelector(".minutes p")
let second = document.querySelector(".seconds p")
let time = document.querySelector(".timer")

let days = document.querySelector(".days")
let hours = document.querySelector(".hourse")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
let deadline = "2023-07-22T18:00:00Z"

function dataTimer(dl){
  let t = Date.parse(new Date(dl)) - Date.parse(new Date()),
      days = Math.floor(t / ( 1000 * 60 * 60 * 24 )),
      hours = Math.floor((t / 1000 / 60 / 60) % 24),
      minutes = Math.floor((t / 1000 / 60 ) % 60),
      seconds = Math.floor((t / 1000) % 60)
  if(t < 0){
    t = 0
    days = 0
    hours = 0
    minutes = 0
    seconds = 0
  }

  return {
    t, days, hours, minutes, seconds
  }
}
function startTimer(dl){
  let timerId = setInterval(updateTimer, 1000)
  function updateTimer(){
    let timer = dataTimer(dl)
        day.innerText = addZero(timer.days)
        hour.innerText = addZero(timer.hours)
        minute.innerText = addZero(timer.minutes)
        second.innerText = addZero(timer.seconds)
        if(day.innerText == 0){
         days.style.visibility = "hidden"
       }
        if(hour.innerText == 0 && day.innerText == 0){
         hours.style.visibility = "hidden"
       }if(minute.innerText == 0 && hour.innerText == 0 && day.innerText == 0){
         minutes.style.visibility = "hidden"

       }if(second.innerText == 0 && minute.innerText == 0 && hour.innerText == 0 && day.innerText == 0){
            second.style.visibility = "hidden"
       }
        if(timer.t < 0){
            clearInterval(timerId)
        }
  }
  updateTimer()
}
startTimer(deadline)

function addZero(num){
  if(num >= 0 && num < 10){
    return `0${num}`
  }else{
    return num
  }
}