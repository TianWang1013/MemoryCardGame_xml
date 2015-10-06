//create the array for storing the id of selected picture
//var arr = new Array();
var a = [], b = [];

window.onload = function(){
   date();
   h1();
 }; // several onlaod function

function date() {
    var now = new Date();
    var dnode = document.createTextNode("("+now.getMonth()+"/"+now.getDate()+"/"+(now.getYear()+1900)+")");
    mnode = document.getElementById("modifieddate");
    mnode.appendChild(dnode);
}; // create a function for last modified date

                    
function h1() {  
    var txt = document.createTextNode("MEMORY GAME"); // create a text node
    document.getElementById('h1').appendChild(txt);// append child node txt to h1
};
    


//The mouse click on activities, and click off activities for 16 items
function lighton1(event)
{
    x1 = document.getElementById('image1');
    x1.setAttribute("src","images/Audi.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff1()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton2(event)
{
    x1 = document.getElementById('image2');
    x1.setAttribute("src","images/BMW.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src); 
    b.push(x.id);
    
}
function lightoff2()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    } 
}

function lighton3(event)
{
    x1 = document.getElementById('image3');
    x1.setAttribute("src","images/Benz.jpg"); // change the attribute of the node    
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff3()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }    
}

function lighton4(event)
{
    x1 = document.getElementById('image4');
    x1.setAttribute("src","images/Buick.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff4()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton5(event)
{
    x1 = document.getElementById('image5');
    x1.setAttribute("src","images/VolksWagenwerk.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff5()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton6(event)
{
    x1 = document.getElementById('image6');
    x1.setAttribute("src","images/PORSCHE.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);    
}
function lightoff6()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton7(event)
{
    x1 = document.getElementById('image7');
    x1.setAttribute("src","images/Ford.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff7()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton8(event)
{
    x1 = document.getElementById('image8');
    x1.setAttribute("src","images/Cadillac.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff8()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton9(event)
{
    x1 = document.getElementById('image9');
    x1.setAttribute("src","images/Audi.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff9()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton10(event)
{
    x1 = document.getElementById('image10');
    x1.setAttribute("src","images/BMW.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff10()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton11(event)
{
    x1 = document.getElementById('image11');
    x1.setAttribute("src","images/Benz.jpg"); // change the attribute of the node  
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff11()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton12(event)
{
    x1 = document.getElementById('image12');
    x1.setAttribute("src","images/Buick.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff12()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton13(event)
{
    x1 = document.getElementById('image13');
    x1.setAttribute("src","images/VolksWagenwerk.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff13()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton14(event)
{
    x1 = document.getElementById('image14');
    x1.setAttribute("src","images/PORSCHE.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff14()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton15(event)
{
    x1 = document.getElementById('image15');
    x1.setAttribute("src","images/Ford.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff15()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

function lighton16(event)
{
    x1 = document.getElementById('image16');
    x1.setAttribute("src","images/Cadillac.jpg"); // change the attribute of the node
    x=event.target; 
    a.push(x.src);
    b.push(x.id);
}
function lightoff16()
{
    if (a.length === 2) {
        if (a[0]===a[1]) 
        {
            a.splice(0,2);
            b.splice(0,2);
        }
        else if ('a[0]'!=='a[1]') 
        {
            x1 = document.getElementById(b[0]);
            x1.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            x2 = document.getElementById(b[1]);
            x2.setAttribute("src","images/GUESS.png"); // change the attribute of the node
            a.splice(0,2);
            b.splice(0,2);
        }
    }
}

