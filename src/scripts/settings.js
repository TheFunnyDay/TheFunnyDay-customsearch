import $ from 'jquery'
import '../style/settings.scss'
const onlineStatus = navigator.onLine;


$("#see-bgbg").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://i.ibb.co/bRZJyg7/csthefunnyday.png"})`,
});
$(".see-bg").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://i.ibb.co/bRZJyg7/csthefunnyday.png"})`,
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
document.getElementById("searchBing").onclick = function(){
    localStorage.setItem('csearchEng', 'https://www.bing.com');
};
// document.getElementById("searchBrave").onclick = function(){
//     localStorage.setItem('csearchEng', 'https://search.brave.com/');
// };

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

    if (localStorage.getItem('csearchEng') == 'https://www.bing.com') {
        $('#searchBing').css({
            'background' : '#830000'
        })
    }

    // if (localStorage.getItem('csearchEng') == 'https://search.brave.com/') {
    //     $('#searchBrave').css({
    //         'background' : '#830000'
    //     })
    // }
}
check();

//Техническая информация
document.querySelector("#userAgent").innerHTML = 
                    navigator.userAgent + 
                    `<br/>` + 
                    (navigator.oscpu || navigator.platform) + 
                    `<br/>` + 
                    `Online:  <span id="online">${onlineStatus}</span>` +
                    `<br/>` + 
                    `Interface language: ${window.navigator.language}`
                    ;
if  (onlineStatus === true) {
    console.log("Online status " + onlineStatus);
    document.querySelector("#online").style.cssText = "color: green;"
} else {
    console.log(onlineStatus)
    document.querySelector("#online").style.cssText = "color: red;"
}