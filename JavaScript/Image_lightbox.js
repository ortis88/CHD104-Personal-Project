window.addEventListener("load", contrlBox, false);

function showLightBox() {
    let previewWrap=document.getElementById("preview-wrap");
    if(previewWrap.style.left='-9999px'){
        previewWrap.style.left='0px';
        previewWrap.style.top='0px';
    }else{
        previewWrap.style.left='-9999px';
        previewWrap.style.top='-9999px';
    }
}

function closeLightBox(){
    let previewWrap=document.getElementById("preview-wrap");
    previewWrap.style.left = '-9999px';
    previewWrap.style.top = '-9999px';
}

function contrlBox() {
    document.getElementById("close-lightbox").onclick=closeLightBox;

    let openButtons = document.querySelectorAll("[id^='open-preview']");
    openButtons.forEach(function(button) {
        button.onclick = showLightBox;
    });
}

