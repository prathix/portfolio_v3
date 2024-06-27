document.addEventListener("DOMContentLoaded", function() {     /* main function for starting the various animations */
    let logo = document.querySelector("#logo");                /* declearing the parts of the html, so that I don't have to redeclare them */
    let ring = document.querySelector(".ring");
    let project = document.querySelector(".project");
    project.style.visibility = 'hidden';
    logo.style.animationPlayState = 'paused';                  
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            changeSpeed();
        });
    });

    function clicked(categ) {                                                 /* function for changing the pages css when clicked */
        let element = document.querySelector(categ);
        if (element) {
            element.addEventListener("click", function() {
                setTimeout(function() {
                    let body = document.querySelector("body");
                    if (categ === "#game_dev") {
                        project.style.visibility = 'visible';
                    } else if (categ === "#ai_dev") {
                        project.style.visibility = 'visible';
                    } else if (categ === "#web_dev") {
                        project.style.visibility = 'visible';
                    } else if (categ === "#miscellaneous") {
                        project.style.visibility = 'visible';
                    }
                }, 2000);
            });
        }
    }

    clicked("#game_dev");
    clicked("#ai_dev");
    clicked("#web_dev");
    clicked("#miscellaneous");

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
        }
    }
});