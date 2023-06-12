const formEl = document.querySelector('#form');
const formControleEls = formEl.querySelectorAll('.form__auth');
const inputPassEls = document.querySelectorAll('[type="password"]');

formEl.addEventListener('input', function (e) {
    if (inputPassEls[1].value !== "" && inputPassEls[1].value == inputPassEls[0].value) {
        inputPassEls[0].classList.remove('error');
        inputPassEls[0].classList.add('success');
        inputPassEls[1].classList.remove('error');
        inputPassEls[1].classList.add('success');
    } else {
        inputPassEls[0].classList.add('error');
        inputPassEls[1].classList.add('error');
    }
})