var write = document.querySelector(".write-us");
var popup = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");
var mapLink = document.querySelector(".modal-img");
var mapPopup = document.querySelector(".modal-map");

var mapClose = mapPopup.querySelector(".modal-close");
var form = popup.querySelector("form");
var yourName = popup.querySelector(".your-name");
var yourAdress = popup.querySelector(".your-adress");
var storage = localStorage.getItem("yourName");


write.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
      yourName.value = storage;
      yourAdress.focus();
    } else {
      yourName.focus();
    }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if ( !yourName.value || !yourAdress.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("your-name", yourName.value);
  }
});

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });

/*slider*/
var controls = document.querySelector(".active");
var noActiveTwo = document.querySelector(".btn-two");
var noActiveThree = document.querySelector(".btn-three");
var slideOne = document.querySelector(".slider-content-one");
var slideTwo = document.querySelector(".slider-content-two");
var slideThree = document.querySelector(".slider-content-three");

controls.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideOne.classList.add("slider-content-one");
  slideTwo.classList.remove("slide-show");
  slideThree.classList.remove("slide-show");
});

noActiveTwo.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideTwo.classList.add("slide-show");
  slideOne.classList.remove("slide-show");
  slideOne.classList.remove("slider-content-one");
  slideThree.classList.remove("slide-show");
});

noActiveThree.addEventListener("click", function(evt) {
  evt.preventDefault();
  slideThree.classList.add("slide-show");
  slideOne.classList.remove("slide-show");
  slideOne.classList.remove("slider-content-one");
  slideTwo.classList.remove("slide-show");
});
