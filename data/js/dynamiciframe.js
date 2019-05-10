function setEmbed(url){
    var x = document.getElementById("forminput");
    var url = x.value;
    document.getElementById("target").src = url;
}
function getFormInput(Id){
    var x = document.getElementById(Id);
    var url = x.value;
    return url;
}