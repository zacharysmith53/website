"use strict";
function setEmbed(url,target){
    document.getElementById(target).src = url;
}
function getFormInput(Id){
    var x = document.getElementById(Id);
    return x.value;
}
function newIframe(src,Id,height,width){
    
}
function init
class dynamicembeds {
    constructor(type,Id,src,height,width,divsource) {
        this.Id = Id;
        this.type = type;
        this.src = src;
        this.height = height;
        this.width = width;
        if (this.type = "iframe") {
            
        } else if (this.type = "iframewdiv") {
            var loc = document.getElementById(divsource);
            var div = document.createElement("div");
            div.id = this.Id + "_div";
            var iframe = document.createElement("iframe");
            iframe.src = this.src;
            iframe.id = this.Id;
            iframe.height = this.height;
            iframe.width = this.width;
            div.appendChild(iframe);
            loc.appendChild(div);
        }
    }
    changesrc(src) {
        this.src = src;
        var iframe = document.getElementById(this.Id);
        iframe.src = this.src;
        return this;
    }
}
class dynamiciframe extends dynamicembeds {
    constructor(Id,src,height,width,type,divsource){
        this.Id = Id;
        this.src = src;
        this.height = height;
        this.width = width
        if (type = 1) {
            super(iframewdiv,this.Id,this.src,this.width,this.height,divsource);
        }
    }
}