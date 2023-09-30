
//initialize Date()
let date_1 = new Date('12/26/2023');
let date = new Date();

const days = () => {
    let difference = date_1.getTime() - date.getTime();
    let totalDays = Math.floor(difference / (1000 * 3600 * 24));
    return totalDays;
}

//countdown section
let second = 59 - date.getSeconds()
let minute = 59 - date.getMinutes()
let hour = 23 - date.getHours()
let day = days()


let dayHTML = document.getElementById('daysCount')
let hourHTML = document.getElementById('hoursCount')
let minuteHTML = document.getElementById('minutesCount')
let secondHTML = document.getElementById('secondsCount')

//initialize to set the inner HTML
dayHTML.innerHTML = day
hourHTML.innerHTML = hour
minuteHTML.innerHTML = minute
secondHTML.innerHTML = second   

//immediately start the count down timer for clock
function startTimer() {

   let myTimer = setInterval(() => {

        //decrement seconds by 1 every 1second
        secondHTML.innerHTML = --second

        if (second == 0) {
            secondHTML.innerHTML = second = 59

            //minute should decrement by 1
            minuteHTML.innerHTML = --minute
        }

        //when minutes get to 0, return to 59 and 
        //decrement the hour by 1

        if (minute == 0) {
            minuteHTML.innerHTML = minute = 59

            hourHTML.innerHTML = --hour
        }

        //when hour get to 0, return to 24 and 
        //decrement the day by 1
        if (hour == 0) {
            hourHTML.innerHTML = hour = 24

            dayHTML.innerHTML = --day
        }

        if (day == 0) {
            minuteHTML.innerHTML = minute = 59
            //stop interval counts
            stopIntervalCount()
        }

    }, 1000);

    function stopIntervalCount() {
        clearInterval(myTimer)
    
        //set the time to 0
        dayHTML.innerHTML = 0
        hourHTML.innerHTML = 0
        minuteHTML.innerHTML = 0
        secondHTML.innerHTML = 0
    }
}


//start timer on function call
startTimer();
