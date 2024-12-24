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
        void cat.offsetWidth;
        cat.classList.add('visible');
        
        setTimeout(() => {
            body.classList.add('light-mode');
            
            // Turn off light and switch halfway through
            setTimeout(() => {
                body.classList.remove('light-mode');
                modeToggle.checked = false;
                
                // Keep showing the cat for the dark part
                setTimeout(() => {
                    cat.classList.remove('visible');
                    setTimeout(() => {
                        cat.style.display = 'none';
                        isAnimating = false;
                    }, 300);
                }, 2000); // Just a bit longer for the falling animation
            }, 750);
        }, 10);
    } else {
        body.classList.remove('light-mode');
        cat.classList.remove('visible');
        setTimeout(() => {
            cat.style.display = 'none';
        }, 300);
    }
});
