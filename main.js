//fetching
let hours = document.querySelector(".hours")
let min = document.querySelector(".minutes")
let sec = document.querySelector(".seconds")
let conana = document.querySelector(".clock")
let condigi = document.querySelector(".container-digital")
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
let btn1 = document.querySelector(".ana")
let btn2 = document.querySelector(".digi")


btn1.addEventListener("click",()=>{
  conana.style.display = "block"
  condigi.style.display = "none"
})

btn2.addEventListener("click",()=>{
  conana.style.display = "none"
  condigi.style.display = "flex"
})
//digi
setInterval(() => {
  let now = new Date()

  let secondes = now.getSeconds()
  let minutes = now.getMinutes()
  let hour = now.getHours()
  
  sec.innerHTML = secondes
  min.innerHTML = minutes
  hours.innerHTML = hour


}, 1000)

//ana
function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();
