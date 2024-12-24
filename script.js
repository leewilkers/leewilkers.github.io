const body = document.body;
const modeToggle = document.getElementById('modeToggle');
const cat = document.getElementById('cat');

function resetGif() {
    cat.src = cat.src.split('?')[0] + '?t=' + new Date().getTime();
}

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        resetGif();
        cat.style.display = 'block';
        
        requestAnimationFrame(() => {
            body.classList.add('light-mode');
            
            setTimeout(() => {
                body.classList.remove('light-mode');
                modeToggle.checked = false;
                
                setTimeout(() => {
                    cat.style.display = 'none';
                }, 300);
            }, 1500);
        });
    } else {
        body.classList.remove('light-mode');
        cat.style.display = 'none';
    }
});
