
//Index to Creationist Claims
// http://www.talkorigins.org/indexcc/list.html

clear()
var arr=[]
document.querySelectorAll("li a[href]").forEach((v,i)=>{
arr.push(v.href+" ||| "+v.parentNode.innerText)
})

console.log(arr.join("\n"))
