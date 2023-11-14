var Zag = document.getElementById('Zag');
var firstimg = document.getElementById('firstimg');
var secimg = document.getElementById('secimg');
var thirdimg = document.getElementById('thirdimg');
var back = document.getElementById('Xud');
var firsttxt = document.getElementById('firsttxt');
var sectxt = document.getElementById('sectxt');
var thirdtxt = document.getElementById('thirdtxt');
var sbros = document.getElementById('sbros');
var Prim = document.getElementById('Prim');



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

sbros.addEventListener('click',
function() 
{
    Zag.value = "";
    firstimg.checked = false;
    secimg.checked = false;
    thirdimg.checked = false;
    Xud.selectedindex = 0;
    firsttxt.checked = false;
    sectxt.checked = false;
    thirdtxt.checked = false;
});
Prim.addEventListener('click',
function() 
{
var first_teeeext; 
first_teeeext = Zag.value  
var src_Xud;
var src_Fon;
var style_text = ""
style_text+='style=" font-size: 200%;'
    first_teeeext = Zag.value;
    if(firsttxt.checked==true)
    {
        style_text += ' font-style: italic;';
    }
    if(sectxt.checked==true)
    {
        style_text += ' text-decoration: underline;';
    }
    if(thirdtxt.checked==true)
    {
        style_text += ' font-weight: bold;';
    }
    style_text+='"'
    if(firstimg.checked==true)
    {
        src_Fon = "../Img2/4.jpg"
    }
    else if(secimg.checked==true)
    {
        src_Fon = "../Img2/5.jpg"
    }
    else if(thirdimg.checked==true)
    {
        src_Fon = "../Img2/6.jpg"
    }

    if(Xud.value=='Пушкин')
    {
        src_Xud = '../Img2/1.jpg';
    }
    else if(Xud.value=='Лермонтов')
    {
        src_Xud = '../Img2/2.jpg';
    }
    else if(Xud.value=='Фет')
    {
        src_Xud = '../Img2/3.jpg';
    }
    var win=window.open("","","width=1000px,height=509px");
    win.document.open();
    var st='<head><title>Document</title></head><body style="background-image:url('+src_Fon+');"><p '+style_text+' >'+Xud.value +'</p> <img src ='+src_Xud+'> <p '+style_text+'>'+first_teeeext+'</p></body>'

win.document.write(st); 

});