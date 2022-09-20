const minEl = document.querySelector('.minutes');
const secEl = document.querySelector('.second');
const hourEL = document.querySelector('.hour');
const footer = document.querySelector('footer');

setInterval(setClock, 10);

function setClock() {
    let date = new Date ;
    const miliDeg = date.getMilliseconds()/1000;
    const secDeg = (miliDeg + date.getSeconds())/60 ;
    const minDeg = (secDeg + date.getMinutes())/60;
    const hourDeg = (minDeg + date.getHours())/12;
    secEl.style.rotate = `${secDeg * 360}deg`;
    // secEl.style.transition = '.3sec';
    minEl.style.rotate = `${minDeg * 360}deg`;
    hourEL.style.rotate = `${hourDeg * 360}deg`;
    // console.log(miliDeg);
    // setTimeout(setClock, 1);
  
};
setClock();
function setDate(){
    let date = new Date
    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ' Saturday'];
    const dayNumber = dayName[date.getDay()];
    const dateNumber = date.getDate();
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octomber', 'November', 'December'];
    const month = monthName[date.getMonth()];
    const year = date.getFullYear();
    // console.log(date.getDate());
    let dayNumb = String(dateNumber);
    let position = 'th';
    let position_length = dayNumb.length;
    let dayPosition = dayNumb.substring(position_length, 1);
    console.log(dayPosition);

    if(dayPosition == 1){
        position = 'st';
    };
    if(dayPosition == 2){
        position = 'nd';
    };
    if(dayPosition == 3){
        position = 'rd';
    }

    footer.innerText = `${dayNumber}, ${dateNumber}${position} ${month} ${year}.`;
}
setDate();
setInterval(setDate, 10);

