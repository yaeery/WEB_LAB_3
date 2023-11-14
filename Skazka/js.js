var Zag1 = document.getElementById('Zag1')
var Zag2 = document.getElementById('Zag2')
var Zag3 = document.getElementById('Zag3')
var Zag4 = document.getElementById('Zag4')
var Prim = document.getElementById('Prim');
Prim.addEventListener('click',
function() 
{
    var inputText = 'Жил-был '+Zag1.value +', да в лес '+Zag2.value + ' ходил. Однажды из-за дерева он увидел '+Zag3.value +', который делал что-то непонятное. Не обращая внимания '+Zag1.value+ ' пошел по лесу. Но вдруг '+Zag3.value+' закончил свое занятие и пообежал в его сторону. '+Zag1.value+' так испугался, что стоял как вкопанный. Но вдруг '+Zag3.value+' достал перед ним '+Zag4.value+' и сказал: "С Днем Рождения!" '
    var win=window.open("","","width=1000px,height=509px");
    win.document.open();
    var st='<head><title>Document</title></head><body><p style="font-size:200%;"> Сказка </p> <p>'+inputText+' </p></body>'
    win.document.write(st); 
});