/* lesson 23 for navigation */

const modal = document.querySelector(".modal");
const sendMessage = document.querySelector(".sendMessage");
const closeBtn = document.querySelector(".btn-close");
const modalBtn = document.querySelector(".modal-btn");
console.log(closeBtn, modal, sendMessage, modalBtn);

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

//social-media on photos

const socials = document.querySelectorAll(".photo-hover-social-media");

const figureImages = document.querySelectorAll(".face");
console.log(socials, figureImages);

for (let i = 0; i < figureImages.length; i++) {
    figureImages[i].addEventListener("mouseover", function showSocial() {
        socials[i].setAttribute("style", "display:block;");
    });

    figureImages[i].addEventListener("mouseout", function hideSocial() {
        socials[i].setAttribute("style", "display:none;");
    });
}
