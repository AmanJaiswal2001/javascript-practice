const seriesElement=document.querySelector('.series');
const lowerBtn=document.getElementById('lower');
const addBtn=document.getElementById('add');
const resetBtn=document.getElementById('Reset');


let count=0;


function updateDisplay(){
    seriesElement.textContent=count;
}


//eventlistener//
lowerBtn.addEventListener('click',()=>{
    count--;

    updateDisplay();
})


addBtn.addEventListener('click',()=>{
    count++;

    updateDisplay();
})

resetBtn.addEventListener('click',()=>{
    count=0;

    updateDisplay();
})

updateDisplay();
