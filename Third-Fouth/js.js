var first_dz = document.getElementById('Motic');
var sec_dz = document.getElementById('Mashyna');
var third_dz = document.getElementById('Tygach');

var Txt = document.getElementById('img1');

var Img = 
[
"../Img/1.jpg",
"../Img/7.jpg",
"../Img/6.jpg"
]


first_dz.addEventListener("mouseover",
function() 
{
  Txt.src = Img[0];
});
first_dz.addEventListener("mouseout",
function() 
{
    Txt.src = '../Img/5.jpg';
});

sec_dz.addEventListener("mouseover",
function() 
{
  Txt.src = Img[1];
});
sec_dz.addEventListener("mouseout",
function() 
{
    Txt.src = '../Img/5.jpg';
});

third_dz.addEventListener("mouseover",
function() 
{
  Txt.src = Img[2];
});
third_dz.addEventListener("mouseout",
function() 
{
    Txt.src = '../Img/5.jpg';
});

var button_Change = document.getElementById('button_change');
var slayd_Show = document.getElementById('slayd_Show');
slayd_Show.src = Img[0];
var i = 0;
button_Change.addEventListener("click",
function() 
{
  i++;
  if(i==3)i=0;
  slayd_Show.src = Img[i];

});
