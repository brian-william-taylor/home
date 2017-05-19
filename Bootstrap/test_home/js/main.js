function openSidebar () {
    document.getElementById("sidebar").classList.add("sidebar-show");
     document.getElementsByTagName('body')[0].classList.add("overlay");
}

function closeSidebar () {
    document.getElementById("sidebar").classList.remove("sidebar-show");
    document.getElementsByTagName('body')[0].classList.remove("overlay");
}