var cursor = document.querySelector('.cursor');

window.addEventListener("mousemove", (e) => {
  cursor.style.display = "block"
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 10px), calc(${e.clientY}px - 10px), 0)`
});

var showMenu = document.getElementById("showMenu")
var close = document.getElementById("close")
var hamburgerMenu = document.getElementById("hamburgerMenu")

showMenu.onclick = function () {
  hamburgerMenu.style.display = "block"
}

close.onclick = function () {
  hamburgerMenu.style.display = "none"
}

var projectplanCard = document.getElementById("projectplanCard");
var designProcesCard = document.getElementById("designProcesCard");
var designUICard = document.getElementById("designUICard");
var developmentCard = document.getElementById("developmentCard");
var meningCard = document.getElementById("meningCard");
var reflectieCard = document.getElementById("reflectieCard");

var modalProjectplan = document.getElementById("modalProjectplan");
var modalDesign = document.getElementById("modalDesign");
var modalDesignUI = document.getElementById("modalDesignUI");
var modalDevelopment = document.getElementById("modalDevelopment");
var modalMening = document.getElementById("modalMening");
var modalReflectie = document.getElementById("modalReflectie");

var body = document.getElementsByTagName("body");
var modal = document.getElementsByClassName("modal")

var image = document.getElementById("image1")
var imageModel = document.getElementById("imagemodal1")
var closeImageModal = document.getElementsByClassName("imageModalClose")[0];

var closeModal = document.getElementsByClassName("closeModal");
for (var i = 0; i < closeModal.length; i++) {
  closeModal[i].onclick = function () {
    for (var e = 0; e < modal.length; e++) {
      modal[e].style.display = "none"
      document.body.style.overflow = "auto";
    }
  }
}

//when user clicks on documentation

projectplanCard.onclick = function () {
  //show modal
  modalProjectplan.style.display = "block";
  document.body.style.overflow = "hidden";


  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalProjectplan) {
      modalProjectplan.style.display = "none";
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

designProcesCard.onclick = function () {
  //show modal
  modalDesign.style.display = "block";
  document.body.style.overflow = "hidden";


  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalDesign) {
      modalDesign.style.display = "none";
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

designUICard.onclick = function () {
  //show modal
  modalDesignUI.style.display = "block";
  document.body.style.overflow = "hidden";


  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalDesignUI) {
      modalDesignUI.style.display = "none";
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

developmentCard.onclick = function () {
  //show modal
  modalDevelopment.style.display = "block";
  document.body.style.overflow = "hidden";


  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalDevelopment) {
      modalDevelopment.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

meningCard.onclick = function () {
  //show modal
  modalMening.style.display = "block";
  document.body.style.overflow = "hidden";


  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalMening) {
      modalMening.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

reflectieCard.onclick = function () {
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


