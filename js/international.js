var cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "block"
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 10px), calc(${e.clientY}px - 10px), 0)`
});

var showMenu = document.getElementById("showMenu")
var close = document.getElementById("close")
var hamburgerMenu = document.getElementById("hamburgerMenu")

showMenu.onclick = function(){
  hamburgerMenu.style.display = "block"
}

close.onclick = function(){
  hamburgerMenu.style.display = "none"
}

var posterCard = document.getElementById("posterCard");
var projectplanrCard = document.getElementById("projectplanrCard");
var brainstormCard = document.getElementById("brainstormCard");
var prototypingCard = document.getElementById("prototypingCard");
var dagverslagCard = document.getElementById("dagverslagCard");
var reflectiegCard = document.getElementById("reflectiegCard");

var modalPoster = document.getElementById("modalPoster");
var modalProjectplan = document.getElementById("modalProjectplan");
var modalBrainstorm = document.getElementById("modalBrainstorm")
var modalPrototype = document.getElementById("modalPrototype")
var modalDagverslag = document.getElementById("modalDagverslag")
var modalReflectie = document.getElementById("modalReflectie")

var body = document.getElementsByTagName("body");
var modal = document.getElementsByClassName("modal")

var image = document.getElementById("image1")
var imageModel = document.getElementById("imagemodal1")
var closeImageModal = document.getElementsByClassName("imageModalClose")[0];

var closeModal = document.getElementsByClassName("closeModal");
for (var i = 0; i < closeModal.length; i++) {
  closeModal[i].onclick = function() {
    for (var e = 0; e < modal.length; e++) {
      modal[e].style.display = "none"
      document.body.style.overflow = "auto";
    }
  }
}

//when user clicks on documentation
posterCard.onclick = function () {
  //show modal
  modalPoster.style.display = "block";
  document.body.style.overflow = "hidden";




  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalPoster) {
      modalPoster.style.display = "none";
      document.body.style.overflow = "auto";
    }

    //opens imagemodal if clicked on image
    image.onclick = function () {
      imageModel.style.display = "block";

      closeImageModal.onclick = function () {
        imageModel.style.display = "none";
      }

      window.onclick = function (event) {
        if (event.target == imageModel) {
          imageModel.style.display = "none";
        }
      }
    }
  }
}

projectplanrCard.onclick = function () {
  //show modal
  modalProjectplan.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalProjectplan) {
      modalProjectplan.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

brainstormCard.onclick = function () {
  //show modal
  modalBrainstorm.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalBrainstorm) {
      modalBrainstorm.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

prototypingCard.onclick = function () {
  //show modal
  modalPrototype.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalPrototype) {
      modalPrototype.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

dagverslagCard.onclick = function () {
  //show modal
  modalDagverslag.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalDagverslag) {
      modalDagverslag.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

reflectiegCard.onclick = function () {
  //show modal
  modalReflectie.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalReflectie) {
      modalReflectie.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}
