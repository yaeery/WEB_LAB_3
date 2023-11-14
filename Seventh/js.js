var first_dz = document.getElementById('Main_text_first');
var first_dz1 = document.getElementById('Main_text_first1');
var first_dz2 = document.getElementById('Main_text_first2');

var sec = prompt("Введите дату рождения");
const date1 = new Date();
var date2 =new Date(sec)
const diff = date1.getTime() - date2.getTime();
const days = diff / (1000 * 60 * 60 * 24);
first_dz.textContent = "Я прожил: " + (Math.round(days)).toString()+" дней";

var dayofweek = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];
var month = [
    "января",
    "Февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
]
first_dz2.textContent  = "Вы родились " + date2.getDate() + " " + month[date2.getMonth()] + " " + date2.getFullYear() + " года, " + dayofweek[date2.getDay()-1];

var strdate = '12.25.2023'
const date3 = new Date(strdate);
const diff1 = date3.getTime() - date1.getTime();
const days1 = diff1 / (1000 * 60 * 60 * 24);
first_dz1.textContent = "До каникул: " + (Math.round(days1)).toString()+" дней";