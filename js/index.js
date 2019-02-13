$(window).on('load', function () {
// $(window).on('load', function () {
    var url = window.location.href;
    if (url.indexOf('aspx') < 0 && url.indexOf('html') > 0) {
        // $(".header").load("https://www.bgy.com.cn/js/header.html");
        // $(".footer").load("https://www.bgy.com.cn/js/footer.html");
   
    }
     // setTimeout(function(){
     //    	$('#loading').fadeOut('show');
     //    },1000);
});

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


$('.main-switch-top a').click(function(){
	$(this).addClass('curr').siblings().removeClass('curr');
	var manin = $(this).index();
		$('.main-switch-item').hide();
    	$('.main-switch-item').eq(manin).fadeIn();
})


// 时间
		function timebar(){
			$('.mas-tib').stop().animate({ 'width' : 350+'px' },6000).animate({ 'width' : 0 },0);
			 $('.ms-nav-next').click();
		};

	// 单间右边
	function clickAdd(){
		$('#masterslider').delegate('.ms-nav-next','click', function(){
			i++;
			if(i > ileng){
					i = 1;
				};
			$('.ban-len i').html(i);
		})
	};
	// 单间左边
	function clickReduce(){
		$('#masterslider').delegate('.ms-nav-prev','click', function(){
			i--;
			if(i < 1){
				i = ileng;
			};
			$('.ban-len i').html(i);
		})
	};