export const initSlaider = (id) => {
    const slaider = document.querySelector(id);

    if (!slaider) {
        return;
    }

    const gallery = slaider.querySelector('.gallery');
    const leftBtn = slaider.querySelector('.gallery-btn-left');
    const rightBtn = slaider.querySelector('.gallery-btn-right');
    const block = slaider.querySelector('.gallery-block');
    const item = slaider.querySelector('.gallery-content');

    const blockWidth = block.getBoundingClientRect().width;
    const step = item.getBoundingClientRect().width;

    rightBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const galleryWidth = gallery.getBoundingClientRect().width;
        const galleryPosition = gallery.getBoundingClientRect().left;
        const blockPosition = block.getBoundingClientRect().left - galleryPosition;

        const newPosition = blockPosition - step;

        if (blockWidth + newPosition > galleryWidth) {
            block.style.left = `${newPosition}px`;
            leftBtn.disabled = false;
        } else {
            block.style.left = `${galleryWidth - blockWidth}px`;
            rightBtn.disabled = true;
        }
    });

    leftBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const galleryPosition = gallery.getBoundingClientRect().left;
        const blockPosition = block.getBoundingClientRect().left - galleryPosition;

        const newPosition = blockPosition + step;

        if (newPosition < 0) {
            block.style.left = `${newPosition}px`;
            rightBtn.disabled = false;
        } else {
            block.style.left = `0px`;
            leftBtn.disabled = true;
        }
    });

    window.addEventListener('resize', () => {
        block.style.left = `0px`;
        leftBtn.disabled = true;
        rightBtn.disabled = false;
    });
}
