'use strict'

var monthOne = document.querySelector('.subscription__month--one');
var monthSix = document.querySelector('.subscription__month--six');
var monthTwelve = document.querySelector('.subscription__month--twelve');
var plansOne = document.querySelector('.subscription__plans--one');
var plansSix = document.querySelector('.subscription__plans--six');
var plansTwelve = document.querySelector('.subscription__plans--twelve');

var onClickEffect = function (evt) {
  switch (true) {
    case evt.target.classList.contains('subscription__month--one'):
      plansOne.classList.remove('subscription__plans--none');
      plansOne.classList.add('subscription__plans--active');
      monthOne.classList.add('subscription__month--active');
      plansSix.classList.add('subscription__plans--none');
      plansSix.classList.remove('subscription__plans--active');
      monthSix.classList.remove('subscription__month--active');
      plansTwelve.classList.add('subscription__plans--none');
      plansTwelve.classList.remove('subscription__plans--active');
      monthTwelve.classList.remove('subscription__month--active');
      break;
    case evt.target.classList.contains('subscription__month--six'):
      plansSix.classList.remove('subscription__plans--none');
      plansSix.classList.add('subscription__plans--active');
      monthSix.classList.add('subscription__month--active');
      plansOne.classList.add('subscription__plans--none');
      plansOne.classList.remove('subscription__plans--active');
      monthOne.classList.remove('subscription__month--active');
      plansTwelve.classList.add('subscription__plans--none');
      plansTwelve.classList.remove('subscription__plans--active');
      monthTwelve.classList.remove('subscription__month--active');
      break;
    case evt.target.classList.contains('subscription__month--twelve'):
      plansTwelve.classList.remove('subscription__plans--none');
      plansTwelve.classList.add('subscription__plans--active');
      monthTwelve.classList.add('subscription__month--active');
      plansSix.classList.add('subscription__plans--none');
      plansSix.classList.remove('subscription__plans--active');
      monthSix.classList.remove('subscription__month--active');
      plansOne.classList.add('subscription__plans--none');
      plansOne.classList.remove('subscription__plans--active');
      monthOne.classList.remove('subscription__month--active');
      break;
  }
};

monthOne.addEventListener('click', onClickEffect);
monthSix.addEventListener('click', onClickEffect);
monthTwelve.addEventListener('click', onClickEffect);
monthOne.addEventListener('focus', onClickEffect);
monthSix.addEventListener('focus', onClickEffect);
monthTwelve.addEventListener('focus', onClickEffect);
