// https://hidemyna.me/es/proxy-list/?maxtime=2000&type=s#list

var proxys=[]
document.querySelectorAll("tr").forEach(function(v,i){
var tds=v.querySelectorAll("td")
if(tds.length!=0){
var http=tds[4].innerHTML.split(",")[0]
proxys.push(`${http}://${tds[0].innerHTML}:${tds[1].innerHTML}`)
}
})

console.log(proxys.join("\n"))
