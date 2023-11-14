
function X() 
{
    var first = prompt("Введите первое число");
    var scond = prompt("Введите второе число");
    var zmak = prompt("Введите знак");
    var result;
 switch(zmak)
 {
    case "+":
    result =parseInt(first)+parseInt(scond);
    break;
    case "-":
    result = first-scond;
    break;
    case "*":
    result = first*scond;
    break;
    case "/":
    result = first/scond;
    break;
    default:
        alert("Неверный знак")
        break;
 }

if(isNaN(result))
{
    alert("Ошибка")
}
else if(!isFinite(result))
{
    alert("Ошибка")
}
else
{
    alert(result)
}
var z = confirm("Хотите повторить?")
if(z)
{
  X();  
}
}
X();
