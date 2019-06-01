var t=wikitxt.trim().split("\n").filter((v,i,a)=>a.indexOf(v)==i && v.trim()!="").map((w)=>{return "https://en.wikipedia.org/api/rest_v1/page/pdf/"+w.split("#")[0].split("/").reverse()[0]
}).join("\n")
console.log(t)
