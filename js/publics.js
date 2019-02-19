
/* 
* @Title:  共用js
*/

$(window).on('load', function () {
    // $(window).on('load', function () {
    var url = window.location.href;
    if (url.indexOf('aspx') < 0 && url.indexOf('html') > 0) {
    }

});
window.onload = function () {

    var slip = $('.sub-navslip');
    slip.length && setSlip();

}


function Slider(slip, li, a, i, left, animatetime) {
    this.$slip = slip;
    this.$li = li;
    this.$a = a;
    this.$i = i;
    this.$left = left;
    this.$animatetime = animatetime;
    var _this = this;
    this.dingwei = function () {
        this.$slip.stop().animate({
            width: _this.$a.width() + 'px',
            left: parseInt(_this.$a.position().left) + parseInt(_this.$left) + 'px'
        }, _this.$animatetime)
    };
    this.bindevent = function () {
        var _this = this;
        this.$li.hover(function () {
            _this.$slip.stop().animate({
                width: $(this).width() + 'px',
                left: parseInt($(this).position().left) + parseInt(_this.$left) + 'px'
            }, _this.$animatetime);
        }, function () {
            _this.dingwei();
        })
    };
    this.intr = function () {
        this.dingwei();
        this.bindevent();
    };
    this.intr();
};
//滑块
function setSlip() {
    var slip = $('.sub-navslip');
    var a = $('.subNav li.curr');
    //初始化滑块
    slip.css({
        'width': a.width() + 10,
        'left': parseInt(a.position().left) + -1 + 'px',
    });
    $('.subNav li').mouseenter(function () {
        //移动滑块
        slip.stop().animate({
            width: $(this).width() + 10,
            left: parseInt($(this).position().left) + -1 + 'px',
        }, 300);
    });
    $('.subNav').mouseleave(function () {
        //移动滑块
        slip.stop().animate({
            width: a.width() + 10,
            left: parseInt(a.position().left) + -1 + 'px',
        }, 500);
    });
};

//放回顶部
$(window).scroll(function () {
    var scrollValue = $(window).scrollTop();
    scrollValue > 100 ? $('.control-up').stop().css({ 'bottom': '70px' }) : $('.control-up').stop().css({ 'bottom': '0px' });
});
$('.control-up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400)
})


//下拉菜单
$('body').on('click', '[name="layout-select"]', function (e) {
    $('[name="layout-select"]').find('ul').stop().slideUp();
    $(this).find('ul').stop().slideDown();
    e.stopPropagation();
});
$('[name="layout-select"] li').hover(function (e) {
    $(this).toggleClass('on');
    e.stopPropagation();
});
$('body').on('click', '[name="layout-select"] li', function (e) {
    var val = $(this).text();
    var estateid = $(this).val();
    $(this).parents('[name="layout-select"]').find('input').val(val);
    $("#estateid").val(estateid);
    $('[name="layout-select"] ul').fadeOut(10);
    e.stopPropagation();
});
$(document).click(function () {
    $('[name="layout-select"] ul').slideUp(200);
});
//下拉菜单
$('body').on('click', '[name="layout-selects"]', function (e) {
    $('[name="layout-selects"]').find('ul').stop().slideUp();
    $(this).find('ul').stop().slideDown();
    e.stopPropagation();
});
$('[name="layout-selects"] li').hover(function (e) {
    $(this).toggleClass('on');
    e.stopPropagation();
});
$('body').on('click', '[name="layout-selects"] li', function (e) {
    var val = $(this).text();
    var newsid = $(this).val();

    $(this).parents('[name="layout-selects"]').find('input').val(val);
    $("#newsid").val(newsid);

    $('[name="layout-selects"] ul').fadeOut(10);
    e.stopPropagation();
});
$(document).click(function () {
    $('[name="layout-selects"] ul').slideUp(200);
});
//下拉菜单
$('body').on('click', '[name="layout-selectse"]', function (e) {
    $('[name="layout-selectse"]').find('ul').stop().slideUp();
    $(this).find('ul').stop().slideDown();
    e.stopPropagation();
});
$('[name="layout-selectse"] li').hover(function (e) {
    $(this).toggleClass('on');
    e.stopPropagation();
});
$('body').on('click', '[name="layout-selectse"] li', function (e) {
    var val = $(this).text();
    var newsid = $(this).val();

    $(this).parents('[name="layout-selectse"]').find('input').val(val);
    $("#mingcheng").val(newsid);

    $('[name="layout-selectse"] ul').fadeOut(10);
    e.stopPropagation();
});
$(document).click(function () {
    $('[name="layout-selectse"] ul').slideUp(200);
});
//下拉菜单选择客户类别
$('body').on('click', '[name="layout-selectses"]', function (e) {
    $('[name="layout-selectses"]').find('ul').stop().slideUp();
    $(this).find('ul').stop().slideDown();
    e.stopPropagation();
});
$('[name="layout-selectses"] li').hover(function (e) {
    $(this).toggleClass('on');
    e.stopPropagation();
});
$('body').on('click', '[name="layout-selectses"] li', function (e) {
    var val = $(this).text();
    var leibie = $(this).val();
    $(this).parents('[name="layout-selectses"]').find('input').val(val);
    $("#leibie").val(val);

    if (val == "业主" || val == "业主家人/朋友") {
        $("#show1").removeAttr("style");
        $("#show2").removeAttr("style");
    } else {
        $("#show1").attr("style", "display:none;");
        $("#show2").attr("style", "display:none;");
    }


    $('[name="layout-selectses"] ul').fadeOut(10);
    e.stopPropagation();
});
$(document).click(function () {
    $('[name="layout-selectses"] ul').slideUp(200);
});



//$('.proDeta-wx a').hover(function () {
//    $('.proDeta-code').animate({ 'width': '146px' }, 400);
//    //console.log(11);
//}, function () {
//    $('.proDeta-code').animate({ 'width': '0px' }, 400);

//})



