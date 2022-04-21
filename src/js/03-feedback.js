
import throttle from "lodash.throttle";

const refs = {
   form: document.querySelector(".feedback-form"),
   input: document.querySelector(".feedback-form input"),
   textarea: document.querySelector(".feedback-form textarea"),
};
console.log(refs);

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInput, 500));
refs.textarea.addEventListener('input', throttle(onInput, 500));

const FORM_STORAGE_KEY = "feedback-form-state";


function onInput(){
    let email = refs.input.value;
    let message = refs.textarea.value;    
        
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify({email:email, message: message}));
}

const locStorDate = localStorage.getItem(FORM_STORAGE_KEY);
const parsedLocStorDate = JSON.parse(locStorDate);

getFromStorage();
function getFromStorage(){
    if(locStorDate){
        refs.input.value = parsedLocStorDate.email;
        refs.textarea.value = parsedLocStorDate.message;
    }
};

function onFormSubmit(evt){
    evt.preventDefault();
    console.log(parsedLocStorDate);
    localStorage.removeItem(FORM_STORAGE_KEY);
    refs.form.reset();
};