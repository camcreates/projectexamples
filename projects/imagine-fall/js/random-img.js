/*jslint browser: true*/
/*global $, jQuery*/

//Script to randomize images in #add-img
(function () {
  'use strict';
  var loc = window.location.href,
    randomArray = [];
  if (/mil/.test(loc)) {
    randomArray.push(2, 3, 4);
  } else if (/hsya/.test(loc)) {
    randomArray.push(1, 2, 4);
  } else if (/wkad/.test(loc)) {
    randomArray.push(1, 2, 3);
  } else if (/fgen/.test(loc)) {
    randomArray.push(1, 3, 4);
  } else {
    randomArray.push(1, 2, 3, 4);
  }
  var random = randomArray[Math.floor(Math.random() * randomArray.length)];
  if (random === 1) {
    $("#add-img").prepend('<img src="images/1.jpg" alt="Photo of smiling man"/>');
  } else if (random === 2) {
    $("#add-img").prepend('<img src="images/2.jpg" alt="Photo of smiling woman"/>');
  } else if (random === 3) {
    $("#add-img").prepend('<img src="images/3.jpg" alt="Photo of smiling man"/>');
  } else if (random === 4) {
    $("#add-img").prepend('<img src="images/4.jpg" alt="Photo of smiling woman"/>');
  }
}());