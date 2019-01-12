clear()
Array.from(document.querySelectorAll(".aio-pulse a"))
.map(function(a,i){
    return a.href
}).join("\n")
