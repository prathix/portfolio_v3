document.addEventListener("DOMContentLoaded", function() {                              /* function for making the starting ring and logo disappear after you click one of the categories */
    document.querySelectorAll(".category").forEach(function(category) {
        category.addEventListener("click", function() {
            let ring = document.querySelector(".ring");
            let logo = document.querySelector("#logo");
            ring.style.visibility = "hidden";
            logo.style.visibility = "hidden";
        });
    });
});
