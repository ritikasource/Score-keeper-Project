var p1button= document.querySelector(".p1");
var p2button= document.querySelector(".p2");
var p3button= document.querySelector(".p3");
var disp1= document.querySelector("#p1Display");
var disp2=document.querySelector("#p2Display")

var gameover=false;
var wingamescore=5;

var h1=document.querySelector("h1");
var Score=0;

p1button.addEventListener("click",function()
{
if(!gameover)
{
   Score++;
   
		if (Score===wingamescore)
	       gameover=true;

 disp1.textContent=Score;
}

});

var Score2=0;
p2button.addEventListener("click",function()
{
	if(!gameover)
	{
		Score2++;

		if (Score2===wingamescore)
	     gameover=true;
	 
	 	   disp2.textContent=Score;
	 	}
});
