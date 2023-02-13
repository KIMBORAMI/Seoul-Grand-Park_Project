$(function () {
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    var index=1;
    moveSlider(index);
    $('.left_control').click(function () {
        if(index > 1) {
            index--;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',-3600);
            index=5;
            moveSlider(index);
        }
    });
    $('.right_control').click(function () {
        if(index < 5) {
            index++;
            moveSlider(index);
        }else {
            $('.slider_panel').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    //이미지 슬라이드 구현
    function moveSlider(index) {
        $('.slider_panel').animate({
            left:-(index*400)
        },'slow');
        setTimeout(moveSlider, 5000); 
    }
    moveSlider();
    
});






