// https://getcomics.info/tag/action-comics/
// https://getcomics.info/tag/superman/
// https://getcomics.info/tag/doomsday-clock/

clear()
Array.from(document.querySelectorAll(".aio-pulse a"))
.map(function(a,i){
    return a.href
}).join("\n")
