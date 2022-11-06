const modalCloseBtn = document.querySelector(".modal-btn");
const backdropRef = document.querySelector('.backdrop');
const modalRef = document.querySelector(".modal");


document.addEventListener("keydown", onEscTap);
backdropRef.addEventListener("click", onClickCloseBtnOrOutside);


function onEscTap(e) {
    
    if (e.key === "Escape") {
        closeModal()
    };
};

function onClickCloseBtnOrOutside(e) {
    if (e.target === modalCloseBtn || e.target !== modalRef) {
        closeModal();
    } 
};

function closeModal() {

    backdropRef.classList.toggle("is-hidden");
    document.removeEventListener("keydown", onEscTap);
    backdropRef.removeEventListener("click", onClickCloseBtnOrOutside);
    const wrapper = document.querySelector(".wrapper");
    wrapper.remove()
};

