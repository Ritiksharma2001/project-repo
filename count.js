document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counters.num .counter span');
    let activated = false;

    function updateCounter(counter, target) {
        let count = 0;
        const difference = target / 50; // Adjust this value for smoother animation
        
        function incrementCounter() {
            if (count < target) {
                count += difference;
                counter.innerText = Math.round(count);
                requestAnimationFrame(incrementCounter);
            } else {
                counter.innerText = target; // Ensure it hits the target value
            }
        }
        
        incrementCounter();
    }

    function updateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            updateCounter(counter, target);
        });
    }

    function checkVisibility() {
        const rect = document.querySelector('.counters.num').getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !activated) {
            updateCounters();
            activated = true;
        }
    }

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);

    // Initial check in case the counters are already in view on page load
    checkVisibility();
});



