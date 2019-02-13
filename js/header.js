	
$(function(){
    win = $(window);
    //showNav()
    innav()
    // 导航栏定位
    function showNav(){
        var urlstr = location.href;
        var urlstatus=false;
        $(".nav li a").each(function () {
            //console.log($(this).attr('href'));
            if ((urlstr + '/').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
              $(this).parent().addClass('curr'); urlstatus = true;      
            } else {
              $(this).parent().removeClass('curr');urlstatus = false;
            }
        });
    };
//头部滑块
var slip2=$(".navline"),li2=$(".nav li"),a2=$(".nav li.curr"),i2="",left2="15.5",animatetime2=300;
    var Slider2 =new Slider(slip2,li2,a2,i2,left2,animatetime2);
    // 二级导航
    function innav(){
        var li = $('.nav ul li'),
            sideli = $('.sideNav'),
            innavbg = $('.innavbg');
        li.hover(function(){
            index = $(this).index();
            $(this).find(sideli).stop().fadeIn();
            inshow(index);
        },function(){
            $(this).find(sideli).stop().fadeOut();
        });
        function inshow(index){
            if (index == 3) {
                innavbg.stop().fadeOut();
            }else if (index > 0 && index < 9 && index !=7) {
                innavbg.stop().fadeIn();           
            }else {
                innavbg.stop().fadeOut();
            };

        };
        // sideli.mouseleave(function(){
        //     innavbg.stop().fadeOut();
        // });
        $('body ,.innavbg,.sideNav').mouseleave(function(){
            innavbg.stop().fadeOut();
        });
        $('.btns').mouseenter(function(){
            $(innavbg,sideli).stop().fadeOut();
        });
    };

    // 侧边栏
    $('.menu,.foot-sitemap').click(function(){
        $('.mask').stop().fadeIn();
        $('.sitemap').animate({'right':'0%'},500)
    });
    $('.mask,.sitemap-close').click(function(){
        $('.mask').stop().fadeOut();
        $('.sitemap').stop().animate({'right':'-100%'},500)
    })
    // 搜索
    // $('.btns-search').hover(function(){
    //     $('.btns input').animate({'width':'180px','opacity':1},300);
    //     $('.profile').stop().animate({'top':'-100%'},200)
    // });
    // $('.btns').hover(function(){
    // },function(){
    //      $('.btns input').animate({'width':'100px','opacity':1},0);
    // });
    // 语言版本
    $('.btns-language').hover(function(){
        $('.profile').stop().animate({'top':'0'},200);
        $('.btns input').stop().animate({'width':'0px','opacity':0},300);

    });
    $('.btns,.langOv').hover(function(){
        //.stopPropagation();
    },function(){
        $('.profile').stop().animate({'top':'-100%'},200);
        
    })



})

