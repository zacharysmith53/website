function setEmbed(url){
    document.getElementById("target").src = url;
}
function getFormInput(Id){
    var x = document.getElementById(Id);
    var url = x.value;
    return url;
}