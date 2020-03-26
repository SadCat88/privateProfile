'use strict';

console.log('index.js is run');

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [2],
  snap: true,
  connect: false,
  range: {
    min: 0,
    '19.5%': 1,
    '48.7%': 2,
    max: 3,
  },
});
