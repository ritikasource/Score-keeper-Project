var p1button= document.querySelector(".p1");
var p2button= document.querySelector(".p2");
var p3button= document.querySelector(".p3");

var h1=document.querySelector("h1");
var pScore=0;
p1button.addEventListener("click",function()
{
	pScore++;
	h1.textContent(pScore);

});
