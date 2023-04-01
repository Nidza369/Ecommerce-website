const ButtonNext = document.getElementById("ButtonNext");
const ButtonPrev = document.getElementById("ButtonPrev");

const Button1 = document.getElementById("Button1");
const Button2 = document.getElementById("Button2");
const Button3 = document.getElementById("Button3");

const div = document.getElementById("Header");
const divtext = div.getElementsByTagName("h1")[0];
const divimg = div.getElementsByTagName("img")[0];

let count = 1;

function Headers()
{
    if(count === 1)
    {
        div.style.background = "linear-gradient(to left, rgb(14, 14, 14), rgb(8, 36, 90))";
        divtext.textContent = "Buy anything you want.";
        divimg.src = "images/nikeshoe.png";
    }

    else if(count === 2)
    {
        div.style.background = "linear-gradient(to left, rgb(14, 14, 14), gray)";
        divtext.textContent = "Save 35% on Under Armour products this week.";
        divimg.src = "images/theboot.png";
    }

    else if(count === 3)
    {
        div.style.background = "linear-gradient(to left, rgb(14, 14, 14), limegreen)";
        divtext.textContent = "Get one for the price of two.";
        divimg.src = "images/xbox.png";
    }

    //-----------------------------------------------

    else if(count === 4)
    {
        div.style.background = "linear-gradient(to left, rgb(14, 14, 14), rgb(8, 36, 90))";
        divtext.textContent = "Buy anything you want.";
        divimg.src = "images/nikeshoe.png";

        count = 1;

        // Return to start
    } 
    
    else if(count <= 0)
    {
        div.style.background = "linear-gradient(to left, rgb(14, 14, 14), limegreen)";
        divtext.textContent = "Get one for the price of two.";
        divimg.src = "images/xbox.png";

        count = 3;

        //Return to top
    }
}

ButtonNext.addEventListener("click", function()
{  
    count += 1;
    Headers();  
})

ButtonPrev.addEventListener("click", function()
{
    count -= 1;
    Headers(); 
})

Button1.addEventListener("click", function()
{
    count = 1;
    Headers(); 
})

Button2.addEventListener("click", function()
{
    count = 2;
    Headers(); 
})

Button3.addEventListener("click", function()
{
    count = 3;
    Headers(); 
})



