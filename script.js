const body = document.body;
const modeToggle = document.getElementById('modeToggle');
const cat = document.getElementById('cat');

function resetGif() {
    cat.src = cat.src.split('?')[0] + '?t=' + new Date().getTime();
}

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        body.classList.add('light-mode');
        resetGif();
        cat.style.display = 'block';
        requestAnimationFrame(() => {
            cat.classList.add('visible');
        });
        
        setTimeout(() => {
            body.classList.remove('light-mode');
            modeToggle.checked = false;
            cat.classList.remove('visible');
            setTimeout(() => {
                cat.style.display = 'none';
            }, 300);
        }, 1500);
    } else {
        body.classList.remove('light-mode');
        cat.classList.remove('visible');
        setTimeout(() => {
            cat.style.display = 'none';
        }, 300);
    }
});
