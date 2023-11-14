var now = new Date();
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
		
var first_dz = document.getElementById('Main_text_first');
first_dz.textContent  = "Сегодня " + now.getDate() + " " + month[now.getMonth()] + " " + now.getFullYear() + " года, " + dayofweek[now.getDay()-1];