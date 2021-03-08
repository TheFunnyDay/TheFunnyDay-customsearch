$("#background").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});

var q = "thefunnyday github";
document.getElementById('submit').onclick = function() {
    window.open('https://google.com/search?q='+q);
};
