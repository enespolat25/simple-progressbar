function load_something(seconds) {
        const progress_bar = document.querySelector('.progress-bar')
        let percent = 0
        const interval = setInterval(() => {
            percent += 1
            progress_bar.style.width = percent + '%'
            if (percent > 100) {
                clearInterval(interval)
            }
        }, (seconds * 1000)/100);
    }