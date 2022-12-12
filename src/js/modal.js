export const initModa = (modalID, buttonID) => {
    const modal = document.getElementById(modalID);
    const button = document.getElementById(buttonID);

    if (!modal && !button) {
        return;
    }

    const DELAY = 501;
    const closer = modal.querySelector('.form__svg');
    const overlay = modal.querySelector('.overlay');

    const closeModal = (e) => {
        e.preventDefault();
        modal.classList.remove('open');
        setTimeout(() => {
            modal.style.display = 'none';
        }, DELAY);
    };

    const openModal = (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        setTimeout(() => {
            modal.classList.add('open');
        }, 0);
    };

    closer.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    button.addEventListener('click', openModal);
}