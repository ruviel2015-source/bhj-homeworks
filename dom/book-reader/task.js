const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        fontSizes.forEach((item) => item.classList.remove('font-size_active'));
        link.classList.add('font-size_active');

        book.classList.remove('book_fs-small', 'book_fs-big');

        const size = link.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});