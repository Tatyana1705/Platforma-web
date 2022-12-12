import { formInit } from "./form";
import { initModa } from "./modal";

formInit('modal-form');

initModa('modal', 'open-modal');

const btn = document.getElementById('btn-flow');
const btnTetx  = btn.querySelector('span');
const img = document.getElementById('img-flow');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (img.classList.contains('show')) {
        btn.classList.remove('show');
        img.classList.remove('show');
        btnTetx.innerText = 'Показать';
        img.style.maxHeight = 0;
    } else {
        btn.classList.add('show');
        img.classList.add('show');
        btnTetx.innerText = 'Cкрыть';
        img.style.maxHeight = `${img.scrollHeight}px`;
    }
});
