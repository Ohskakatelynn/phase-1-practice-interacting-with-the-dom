const timer = setInterval( incrementCounter, 1000 )

function incrementCounter () {
    const timer = document.getElementById('counter')
    timer.textContent++ 
}


const pause = document.getElementById('pause')
pause.addEventListener('click', function() {
    clearInterval(timer)
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