
let menuIsOPen = false;

function onMenuOptionClick(event) {
    toggleMenu()
}
function toggleMenu() {
    const menu = document.querySelector(".hamburger-menu")
    menuIsOPen = !menuIsOPen

    if (menuIsOPen) {
        menu.classList.remove("menu-closed")
        menu.classList.add("menu-open")
    } else {
        menu.classList.remove("menu-open")
        menu.classList.add("menu-closed")
    }
};

let radioButtonColorHome = document.querySelector("#radiohome");
radioButtonColorHome.addEventListener("click", function (h) {
    document.body.style.backgroundColor = "lightyellow";
    console.log(h.target);
    console.log(h);
});



let radioButtonColorRed = document.querySelector("#radiored");
radioButtonColorRed.addEventListener("click", function (r) {
    document.body.style.backgroundColor = "red";
    console.log(r.target);
    console.log(r);
});

let radioButtonColorBlue = document.querySelector("#radioblue");
radioButtonColorBlue.addEventListener("click", function (b) {
    document.body.style.backgroundColor = "blue";
    console.log(b.target);
    console.log(b);
})

let radioButtonColorGreen = document.querySelector("#radiogreen");
radioButtonColorGreen.addEventListener("click", function (g) {
    document.body.style.backgroundColor = "green";
    console.log(g.target);
    console.log(g);
})

let radioButtonColorYellow = document.querySelector("#radioyellow");
radioButtonColorYellow.addEventListener("click", function (y) {
    document.body.style.backgroundColor = "yellow";
    console.log(y.target);
    console.log(y);
})