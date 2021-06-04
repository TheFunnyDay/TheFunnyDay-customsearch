import "./style/main.scss"
import $ from 'jquery'

// document.querySelector("body").innerHTML = `
// <div id="app">
// <div id="background">
//     <div id="bgblurornot">
//         <!-- <h1 style="position: absolute;">погода</h1> -->
//         <a href="./searchset.html"><div id="settings"></div></a>
//         <div id="search-egn">
//         <div id="search">
//         <form action="https://google.com/search" target="_blank">
//             <input name="q" class="search" placeholder="Поиск">
//             <input type="submit" class="sumbit" value="">
//         </form>
//     </div>
//         </div>
//     </div>

// </div>
// <!-- <div style="width: 100%; height: 1000px;"></div> -->
// </div>
// <a href="https://thefunnyday.github.io/">
// <div id="copyright"><p>by TheFunnyDay</p></div>
// </a>
// `;

function standSearch() {
    if (localStorage.getItem('csearchEng') == null )
            localStorage.setItem('csearchEng', 'https://google.com/search');
}
standSearch()
$("#background").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});

$('form').attr('action', `${localStorage.getItem('csearchEng')}`);

var q;
const encodeSearch = encodeURI(q);

document.getElementsByClassName('sumbit').onclick = function() {
    window.open('https://' + `${localStorage.getItem('csearchEng')}` + '/search?q'  + encodeSearch);
};
