var cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "block"
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 10px), calc(${e.clientY}px - 10px), 0)`
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};

var showMenu = document.getElementById("showMenu")
var close = document.getElementById("close")
var hamburgerMenu = document.getElementById("hamburgerMenu")

showMenu.onclick = function () {
  hamburgerMenu.style.display = "block"
}

close.onclick = function () {
  hamburgerMenu.style.display = "none"
}

var portfolioButton = document.getElementById("portfolioButton")
var portfolioSection = document.getElementById("portfolioSection")
portfolioButton.onclick = function () {
  portfolioSection.style.display = "block"
  simacSection.style.display = "none"
  internationalSection.style.display = "none"
}


var simacButton = document.getElementById("simacButton")
var simacSection = document.getElementById("simacSection")
simacButton.onclick = function () {
  portfolioSection.style.display = "none"
  simacSection.style.display = "block"
  internationalSection.style.display = "none"
}

var internationalButton = document.getElementById("internationalButton")
var internationalSection = document.getElementById("internationalSection")

internationalButton.onclick = function () {
  portfolioSection.style.display = "none"
  simacSection.style.display = "none"
  internationalSection.style.display = "block"
}

var goToTopButton = document.getElementById("goToTopButton")
goToTopButton.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

