(() => { const refs = { openModalBtn:
          
          document.querySelector('[data-modal-close]'), modal:
        document.querySelector('[data-modal]'),
};
    
    const cbox = document.querySelectorAll('[data-modal-open]');
     for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click",  toggleModal);
 }
          refs.openModalBtn.addEventListener('click', toggleModal);
          refs.closeModalBtn.addEventListener('click', toggleModal); function
          toggleModal() { refs.modal.classList.toggle('is-hidden'); } })();
