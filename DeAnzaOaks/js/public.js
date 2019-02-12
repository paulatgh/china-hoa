
/* 
* @Title:  共用js
* @Author:锐诺互动-设计支持
* @Phone: 0755-25526820
* @Date:   2017-4-19 11:43:20
* @Last Modified time:
*/

$(window).on('load', function () {
// $(window).on('load', function () {
    var url = window.location.href;
    if (url.indexOf('aspx') < 0 && url.indexOf('html') > 0) {
        $(".header").load("https://www.bgy.com.cn/js/header.html");
        $(".footer").load("https://www.bgy.com.cn/js/footer.html");
   
    }
     // setTimeout(function(){
     //     $('#loading').fadeOut('show');
     //    },1000);
});

// 子导航
window.onload=function(){


    setSlip();

}
  
   

// var slip1=$(".sub-navslip"),li1=$(".subNav li"),a1=$(".subNav li.curr"),i1="",left1="5",animatetime1=200;
//  var Slider1 =new Slider(slip1,li1,a1,i1,left1,animatetime1);
    //滑块
    function Slider(slip,li,a,i,left,animatetime){
        this.$slip = slip;
        this.$li = li;
        this.$a = a;
        this.$i = i;
        this.$left=left;
        this.$animatetime=animatetime;
        var _this = this;
        this.dingwei=function(){
            this.$slip.stop().animate({
                width:_this.$a.width() + 'px',
                left:parseInt(_this.$a.position().left) + parseInt(_this.$left)  + 'px'
            },_this.$animatetime)
        };
        this.bindevent=function(){
            var _this = this;
            this.$li.hover(function(){
                _this.$slip.stop().animate({
                    width:$(this).width() + 'px',
                    left:parseInt( $(this).position().left )+ parseInt( _this.$left) + 'px'
                }, _this.$animatetime);
            },function(){
                _this.dingwei();
            })
        };
        this.intr=function(){
            this.dingwei();
            this.bindevent();
        };
        this.intr();
    };
//滑块
    

       function setSlip(){
        var slip = $('.sub-navslip');
        var a = $('.subNav li.curr');
        //初始化滑块
        slip.css({
            'width':a.width()+ 10,
            'left' :parseInt(a.position().left) +  -1 +'px'
        });
        $('.subNav li').mouseenter(function(){
            //移动滑块
            slip.stop().animate({
                width: $(this).width()+10,
                left:  parseInt($(this).position().left) + -1 +'px'
            },300);
        });
        $('.subNav').mouseleave(function(){                
            //移动滑块
            slip.stop().animate({
                width: a.width()+10,
                left: parseInt(a.position().left) + -1 +'px'
            },500);
        });
    };

//放回顶部
    $(window).scroll(function(){
        var scrollValue=$(window).scrollTop();
        scrollValue > 100 ? $('.control-up').stop().css({'bottom':'70px'}):$('.control-up').stop().css({'bottom':'0px'});
    });
    $('.control-up').click(function(){
        $('body,html').animate({
            scrollTop:0
        },400)
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
        $(this).parents('[name="layout-select"]').find('input').val(val);
        $('[name="layout-select"] ul').fadeOut(10);
        e.stopPropagation();
    });
    $(document).click(function () {
        $('[name="layout-select"] ul').slideUp(200);
    });

    //$('.proDeta-wx a').hover(function(){
    //  $('.proDeta-code').animate({'width':'146px'},400);
    //  //console.log(11);
    //},function(){
    //  $('.proDeta-code').animate({'width':'0px'},400);

    //})


