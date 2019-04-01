clear()
var books= Array.from(document.querySelectorAll("a[title]"))
.filter((v,i)=>{
	return (false
|| v.innerHTML=="[1]"
|| v.innerHTML=="[2]"
|| v.innerHTML=="[3]"
|| v.innerHTML=="[4]"
|| v.innerHTML=="[5]")
})
.map(function(v,i){return v.href})
.sort().reverse().join("\n")
console.log(books)
