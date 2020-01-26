'use strict';

var buttons = document.querySelectorAll('.accordion-btn');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    btn.classList.toggle('accordion-btn--on');

    buttons.forEach(function (item) {
      if (item !== evt.target) {
        item.classList.remove('accordion-btn--on');
      }
    });
  });
});


'use strict';

var ESC_KEYCODE = 27;

var link = document.querySelector('.page-header__contacts-cb-btn');
var popup = document.querySelector('.popup');
var close = popup.querySelector('.feedback-form__close-btn');

var form = popup.querySelector('.feedback-form form');
var feedbackName = form.querySelector('#feedback-name');
var phone = form.querySelector('#feedback-phone');
var question = form.querySelector('#feedback-question');

var isStorageSupport = true;
var storage = {
  feedbackName: '',
  phone: '',
  question: ''
};

try {
  storage.feedbackName = localStorage.getItem('feedbackName');
  storage.phone = localStorage.getItem('phone');
  storage.question = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

if (link && popup) {
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      evt.preventDefault();
      closePopup();
    }
  };

  if (form) {
    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('feedbackName', feedbackName.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('question', question.value);
      }
    });
  }

  var checkLocalStorage = function () {
    if (feedbackName) {
      feedbackName.value = storage.feedbackName;
    }

    if (phone) {
      phone.value = storage.phone;
    }

    if (question) {
      question.value = storage.question;
    }
  };

  var openPopup = function () {
    popup.classList.add('popup--opened');
    document.body.classList.add('disable-scroll');
    document.addEventListener('keydown', onPopupEscPress);
    checkLocalStorage();
    feedbackName.focus();
  };

  var closePopup = function () {
    popup.classList.remove('popup--opened');
    document.body.classList.remove('disable-scroll');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  link.addEventListener('click', function (evt) {
    evt.preventDefault();
    openPopup();
  });

  close.addEventListener('click', function () {
    closePopup();
  });

  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });
}

'use strict';

var scrollBtn = document.querySelector('.intro__scrolldown');
var advisoryBtn = document.querySelector('.intro__advisory-btn');
var infoNode = document.querySelector('.info');
var advisoryNode = document.querySelector('.advisory');

var moveTo = new MoveTo();

if (scrollBtn && infoNode) {
  scrollBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(infoNode);
  });
}

if (advisoryBtn && advisoryNode) {
  advisoryBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    moveTo.move(advisoryNode);
  });
}

'use strict';

var telInputs = document.querySelectorAll('input[type="tel"]');

if (telInputs) {
  telInputs.forEach(function (input) {
    Inputmask('+7 (999) 999-99-99').mask(input);
  });
}
