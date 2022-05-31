/* lesson 23 for navigation */

const modal = document.querySelector(".modal");
const sendMessage = document.querySelector(".sendMessage");
const closeBtn = document.querySelector(".btn-close");
console.log(closeBtn, modal, sendMessage);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

sendMessage.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

function showModalByScroll() {
  // console.log(window.pageYOffset);
  // console.log(document.body.scrollHeight / 2);

  if (window.pageYOffset > document.body.scrollHeight / 2) {
    openModal();
    //zabraty scroll
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

//mobile menu

const mobileMenu = document.querySelector(".nav-mobile-menu");
const mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

//slider
