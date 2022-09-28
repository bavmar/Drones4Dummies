const modal = document.getElementById('droneModal');;

const img = document.getElementById('droneImg');
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("modalCaption");

function showModal(element) {
    modal.style.display = "grid";
    const elementImg = element.children[2];
    modalImg.src = elementImg.src;
    captionText.innerHTML = elementImg.alt;
}

function closeModal() {
    modal.style.display = "none";
}