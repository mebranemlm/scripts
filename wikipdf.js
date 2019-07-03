var dir="D:/wkd/pdf"

var t=wikitxt.trim().split("\n")
.map((v,i)=> v.split("|||")[0])
.filter((v,i,a)=>a.indexOf(v)==i && v.trim()!="")
.map((w)=>{
var name=w.split("#")[0].split("/").reverse()[0].trim()

return `wget "https://en.wikipedia.org/api/rest_v1/page/pdf/${name}" -O "${dir}/${name}.pdf"`
})
t=t.reverse()
t.push(`mkdir ${dir}`)
t=t.reverse()
t.push("exit\n")
console.log(t.join("\n"))
