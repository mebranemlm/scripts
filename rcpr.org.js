//https://razoncienciaspr.org/category/religion/page/1/
clear()
var arr=[]
document.querySelectorAll(".entry-title").forEach((d)=>{
var a= d.querySelector("a")
arr.push(a.href+" | "+a.innerText)
})
var txt=arr.join("\n")
console.log(txt)
window.copy(txt)
