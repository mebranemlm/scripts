function checkOptions(){

document.querySelectorAll("input[type=checkbox]").forEach(
(c)=>{

var txt=c.parentNode.parentNode.children[0].innerHTML.toLowerCase();
console.log(txt,c.checked)

if(txt.includes("english") || txt.includes("spanish") || txt.includes("no hearing")){
   if (!c.checked) c.click();
   console.log(c.checked);  
}})
}

var i=setInterval(()=>{
checkOptions();
},1000);

setTimeout(()=>{
clearInterval(i);

document.querySelectorAll(".epeven input[type=checkbox]").forEach(function(c){
 if (!c.checked) c.click();
});
 
 document.querySelector("input[name=Submit]").click();
 
 
},3000);


