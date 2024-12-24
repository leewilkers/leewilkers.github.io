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
        cat.classList.add('visible');
        
        setTimeout(() => {
            body.classList.remove('light-mode');
            modeToggle.checked = false;
            cat.classList.remove('visible');
        }, 1500);
    } else {
        body.classList.remove('light-mode');
        cat.classList.remove('visible');
    }
});
