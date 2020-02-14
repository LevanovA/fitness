'use strict';

var inputText = document.querySelector('.lesson__item input[type="text"]');
var inputTel = document.querySelector('.lesson__item input[type="tel"]');

var onChangeInput = function () {
  localStorage.setItem('name', inputText.value);
  localStorage.setItem('tel', inputTel.value);
};

var onGetValue = function () {
  inputText.value = localStorage.getItem('name');
  inputTel.value = localStorage.getItem('tel');
};

inputText.addEventListener('input', onChangeInput);
inputText.addEventListener('focus', onGetValue);
inputTel.addEventListener('input', onChangeInput);
inputTel.addEventListener('focus', onGetValue);
