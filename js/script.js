var cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "block"
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 10px), calc(${e.clientY}px - 10px), 0)`
});

var leeswijzerButton = document.getElementById("leeswijzerButton")

leeswijzerButton.onclick = function(){
    location.replace("leeswijzer.html")
}

var showMenu = document.getElementById("showMenu")
var close = document.getElementById("close")
var hamburgerMenu = document.getElementById("hamburgerMenu")

showMenu.onclick = function(){
  hamburgerMenu.style.display = "block"
}

close.onclick = function(){
  hamburgerMenu.style.display = "none"
}