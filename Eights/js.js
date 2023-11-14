
var third_dz = document.getElementById('first_bt');

third_dz.addEventListener("click",
function() 
{
    var first_dz = document.getElementById('X').value;
    var sec_dz = document.getElementById('Y').value;
    var x = Math.sqrt(parseInt(first_dz)*parseInt(first_dz)+parseInt(sec_dz)*parseInt(sec_dz))
    alert(x)

});
var third_dz1 = document.getElementById('sec_bt');
third_dz1.addEventListener("click",
function() 
{
    var first_dz1 = document.getElementById('D').value;
    var sec_dz1 = document.getElementById('Sh').value;
    var z = (parseInt(first_dz1)*parseInt(sec_dz1))
    alert(z)

});