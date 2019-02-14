var render = function () {
    var event_template = $('#event_template').html();
    var event_template2 = $('#event_template2').html();
    var event_template3 = $('#event_template3').html();

    Mustache.parse(event_template);
    var a = []
    $.each(data.user, function (index, item) {
        a = item.username.filter((val) => val.name.substr(0, 1) === 'A')
    });
    var b = []
    $.each(data.user, function (index, item) {
        b = item.username.filter((val) => val.name.substr(0, 1) === 'B')
    });
    var c = []
    $.each(data.user, function (index, item) {
        c = item.username.filter((val) => val.name.substr(0, 1) === 'C')
    });
    $.each(a, function () {
        $('#events_photo').append(Mustache.render(event_template, this));
    })
    $.each(b, function () {
        $('#events_photo2').append(Mustache.render(event_template2, this));
    })
    $.each(c, function () {
        $('#events_photo3').append(Mustache.render(event_template3, this));
    })
};

// admin
var storage = window.localStorage;
if (storage.getItem('username') === 'admin') {
    $('.choose-right').css('margin-top', '50px')
    $('.announcements_add').css('display', 'block')
    $('.announcements_permission').css('display', 'block')
}

$('.logout').click(function () {
    window.localStorage.setItem('username', '')
    window.location.href = "http://tfire.net/index.html"

})

var username = storage.getItem('username')
$(".btns-language").text(username);


$(function () {
    var str =
        `<div class="db">
                    <div class="user">
                        <div class="close"></div>
                        <div class="user-img">
                            <img src="../../img/man.jpg">
                        </div>
                        <div class="user-content">
                             <h5>Resident</h5>
                             <h5>Allan, Joan </h5>
                             <p>Birth date: January 26</p>
                             <p>Email:johnkrischer@gmail.com</p>
                             <p>Phone:408-550-6114</p>
                             <p>Occupation: Tech Dork</p>
                        </div>
                        
                        <div class="user-content">
                             
                             <h5>De Anza Oaks</h5>
                             <p>Address: </p>
                             <p>22806 Poplar Grove Square</p>
                             <p>Cupertino CA 95014</p>
                             <p>Lot #/Unit #: 056</p>
                        </div>
                        <div class="user-content">
                             
                             <h5>Children:</h5>
                             <p>Sabrina - Birth date: 8/27/1998</p>
                             <p>Samantha - Birth date: 1/11/2001</p>
                             <p>Tyler - Birth date: 6/18/2003</p>
                            
                        </div>
                        <div class="user-content">
                             
                             <h5>Here From:</h5>
                             <p> Aptos, CA </p>
                             <h5>Move-In Date:</h5>
                             <p> 8/5/2005 </p>
                             <h5>Computer Type: </h5>
                             <p>Windows, Apple,Linux </p>
                            <h5>Hobbies:</h5>
                            <p> Travel, languages, Classic cars,</p>
                            <p>anything ocean related </p>
                            <h5>Personal Website:</h5>
                            <p> http://www.johnkrischer.com </p>
                        </div>
                        
                    </div>
                </div>`


    var show = true;
    $('.address_book_click').click(function () {
        if (show) {
            // 按A-Z来搜素
            $('.address_book_click_content').css('display', 'block')
            $(this).text('Click here to list from A to Z')
            $('.address_book_letter').css('display', 'none')
            $('.street_name').css('display', 'none')
            $('.a_z').css('display', 'block')

            show = false;

        } else {
            //按街道搜索
            $('.address_book_click_content').css('display', 'none')
            $(this).text('Click here to list by Street Name')
            $('.address_book_letter').css('display', 'block')
            $('.street_name').css('display', 'block')
            $('.a_z').css('display', 'none')

            show = true;
        }
    })
    $('.street_name .user_desc, .a_z .user_desc').click(function () {
        $('body').append(str);
        $('.close').click(function () {
            $('.db').remove()
        })
    })
})