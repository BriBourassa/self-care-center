
var affirmationBtn = document.getElementById('radio1');
var mantraBtn = document.getElementById('radio2');
var messageBtn = document.getElementById('main-button');
var message = document.querySelector('.message');
var yogaPic = document.querySelector('.yoga-pic');
var deleteBtn = document.querySelector('.delete');
var pickOnePls = document.querySelector('.pickOnePls')

messageBtn.addEventListener('click', getMessage);
deleteBtn.addEventListener('click', deleteQuote);


function randomize(array){
    return Math.floor(Math.random() * array.length)
};

function getMessage(){
if(affirmationBtn.checked){
    message.classList.remove('hidden')
    yogaPic.classList.add('hidden')
    message.innerText = affirmations[randomize(affirmations)]
    deleteBtn.classList.remove('hidden')
    pickOnePls.classList.add('hidden')
} else if (mantraBtn.checked){
    message.classList.remove('hidden')
    yogaPic.classList.add('hidden')
    message.innerText = mantras[randomize(mantras)]
    deleteBtn.classList.remove('hidden')
    pickOnePls.classList.add('hidden')
} else {
    yogaPic.classList.add('hidden')
    pickOnePls.classList.remove('hidden')
}
};

// DELETE QUOTE:


function deleteQuote(){

    if(affirmationBtn.checked){
        affirmations.removeChild(event.target.parentNode)
    }


    // need to do twice for aff and mantra? if/else?
    // if aff.checked, delete buttons deleted message from aff?

// removeChild (DOM)
// array.removeChild, (event.target.parentNode)

// splice quote from array (data model)
// for loop 

};