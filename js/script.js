let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourBox = document.querySelector('.hours'),
    minuteBox = document.querySelector('.minutes');
    
  
// new Date() - это глобальный встроенный объект (class) - который дает информацию о дате и времени
    
function clock() {
    let time = new Date()
    let seconds = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30
    
    secondArrow.style = `transform: rotate(${seconds}deg)`
    minuteArrow.style = `transform: rotate(${minutes}deg)`
    hourArrow.style = `transform: rotate(${hours}deg)`
    
    hourBox.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minuteBox.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()



// Рекурсия это когда функция вызывает саму себя
// setTimeout() - выполяет какие либо действие с указанной задержкой


let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((el,i) => {
    el.addEventListener('click', () => {
        removeActive()
        el.classList.add('active')
        tabs[i].classList.add('active')
    })
})


function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


let minutesBox = document.querySelector('.stopwatch__minutes'),
    secondsBox = document.querySelector('.stopwatch__seconds'),
    hoursBox = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span');
    
let i = 0;
    
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        setTimeout(() => start(btn,i), 1000);
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        hoursBox.innerHTML = secondsBox.innerHTML = minutesBox.innerHTML = 0
    }
})
    
function start(btn,i) {
    if(btn.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            secondsBox.innerHTML = i
            if(minutesBox.innerHTML == 59) {
                minutesBox.innerHTML = 0
                hoursBox.innerHTML++
            }else {
                minutesBox.innerHTML++
            }
        }else {
            i++
            secondsBox.innerHTML = i
        }
        
        setTimeout(() => start(btn,i), 1000);
        
    }
}