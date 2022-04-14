let navOpen = document.getElementById("open");
let navClose = document.getElementById("close");

navOpen.addEventListener("click", function () {
    document.getElementById("side").style.width = "200px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("side").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
});

navClose.addEventListener("click", function () {
    document.getElementById("side").style.width = "0px";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("side").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
});

function openNav () {
    document.getElementById("side").style.width = "200px";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("side").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

function closeNav () {
    document.getElementById("side").style.width = "0px";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("side").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
}
