const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    // const navigation = document.querySelector(".nav-links");
    const backdrop = document.getElementById("backdrop");

    // Set nav active status with boolean
    let isActive = false;

    function handleToggle() {
        //Toggle nav
        nav.classList.toggle("nav-active");

        // Toggle nav active status to true/false
        isActive = !isActive;

        //Animate link
        navLinks.forEach((link, index) => {
            if (isActive) {
                link.style.animation = `navLinkFadeIn 0.4s ease forwards ${
                    index / 7 + 0.2
                }s`;
            } else {
                link.style.animation = `navLinkFadeOut 0.2s ease forwards 0s`;
            }
        });

        //Burger animation
        burger.classList.toggle("toggle");

        backdrop.classList.toggle("hidden");
    }

    burger.addEventListener("click", () => {
        handleToggle();
    });

    backdrop.addEventListener("click", () => {
        // navigation.classList.toggle("hidden");
        // backdrop.classList.toggle("hidden");
        handleToggle();
    });
};
navSlide();



//////////////////////////////////
const backdrop = $("#backdrop");
const theCross = $('h3');
const popUpDiv = $('.popupdiv');

setTimeout(function(){
    $('.popupdiv').show();
    popUpDiv.removeClass('hidden');
    backdrop.addClass("hidden");
    theCross.removeClass("hidden");
}, 2000);

theCross.on("click", function() {
    popUpDiv.addClass('hidden');
    backdrop.removeClass("hidden");
});
