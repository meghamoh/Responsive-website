$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "FullStack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "FullStack Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //   about
    $(document).ready(function () {
        let aboutSection = $("#about");
        let image = $(".about-content .left img");
    
        function rotateOnScroll() {
            let position = aboutSection[0].getBoundingClientRect().top;
            let screenPosition = window.innerHeight / 1.5;
    
            if (position < screenPosition) {
                image.css("transform", "rotateY(180deg)"); // Rotate on scroll
            } else {
                image.css("transform", "rotateY(0deg)"); // Reset when scrolled up
            }
        }
    
        $(window).on("scroll", rotateOnScroll);
    });
    
      
      

    
        // Qualification Tabs Toggle Script
        const tabs = document.querySelectorAll(".qualification__button");
        const contents = document.querySelectorAll(".qualification__content");
    
        tabs.forEach((tab) => {
            tab.addEventListener("click", function () {
                // Remove active class from all buttons
                tabs.forEach((btn) => btn.classList.remove("qualification__active"));
    
                // Add active class to clicked button
                this.classList.add("qualification__active");
    
                // Hide all content sections
                contents.forEach((content) => content.classList.remove("qualification__active"));
    
                // Show selected content
                const target = document.querySelector(this.getAttribute("data-target"));
                target.classList.add("qualification__active");
            });
});

// Set the default active section
document.querySelector(".qualification__button").click();

    
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = form.elements["name"].value.trim();
        let email = form.elements["email"].value.trim();
        let subject = form.elements["subject"].value.trim();
        let message = form.elements["message"].value.trim();

        if (!name || !email || !subject || !message) {
            formMessage.textContent = "All fields are required.";
            formMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        form.submit();
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
   
// Skills Animation on Scroll
// document.addEventListener("DOMContentLoaded", function () {
//     const skillSection = document.querySelector(".skills");

//     function animateBars() {
//         console.log("Checking section position..."); // Debugging
//         let sectionPosition = skillSection.getBoundingClientRect().top;
//         let screenHeight = window.innerHeight;

//         console.log("Section position:", sectionPosition);
//         console.log("Screen height:", screenHeight);

//         if (sectionPosition < screenHeight - 100) {
//             skillSection.classList.add("animate");
//             console.log("Animation triggered! ✅"); // Check if this logs
//             window.removeEventListener("scroll", animateBars);
//         }
//     }

//     window.addEventListener("scroll", animateBars);
//     animateBars(); // Call it once to check immediately
// });


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            // 1000:{
            //     items: 3,
            //     nav: false
            // }
        }
    });
});