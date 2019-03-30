
$(function() {

	$('.top-bar .icon-side').on('click',function() {
      $(this).hide();
      $('.icon-close').css('display','block');
      $('.side-menu').addClass('menushow');
      $('.mask').show();
      console.log(123123);
      
      $('html').addClass('no-scroll')
    })

    $('.top-bar .icon-close,.mask').on('click',function() {
      $('.icon-close,.mask').hide();
      $('.icon-side').css('display','block');
      $('.side-menu').removeClass('menushow');
      $('html').removeClass('no-scroll')
    })

    $('.js-see-word').on('click',function() {

      if( $(this).hasClass('icon-unsee') ) {
        $(this).removeClass('icon-unsee').addClass('icon-see');
        $(this).siblings('input').prop('type','text')
      }else {
         $(this).removeClass('icon-see').addClass('icon-unsee');
          $(this).siblings('input').prop('type','password')
      }
    })

    $('.type-name').on('click',function() {
        $('.code-list').toggle();
    })

    $('.code-list li').on('click',function() {
      var text = $(this).text();
      $('.type-name').text(text);
      $('.code-list').hide();
    })

    $('.phone-type').on('click',function() {
      $('.phone-list').toggle();
    })

    $('.phone-list li').on('click',function() {
      var text = $(this).children('span').text();
      var iconClass = $(this).children('i').prop("className");
      
      $('.phone-type').children('span').text(text);
      $('.phone-type').children('i').removeClass().addClass(iconClass);
      $('.phone-list').hide();
    })

    $('.declare-box > span').on('click',function() {
        $(this).toggleClass('declare-on');
    })

})