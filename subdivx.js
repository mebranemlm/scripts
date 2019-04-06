clear()
Array.from(document.querySelectorAll("a")).filter(function(v,i){return v.href.includes("bajar.php")
})
.map(function(v,i){
return v.href
})
.join("\n")
