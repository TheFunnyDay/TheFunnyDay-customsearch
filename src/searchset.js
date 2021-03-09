$("#app").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});
$(".see-bg").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});

document.getElementById('userBg').value = localStorage.getItem("customAppBg");

save.onclick = function(){
    let settingsBg = document.getElementById('userBg').value;
    localStorage.setItem('customAppBg', settingsBg);
    location.reload();
};


searchGoogle.onclick = function(){
    localStorage.setItem('csearchEng', 'https://google.com');
};
searchYandex.onclick = function(){
    localStorage.setItem('csearchEng', 'https://yandex.ru');
};
searchDuckDuckGo.onclick = function(){
    localStorage.setItem('csearchEng', 'https://duckduckgo.com/');
};

$('.buttoneng').on('click', this, function(){
    $('.buttoneng').removeClass('active');
    $(this).addClass('active');
});
function check() {
    if (localStorage.getItem('csearchEng') == 'https://google.com') {
        $('#searchGoogle').css({
            'background' : '#830000'
        })
    };

    if (localStorage.getItem('csearchEng') == 'https://yandex.ru') {
        $('#searchYandex').css({
            'background' : '#830000'
        })
    };

    if (localStorage.getItem('csearchEng') == 'https://duckduckgo.com/') {
        $('#searchDuckDuckGo').css({
            'background' : '#830000'
        })
    };
};
check();