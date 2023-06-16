const formEl = document.querySelector('form.login-form')

formEl.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
 
    // console.log(email.value);
    // console.log(password.value)

    const data = {
        email: email.value,
        password: password.value
    }

    if (!email.value.trim() || !password.value) {
        alert("Хей! Не всі поля заповнені")
    }
    else {
        console.log(data)
        event.currentTarget.reset()
    }
}