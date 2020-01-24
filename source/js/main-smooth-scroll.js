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
