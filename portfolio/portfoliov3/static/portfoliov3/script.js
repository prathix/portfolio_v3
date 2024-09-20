document.addEventListener("DOMContentLoaded", function() {     /* main function for starting the various animations */
    let logo = document.querySelector(".logo");                /* declearing the parts of the html, so that I don't have to redeclare them */
    let return_link = document.querySelector("#return");
    let ring = document.querySelector(".ring");
    let project = document.querySelectorAll('.project');
    let ai = document.querySelectorAll('.project.ai');
    let game = document.querySelectorAll('.project.game');
    let web = document.querySelectorAll('.project.web');
    let miscellaneous  = document.querySelectorAll('.project.miscellaneous');
    let category = document.querySelectorAll('.category');
    let duration = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'));
    project.forEach(function(project) {
        project.style.visibility = 'hidden';
        project.style.animationPlayState = 'paused';
    });
    return_link.style.visibility = 'hidden';
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
                    if (categ === "#game_dev") {
                        game.forEach(function(game) {
                            return_link.style.visibility = 'visible';
                            game.style.visibility = 'visible';
                        });
                        distance(game);
                    } else if (categ === "#ai_dev") {
                        ai.forEach(function(ai) {
                            return_link.style.visibility = 'visible';
                            ai.style.visibility = 'visible';
                        });
                        distance(ai);
                    } else if (categ === "#web_dev") {
                        web.forEach(function(web) {
                            return_link.style.visibility = 'visible';
                            web.style.visibility = 'visible';
                        });
                        distance(web);
                    } else if (categ === "#miscellaneous") {
                        miscellaneous.forEach(function(miscellaneous) {
                            return_link.style.visibility = 'visible';
                            miscellaneous.style.visibility = 'visible';
                        });
                        distance(miscellaneous);
                    }
                }, 2000);
            });
        }
    }

    clicked("#game_dev");
    clicked("#ai_dev");
    clicked("#web_dev");
    clicked("#miscellaneous");
    return_link.addEventListener("click", function(){
        location.reload()
            return_link.style.visibility = 'hidden';
    });
function changeSpeed() {                                      /* function for changing the duration of the rotation */
        function decreaseDuration() {
            while (duration > 1){
                duration -= 0.001;
                    document.documentElement.style.setProperty('--animation-duration', `${duration}s`);
                    requestAnimationFrame(decreaseDuration);
                    logo.style.animationPlayState = 'running'; 
                    ring.classList.toggle('bigger');
            }
        }
        decreaseDuration();
        return 0;
    }
    function distance(project) {
        if (window.screen.orientation.type.includes('landscape')){
        let margin = 100; // Desired margin between the projects
    
        // Ensure all projects have absolute positioning
            project.forEach((currentProject, index) => {
                currentProject.style.position = 'absolute';
                if (index > 0) {
                    let previousProject = project[index - 1];
                    // Position the current project based on the previous project plus the margin
                    currentProject.style.left = (previousProject.offsetLeft + previousProject.offsetWidth + margin) + 'px';
                } else {
                    // Position the first project at the start
                    currentProject.style.left = '0px';
            }
        });
        }
        else if (window.screen.orientation.type.includes('portrait')){
            let margin = 100; // Desired margin between the projects
    
            // Ensure all projects have absolute positioning
            project.forEach((currentProject, index) => {
            currentProject.style.position = 'absolute';
            if (index > 0) {
                let previousProject = project[index - 1];
                // Position the current project based on the previous project plus the margin
                currentProject.style.top = (previousProject.offsetTop + previousProject.offsetHeight + margin) + 'px';
            } else {
                // Position the first project at the start
                currentProject.style.top = '100px';
            }
        });
        }
    }
    
});