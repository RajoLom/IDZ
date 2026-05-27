        const button = document.getElementById('themeToggle');

    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('dark');
    }

    button.addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
