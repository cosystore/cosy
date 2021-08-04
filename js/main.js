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
            pause: 5000,
            speed: 2000,
        });
    }); 


 /*---------- login-register event ----------*/
    /*-- login-box --*/
    $(document).on('click','.user-icon, .already-account, .openSignin, .login-checkout',function(){
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
    $(document).on('click','.form-submit',function(){
        $('.form').addClass('confirm-active').removeClass('forgot-active')
    });     
    /*-- cancel-login --*/
    $(document).on('click','.form-cancel, .confirm-btn',function(){
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
 





