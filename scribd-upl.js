//https://es.scribd.com/upload-document

var obsv=""
var author=""
document.querySelectorAll(".form_inputs").forEach(function(v,i){
var title=v.querySelector("input").value
var ran=Math.floor(Math.random() * 99*99);
var text=title+"\n"+obsv+"\nSubido por: "+author+" ["+ran+"]"

v.querySelector("textarea").value=text
})

//$("button[type='submit']").click();
