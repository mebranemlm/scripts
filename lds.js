var url="https://stage-5pkq5bmu.letydoesstuff.com/wp-content/uploads/sites/2/rewards/2019-$m_PhotosetA/HD-$n/LetyDoesStuff_Reward_2019-$m_PhotosetA-HD.zip"

var urls=[]
for(var i=0;i<100;i++){
var abc="abcdefghijklmnopqrst"
var ABC=abc.toUpperCase()
var num="01234546789"
var str=abc+ABC+num
var rand=str.split("").sort(function(){return Math.random() - 0.5})

var cod=rand.join("").substr(0,8)
//console.log(cod)

var n=Math.floor(Math.random()*12+1)
n='00'+n
n=n.substr(n.length-2,2)

urls.push(url.replace("$n",cod).replace("$m",n).replace("$m",n))
}
var u=urls.join("\n")
copy(u)
console.log(u)
