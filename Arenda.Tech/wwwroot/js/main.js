



document.onkeydown=key;function key(){window.status=event.keyCode;if(event.keyCode==85&&event.ctrlKey)return false;if(event.keyCode==17)return false}window.onkeydown=function(evt){if(evt.keyCode==123)return false};window.onkeypress=function(evt){if(evt.keyCode==123)return false};document.ondragstart=test;document.onselectstart=test;document.oncontextmenu=test;function test(){return true}document.oncontextmenu;function catchControlKeys(event){var code=event.keyCode?event.keyCode:event.which?event.which:null;if(event.ctrlKey){if(code==117)return false;if(code==85)return false;if(code==99)return false;if(code==67)return false;if(code==97)return false;if(code==65)return false}}








var ui = {



  navBtn: function() {

    $('.navbar-toggle').click(function(e){
      $(this).toggleClass('active')
      e.preventDefault();
    });

  },

  headerNav: function() {
    $('header .navbar-collapse a, .scrollme').bind('click', function(event) {
        var $anchor = $(this).attr('href');
          $('html, body').stop().animate({
              scrollTop: $($anchor).offset().top-$('.header-btm').outerHeight()+1
          }, 700);
          event.preventDefault();
    });
  },

  scroll: function() {
    if ($(window).scrollTop()>$('.header-top').offset().top+$('.header-top').outerHeight()-1) {
      //$('header').addClass('fixed');
    } else {
      //$('header').removeClass('fixed');
    };

    var scrTop = $(window).scrollTop();
    $('section').each(function() {
      var topItemCont = $(this).offset().top-$('.header-btm').outerHeight()-10;
      var bottomItemCont =  $(this).offset().top + $(this).outerHeight()-$('.header-btm').outerHeight()-1;
      var id = $(this).attr('id');
      if (scrTop>topItemCont && scrTop<bottomItemCont && scrTop+$(window).height()<$('body').outerHeight()) {
        $('header .navbar-collapse a[href=#'+id+']').closest('li').addClass('active').siblings().removeClass('active');
      } else if (scrTop+$(window).height()>=$('body').outerHeight()) {
        $('header .navbar-nav li').removeClass('active');
        $('header .navbar-nav li:last-of-type').addClass('active');
      } else {
        $('header .navbar-collapse a[href=#'+id+']').closest('li').removeClass('active');
      };
    });
  },

  mainSlider: function() {
    if ($('.top-slider').length>0) {
      $('.top-slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          speed: 800,
          arrows: true,
          dots: false,
          responsive: [
            {
              breakpoint: 1400,
              settings: {
                arrows: false
              }
            }]
      })
    }
  },

  carousel: function() {
    if ($('.premium-container .carousel').length>0) {
      $('.premium-container .carousel').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 6000,
          speed: 800,
          arrows: false,
          swipeToSlide: true,
          adaptiveHeight: true,
          asNavFor: '.carousel-info',
          centerMode: true,
          centerPadding: '0',
            responsive: [
            {
              breakpoint: 992,
              settings: {}
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false
              }
            }
          ]
      });
      $('.premium-container .carousel-info').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          swipeToSlide: true,
          autoplaySpeed: 6000,
          speed: 800,
          arrows: true,
          adaptiveHeight: true,
          asNavFor: '.carousel',
          centerMode: true,
          centerPadding: '0',
      });
    }
    if ($('.reviews-container  .carousel').length>0) {
      $('.reviews-container .carousel').slick({
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 6000,
          speed: 800,
          arrows: false,
          adaptiveHeight: true,
          dots: true,
      });
    }
  },

  

  akardion: function() {
    $('.akardion .head').click(function(e){
      $(this).closest('.akardion').find('.first-open').removeClass('first-open');
      $(this).closest('.item').addClass('open').siblings().removeClass('open');
      $(this).closest('.item').find('.desc').stop().slideDown();
      $(this).closest('.item').siblings().find('.desc').stop().slideUp();
      e.preventDefault();
    });
  },


  validation: function() {
    $('.rf').each(function(){
      var item = $(this),

      btn = item.find('.btn');
      function checkInput(){
        item.find('select.required').each(function(){
          if($(this).val() == '0'){

            // Если поле пустое добавляем класс-указание
            $(this).parents('.form-group').addClass('error');
            $(this).parents('.form-group').find('.error-message').show();

          } else {
            // Если поле не пустое удаляем класс-указание
            $(this).parents('.form-group').removeClass('error');
          }
        });
        item.find('input[type=text].required').each(function(){
          if($(this).val() != ''){
            // Если поле не пустое удаляем класс-указание
            $(this).removeClass('error');
          } else {
            // Если поле пустое добавляем класс-указание
            $(this).addClass('error');
            $(this).parent('.form-group').find('.error-message').show();

          }
        });

        item.find('input[type=password].required').each(function(){
          if($(this).val() != ''){
            // Если поле не пустое удаляем класс-указание
            $(this).removeClass('error');
          } else {
            // Если поле пустое добавляем класс-указание
            $(this).addClass('error');
            $(this).parent('.form-group').find('.error-message').show();

          }
        });
        if($('.pass1',item).length != 0){
          var pass01 = item.find('.pass1').val();
          var pass02 = item.find('.pass2').val();
          if(pass01 != pass02){
            $('.pass1, .pass2',item).addClass('error');


            $('.pass1').parent('.form-group').find('.error-message').show();
            $('.pass2').parent('.form-group').find('.error-message').show();
          }
        }
        item.find('textarea.required').each(function(){
          if($(this).val() != ''){
            // Если поле не пустое удаляем класс-указание
            $(this).removeClass('error');
          } else {
            // Если поле пустое добавляем класс-указание
            $(this).addClass('error');
            $(this).parent('.form-group').find('.error-message').show();

          }
        });
        item.find('input[type=email]').each(function(){
          var regexp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;
          var $this = $(this);
          if($this.hasClass('required')){

            if (regexp.test($this.val())) {
              $this.removeClass('error');
            }else {
              // Если поле пустое добавляем класс-указание
              $this.addClass('error');
              $(this).parent('.form-group').find('.error-message').show();
            }
          }else{
            if($this.val() != ''){
              if (regexp.test($this.val())) {
                $this.removeClass('error');
              }else {

              $this.addClass('error');
              $(this).parent('.form-group').find('.error-message').show();
              }
            }else{
              $this.removeClass('error');
            }
          }
        });

        item.find('input[type=checkbox].required').each(function(){
          if($(this).is(':checked')){
            // Если поле не пустое удаляем класс-указание
            $(this).removeClass('error');
          } else {
            // Если поле пустое добавляем класс-указание
            $(this).addClass('error');
            $(this).parent('.form-group').find('.error-message').show();
          }
        });
      }
      btn.click(function(){
        checkInput();
        var sizeEmpty = item.find('.error:visible').size();
        if(sizeEmpty > 0){
          return false;
        } else {
          // Все хорошо, все заполнено, отправляем форму

          item.submit();
          $.fancybox.close();
        }
      });
     });
  },

  mainInit: function () {
    this.navBtn();
    this.mainSlider();
    this.validation();
    this.carousel();
    this.akardion();
    this.scroll();
    this.headerNav();
  }
};
$(document).ready(function(){
        ui.mainInit();
  
  
        var top_show = 280; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
        var speed = 500; // Скорость прокрутки
    	var $backButton = $('.btn-up');
        $backButton.hide();
        $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    		/* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    		if ($(this).scrollTop() > top_show) {
    			$backButton.fadeIn();
    		}
    		else {
    			$backButton.fadeOut();
    		}
            
    	});
        
        $backButton.click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    		/* Плавная прокрутка наверх */
    		scrollto(0, speed);
            return false;
    	});
        
        
        

        // scrollto
    	window.scrollto = function(destination, speed) {
    		if (typeof speed == 'undefined') {
    			speed = 800;
    		}
    		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination-60}, speed);
    	};
    	$("a.scrollto").click(function () {
    		var elementClick = $(this).attr("href")
    		var destination = $(elementClick).offset().top;
    		scrollto(destination);
    		return false;
    	});
        // end scrollto 
        
        
        
        
        
        // Animation        
        
        if ( !$("html").hasClass("touch") ){
            
            if ( !$("body").hasClass("no-animate") ){

                
                
                
                /*$('.action-section .row > div:first-of-type').viewportChecker({
                    classToAdd: 'visible animated fadeInLeft',
                    offset: 200
                });
                
                $('.action-section .row > div:last-of-type').viewportChecker({
                    classToAdd: 'visible animated fadeInRight',
                    offset: 200
                });*/
                
                
                
                $('.advantages-container > .container > .row .element').addClass("no-visible").viewportChecker({
                    classToAdd: 'visible animated fadeInUp',
                    offset: 200
                });
                
                $('.leave-request-container .inner').addClass("no-visible").viewportChecker({
                    classToAdd: 'visible animated fadeInUp',
                    offset: 200
                });
                
                $('.info-conainer .element-left').addClass("no-visible").viewportChecker({
                    classToAdd: 'visible animated fadeInLeft',
                    offset: 200
                });
                
                $('.info-conainer .element-right').addClass("no-visible").viewportChecker({
                    classToAdd: 'visible animated fadeInRight',
                    offset: 200
                });
                
                $('.indicators-container').addClass("no-visible").viewportChecker({
                    offset: 200,
                    classToAdd: 'visible animated fadeInUp',
                    callbackFunction: function(elem, action){
                        $('.indicators-container .num').each(function(){
                            var numb = $(this).data('num');
                            var speed = $(this).data('speed');
                            if (!$(this).hasClass('worked')) {
                              $(this).addClass('worked');
                              $(this).animateNumber({ number: numb  }, speed);
                            }
                        });
                    }
                    
                });
                
                
                
                
            }
        }         
                        
                 
         
        
// End animation    



        $('.fancybox').fancybox({
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        $('.fancyboxModal').fancybox({
            autoResize:true,            
            padding: 0,
            openEffect  : 'fade',
            closeEffect : 'fade',
            nextEffect  : 'none',
            prevEffect  : 'none',
            fitToView : false, 
            maxWidth: '100%',
            scrolling : "no",
            helpers: {
            overlay: {
              locked: false
            }
            }
        });
        
        
        var theme;
        $('.fancyboxModal').click(function(){
            var theme = $(this).data('theme');
            $('.theme-input').val(theme);
        });
        
        
        // инициализация плагина jquery.maskedinput.js

        if ( !$("html").hasClass("touch") ){
            windWidth = window.innerWidth;
            if(windWidth > 992){
                if(typeof $.mask !== "undefined"){
                    $.mask.definitions['~']='[+-]';
                    $('.tel').mask('+7(999) 999-9999');
                }
            }
        }


// end
        
        var dates = $( "#datepicker, #datepicker2" ).datepicker({
        dateFormat: 'dd.mm.yy',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            firstDay: 1,
            changeYear: false,
            changeMonth: false,
            yearRange: '-100:+0',
            minDate: 0,
        onSelect: function( selectedDate ) {
        var option = this.id == "datepicker" ? "minDate" : "maxDate",
        instance = $( this ).data( "datepicker" ),
        date = $.datepicker.parseDate(
        instance.settings.dateFormat ||
        $.datepicker._defaults.dateFormat,
        selectedDate, instance.settings );
        dates.not( this ).datepicker( "option", option, date );
        $(this).change();
        }
        });
        
        
        $('#birthday').datepicker({
            dateFormat: 'dd.mm.yy',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            firstDay: 1,
            changeYear: true,
            changeMonth: true,
            yearRange: '-100:+0'
        });
        
        
        
        
        // countdown (счетчик для акций)
        
        
        var now = new Date();
        var actionYear = now.getFullYear();
        var actionMonth = now.getMonth()+1;
        var actionDay = now.getDate();
        
        /*
        инструкция: 
            счетчик по умолчанию обновляется каждые сутки, то есть акция идёт непрерывно.
            чтобы выставить реальную дату окончания акции необходимо раскомментировать переменные ниже (убрать в начале строки двойной слэш)
            и выставить им необходимые значения:
            - actionYear - это год наступления события
            - actionMonth - это месяц наступления события
            - actionDay - это день наступления события
            отсчет идет от начала суток, то есть от 00ч 00минут и до конца суток выставленной даты
            
            если поставить actionYear = 2015 (прошлая дата),  то счетчик прекратит отсчет и будет показывать нули
            
            чтобы совсем не показывать блок с акциями откройте html код, найдите блок с акциями <div class="top-form-box"> и допишите класс hide
            получится вот так <div class="top-form-box hide">
        */
        
        //actionYear = 2015; 
        //actionMonth = 07;
        //actionDay = 22;
        
        
        
        
    	var actionDate = new Date(actionYear, actionMonth -1, actionDay + 1),
        nowDate = new Date();
    	
    	if( actionDate > nowDate){
    		
    		ts = (new Date()).getTime() + 10*24*60*60*1000;
    	}
    		
    	$('#countdown').countdown({
    		timestamp	: actionDate
    	});
        
        
        
        
        // countdown (счетчик для акций)
        
        
        
        // mixitup init

            $('#catalog').mixItUp();
        
        // mixitup init end 
  
  
  
}); // end document.ready








$(window).load(function() { 
    setTimeout(function() { 
        $('.preloader').addClass('hid');
    }, 10);
    
});


$(window).resize(function(){

}); // end window.resize

$(window).scroll(function () {
  ui.scroll();
}); // end window.scroll



