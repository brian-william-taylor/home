function openSidebar () {
    document.getElementById("sidebar").classList.add("sidebar-show");
    document.getElementById("myOverlay").style.display = "block";
}

function closeSidebar () {
    document.getElementById("sidebar").classList.remove("sidebar-show");
   document.getElementById("myOverlay").style.display = "none";
}