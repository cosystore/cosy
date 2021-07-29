/*---------- event search bar ----------*/
    $(document).on('click','.home-search', function(){
        $('.home-search-form').addClass('home-search-form-active')
    });
    $(document).on('click','.home-search-cancel', function(){
        $('.home-search-form').removeClass('home-search-form-active')
    });    

/** ---------- Slick-slider-banner ---------- */
    $(document).ready(function() {
        $('#adaptive').lightSlider({
            adaptiveHeight:true,
            item:1,
            slideMargin:0,
            loop:true,
            auto:true,
            pause: 3500,
            speed: 1500,
        });
    }); 

/** ---------- Slick-slider-brands ---------- */
    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            item: 5,
            loop:true,
            auto:true,
            speed: 1000,
            responsive : [
                {
                    breakpoint:1300,
                    settings: {
                        item:4,
                        slideMove:1,
                      }
                },
                {
                    breakpoint:1080,
                    settings: {
                        item:3,
                        slideMove:1,
                      }
                },
                {
                    breakpoint:800,
                    settings: {
                        item:2,
                        slideMove:1,
                      }
                },
                {
                    breakpoint:540,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ],
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
      });

 /*---------- login-register event ----------*/
    /*-- login-box --*/
    $(document).on('click','.user-icon, .already-account, .openSignin, .confirm-btn, .login-checkout',function(){
        $('.form').addClass('home-user-form-active')
    });

    /*-- forget-password-box --*/
    $(document).on('click','.forget-btn, .helpSignin',function(){
        $('.form').addClass('forgot-active').removeClass('home-user-form-active')
    });
    /*-- return login-box form forget-password-box  --*/
    $(document).on('click','.already-account',function(){
        $('.form').addClass('home-user-form-active').removeClass('forgot-active')
    });
    /*-- confirm-box --*/
    $(document).on('click','.submit-btn',function(){
        $('.form').addClass('confirm-active').removeClass('forgot-active')
    });     
    /*-- cancel-login --*/
    $(document).on('click','.form-cancel',function(){
        $('.form').removeClass('home-user-form-active').removeClass('confirm-active').removeClass('forgot-active')
    });

/*---------- Making Navigation Move When Scroll ----------*/
    $(window).scroll(function(){
        if($(document).scrollTop() > 20){
            $('.navbar').addClass('fix-nav');
        }
        else{
            $('.navbar').removeClass('fix-nav');
        }
    });

/** ---------- Click-move-on-top ---------- */
    window.addEventListener('scroll', function(){
        var scroll = document.querySelector('.scrollTop');
        scroll.classList.toggle("active", window.scrollY > 20)
    })
    function scrollToTop(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
 





