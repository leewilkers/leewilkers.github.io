const body = document.body;
const modeToggle = document.getElementById('modeToggle');
const cat = document.getElementById('cat');

let isAnimating = false;

function resetGif() {
    if (!cat) return;  // Safety check
    cat.src = cat.src.split('?')[0] + '?t=' + new Date().getTime();
}

modeToggle.addEventListener('change', () => {
    if (isAnimating) return;  // Prevent multiple clicks during animation
    
    if (modeToggle.checked) {
        isAnimating = true;
        resetGif();
        cat.style.display = 'block';
        // Force a reflow to ensure the display change takes effect
        void cat.offsetWidth;
        cat.classList.add('visible');
        
        setTimeout(() => {
            body.classList.add('light-mode');
            
            setTimeout(() => {
                body.classList.remove('light-mode');
                modeToggle.checked = false;
                cat.classList.remove('visible');
                
                // Wait for transition before hiding
                setTimeout(() => {
                    cat.style.display = 'none';
                    isAnimating = false;
                }, 300);
            }, 1500);
        }, 10);
    } else {
        body.classList.remove('light-mode');
        cat.classList.remove('visible');
        setTimeout(() => {
            cat.style.display = 'none';
        }, 300);
    }
});
