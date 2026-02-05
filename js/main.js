gsap.to("#box1", {
    x: 800,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "black",
    borderRadius: "50%",
    scale: 2,
    // repeat: 1
    // repeat: -1
    repeat: -1,
    yoyo: true
});

gsap.from("#box2", {
    x: 800,
    // y: 200,
    duration: 2,
    delay: 3,
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "50%"
});

gsap.from(".my-div h1", {
    color: "red",
    opacity: 0,
    y:40,
    duration: 2,
    delay: 1,
    stagger: 1
});

var tl = gsap.timeline();

tl.from("nav ul li h4", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    y: -30
})

tl.from("nav ul li a", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3
})
