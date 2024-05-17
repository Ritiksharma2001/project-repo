   const counters1 = document.querySelectorAll(".counters span");
    const counters2 = document.querySelectorAll(".second-count .counters span");

    let activated = false;

    function updateCounters(counters) {
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count);
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
        });
    }

    window.addEventListener("scroll", () => {
        const rect1 = document.querySelector(".counters").getBoundingClientRect();
        const rect2 = document.querySelector(".second-count .counters").getBoundingClientRect();

        if (
            (rect1.top < window.innerHeight && rect1.bottom >= 0) ||
            (rect2.top < window.innerHeight && rect2.bottom >= 0)
        ) {
            if (!activated) {
                updateCounters(counters1);
                updateCounters(counters2);
                activated = true;
            }
        } else {
            if (activated) {
                counters1.forEach(counter => {
                    counter.innerText = 0;
                });
                counters2.forEach(counter => {
                    counter.innerText = 0;
                });
                activated = false;
            }
        }
    });


  