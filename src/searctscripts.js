$("#background").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});

$('form').attr('action', `${localStorage.getItem('csearchEng')}`);

var q = "TheFunnyDay";
document.getElementById('submit').onclick = function() {
    window.open('https://' + `${localStorage.getItem('csearchEng')}` + '/search?q'  + q);
};
