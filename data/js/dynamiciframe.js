function setEmbed(url,target){
    document.getElementById(target).src = url;
}
function getFormInput(Id){
    var x = document.getElementById(Id);
    return x.value;
}
function newIframe(src,Id,height,width)