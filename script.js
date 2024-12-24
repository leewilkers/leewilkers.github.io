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
        
        requestAnimationFrame(() => {
            body.classList.add('light-mode');
            
            setTimeout(() => {
                body.classList.remove('light-mode');
                modeToggle.checked = false;
                
                setTimeout(() => {
                    cat.style.display = 'none';
                    isAnimating = false;  // Animation complete
                }, 300);
            }, 1500);
        });
    } else {
        body.classList.remove('light-mode');
        cat.style.display = 'none';
    }
});
