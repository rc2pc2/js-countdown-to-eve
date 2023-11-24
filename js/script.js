
const daysEl = document.querySelector('span#days');
const hoursEl = document.querySelector('span#hours');
const minutesEl = document.querySelector('span#minutes');
const secondsEl = document.querySelector('span#seconds');

//  # Mi salvo la data che voglio 'raggiungere'
// new Date(year, month, day, hours, minutes, seconds, milliseconds);
const newYearsEveDate = new Date( 2024, 0, 1, 0, 0, 0, 0);
console.log(newYearsEveDate);

const timer = setInterval( function(){
    // # trovo il momento attuale
    const nowDate = new Date();
    const dateDifference = newYearsEveDate.getTime() - nowDate.getTime();

    secondsEl.innerHTML = Math.floor((dateDifference % (60 * 1000)) / 1000);
    minutesEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 1000)) / (1000 * 60));
    hoursEl.innerHTML = Math.floor((dateDifference % (60 * 60 * 24 * 1000)) / (1000 * 60 * 60));
    daysEl.innerHTML = Math.floor((dateDifference / (60 * 60 * 24 * 1000)));

    if ( dateDifference <= 0 ){
        clearInterval(timer);
        document.querySelector('main .text-container h2').innerHTML = 'HAPPY 2024!!';
    }

}, 1000);

