function isActive() {
   document.getElementById("menu").classList.add("active");
   document.getElementById("menu1").classList.remove("active");
   document.getElementById("menu2").classList.remove("active");
}

function isActive1() {
   document.getElementById("menu").classList.remove("active");
   document.getElementById("menu1").classList.add("active");
   document.getElementById("menu2").classList.remove("active");
}

function isActive2() {
   document.getElementById("menu").classList.remove("active");
   document.getElementById("menu1").classList.remove("active");
   document.getElementById("menu2").classList.add("active");
}
