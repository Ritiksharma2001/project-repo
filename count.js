const counters = document.querySelectorAll('.counters.num .counter span');
let activated = false;

function updateCounter(counter, target) {
    let count = 0;
    const difference = target / 50; // Adjust this value for smoother animation
    const interval = setInterval(() => {
        if (count < target) {
            count += difference;
            counter.innerText = Math.round(count);
        } else {
            clearInterval(interval);
        }
    }, 10);
}

function updateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        updateCounter(counter, target);
    });
}

function checkVisibility() {
    const rect = document.querySelector('.counters.num').getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible && !activated) {
        updateCounters();
        activated = true;
    } else if (!isVisible && activated) {
        counters.forEach(counter => {
            counter.innerText = 0;
        });
        activated = false;
    }
}

function handleScroll() {
    window.addEventListener('scroll', () => {
        checkVisibility();
    });
}

// Initial check on page load
window.addEventListener('DOMContentLoaded', () => {
    checkVisibility();
    handleScroll();
});
