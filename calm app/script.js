const container = document.querySelector('.container');
const text = document.querySelector('#text');
const totalTime = 7500;
const breathTime = (totalTime/5)*2;
const holdTime = (totalTime/5);
const releaseTime = (totalTime/5)*2;

breathAnimation();

function breathAnimation(){
    text.innerHTML = 'Breath In!'
    container.className = 'container grow'

    setTimeout(()=>{
        text.innerHTML = 'Hold!';

        setTimeout(()=>{
            text.innerHTML = 'Breath Out!';

            container.className = 'container shrink';
        },holdTime)

    },breathTime);

}

setInterval(breathAnimation , totalTime);