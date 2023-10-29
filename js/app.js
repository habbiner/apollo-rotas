document.addEventListener('DOMContentLoaded', function () {
    const slideControllers = document.querySelectorAll('.slide-controller');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    slideControllers.forEach(function (controller) {
        controller.addEventListener('click', function () {
            if (this.dataset.action === 'prev') {
                slides[currentIndex].classList.remove('visible');
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                slides[currentIndex].classList.add('visible');
            } else if (this.dataset.action === 'next') {
                slides[currentIndex].classList.remove('visible');
                currentIndex = (currentIndex + 1) % slides.length;
                slides[currentIndex].classList.add('visible');
            }
        });
    });

    const rangeInput1 = document.getElementById('range1');
    const clock1 = document.getElementById('clock1');

    rangeInput1.addEventListener('input', function () {
        updateClock(rangeInput1, clock1);
    });

    const rangeInput2 = document.getElementById('range2');
    const clock2 = document.getElementById('clock2');

    rangeInput2.addEventListener('input', function () {
        updateClock(rangeInput2, clock2);
    });

    function updateClock(input, clock) {
        const rangeValue = parseInt(input.value);
        const hours = Math.floor(rangeValue / 100 * 24);
        const minutes = Math.floor((rangeValue % 100) / 100 * 60);
        const seconds = Math.floor(((rangeValue % 100) % 100) / 100 * 60);

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        clock.textContent = formattedTime;
    }
});
