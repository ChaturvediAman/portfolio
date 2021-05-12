var btn=document.querySelector(".btn");
var curtain_left=document.querySelector(".curtain--left");
// var curtain_right=document.querySelector(".curtain--right");
btn.addEventListener("click",curtainOpen);

function curtainOpen(){
    curtain_left.style.transform="translateX(-100%)"
    // curtain_right.style.transform="translateX(100%)"
    btn.style.display="none";
    // location.href = "index.html";
}