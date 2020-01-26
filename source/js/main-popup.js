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
