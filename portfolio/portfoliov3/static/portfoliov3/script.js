document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            let ring = document.querySelector(".ring");
            let logo = document.querySelector("#logo");
            setTimeout(function() {
                ring.style.visibility = "hidden";
                logo.style.visibility = "hidden";
            }, 2000);
        });
    });

    function clicked(categ) {
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
});

window.onload = function() {
    document.querySelector(".ring").addEventListener("click", function() {
        this.classList.add("accelerated");
    });

    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            this.classList.add("accelerated");
        });
    });
};
