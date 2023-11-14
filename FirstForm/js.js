var Zag = document.getElementById('Zag');
var firstimg = document.getElementById('firstimg');
var secimg = document.getElementById('secimg');
var thirdimg = document.getElementById('thirdimg');
var Pod = document.getElementById('Pod');
var back = document.getElementById('back');
var firsttxt = document.getElementById('firsttxt');
var sectxt = document.getElementById('sectxt');
var thirdtxt = document.getElementById('thirdtxt');
var sbros = document.getElementById('sbros');
var Prim = document.getElementById('Prim');

var first_teeeext;
var end_teeeext;
var text_cooolr;
var baaaack_color;
var src;


firstimg.addEventListener("change",
function() 
{
    if(firstimg.checked==true)
    {
        secimg.checked =  false;
        thirdimg.checked =  false;
    }
});

secimg.addEventListener("change",
function() 
{
    if(secimg.checked==true)
    {
        firstimg.checked =  false;
        thirdimg.checked =  false;
    }
});
thirdimg.addEventListener("change",
function() 
{
    if(thirdimg.checked==true)
    {
        secimg.checked =  false;
        firstimg.checked =  false;
    }
});

firsttxt.addEventListener('change',
function() 
{
    if(firsttxt.checked==true)
    {
        sectxt.checked =  false;
        thirdtxt.checked =  false;
    }
});

sectxt.addEventListener('change',
function() 
{
    if(sectxt.checked==true)
    {
        firsttxt.checked =  false;
        thirdtxt.checked =  false;
    }
});
thirdtxt.addEventListener('change',
function() 
{
    if(thirdtxt.checked==true)
    {
        firsttxt.checked =  false;
        sectxt.checked =  false;
    }
});

sbros.addEventListener('click',
function() 
{
    Zag.value = "";
    firstimg.checked = false;
    secimg.checked = false;
    thirdimg.checked = false;
    Pod.value = "";
    back.selectedindex = 1;
    firsttxt.checked = false;
    sectxt.checked = false;
    thirdtxt.checked = false;
});

Prim.addEventListener('click',
function() 
{
     first_teeeext = Zag.value;
     end_teeeext =  Pod.value;
    if(firsttxt.checked==true)
    {
         text_cooolr = 'black';
    }
    else if(sectxt.checked==true)
    {
         text_cooolr = 'white';
    }
    else if(thirdtxt.checked==true)
    {
         text_cooolr = 'grey';
    }

    if(firstimg.checked==true)
    {
         src = "../Img/1.jpg"
    }
    else if(secimg.checked==true)
    {
         src = "../Img/7.jpg"
    }
    else if(thirdimg.checked==true)
    {
         src = "../Img/6.jpg"
    }

    if(back.value=='Синий')
    {
        baaaack_color = 'blue';
    }
    else if(back.value=='Красный')
    {
        baaaack_color = 'red';
    }
    else if(back.value=='Зеленый')
    {
        baaaack_color = 'green';
    }
    //var baaaack_color;
    var win=window.open("","","width=1000px,height=509px");
win.document.open();
var st='<head><title>Document</title></head><body  style="background-color:'+ baaaack_color +';"><p style="font-size: 200%; color:'+ text_cooolr +';">'+first_teeeext +'</p> <img src ='+src+'> <p style="color:'+ text_cooolr +';">'+end_teeeext+'</p></body>'

win.document.write(st); 

});