var ct = document.querySelector(".ct");
var left = document.querySelectorAll(".sub_left img");
var tit = document.querySelectorAll(".tit");
var cont = document.querySelectorAll(".cont");
var des = document.querySelectorAll(".des");
var post = document.querySelectorAll(".pos");
var icon = document.querySelector(".icon");
var tp = document.querySelector(".tp");


var arrow = document.querySelector(".arrow");
var arrow_on = document.querySelector(".arrow_on");
// console.log(arrow.innerHTML);

function touch(dom1,dom2){
	dom1.addEventListener("touchstart",function(){
		// arrow_on.style.display = "block";
		if(dom2.style.display == "block"){
			dom2.style.display = "none"
		}else if(dom2.style.display = "none"){
			dom2.style.display = "block"
		}
	})
}
touch(arrow,arrow_on);

var clic = document.querySelector(".clic");
var okc = document.querySelector(".okc");
var banner = document.querySelector(".banner");
var substance = document.querySelector(".substance");
function touched(dom1,dom2,dom3,dom4){
	dom1.addEventListener("touchstart",function(){
		// arrow_on.style.display = "block";
		if(dom2.style.display == "block"){
			dom2.style.display = "none";
			dom3.style.display = "block";
			dom4.style.display = "block";
		}else if(dom2.style.display = "none"){
			dom2.style.display = "block";
			dom3.style.display = "none";
			dom4.style.display = "none";
		}
	})
}
touched(clic,okc,banner,substance);



var lis = arrow_on.querySelectorAll("li");
function del(){
	for(var i = 0; i < lis.length ; i++){
		let obj = lis[i];
		obj.addEventListener("touchstart",function(){
			obj.parentNode.removeChild(obj);
		})
	}
}

// var lists = document.querySelectorAll("")
var add_project = document.querySelector(".add_project");
var lists = add_project.querySelectorAll("li");

function add(){
	for(let i = 0; i < lists.length ; i++){
		let index = lists[i];
		let result = [];
		// index.style.-webkit-tap-highlight-color = "red";
		index.addEventListener("touchstart",function(){
			var obj = document.createElement("li");
			var text = index.innerText;
			for(var i = 0 ; i < result.length ; i++){
				if(result[i] === text){
					return;
				}
			}		
			obj.innerText = text;
			arrow_on.appendChild(obj);
			result.push(text);	
			obj.addEventListener("touchstart",function(){
				obj.parentNode.removeChild(obj);
			})
		})
	}
}
add();
del();


// console.log(789);
// var banner_content = document.querySelector(".banner_content");
// var ct = document.querySelector(".ct");
// ct.innerText = title[0];
// console.log(title);
var roll = document.querySelector(".roll span");
var lits = document.querySelectorAll("ul.news li");
function move(){
	for(let i = 0 ; i < lits.length ; i++){
		let temp = lits[i];
		temp.addEventListener("touchstart",function(){
			roll.style.width = 0.6 * (i+1) + "rem";
			roll.style.transition = "width 1s" 
		})
	}
}
move();