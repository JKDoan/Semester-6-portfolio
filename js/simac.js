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

var projectplanCard = document.getElementById("projectplanCard");
var brainstormenCard = document.getElementById("brainstormenCard");
var libraryCard = document.getElementById("libraryCard");
var feedbackCard = document.getElementById("feedbackCard");
var technischCard = document.getElementById("technischCard");
var expertCard = document.getElementById("expertCard");
var prototypingCard = document.getElementById("prototypingCard");
var retrospectCard = document.getElementById("retrospectCard");
var c4modelCard = document.getElementById("c4modelCard");
var pocCard = document.getElementById("pocCard");
var prototypinggroupCard = document.getElementById("prototypinggroupCard");
var eisenlijstCard = document.getElementById("eisenlijstCard");
var reportCard = document.getElementById("reportCard");
var testingCard = document.getElementById("testingCard");
var verslagCard = document.getElementById("verslagCard");
var reflectieCard = document.getElementById("reflectieCard");

var modalProjectplan = document.getElementById("modalProjectplan");
var modalBrainstormen = document.getElementById("modalBrainstormen");
var modalLibrary = document.getElementById("modalLibrary");
var modalFeedback = document.getElementById("modalFeedback");
var modalTechnisch = document.getElementById("modalTechnisch");
var modalExpert = document.getElementById("modalExpert");
var modalPrototyping = document.getElementById("modalPrototyping");
var modalRetrospect = document.getElementById("modalRetrospect");
var modalEisenlijst = document.getElementById("modalEisenlijst");
var modalC4 = document.getElementById("modalC4");
var modalPoc = document.getElementById("modalPoc");
var modalPrototypingroup = document.getElementById("modalPrototypingroup");
var modalReport = document.getElementById("modalReport");
var modalTesting = document.getElementById("modalTesting");
var modalWeekverslag = document.getElementById("modalWeekverslag");
var modalReflectie = document.getElementById("modalReflectie");

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


brainstormenCard.onclick = function () {
  //show modal
  modalBrainstormen.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalBrainstormen) {
      modalBrainstormen.style.display = "none";
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

libraryCard.onclick = function () {
  //show modal
  modalLibrary.style.display = "block";
  document.body.style.overflow = "hidden";
  
  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalLibrary) {
      modalLibrary.style.display = "none";
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

feedbackCard.onclick = function () {
  //show modal
  modalFeedback.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalFeedback) {
      modalFeedback.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

technischCard.onclick = function () {
  //show modal
  modalTechnisch.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalTechnisch) {
      modalTechnisch.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

expertCard.onclick = function () {
  //show modal
  modalExpert.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalExpert) {
      modalExpert.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

prototypingCard.onclick = function () {
  //show modal
  modalPrototyping.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalPrototyping) {
      modalPrototyping.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

c4modelCard.onclick = function () {
  //show modal
  modalC4.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalC4) {
      modalC4.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

retrospectCard.onclick = function () {
  //show modal
  modalRetrospect.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalRetrospect) {
      modalRetrospect.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

eisenlijstCard.onclick = function () {
  //show modal
  modalEisenlijst.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalEisenlijst) {
      modalEisenlijst.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

pocCard.onclick = function () {
  //show modal
  modalPoc.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalPoc) {
      modalPoc.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

prototypinggroupCard.onclick = function () {
  //show modal
  modalPrototypingroup.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalPrototypingroup) {
      modalPrototypingroup.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}


reportCard.onclick = function () {
  //show modal
  modalReport.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalReport) {
      modalReport.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

testingCard.onclick = function () {
  //show modal
  modalTesting.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalTesting) {
      modalTesting.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
}

verslagCard.onclick = function () {
  //show modal
  modalWeekverslag.style.display = "block";
  document.body.style.overflow = "hidden";

  //closes modal if clicked outside of modal
  window.onclick = function (event) {
    if (event.target == modalWeekverslag) {
      modalWeekverslag.style.display = "none";
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