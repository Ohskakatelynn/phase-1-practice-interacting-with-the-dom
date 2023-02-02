const timer = setInterval( incrementCounter, 1000 )

function incrementCounter () {
    const timer = document.getElementById('counter')

timer.textContent++ 
}

const minus = document.getElementById('minus')


const pause = document.getElementById('pause')
pause.addEventListener('click', function() {
    clearInterval(timer)
})


    