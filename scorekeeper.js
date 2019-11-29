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
		{
	       gameover=true;
	       disp1.classList.add("winner");
		}

 disp1.textContent=Score;
}

});

var p2Score=0;
p2button.addEventListener("click",function()
{
	if(!gameover)
	{
		p2Score++;

		if (p2Score===wingamescore)
		{
	           gameover=true;
	 	       disp2.classList.add("winner");
	 	   }

	 
	 	   disp2.textContent=p2Score;
	 	}
});

p3button.addEventListener("click", function()
{
	Score=0;
	p2Score=0;
	disp2.textContent=0;
	disp1.textContent=0;
	disp1.classList.remove("winner");
	disp2.classList.remove("winner");
	gameover=false;

})