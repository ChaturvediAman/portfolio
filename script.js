var btn=document.querySelector(".btn");
var curtain_left=document.querySelector(".curtain");
btn.addEventListener("click",curtainOpen);

function curtainOpen(){
    curtain_left.style.transform="translateX(-100%)"
    btn.style.display="none";
}