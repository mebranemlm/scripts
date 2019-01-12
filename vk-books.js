//VK.com

var links=[];
var buttons=[];

//get all posts
var posts= document.querySelectorAll(".post_content")
posts.forEach(function(post,i){
	//get btns with no likes
	var btns=post
	.querySelectorAll("a[class='like_btn like _like']")

	//if the post has btns with no likes
	if(btns.length>0){
		//get a elements
		var as=post
		.querySelectorAll("a[class='page_doc_title'],a[class='page_media_link_title']")
		
		//convert a elements to urls and push
		as.forEach(function(a,i){
			links.push(a.href)
		})
		
		//array on btn with no likes
		btns.forEach(function(btn,i){
			buttons.push(btn)
		})
	}
})

//timer to click like-button
var n=buttons.length;
var i=0;
var intervalo=setInterval(function(){

	if(i<n){			
		console.log("btn "+i + " de "+n)
		buttons[i].click()
		i++
	}else{
		console.log("terminado")
		clearInterval(intervalo)
	}

},1000)


console.log(links.join("\n"))

var away = new Array()
document.querySelectorAll("a").forEach(function(a,i){
if(a.href.includes("away.php?")){
 away.push(a.href)
}
})

console.log(away.join("\n"))
            
