var Zag1 = document.getElementById('Zag1')
var Zag2 = document.getElementById('Zag2')
var Zag3 = document.getElementById('Zag3')
var Zag4 = document.getElementById('Zag4')
var Zag5 = document.getElementById('Zag5')
var Zag6 = document.getElementById('Zag6')
var Zag7 = document.getElementById('Zag7')
var Prim = document.getElementById('Prim');
Prim.addEventListener('click',
function() 
{
    var inputText = '<p>Я, ' + Zag1.value + ' ' + Zag2.value + ' ' + Zag3.value + ' родился в ' + Zag4.value + ' году ' + 'в городе ' + Zag5.value + '</p>' +'<p>Больше всего я люблю ' + Zag6.value + ' и очень не люблю ' + Zag7.value +'. Было бы замечательно, всю жизнь ' + Zag6.value + ', но, к сожалению, приходится иногда и ' + Zag7.value     + '.</p>';
    var win=window.open("","","width=1000px,height=509px");
    win.document.open();
    var st='<head><title>Document</title></head><body><p style="font-size:200%;"> О себе </p>'+inputText+'</body>'
    win.document.write(st); 
});