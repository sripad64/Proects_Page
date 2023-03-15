const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".project-card")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".project-card")[1].classList.add("fadeInTop");
            document.querySelectorAll(".project-card")[2].classList.add("fadeInBottom");
            document.querySelectorAll(".project-card")[3].classList.add("fadeInRight");
        }
    })

})

observer.observe(document.querySelector(".project-container"));







function splitScroll(){
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    .addIndicators()
    .addTo(controller);
}


splitScroll();