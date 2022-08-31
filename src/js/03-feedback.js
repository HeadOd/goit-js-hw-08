const ref = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = "feedback-form-state";

ref.form.addEventListener('input', _.throttle(onFormChange, 500));
ref.form.addEventListener('submit', onFormSubmit);

fillingForm()

function onFormChange() {
    const formApi = {};
    formApi.email = ref.input.value;
    formApi.message = ref.textarea.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formApi));
};

function onFormSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    localStorage.removeItem(LOCALSTORAGE_KEY);
    e.currentTarget.reset();
};

function fillingForm() {
    const saveMessage = localStorage.getItem(LOCALSTORAGE_KEY);
    
    if (saveMessage) {
        const { email, message } = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
        ref.input.value = email;
        ref.textarea.value = message;
    }
};