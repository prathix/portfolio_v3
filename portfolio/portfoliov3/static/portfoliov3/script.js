document.addEventListener("DOMContentLoaded", function() {     /* main function for starting the various animations */
    let logo = document.querySelector("#logo");
    let ring = document.querySelector(".ring");
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
                        body.style.backgroundColor = "white";
                    } else if (categ === "#ai_dev") {
                        body.style.backgroundColor = "blue";
                    } else if (categ === "#web_dev") {
                        body.style.backgroundColor = "red";
                    } else if (categ === "#miscellaneous") {
                        body.style.backgroundColor = "brown";
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