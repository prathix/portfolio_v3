document.addEventListener("DOMContentLoaded", function() {     /* main function for starting the various animations */
    let logo = document.querySelector("#logo");
    let logo_class = document.querySelector(".logo");
    let ring = document.querySelector(".ring");
    logo.style.animationPlayState = 'paused';                  
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            changeSpeed();
        });
    });
    function changeSpeed() {                                      /* function for changing the duration of the rotation */
        let duration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'));
        decreaseDuration();
        function decreaseDuration() {
            if (duration > 0.5) {
                    duration -= 0.001;
                    document.documentElement.style.setProperty('--animation-duration', `${duration}s`);
                    requestAnimationFrame(decreaseDuration);
                    logo.style.animationPlayState = 'running'; 
                    ring.classList.toggle('bigger');
                    decreaseDuration();
                }
            else{
                setTimeout(function() {
                    ring.style.visibility = 'hidden';
                    logo_class.classList.toggle('logo_animation');
                }, 3000);
            }
        }
    }
});