clear()
var n=1
var books= Array.from(document.querySelectorAll("a[title]"))
.filter((v,i)=>{
	return (false
|| v.innerHTML=="[1]"
// || v.innerHTML=="[2]"
// || v.innerHTML=="[3]"
// || v.innerHTML=="[4]"
//|| v.innerHTML=="[5]"
)
})
.map(function(v,i){return v.href})
.map((v,i)=>{
  return !v.includes("http://libgen.io/book/index.php?") ? v : v.replace(
    "http://libgen.io/book/index.php?",
    "http://booksdescr.org/ads.php?")
})
.sort().reverse()

var arrnum = books.length
var div = 10
var ini = div*(n-1)
var end= div*(n)

var portion = books.slice(ini, end)
console.log(portion.join("\n"))
console.log(portion.length)

 
