var rect = document.querySelector("#center");

rect.addEventListener("mousemove", (dets)=>{
    var rectdets = rect.getBoundingClientRect()
    var mouselocation = dets.clientX - rectdets.left;
    if (mouselocation < rectdets.width/2) {
        var redcolor = Math.floor(
          gsap.utils.mapRange(0, rectdets.width / 2, 255, 0, mouselocation)
        );
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4
        })
    } else {
        var bluecolor = Math.floor(
          gsap.utils.mapRange(
            rectdets.width / 2,
            rectdets.width,
            0,
            255,
            mouselocation
          )
        );
        gsap.to(rect, {
          backgroundColor: `rgb(0, 0, ${bluecolor})`,
          ease: Power4,
        });
    }
})

rect.addEventListener("mouseleave", ()=>{
    gsap.to(rect, {
          backgroundColor: `white`,
    })
})