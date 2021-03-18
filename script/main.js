document.addEventListener('DOMContentLoaded', function() {
   let elems = document.querySelectorAll('.datepicker');
   let instances = M.Datepicker.init(elems, {
      "format" : "yyyy-mm-dd",
      // "autoClose" : true
   });
});

document.querySelectorAll('.modal-show').forEach(elem => {
   elem.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(elem => {
   elem.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(elem => {
   elem.onclick = closeModal;
});

document.querySelectorAll('.modal-project').forEach(elem => {
   elem.onclick = dontCloseModal;
});

function showModal() {
   let modalId = this.dataset.modal;
   document.querySelector(modalId).classList.remove('hide');
   document.onkeydown = function (e) {
      if (e.keyCode == 27) closeModal();
   }
}

function closeModal() {
   document.querySelectorAll('.modal-wrap').forEach(elem => {
      elem.classList.add('hide');
   });
   document.onkeydown = null;
}

function dontCloseModal(event) {
   event.stopPropagation();
}

document.querySelector('.read-rules').onclick = function () {
   document.querySelector('.form-slider').style.marginLeft = '-345px';
}

document.querySelectorAll('.read-rules-back').forEach(elem => {
   elem.onclick = () => document.querySelector('.form-slider').style.marginLeft = '0';
});

document.querySelector('#agree-rules').onchange = function () {
   if (this.checked) {
      document.querySelector('#signup-submit').classList.remove('disabled');
   }
   else {
      document.querySelector('#signup-submit').classList.add('disabled');
   }
}