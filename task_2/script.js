let progressBar = document.querySelector('.progess'),
progressValue = document.querySelector('.number');

let startValue = 0, endValue = 10, speed = 100;

let progess = setInterval(()=>{
    startValue++ ;

    progressValue.textContent = '${startValue}%'
    progressBar.style.background = 'conic-gradient(red ${startValue *3.6}deg, white 0deg)'

    if(startValue == endValue){
        clearInterval(progess);
    }
},speed);