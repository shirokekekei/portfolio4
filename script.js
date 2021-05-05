
//ヘッダーの高さが変わるtoggle
// $('#drawer').click(
//   function(){
//     //クリックされた時の処理
//     $(".drawer-class").slideToggle();
//         // $header.addClass('fixed')
//         // $header.slideUp()
//   }
// );

//ヘッダーの高さが変わらないtoggle
$('#drawer').click(
    function () {
    $('.course-toggle').slideToggle()
    $('.course-toggle').toggleClass("active")
});

//topに戻るボタン
    $(function(){
        var pagetop = $('#page-top');
        // ボタン非表示
        pagetop.hide();
        // 80px スクロールしたらボタン表示
        $(window).scroll(function () {
           if ($(this).scrollTop() > 80) {
                pagetop.fadeIn();
           } else {
                pagetop.fadeOut();
           }
        });
        pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
           return false;
        });
    });
      

//モーダルウィンドウ処理
$(function () {
    $(".js-modal-open").each(function () {
        $(this).on("click", function () {
            var target = $(this).data('target')
            var modal = document.getElementById(target)
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
});
 
// $(function () {
//     $('course-wrapper course-item').click(function () {
//         var image00 = $('this').find('img').attr('src')
//     })
//     var modalWrapper = $('.modal-wrapper');
//     var image = $('.image');
//     var modalImage = $('.modal-image');

//     $(image).click(function () {
//         modalImage.fadeIn();
//     })
//   });
