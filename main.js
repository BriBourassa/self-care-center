
var affirmationBtn = document.getElementById('radio1');
var mantraBtn = document.getElementById('radio2');
var messageBtn = document.getElementById('main-button');
var message = document.querySelector('.message');
var yogaPic = document.querySelector('.yoga-pic');
var deleteBtn = document.querySelector('.delete');
var pickOnePls = document.querySelector('.pickOnePls')
var messageDeleted = document.querySelector('.message-deleted')

var currentMessage;

messageBtn.addEventListener('click', getMessage);
deleteBtn.addEventListener('click', deleteQuote);

function randomize(array){
    return Math.floor(Math.random() * array.length)
};

function getMessage(){
    if(affirmationBtn.checked){
        message.classList.remove('hidden')
        yogaPic.classList.add('hidden')
        currentMessage = affirmations[randomize(affirmations)]
        message.innerText = currentMessage
        deleteBtn.classList.remove('hidden')
        pickOnePls.classList.add('hidden')
        messageDeleted.classList.add('hidden')
    } else if (mantraBtn.checked){
        message.classList.remove('hidden')
        yogaPic.classList.add('hidden')
        currentMessage = mantras[randomize(mantras)]
        message.innerText = currentMessage
        deleteBtn.classList.remove('hidden')
        pickOnePls.classList.add('hidden')
        messageDeleted.classList.add('hidden')
    } else {
        yogaPic.classList.add('hidden')
        pickOnePls.classList.remove('hidden')
    }
};

function deleteQuote(){
    var CurrentAff = affirmations.indexOf(currentMessage)
    var CurrentMantra = mantras.indexOf(currentMessage)
    if(affirmationBtn.checked){
        affirmations.splice(CurrentAff, 1)
        message.classList.add('hidden')
        messageDeleted.classList.remove('hidden')
        deleteBtn.classList.add('hidden')
    } else if(mantraBtn.checked){
        mantras.splice(CurrentMantra, 1)
        message.classList.add('hidden')
        messageDeleted.classList.remove('hidden')
        deleteBtn.classList.add('hidden')
    }
};
