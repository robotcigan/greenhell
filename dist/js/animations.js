'use strict';

$(document).ready(function () {

  var controller = new ScrollMagic.Controller();

  // hero img
  var heroImg = new TweenMax.fromTo('.hero__img', 1, {
    ease: Power4.easeInOut,
    scale: 1.2
  }, {
    scale: 1
  });

  // Header
  var anim1 = new TweenMax.to('.main-header', 1, {
    ease: Power4.easeInOut,
    delay: .5,
    opacity: 1
  });

  // Hero text
  var anim2 = new TweenMax.to('.hero__align', 1, {
    ease: Power4.easeInOut,
    opacity: 1
  });

  // let timeLine = new TimelineMax().add(anim1).add(anim2);

  // TEXT ANIMATIONS

  // Text blast
  $('.h1').addClass('h1--hidden');
  $('.h1').each(function () {
    new ScrollMagic.Scene({
      triggerElement: this
    }).on('start', function () {
      var item = this.triggerElement();
      $(item).removeClass('h1--hidden');
      $(item).addClass('h1--visible');
    }).addTo(controller);
    $(this).blast({
      customClass: "some",
      delimiter: "character"
    });
    var counter = 0;
    $(this).find('.blast').each(function () {
      $(this).css('transition-delay', (counter = counter + .03) + 's');
    });
  });

  // Basic animation
  $('.basic-animation-container').each(function () {
    var basicAnimation = new TimelineMax().staggerFromTo($(this).find('.basic-animation'), .5, {
      y: 48,
      opacity: 0
    }, {
      y: 0,
      opacity: 1
    }, .3, '-=.3');
    new ScrollMagic.Scene({
      reverse: false,
      triggerElement: this
    }).setTween(basicAnimation).addTo(controller);
  });
});