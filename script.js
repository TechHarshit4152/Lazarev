function NavAnimation() {
    var nav = document.querySelector(".nav")

    nav.addEventListener("mouseenter", function() {
        var tl = gsap.timeline()

        tl.to(".nav-bottom", {
            height: "180%",
            bottom: "-180%",
            padding: "2vw 15vw",
            paddingLeft: "18.8vw"

        },'a')
        tl.to(".nav h5", {
            display: "block"
        },'a')
        tl.to(".nav h5 span", {
            y:0,
            stagger: {
                amount: 0.8
            }
        },'a')
    })

    nav.addEventListener("mouseleave", function() {
        var tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y:25,
            stagger: {
                amount: 0.2
            }
        },'b')
        tl.to(".nav-part2 h5 ", {
            display: "none",
            duration: 0.001
        },'c')
        tl.to(".nav-bottom", {
            height: 0 ,
            padding: "0",
            paddingLeft: "0",
            bottom: "0"
        },'c')
    })

}

NavAnimation()