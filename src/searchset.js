$("#app").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});
$(".see-bg").css({
    "background-image": `url(${localStorage.getItem("customAppBg") ||  "https://wallpaperaccess.com/full/692083.jpg"})`,
});


save.onclick = function(){
    let settingsBg = document.getElementById('userBg').value;
    localStorage.setItem('customAppBg', settingsBg);
    location.reload();
};
