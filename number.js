var heart=3;
var random=0;

function Guess()
{
    var number=document.getElementById("number").value;
    if(heart==3)
    {
        random=Math.floor(Math.random()*10)+1;
    }
    if(number==random)
    {
        document.getElementById("result").innerHTML="Congurations!";
        ShowButton("btn-again");
        HideButton("btn-guess");

        document.getElementById("btn-again").innerHTML="Game Again";
    }
    else 
    {
        var element=document.querySelectorAll("#hearts>i")[heart-1];
        element.classList.remove("fas")
        heart--;

        if(heart>0)
        {
            document.getElementById("result").innerHTML="False!";
        }
        else{
            ShowButton("btn-again");
            HideButton("btn-guess");

            document.getElementById("btn-again").innerHTML="Try Again"
            document.getElementById("result").innerHTML="False! True answer is: "+random;
        }
    }

}
function Again()
{
    heart=3;

    for(var i=0;i<3;i++)
    {
        var element=document.querySelectorAll("#hearts>i")[i];
        element.classList.add("fas");
    }
    HideButton("btn-again");
    ShowButton("btn-guess");
}

function ShowButton(id)
{
    document.getElementById(id).classList.add("btn-show");
    document.getElementById(id).classList.remove("btn-hide");

}
function HideButton(id)
{
    document.getElementById(id).classList.add("btn-hide");
    document.getElementById(id).classList.remove("btn-show");


}