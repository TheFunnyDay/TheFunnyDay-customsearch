import "../style/main.scss"
import $ from 'jquery'


function standSearch() {
    if (localStorage.getItem('csearchEng') == null )
            localStorage.setItem('csearchEng', 'https://google.com/search');
}
standSearch()
$("#background").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://i1.wp.com/i.pinimg.com/originals/42/de/9a/42de9a924a71b8bdd10d57223b6be419.jpg"})`,
});

$('form').attr('action', `${localStorage.getItem('csearchEng')}`);

var q;
const encodeSearch = encodeURI(q);

document.getElementsByClassName('sumbit').onclick = function() {
    window.open('https://' + `${localStorage.getItem('csearchEng')}` + '/search?q'  + encodeSearch);
};
