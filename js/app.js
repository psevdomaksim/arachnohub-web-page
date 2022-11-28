let modalOpacity = document.getElementById("modal-opacity")
let images = document.querySelectorAll(".content-image");
let modals = document.querySelectorAll(".modal-block");

for (var i = 0; i < images.length; i++) {   
  images[i] = document.getElementsByClassName("content-image")[i].id=i;
  modals[i] = document.getElementsByClassName("modal-block")[i].id=i;
}

function showModal(id) {
  image = document.getElementById(`${id}`)
  image.style.visibility = "visible"
  modalOpacity.style.visibility = "visible"
}

function closeModal() {
  image.style.visibility = "hidden"
  modalOpacity.style.visibility = "hidden"

}

