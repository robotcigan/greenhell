$(document).ready(function() {

  let controller = new ScrollMagic.Controller();

  // hero rectangle
  let heroRectangle = new TweenMax.fromTo('.hero__rectangle', .5, {
    width: '100%'
  }, {
    delay: .3,
    width: 0
  });

  // hero img
  let heroImg = new TweenMax.fromTo('.hero__img', 1, {
    ease: Power4.easeInOut,
    scale: 1.1
  }, {
    delay: .4,
    scale: 1
  })

  // Header
  let anim1 = new TweenMax.to('.main-header', 1, {
    ease: Power4.easeInOut,
    delay: .5,
    opacity: 1
  });

  // Hero text
  let anim2 = new TweenMax.to('.hero__align', 1, {
    ease: Power4.easeInOut,
    opacity: 1
  });

  // let timeLine = new TimelineMax().add(anim1).add(anim2);

  // TEXT ANIMATIONS

  // Text blast
  // $('.h1').addClass('h1--hidden');
  // $('.h1').each(function() {
  //   new ScrollMagic.Scene({
  //     triggerElement: this
  //   })
  //   .on('start', function() {
  //     let item = this.triggerElement();
  //     $(item).removeClass('h1--hidden');
  //     $(item).addClass('h1--visible');
  //   })
  //   .addTo(controller);
  //   $(this).blast({delimiter: "character"});
  //   let counter = 0;
  //   $(this).find('.blast').each(function() {
  //     $(this).css('transition-delay', `${counter = counter + .03}s`);
  //   });
  // });
  $('.h1').blast({delimiter: "character"});
  let counter = 0;
  $('.h1').find('.blast').each(function() {
    $(this).css('transition-delay', `${counter = counter + .03}s`);
  });
  // $('.h1').removeClass('h1--hidden');
  // $('.h1').addClass('h1--visible');
  function some() {
    $('.h1').addClass('h1--visible');
  }
  setTimeout(some, 300)

  // $('.hero__description').addClass('hero__description--hidden');
  // $('.hero__description').each(function() {
  //   new ScrollMagic.Scene({
  //     triggerElement: this
  //   })
  //   .on('start', function() {
  //     let item = this.triggerElement();
  //     $(item).removeClass('hero__description--hidden');
  //     $(item).addClass('hero__description--visible');
  //   })
  //   .addTo(controller);
  //   $(this).blast({delimiter: "character"});
  //   let counter = 0;
  //   $(this).find('.blast').each(function() {
  //     $(this).css('transition-delay', `${counter = counter + .02}s`);
  //   });
  // });


  // Basic animation
  $('.basic-animation-container').each(function() {
    let basicAnimation = new TimelineMax()
      .staggerFromTo($(this).find('.basic-animation'), .5, {
        y: 48,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1
      }, .3, '-=.3')
    new ScrollMagic.Scene({
      reverse: false,
      triggerElement: this
    })
    .setTween(basicAnimation)
    .addTo(controller);
  });

});