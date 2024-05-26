var cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "block"
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 10px), calc(${e.clientY}px - 10px), 0)`
});

var modal = document.getElementById("myModal");

var btn = document.getElementById("test");
var body = document.getElementsByTagName("body");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}}