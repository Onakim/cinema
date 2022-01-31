const schemeSvg = document.querySelector('.scheme-svg');
schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle('active');
    }
})