const timer = setInterval( incrementCounter, 1000 )

function incrementCounter () {
    const timer = document.getElementById('counter')
    timer.textContent++ 
}


const pause = document.getElementById('pause')
pause.addEventListener('click', function() {
    if (pause.textContent === ' pause ') {
        clearInterval(timer);
        pause.textContent = 'Resume';
        document.getElementById('minus').disabled = true;
        document.getElementById('plus').disabled = true;
        document.getElementById('heart').disabled = true;
        document.getElementById('submit').disabled = true;
    } else if (pause.textContent === 'Resume') {
        const timer = setInterval( incrementCounter, 1000 )
        pause.textContent = ' pause ';
        document.getElementById('minus').disabled = false;
        document.getElementById('plus').disabled = false;
        document.getElementById('heart').disabled = false;
        document.getElementById('submit').disabled = false;
    }
})

const minus = document.getElementById('minus')
minus.addEventListener('click',function() {
    const timer = document.getElementById('counter')
    timer.textContent--
})

const plus = document.getElementById('plus')
plus.addEventListener('click',function() {
    const timer = document.getElementById('counter')
    timer.textContent++
})