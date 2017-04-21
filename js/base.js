function client(){
var designWidth = 360, rem2px = 100;
document.documentElement.style.fontSize = 
  ((window.innerWidth / designWidth) * rem2px) + 'px';
}

client();


// console.log(456);

