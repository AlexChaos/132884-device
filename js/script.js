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


