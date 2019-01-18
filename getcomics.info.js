// https://getcomics.info/tag/action-comics/
// https://getcomics.info/tag/superman/
// https://getcomics.info/tag/doomsday-clock/

clear()
var txt=Array.from(document.querySelectorAll(".aio-pulse a"))
.map(function(a,i){
    return a.href
}).join("\n").trim()

//var a=document.querySelector(".aio-pulse a")
var el=document.createElement("textarea")
el.appendChild(document.createTextNode(txt))
//a.parentNode.insertBefore(el,a)
document.querySelector(".post-contents").appendChild(el)
console.log(txt)
