const daysElement = document.querySelector(".days")
const hoursElement = document.querySelector(".hours")
const minutesElement = document.querySelector(".minutes")
const secondsElement = document.querySelector(".seconds")


const seconds = 1000,
 minutes = 60 * seconds,
 hour = 60 * minutes,
 day = 24 * hour;

let now = new Date(),
 dd = String(now.getDate()).padStart(2,"0"),
 mm = String(now.getMonth()+1).padStart(2,"0"),
 yyyy = now.getFullYear();

const enterday = prompt("Enter the Day").padStart(2,"0")
const entermonth = prompt("Enter the Month").padStart(2,"0")

now = `${yyyy}/${mm}/${dd}`

// console.log(now);

let targetdate = `${yyyy}/${entermonth}/${enterday}`


if(now>targetdate){
    targetdate = `${yyyy+1}/${entermonth}/${enterday}`
    
}
// console.log(targetdate);
const timerfunction = ()=>{

   setInterval(()=>{
    const timer = new Date(targetdate).getTime();
    const today = new Date().getTime();
 
    const difference = timer-today;

    const leftday = Math.floor(difference/day);
    const lefthours = Math.floor((difference % day)/hour);
    const leftminutes = Math.floor((difference % hour)/minutes);
    const leftseconds = Math.floor((difference % minutes)/seconds)

    daysElement.innerText = leftday;
    hoursElement.innerText = lefthours;
    minutesElement.innerText = leftminutes;
    secondsElement.innerText = leftseconds;

    // console.log(`${leftday}:${lefthour}:${leftminutes}:${leftseconds}`)
    
    
   },1000)

}

timerfunction();