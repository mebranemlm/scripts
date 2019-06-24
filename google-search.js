//https://www.google.com/search?q=site:biblicalarchaeology.org

clear()
var arr=[]

var divs=Array.from(document.querySelectorAll(".r"))
divs.forEach((div,i,a)=>{
 var a=div.querySelectorAll("a")[0]
 var link=a.href
 var h3= a.querySelectorAll("h3")[0]
 if(h3){
   var text =h3.innerText.replace(/\|/g,"-")
   arr.push(`${link} | ${text}`)
 }

})

console.log(arr.join("\n"))

