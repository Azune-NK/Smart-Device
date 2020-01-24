'use strict';

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
