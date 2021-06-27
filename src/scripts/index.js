import "../style/main.scss"
import $ from 'jquery'

//Язык
document.querySelector("html").setAttribute("lang", window.navigator.language);

//Поиск по умолчанию
function standSearch() {
    if (localStorage.getItem('csearchEng') == null )
            localStorage.setItem('csearchEng', 'https://google.com/search');
}
standSearch()
$("#background").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://i.ibb.co/bRZJyg7/csthefunnyday.png"})`,
});

document.querySelector('form').setAttribute('action', localStorage.getItem('csearchEng'));
var q;
const encodeSearch = encodeURI(q);

document.getElementsByClassName('sumbit').onclick = function() {
    window.open('https://' + `${localStorage.getItem('csearchEng')}` + '/search?q='  + encodeSearch);
};

