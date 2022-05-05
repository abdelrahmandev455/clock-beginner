let hours = document.querySelector(".hours")
let min = document.querySelector(".minutes")
let sec = document.querySelector(".seconds")
let body = document.querySelector(".body")


setInterval(() => {
  let now = new Date()

  let secondes = now.getSeconds()
  let minutes = now.getMinutes()
  let hours = now.getHours()

  if(hours => 0){
    body.style.background = "black";
  }
  else if(hours => 6 || hours <= 21){
    body.style.background = "white";
    body.style.color = "black";
  }
  
  sec.innerHTML = secondes
  min.innerHTML = minutes
  hours.innerHTML = hours


}, 1000)