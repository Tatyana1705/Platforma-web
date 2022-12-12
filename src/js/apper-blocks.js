export default () => {
    const screenHeight = document.documentElement.clientHeight;
    const animateBlocks = document.querySelectorAll(".page-section");

    function scrolling() {
        for (var i = 0; i < animateBlocks.length; i++) {
            const contentBlock = animateBlocks[i];

            if (isHalfVisible(contentBlock)) {
                contentBlock.classList.add("page-section--animated");
            }
        }
    }

    function isHalfVisible(element) {
        const elementBoundary = element.getBoundingClientRect();
        const top = elementBoundary.top;
        const height = elementBoundary.height;

        return (top + height >= 0) && (top + 0.2 * height <= screenHeight);
    }

    window.addEventListener("scroll", scrolling);
}