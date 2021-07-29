$(document).on('click','.request-btn',function(){
    $('.request-contact').addClass('request-active');

});

$(document).on('click','.request-form-cancel',function(){
    $('.request-contact').removeClass('request-active');
    
});
