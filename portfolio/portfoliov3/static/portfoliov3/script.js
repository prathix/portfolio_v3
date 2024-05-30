document.addEventListener("DOMContentLoaded", function() {                             /* function for making the starting ring and logo disappear after you click one of the categories */
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            let ring = document.querySelector(".ring");
            let logo = document.querySelector("#logo");
            ring.style.visibility = "hidden";
            logo.style.visibility = "hidden";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {              /* function for handling the various clicks that a user can do and modifyies the html and css accordingly */
    function clicked(categ){
        let element = document.querySelector(categ);
        if (element) {
            element.addEventListener("click", function(){
                let body = document.querySelector("body");
                if (categ === "#game_dev"){
                    body.style.backgroundColor = "white";
                } else if (categ === "#ai_dev"){
                    body.style.backgroundColor = "blue";
                } else if (categ === "#web_dev"){
                    body.style.backgroundColor = "red";
                } else if (categ === "#miscellaneous"){
                    body.style.backgroundColor = "brown";
                }
            });
        }
    }

    clicked("#game_dev");
    clicked("#ai_dev");
    clicked("#web_dev");
    clicked("#miscellaneous");
});
