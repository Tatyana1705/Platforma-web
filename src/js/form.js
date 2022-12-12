import IMask from 'imask';

export const formInit = (formId) => {
    const form = document.getElementById(formId);

    if (!form) {
        return;
    }

    const inputName = form.querySelector('input[name="name"]');
    const inputPhone = form.querySelector('input[name="phone"]');
    const inputEmail = form.querySelector('input[name="e-mail"]');
    const btn = form.querySelector('button[type="submit"]')

    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    const phoneMask = IMask(inputPhone, maskOptions);

    const validPhone = (value) => {
        const regExp = /[0-9]{11}/;

        return regExp.test(value);
    }

    const validEmail = (value) => {
        const regExp = /\S+@\S+\.\S+/;

        return regExp.test(value);
    }

    const validName = (value) => {
        return value.length > 0;
    }

    inputPhone.addEventListener('keydown', () => {
        if (inputPhone.classList.contains('form__input_error')) {
            inputPhone.classList.remove('form__input_error');
        }
    });

    inputPhone.addEventListener('blur', () => {
        if (!validPhone(phoneMask.unmaskedValue)) {
            inputPhone.classList.add('form__input_error');
        }
    });

    inputEmail.addEventListener('keydown', () => {
        if (inputEmail.classList.contains('form__input_error')) {
            inputEmail.classList.remove('form__input_error');
        }
    });

    inputEmail.addEventListener('blur', () => {
        if (!validEmail(inputEmail.value)) {
            inputEmail.classList.add('form__input_error');
        }
    });


    inputName.addEventListener('keydown', () => {
        if (inputName.classList.contains('form__input_error')) {
            inputName.classList.remove('form__input_error');
        }
    });

    inputName.addEventListener('blur', () => {
        if (!validName(inputName.value)) {
            inputName.classList.add('form__input_error');
        }
    });

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isValidName = validName(inputName.value);
        const isValidPhone = validPhone(phoneMask.unmaskedValue);
        const isValidEmail = validEmail(inputEmail.value);

        if (isValidName && isValidPhone && isValidEmail) {
            btn.innerHTML = 'Успешно отправлено';
            btn.disabled = true;

            inputName.value = '';
            inputPhone.value = '';
            inputEmail.value = '';

        } else if (!isValidName) {
            inputName.classList.add('form__input_error');
        } else if (!isValidPhone) {
            inputPhone.classList.add('form__input_error');
        } else if (!isValidEmail) {
            inputEmail.classList.add('form__input_error');
        }
    });
};