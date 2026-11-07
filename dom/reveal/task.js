const reveals = document.querySelectorAll('.reveal');

const checkReveal = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    });
};

window.addEventListener('scroll', checkReveal);
window.addEventListener('resize', checkReveal);
checkReveal();