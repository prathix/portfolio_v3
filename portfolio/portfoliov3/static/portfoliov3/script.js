document.addEventListener("DOMContentLoaded", function() {    
    let logo = document.querySelector("#logo");
    let ring = document.querySelector(".ring");
    logo.style.animationPlayState = 'paused';                  /* function for hiding everything when the user clicks them */
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            changeSpeed();
        });
    });
    function changeSpeed() {                                      /* function for changing the duration of the rotation */
        let duration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'));
        
        function decreaseDuration() {
            if (duration > 0.5) {
                    duration -= 0.001;
                    document.documentElement.style.setProperty('--animation-duration', `${duration}s`);
                    requestAnimationFrame(decreaseDuration);
                    logo.style.animationPlayState = 'running'; 
                    ring.classList.toggle('bigger');
                    decreaseDuration();
                }
        }
        decreaseDuration();
    }
});