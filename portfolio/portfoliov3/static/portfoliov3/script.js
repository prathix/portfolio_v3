document.addEventListener("DOMContentLoaded", function() {                      /* function for hiding everything when the user clicks them */
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            let ring = document.querySelector(".ring");
            let logo = document.querySelector("#logo");
            changeSpeed();
            document.querySelector("#logo").style.animation.Playstate = 'running';
            setTimeout(function() {
                ring.style.visibility = "hidden";
                logo.style.visibility = "hidden";
                document.querySelector(".ring").style.visbility = none;
                document.querySelector(".big-ring").style.visbility = visible;
            }, 5000);
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
                }, 5000);
            });
        }
    }

    clicked("#game_dev");
    clicked("#ai_dev");
    clicked("#web_dev");
    clicked("#miscellaneous");

    function changeSpeed() {                                      /* function for changing the duration of the rotation */
        let duration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'));
        
        function decreaseDuration() {
            setTimeout( function() {
                if (duration > 0.5) {
                        duration -= 0.0001;
                        document.documentElement.style.setProperty('--animation-duration', `${duration}s`);
                        requestAnimationFrame(decreaseDuration);
                        decreaseDuration();
                    }
            }, 50)
        }
        decreaseDuration();
    }
});