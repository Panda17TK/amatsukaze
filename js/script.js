/* Scrollify */
$.scrollify({
    section:'.box', // 対象要素を指定
    easing: 'swing', // イージングを指定
    scrollSpeed: 600, // スクロール時の速度
    updateHash: false, // スクロール時アドレスバーのURLを更新
    after: function(index, sections) {
        var currentSection = sections[index];
        var sectionID = $(currentSection).attr('id');

        // デフォルトの色（最初のセクションの色）
        $('.hamburger div').css('background-color', '#fff');

        // セクションIDに基づいてアイコンの色を変更
        if (sectionID !== 'box1') { // 'first-section'は最初のセクションのIDに置き換えてください
            $('.hamburger div').css('background-color', '#000'); // 黒に変更
        }

        // フェードインアニメーションの追加
        $(currentSection).find('.content').addClass('fade-in');
    }
});

$('#next-section').click(function(){
    $.scrollify.next();
});

function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.classList.toggle('active');
}

// ハンバーガーアイコンのクリックでメニューを開閉
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// メニューオーバーレイが表示されているときにクリックすると閉じる
document.querySelector('.menu-overlay').addEventListener('click', function(e) {
    if (e.target === e.currentTarget) {
        toggleMenu();
    }
});

// メニュー項目をクリックした後にメニューを閉じる
document.querySelectorAll('.menu-content a').forEach(function(link) {
    link.addEventListener('click', function() {
        toggleMenu(); // メニューを閉じる
    });
});

jQuery(function($) {
    $(window).on('load scroll', function (){
    
    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
    
        var boxOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();
    
        if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
        }
    });
    });
    })
/*
$(window).on('resize',function(){
    if(current){
        var currentScrl = $('.box').eq(current).offset().top;
        $(window).scrollTop(currentScrl);
    }
});
*/
/* navigator */