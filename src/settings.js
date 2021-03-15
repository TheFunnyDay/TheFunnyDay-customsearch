import $ from 'jquery'
import './style/settings.scss'

$('body').html(`
<div id="app">
<a href="./index.html"><div id="backbut"></div></a>

<div id="blured">
    <div id="settings">
        <div class="see-bg">
            <!-- <h1>Текст</h1> -->
        </div>
        <div class="set">
            <h1>Свой фон</h1>
            <h4>Вставсте ссылку на картинку</h4>
            <input id="userBg" type="text" name="quantity" placeholder="Вставте ссылку">
        </div>
        <div class="set">
            <h1>Поисковая система по умолчанию</h1>
            <h4>Выберете поисковую систему </h4>
            <div id="searchGoogle" class="buttoneng">Google</div>
            <div id="searchYandex" class="buttoneng">Yandex</div>
            <div id="searchDuckDuckGo" class="buttoneng">DuckDuckGo</div>
        </div>
        
        <div id="save">Сохранить</div>
    </div>
</div>
</div>
<a href="https://thefunnyday.github.io/">
<div id="copyright"><p>by TheFunnyDay</p></div>
</a>
`)


$("#app").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});
$(".see-bg").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});

document.getElementById('userBg').value = localStorage.getItem("customAppBg");

document.getElementById("save").onclick = function(){
    let settingsBg = document.getElementById('userBg').value;
    localStorage.setItem('customAppBg', settingsBg);
    location.reload();
};


document.getElementById("searchGoogle").onclick = function(){
    localStorage.setItem('csearchEng', 'https://google.com/search');
};
document.getElementById("searchYandex").onclick = function(){
    localStorage.setItem('csearchEng', 'https://yandex.ru');
};
document.getElementById("searchDuckDuckGo").onclick = function(){
    localStorage.setItem('csearchEng', 'https://duckduckgo.com');
};

$('.buttoneng').on('click', this, function(){
    $('.buttoneng').removeClass('active');
    $(this).addClass('active');
});
function check() {
    if (localStorage.getItem('csearchEng') == 'https://google.com/search') {
        $('#searchGoogle').css({
            'background' : '#830000'
        })
    }

    if (localStorage.getItem('csearchEng') == 'https://yandex.ru') {
        $('#searchYandex').css({
            'background' : '#830000'
        })
    }

    if (localStorage.getItem('csearchEng') == 'https://duckduckgo.com') {
        $('#searchDuckDuckGo').css({
            'background' : '#830000'
        })
    }
}
check();