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
}

// public delete button
function deleteLog(data, index,el) {
    var str = `<div class="db">
                    <div class="delete">
                        <h5>Comfirm Delete?</h5>
                        <div class="delelte_content">Are you sure wish to delete?</div>
                        <div class="oper">
                            <span class="delete_button">Delete</span>
                            <span class="cancel_button">Cancel</span>
                        </div>
                    </div>
                </div>`;
    $('body').append(str);
    $('.cancel_button').click(function () {
        $('.db').remove();
    })
    $('.delete_button').click(function () {
        var dataList = data.filter((item, i) => {
            return item.id !== index;
        })
        $('.db').remove();
        $(el).remove();
    })
}

function _pre_render() {
    header_html = `
    <div class="w1200">
        <a class="logo" href="#">
            <img src="/community/img/Combined Shape.png" alt="Combined Shape">
            De Anza Oaks
        </a>
        <input type="text" placeholder="Search..." style="width: 188px;height: 37px;position: relative;top: 30px;left: 540px;border: solid 1px #393D44;padding-left: 10px;">
        <div class="btns clearfix">
            <img src="/community/img/Shape.png" alt="Shape" style="position: relative;left: -140px;top: 40px;z-index: 100000;">
            <img src="/community/img/dropdown.png" alt="dropdown" style="position: relative;left: -50px;top: 36px;z-index: 100000;">
            <a class="btns-search" href="javascript:;"> </a>
            <a class="btns-language" href="javascript:;">Log In</a>
            <div class="langOv">
                <div class="profile">
                    <a href="${data._metadata.root_url}/profile" style="border-bottom: 1px solid white;width: 100%;margin-left: -1px">
                        My Profile
                    </a>
                    <a href="javascript:;" class="logout">Log Out</a>
                </div>
            </div>
        </div>
        <div class="nav">
            <ul>
                <li class="curr">
                    <a class="on jump" href="${data._metadata.root_url}/home">Home</a>
                </li>
                <li class="curr">
                    <a class="on" href="${data._metadata.root_url}/aboutus">About Us</a>
                </li>
            </ul>
            <span class="navline"></span>
        </div>
    </div>`;
    $('.header').html(header_html);

    var username = data._current_user && data._current_user.display_name
    if (username) {
        $(".btns-language").text(username);
    }
    $('.logout').click(function () {
        //TODO: log out user
        logOutUser()
    })
}

function _post_render() {
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
}

function submitDynamicForm(action, method, values) {

    // create form
    var form = $('<form/>', {
        action: action,
        method: method
    });


    if(document.querySelector('meta[name=csrf-token]')){
      // add auth token
      form.append($('<input/>', {
        type: 'hidden',
        name: 'authenticity_token',
        value: document.querySelector('meta[name=csrf-token]').attributes.content.value
      }));
    }

    // add data
    $.each(values, function() {
        form.append($('<input/>', {
            type: 'hidden',
            name: this.name,
            value: this.value
        }));
    });

    //submit form
    form.appendTo('body').submit();
}

function logInUser(email, password) {
    submitDynamicForm(
      data._metadata.root_url + '/session',
      'POST',
      [{
          name: 'session_form[email]',
          value: email
      },
          {
              name: 'session_form[password]',
              value: password
          },
      ]
    );
}

function logOutUser() {
    submitDynamicForm(data._metadata.root_url + '/session/logout', 'POST', [])
}
