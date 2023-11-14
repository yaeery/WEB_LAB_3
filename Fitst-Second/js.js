var first_dz = document.getElementById('frst');
var sec_dz = document.getElementById('sec');
var third_dz = document.getElementById('third');
var fouth_dz = document.getElementById('fouth');

var Txt = document.getElementById('Vivod_First');

var Mass_First = [
"YZF-R7HO",
"R15S",
"R125",
"MT-10 SP"
]

var Mass_Sec = [
 "250.000",
 "270.000",
 "300.000",
"370.000"
];
var Mass_MG =
[
  first_dz,
  sec_dz,
  third_dz,
  fouth_dz
]

first_dz.addEventListener("mouseover",
function() 
{
  Txt.textContent = Mass_First[0]+" "+Mass_Sec[0];
});
first_dz.addEventListener("mouseout",
function() 
{
    Txt.textContent = "";
});

sec_dz.addEventListener("mouseover",
function() 
{
  Txt.textContent = Mass_First[1]+" "+Mass_Sec[1];
});
sec_dz.addEventListener("mouseout",
function() 
{
    Txt.textContent = "";
});

third_dz.addEventListener("mouseover",
function() 
{
  Txt.textContent = Mass_First[2]+" "+Mass_Sec[2];
});
third_dz.addEventListener("mouseout",
function() 
{
    Txt.textContent = "";
});

fouth_dz.addEventListener("mouseover",
function() 
{
  Txt.textContent = Mass_First[3]+" "+Mass_Sec[3];
});
fouth_dz.addEventListener("mouseout",
function() 
{
    Txt.textContent = "";
});

var button_Change = document.getElementById('button_change');
var slayd_Show = document.getElementById('slayd_Show');
slayd_Show.src = Mass_MG[0].src;
var i = 0;
button_Change.addEventListener("click",
function() 
{
  i++;
  if(i==4)i=0;
  slayd_Show.src = Mass_MG[i].src;

});

