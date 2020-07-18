// QUESTION#1

var modal = document.getElementById("modal")
var modalimg = document.getElementById("modalimg")
function openModal(url) {
    modalimg.src = url
    modalimg.style.width = "1020px"
    modalimg.style.height = "800px"
    modal.style.position = "fixed"
    modal.style.top = "2px"
    modal.style.left = "2px"
    modal.style.bottom = "auto"
    modal.style.right = "2px"
    modal.style.visibility = "visible"
}
function hide() {
    modal.style.visibility = "hidden"

}

// QUESTION#1

// QUESTION#2

var n = 30;
function paraZoomIn() {

    n = n + 10
    var para = document.getElementById("para")
    para.style.fontSize = n + "px"
}
function paraZoomOut() {

    n = n - 10
    var para = document.getElementById("para")
    para.style.fontSize = n + "px"
}

// QUESTION#2