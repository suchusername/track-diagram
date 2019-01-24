// Properties of objects 

/* Train adding rules:
1. Each train should be a new element of "trainInfo" array.
2. Each train's part should contain ALL essential parameters:
	a) For the first part those parameters are: "name", "hours", "mins", "track", "timeMins", "timeSecs", "fromPercent", "toPercent".
	b) For 2nd part and so on: "name", "track", "timeMins", "timeSecs", "toPercent".
3. Parameters meanings:
	"name" - the order of a part
	"hours" - (for 1st part only) The hours value of when the train appears on the track
	"mins" - (for 1st part only) The minutes value of when the train appears on the track
	"track" - the name of a track the train follows
	"timeMins" - number of minutes it takes for a train to complete a certain part
	"timeSecs" - number of seconds it takes for a train to complete a certain part
	"fromPercent" - (for 1st part only) The percentage of a track segment that a train begins its movement fromPercent
	"toPercent" - The percentage of the track completion
4. Track IDs:
	mn2 - main2
	sd1 - side1
	pt5 - part5
	sw2 - switch2

	
	*Empty form*

var _Trains = [	
	{"number": "#",
	 "contains": "",
	 "driver": "",
	 "cars": _,
	 "part": [
		{"name": "0", "hours": _, "mins": _, "track": "_", "timeMins": _, "timeSecs": _, "fromPercent": _, "toPercent": _},
		{"name": "_", "track": "_", "timeMins": _, "timeSecs": _, "toPercent": _}
		]
		
	}
];	
	
	Types of tracks and other objects:
	T - Regular track 
	TER - Track End that has got a dash on its RIGHT end.
	TEL - Track End that has got a dash on its LEFT end.
	PL - Platform

	Track id:
	mn1 - Main1
	sd1 - Side1
	pt4 - Part4
	sw3 - Switch3
	
*/

/*Test direction*/

var test1Trains = [
	{"number": "#3248",
	 "contains": "Древесный уголь",
	 "driver": "Анастасий Кузьмин",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-sd1-pt2", "timeMins": 10, "timeSecs": 0, "fromPercent": 90, "toPercent": 0},
		{"name": "1", "track": "mn1-sd1-pt1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "sw1", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "sw1", "timeMins": 12, "timeSecs": 0, "toPercent": 50},
		{"name": "5", "track": "sw1", "timeMins": 13, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 10, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#1100",
	 "contains": "Пусто",
	 "driver": "Светлан Красильников",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 00, "track": "mn2-pt5", "timeMins": 32, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn2-pt5", "timeMins": 15, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn2-sd1-sd1-pt1", "timeMins": 9, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-sd1-pt1", "timeMins": 10, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-pt2", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#2342",
	 "contains": "Окна, стекло",
	 "driver": "Денис Звеньев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn2-sd1-pt4", "timeMins": 10, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn2-sd1-pt4", "timeMins": 11, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw4", "timeMins": 3, "timeSecs": 0, "toPercent": 50},
		{"name": "3", "track": "sw4", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "sw4", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-sd1-sd1-pt3", "timeMins": 10, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-sd1-sd1-pt3", "timeMins": 85, "timeSecs": 0, "toPercent": 100}
		]
		
	},
	
	{"number": "#1244",
	 "contains": "Шины, диски",
	 "driver": "Богдан Патрушев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 45, "track": "mn1-pt1", "timeMins": 10, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt5", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 0},
		{"name": "5", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt1", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#4004",
	 "contains": "Березовая и дубовая древесина",
	 "driver": "Валерий Авдеев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 42, "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn2-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn2-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "sw2", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-sd2-pt1", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn1-sd2-pt2", "timeMins": 13, "timeSecs": 0, "toPercent": 100},
		{"name": "7", "track": "mn1-sd2-pt2", "timeMins": 60, "timeSecs": 0, "toPercent": 95}
		]
	},
	
	{"number": "#1023",
	 "contains": "Электроника",
	 "driver": "Юрий Гришин",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-sd1-pt2", "timeMins": 18, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn1-sd1-pt2", "timeMins": 12, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-sd1-pt1", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt3", "timeMins": 1, "timeSecs": 30, "toPercent": 50},
		{"name": "3", "track": "mn1-pt3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "sw2", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-pt4", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "sw3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "7", "track": "mn2-sd1-sd1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "8", "track": "mn2-sd1-sd1-pt3", "timeMins": 7, "timeSecs": 0, "toPercent": 80},
		{"name": "9", "track": "mn2-sd1-sd1-pt3", "timeMins": 60, "timeSecs": 0, "toPercent": 80}
		]
	},
	
	{"number": "#3851",
	 "contains": "Мониторы",
	 "driver": "Петр Ратушев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 7, "mins": 30, "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "sw1", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "2", "track": "sw1", "timeMins": 14, "timeSecs": 0, "toPercent": 50},
		{"name": "3", "track": "sw1", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt1", "timeMins": 9, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#2133",
	 "contains": "Мебель",
	 "driver": "Вадим Григорьев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 7, "mins": 30, "track": "mn1-pt1", "timeMins": 7, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn2-pt3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#9129",
	 "contains": "Бензин",
	 "driver": "Федор Носов",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 6, "mins": 45, "track": "mn1-pt1", "timeMins": 7, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt3", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw2", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn2-pt3", "timeMins": 7, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#9119",
	 "contains": "Бензин",
	 "driver": "Константин Киров",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 5, "mins": 45, "track": "mn1-pt1", "timeMins": 6, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt3", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw2", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn2-pt3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt1", "timeMins": 6, "timeSecs": 0, "toPercent": 100}
		]
	}
];

var test1Info = {
	"name": "Рязанцево",
	"direction": "Тест",
	"type": "Путь",
	"code": "000001",
	"platforms": "3",
	"paths": "6",
	"toMoscow": "-",
	"additionalInfo": "Станция Рязанцево является образцом станции, схемы которых будут  в данном приложении.",
	"owner": "Рязанцев Дмитрий Сергеевич",
	"ownerPhone": "8-916-235-90-01",
	"ownerEmail": "ryazantsev123@mail.ru"
};

var test1 = [

	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 300, "y": 300}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 300, "y": 300}, "coords": {"x": 400, "y": 300}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 400, "y": 300}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 500, "y": 300}, "coords": {"x": 600, "y": 300}},
	{"type": "TER", "id": "mn1-pt5", "start": {"x": 600, "y": 300}, "coords": {"x": 900, "y": 300}},
	
		{"type": "T", "id": "mn1-sd1-pt1", "start": {"x": 400, "y": 300}, "coords": {"x": 500, "y": 100}},
		{"type": "TER", "id": "mn1-sd1-pt2", "start": {"x": 500, "y": 100}, "coords": {"x": 900, "y": 100}},
		
		{"type": "T", "id": "mn1-sd2-pt1", "start": {"x": 600, "y": 300}, "coords": {"x": 650, "y": 200}},
		{"type": "TER", "id": "mn1-sd2-pt2", "start": {"x": 650, "y": 200}, "coords": {"x": 900, "y": 200}},
	
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 200, "y": 450}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 450}},
	{"type": "T", "id": "mn2-pt3", "start": {"x": 300, "y": 450}, "coords": {"x": 400, "y": 450}},
	{"type": "T", "id": "mn2-pt4", "start": {"x": 400, "y": 450}, "coords": {"x": 550, "y": 450}},
	{"type": "TER", "id": "mn2-pt5", "start": {"x": 550, "y": 450}, "coords": {"x": 900, "y": 450}},
	
		{"type": "T", "id": "mn2-sd1-pt1", "start": {"x": 300, "y": 450}, "coords": {"x": 350, "y": 575}},
		{"type": "T", "id": "mn2-sd1-pt2", "start": {"x": 350, "y": 575}, "coords": {"x": 400, "y": 700}},
		{"type": "T", "id": "mn2-sd1-pt3", "start": {"x": 400, "y": 700}, "coords": {"x": 800, "y": 700}},
		{"type": "TER", "id": "mn2-sd1-pt4", "start": {"x": 800, "y": 700}, "coords": {"x": 900, "y": 700}},
		
			{"type": "T", "id": "mn2-sd1-sd1-pt1", "start": {"x": 350, "y": 575}, "coords": {"x": 650, "y": 575}},
			{"type": "T", "id": "mn2-sd1-sd1-pt2", "start": {"x": 650, "y": 575}, "coords": {"x": 700, "y": 575}},
			{"type": "TER", "id": "mn2-sd1-sd1-pt3", "start": {"x": 700, "y": 575}, "coords": {"x": 900, "y": 575}},
			
	{"type": "T", "id": "sw1", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 300}},
	{"type": "T", "id": "sw2", "start": {"x": 400, "y": 450}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "sw3", "start": {"x": 550, "y": 450}, "coords": {"x": 650, "y": 575}},
	{"type": "T", "id": "sw4", "start": {"x": 700, "y": 575}, "coords": {"x": 800, "y": 700}},
	
	{"type": "PL", "corner": {"x": 610, "y": 307}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 610, "y": 63}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 400, "y": 582}, "size": {"x": 200, "y": 30}}
];


var test2Trains = [
	{"number": "#3248",
	 "contains": "Древесный уголь",
	 "driver": "Анастасий Кузьмин",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-sd1-pt2", "timeMins": 10, "timeSecs": 0, "fromPercent": 90, "toPercent": 0},
		{"name": "1", "track": "mn1-sd1-pt1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "sw1", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "sw1", "timeMins": 12, "timeSecs": 0, "toPercent": 50},
		{"name": "5", "track": "sw1", "timeMins": 13, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 10, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#1100",
	 "contains": "Пусто",
	 "driver": "Светлан Красильников",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 00, "track": "mn2-pt5", "timeMins": 32, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn2-pt5", "timeMins": 15, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn2-sd1-sd1-pt1", "timeMins": 9, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-sd1-pt1", "timeMins": 10, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-pt2", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#2342",
	 "contains": "Окна, стекло",
	 "driver": "Денис Звеньев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn2-sd1-pt4", "timeMins": 10, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn2-sd1-pt4", "timeMins": 11, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw4", "timeMins": 3, "timeSecs": 0, "toPercent": 50},
		{"name": "3", "track": "sw4", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "sw4", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-sd1-sd1-pt3", "timeMins": 10, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-sd1-sd1-pt3", "timeMins": 85, "timeSecs": 0, "toPercent": 100}
		]
		
	},
	
	{"number": "#1244",
	 "contains": "Шины, диски",
	 "driver": "Богдан Патрушев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 45, "track": "mn1-pt1", "timeMins": 10, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt5", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 0},
		{"name": "5", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt1", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#4004",
	 "contains": "Березовая и дубовая древесина",
	 "driver": "Валерий Авдеев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 42, "track": "mn2-pt1", "timeMins": 7, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn2-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn2-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "sw2", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-sd2-pt1", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn1-sd2-pt2", "timeMins": 13, "timeSecs": 0, "toPercent": 100},
		{"name": "7", "track": "mn1-sd2-pt2", "timeMins": 60, "timeSecs": 0, "toPercent": 95}
		]
	},
	
	{"number": "#1023",
	 "contains": "Электроника",
	 "driver": "Юрий Гришин",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-sd1-pt2", "timeMins": 18, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn1-sd1-pt2", "timeMins": 12, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-sd1-pt1", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt3", "timeMins": 1, "timeSecs": 30, "toPercent": 50},
		{"name": "3", "track": "mn1-pt3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "sw2", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-pt4", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "sw3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "7", "track": "mn2-sd1-sd1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "8", "track": "mn2-sd1-sd1-pt3", "timeMins": 7, "timeSecs": 0, "toPercent": 80},
		{"name": "9", "track": "mn2-sd1-sd1-pt3", "timeMins": 60, "timeSecs": 0, "toPercent": 80}
		]
	}
	
];

var test2Info = {
	"name": "Рязанцево",
	"direction": "Тест",
	"type": "Путь",
	"code": "000002",
	"platforms": "3",
	"paths": "6",
	"toMoscow": "-",
	"additionalInfo": "Станция Рязанцево является образцом станции, схемы которых будут  в данном приложении.",
	"owner": "Рязанцев Дмитрий Сергеевич",
	"ownerPhone": "8-916-235-90-01",
	"ownerEmail": "ryazantsev123@mail.ru"
};

var test2 = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 300, "y": 300}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 300, "y": 300}, "coords": {"x": 400, "y": 300}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 400, "y": 300}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 500, "y": 300}, "coords": {"x": 600, "y": 300}},
	{"type": "TER", "id": "mn1-pt5", "start": {"x": 600, "y": 300}, "coords": {"x": 900, "y": 300}},
	
		{"type": "T", "id": "mn1-sd1-pt1", "start": {"x": 400, "y": 300}, "coords": {"x": 500, "y": 100}},
		{"type": "TER", "id": "mn1-sd1-pt2", "start": {"x": 500, "y": 100}, "coords": {"x": 900, "y": 100}},
		
		{"type": "T", "id": "mn1-sd2-pt1", "start": {"x": 600, "y": 300}, "coords": {"x": 650, "y": 200}},
		{"type": "TER", "id": "mn1-sd2-pt2", "start": {"x": 650, "y": 200}, "coords": {"x": 900, "y": 200}},
	
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 200, "y": 450}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 450}},
	{"type": "T", "id": "mn2-pt3", "start": {"x": 300, "y": 450}, "coords": {"x": 400, "y": 450}},
	{"type": "T", "id": "mn2-pt4", "start": {"x": 400, "y": 450}, "coords": {"x": 550, "y": 450}},
	{"type": "TER", "id": "mn2-pt5", "start": {"x": 550, "y": 450}, "coords": {"x": 900, "y": 450}},
	
		{"type": "T", "id": "mn2-sd1-pt1", "start": {"x": 300, "y": 450}, "coords": {"x": 350, "y": 575}},
		{"type": "T", "id": "mn2-sd1-pt2", "start": {"x": 350, "y": 575}, "coords": {"x": 400, "y": 700}},
		{"type": "T", "id": "mn2-sd1-pt3", "start": {"x": 400, "y": 700}, "coords": {"x": 800, "y": 700}},
		{"type": "TER", "id": "mn2-sd1-pt4", "start": {"x": 800, "y": 700}, "coords": {"x": 900, "y": 700}},
		
			{"type": "T", "id": "mn2-sd1-sd1-pt1", "start": {"x": 350, "y": 575}, "coords": {"x": 650, "y": 575}},
			{"type": "T", "id": "mn2-sd1-sd1-pt2", "start": {"x": 650, "y": 575}, "coords": {"x": 700, "y": 575}},
			{"type": "TER", "id": "mn2-sd1-sd1-pt3", "start": {"x": 700, "y": 575}, "coords": {"x": 900, "y": 575}},
			
	{"type": "T", "id": "sw1", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 300}},
	{"type": "T", "id": "sw2", "start": {"x": 400, "y": 450}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "sw3", "start": {"x": 550, "y": 450}, "coords": {"x": 650, "y": 575}},
	{"type": "T", "id": "sw4", "start": {"x": 700, "y": 575}, "coords": {"x": 800, "y": 700}},
	
	{"type": "PL", "corner": {"x": 610, "y": 307}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 610, "y": 63}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 400, "y": 582}, "size": {"x": 200, "y": 30}}
];

var test3Trains = [
	{"number": "#3248",
	 "contains": "Древесный уголь",
	 "driver": "Анастасий Кузьмин",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-sd1-pt2", "timeMins": 6, "timeSecs": 0, "fromPercent": 90, "toPercent": 0},
		{"name": "1", "track": "mn1-sd1-pt1", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "sw1", "timeMins": 3, "timeSecs": 0, "toPercent": 50},
		{"name": "5", "track": "sw1", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 2, "timeSecs": 0, "toPercent": 20},
		{"name": "6", "track": "mn2-pt1", "timeMins": 20, "timeSecs": 0, "toPercent": 20},
		{"name": "6", "track": "mn2-pt1", "timeMins": 2, "timeSecs": 0, "toPercent": 0},
		{"name": "6", "track": "sw1", "timeMins": 2, "timeSecs": 0, "toPercent": 20},
		{"name": "6", "track": "sw1", "timeMins": 6, "timeSecs": 0, "toPercent": 80},
		{"name": "6", "track": "sw1", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 6, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#1100",
	 "contains": "Пусто",
	 "driver": "Светлан Красильников",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 00, "track": "mn2-pt5", "timeMins": 32, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn2-pt5", "timeMins": 15, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw3", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn2-sd1-sd1-pt1", "timeMins": 9, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-sd1-pt1", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "mn2-sd1-pt1", "timeMins": 3, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "mn2-sd1-pt1", "timeMins": 5, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt1", "timeMins": 5, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#2342",
	 "contains": "Окна, стекло",
	 "driver": "Денис Звеньев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn2-sd1-pt4", "timeMins": 10, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn2-sd1-pt4", "timeMins": 11, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "sw4", "timeMins": 3, "timeSecs": 0, "toPercent": 50},
		{"name": "3", "track": "sw4", "timeMins": 5, "timeSecs": 0, "toPercent": 50},
		{"name": "4", "track": "sw4", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-sd1-sd1-pt3", "timeMins": 10, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-sd1-sd1-pt3", "timeMins": 85, "timeSecs": 0, "toPercent": 100}
		]
		
	},
	
	{"number": "#1244",
	 "contains": "Шины, диски",
	 "driver": "Богдан Патрушев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 45, "track": "mn1-pt1", "timeMins": 10, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt5", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 0},
		{"name": "5", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-pt1", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
	},
	
	{"number": "#4004",
	 "contains": "Березовая и дубовая древесина",
	 "driver": "Валерий Авдеев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 42, "track": "mn2-pt1", "timeMins": 4, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn2-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 50},
		{"name": "2", "track": "mn2-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 0},
		{"name": "3", "track": "sw1", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn1-sd2-pt1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn1-sd2-pt2", "timeMins": 13, "timeSecs": 0, "toPercent": 100},
		{"name": "7", "track": "mn1-sd2-pt2", "timeMins": 60, "timeSecs": 0, "toPercent": 95}
		]
	},
	
	{"number": "#1023",
	 "contains": "Электроника",
	 "driver": "Юрий Гришин",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-sd1-pt2", "timeMins": 18, "timeSecs": 0, "fromPercent": 100, "toPercent": 99.99},
		{"name": "1", "track": "mn1-sd1-pt2", "timeMins": 12, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-sd1-pt1", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "sw1", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "4", "track": "mn2-pt2", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "5", "track": "mn2-pt3", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "mn2-pt4", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "6", "track": "sw3", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
		{"name": "7", "track": "mn2-sd1-sd1-pt2", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "8", "track": "mn2-sd1-sd1-pt3", "timeMins": 5, "timeSecs": 0, "toPercent": 80},
		{"name": "9", "track": "mn2-sd1-sd1-pt3", "timeMins": 60, "timeSecs": 0, "toPercent": 80}
		]
	}
	
];

var test3Info = {
	"name": "Рязанцево",
	"direction": "Тест",
	"type": "Путь",
	"code": "000003",
	"platforms": "3",
	"paths": "6",
	"toMoscow": "-",
	"additionalInfo": "Станция Рязанцево является образцом станции, схемы которых будут  в данном приложении.",
	"owner": "Рязанцев Дмитрий Сергеевич",
	"ownerPhone": "8-916-235-90-01",
	"ownerEmail": "ryazantsev123@mail.ru"
};

var test3 = [

	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 300, "y": 300}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 300, "y": 300}, "coords": {"x": 400, "y": 300}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 400, "y": 300}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 500, "y": 300}, "coords": {"x": 600, "y": 300}},
	{"type": "TER", "id": "mn1-pt5", "start": {"x": 600, "y": 300}, "coords": {"x": 900, "y": 300}},
	
		{"type": "T", "id": "mn1-sd1-pt1", "start": {"x": 400, "y": 300}, "coords": {"x": 500, "y": 100}},
		{"type": "TER", "id": "mn1-sd1-pt2", "start": {"x": 500, "y": 100}, "coords": {"x": 900, "y": 100}},
		
		{"type": "T", "id": "mn1-sd2-pt1", "start": {"x": 600, "y": 300}, "coords": {"x": 650, "y": 200}},
		{"type": "TER", "id": "mn1-sd2-pt2", "start": {"x": 650, "y": 200}, "coords": {"x": 900, "y": 200}},
	
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 200, "y": 450}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 450}},
	{"type": "T", "id": "mn2-pt3", "start": {"x": 300, "y": 450}, "coords": {"x": 400, "y": 450}},
	{"type": "T", "id": "mn2-pt4", "start": {"x": 400, "y": 450}, "coords": {"x": 550, "y": 450}},
	{"type": "TER", "id": "mn2-pt5", "start": {"x": 550, "y": 450}, "coords": {"x": 900, "y": 450}},
	
		{"type": "T", "id": "mn2-sd1-pt1", "start": {"x": 300, "y": 450}, "coords": {"x": 350, "y": 575}},
		{"type": "T", "id": "mn2-sd1-pt2", "start": {"x": 350, "y": 575}, "coords": {"x": 400, "y": 700}},
		{"type": "T", "id": "mn2-sd1-pt3", "start": {"x": 400, "y": 700}, "coords": {"x": 800, "y": 700}},
		{"type": "TER", "id": "mn2-sd1-pt4", "start": {"x": 800, "y": 700}, "coords": {"x": 900, "y": 700}},
		
			{"type": "T", "id": "mn2-sd1-sd1-pt1", "start": {"x": 350, "y": 575}, "coords": {"x": 650, "y": 575}},
			{"type": "T", "id": "mn2-sd1-sd1-pt2", "start": {"x": 650, "y": 575}, "coords": {"x": 700, "y": 575}},
			{"type": "TER", "id": "mn2-sd1-sd1-pt3", "start": {"x": 700, "y": 575}, "coords": {"x": 900, "y": 575}},
			
	{"type": "T", "id": "sw1", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 300}},
	{"type": "T", "id": "sw2", "start": {"x": 400, "y": 450}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "sw3", "start": {"x": 550, "y": 450}, "coords": {"x": 650, "y": 575}},
	{"type": "T", "id": "sw4", "start": {"x": 700, "y": 575}, "coords": {"x": 800, "y": 700}},
	
	{"type": "PL", "corner": {"x": 610, "y": 307}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 610, "y": 63}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 400, "y": 582}, "size": {"x": 200, "y": 30}}
];


var test5 = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 300, "y": 200}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 300, "y": 200}, "coords": {"x": 400, "y": 200}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 400, "y": 200}, "coords": {"x": 500, "y": 300}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 500, "y": 300}, "coords": {"x": 600, "y": 100}},
	{"type": "TER", "id": "mn1-pt5", "start": {"x": 600, "y": 100}, "coords": {"x": 900, "y": 100}}
];

var test5Info = {
	"name": "Лесная",
	"direction": "Тест",
	"type": "Путь",
	"code": "000005",
	"platforms": "0",
	"paths": "1",
	"toMoscow": "-",
	"additionalInfo": "Станция Лесная состоит только из одного пути, на котором проверяется способность системы отрисовывать состоящие из нескольких вагонов поезда.",
	"owner": "Крамер Наталья Игоревна",
	"ownerPhone": "8-910-580-55-56",
	"ownerEmail": "kramernatalya@gmail.com"
};

var test5Trains = [
	{"number": "#3512",
	 "contains": "Автомобильные запчасти",
	 "driver": "Антон Сазонов",
	 "cars": 4,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-pt1", "timeMins": 7, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt3", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt4", "timeMins": 12, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt5", "timeMins": 7, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt5", "timeMins": 20, "timeSecs": 0, "toPercent": 100}
		]
		
	}
];

var test6 = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 100}, "coords": {"x": 300, "y": 400}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 300, "y": 400}, "coords": {"x": 500, "y": 400}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 500, "y": 400}, "coords": {"x": 700, "y": 300}},
	{"type": "TER", "id": "mn1-pt4", "start": {"x": 700, "y": 300}, "coords": {"x": 900, "y": 300}},
	
	{"type": "PL", "corner": {"x": 710, "y": 263}, "size": {"x": 200, "y": 30}}
];

var test6Info = {
	"name": "Куприно",
	"direction": "Тест",
	"type": "Путь",
	"code": "000006",
	"platforms": "1",
	"paths": "1",
	"toMoscow": "-",
	"additionalInfo": "Рисунок не является схемой станции, на нем изображен только путь, который используется для проверки работы системы по движению поездов, состоящих из нескольких вагонов.",
	"owner": "Крамер Наталья Игоревна",
	"ownerPhone": "8-910-580-55-56",
	"ownerEmail": "kramernatalya@gmail.com"
};

var test6Trains = [
	{"number": "#0201",
	 "contains": "Бензин",
	 "driver": "Василий Кулагин",
	 "cars": 9,
	 "part": [
		{"name": "0", "hours": 8, "mins": 40, "track": "mn1-pt1", "timeMins": 8, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "mn1-pt2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn1-pt3", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt4", "timeMins": 12, "timeSecs": 0, "toPercent": 100},
		{"name": "3", "track": "mn1-pt4", "timeMins": 425, "timeSecs": 0, "toPercent": 100}
		]
		
	}
];

var test4 = [
	{"type": "T", "id": "ln1-pt0", "start": {"x": 0, "y": 100}, "coords": {"x": 300, "y": 100}},
        {"type": "T", "id": "ln1-br1", "start": {"x": 300, "y": 100}, "coords": {"x": 350, "y": 50}},
        {"type": "TER", "id": "ln1-pt1", "start": {"x": 350, "y": 50}, "coords": {"x": 650, "y": 50}},
        {"type": "T", "id": "ln1-br2", "start": {"x": 300, "y": 100}, "coords": {"x": 350, "y": 150}},
	{"type": "TER", "id": "ln1-pt2", "start": {"x": 350, "y": 150}, "coords": {"x": 650, "y": 150}},
        {"type": "T", "id": "ln2-pt0", "start": {"x": 0, "y": 300}, "coords": {"x": 300, "y": 300}},
        {"type": "T", "id": "ln2-br1", "start": {"x": 300, "y": 300}, "coords": {"x": 350, "y": 250}},
        {"type": "TER", "id": "ln2-pt1", "start": {"x": 350, "y": 250}, "coords": {"x": 650, "y": 250}},
        {"type": "T", "id": "ln2-br2", "start": {"x": 300, "y": 300}, "coords": {"x": 350, "y": 350}},
	{"type": "TER", "id": "ln2-pt2", "start": {"x": 350, "y": 350}, "coords": {"x": 650, "y": 350}},
        {"type": "T", "id": "ln3-pt0", "start": {"x": 0, "y": 500}, "coords": {"x": 300, "y": 500}},
        {"type": "T", "id": "ln3-br1", "start": {"x": 300, "y": 500}, "coords": {"x": 350, "y": 450}},
        {"type": "TER", "id": "ln3-pt1", "start": {"x": 350, "y": 450}, "coords": {"x": 650, "y": 450}},
        {"type": "T", "id": "ln3-br2", "start": {"x": 300, "y": 500}, "coords": {"x": 350, "y": 550}},
	{"type": "TER", "id": "ln3-pt2", "start": {"x": 350, "y": 550}, "coords": {"x": 650, "y": 550}}
];

var test4Info = {
	"name": "Калинино",
	"direction": "Тест",
	"type": "Сортировочная станция",
	"code": "000004",
	"platforms": "3",
	"paths": "3",
	"toMoscow": "-",
	"additionalInfo": "Схема станции Калинино было создана для тестирования системы по прорисовке станций.",
	"owner": "Красильников Иван Сергеевич",
	"ownerPhone": "8-916-123-73-74",
	"ownerEmail": "kras_ivan@mail.ru"
};

var test4Trains = [
	{"number": "#1960",
	 "contains": "Металлолом",
	 "driver": "Макар Лебедев",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 40, "track": "ln1-pt0", "timeMins": 8, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "ln1-br1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "ln1-pt1", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln1-pt1", "timeMins": 60, "timeSecs": 0, "toPercent": 100}
		]
		
	},
        {"number": "#6520",
	 "contains": "Продукты питания",
	 "driver": "Игорь Родионов",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "ln3-pt1", "timeMins": 8, "timeSecs": 0, "fromPercent": 90, "toPercent": 0},
		{"name": "1", "track": "ln3-br1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "ln3-pt0", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
		
	},
        {"number": "#1999",
	 "contains": "Почта",
	 "driver": "Михаил Орехов",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "ln2-pt2", "timeMins": 8, "timeSecs": 0, "fromPercent": 90, "toPercent": 0},
		{"name": "1", "track": "ln2-br2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "ln2-br1", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln2-pt1", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln2-pt1", "timeMins": 60, "timeSecs": 0, "toPercent": 100}
		]
		
	}
];

var test7 = [
	{"type": "T", "id": "ln1-pt1", "start": {"x": 0, "y": 250}, "coords": {"x": 50, "y": 250}},
        {"type": "T", "id": "ln1-pt2", "start": {"x": 50, "y": 250}, "coords": {"x": 200, "y": 250}},
        {"type": "T", "id": "ln1-pt3", "start": {"x": 200, "y": 250}, "coords": {"x": 400, "y": 250}},
        {"type": "T", "id": "ln1-pt4", "start": {"x": 400, "y": 250}, "coords": {"x": 700, "y": 250}},
        {"type": "T", "id": "ln1-pt5", "start": {"x": 700, "y": 250}, "coords": {"x": 800, "y": 250}},
        {"type": "T", "id": "ln1-pt6", "start": {"x": 800, "y": 250}, "coords": {"x": 1000, "y": 250}},
        {"type": "T", "id": "ln2-pt1", "start": {"x": 0, "y": 350}, "coords": {"x": 75, "y": 350}},
        {"type": "T", "id": "ln2-pt2", "start": {"x": 75, "y": 350}, "coords": {"x": 150, "y": 350}},
        {"type": "T", "id": "ln2-pt3", "start": {"x": 150, "y": 350}, "coords": {"x": 450, "y": 350}},
        {"type": "T", "id": "ln2-pt4", "start": {"x": 450, "y": 350}, "coords": {"x": 475, "y": 350}},
        {"type": "T", "id": "ln2-pt5", "start": {"x": 475, "y": 350}, "coords": {"x": 700, "y": 350}},
        {"type": "T", "id": "ln2-pt6", "start": {"x": 700, "y": 350}, "coords": {"x": 1000, "y": 350}},
        {"type": "T", "id": "ln3-pt1", "start": {"x": 0, "y": 50}, "coords": {"x": 150, "y": 50}},
        {"type": "T", "id": "ln3-br1", "start": {"x": 150, "y": 50}, "coords": {"x": 250, "y": 150}},
        {"type": "T", "id": "ln3-br2", "start": {"x": 200, "y": 250}, "coords": {"x": 250, "y": 150}},
        {"type": "T", "id": "ln3-pt9", "start": {"x": 250, "y": 150}, "coords": {"x": 350, "y": 150}},
        {"type": "T", "id": "ln3-br3", "start": {"x": 350, "y": 150}, "coords": {"x": 400, "y": 250}},
        {"type": "T", "id": "ln3-br4", "start": {"x": 350, "y": 150}, "coords": {"x": 400, "y": 50}},
        {"type": "T", "id": "ln3-pt3", "start": {"x": 400, "y": 50}, "coords": {"x": 500, "y": 50}},
        {"type": "T", "id": "ln3-br5", "start": {"x": 500, "y": 50}, "coords": {"x": 600, "y": 150}},
        {"type": "T", "id": "ln3-br6", "start": {"x": 600, "y": 150}, "coords": {"x": 700, "y": 250}},
        {"type": "TER", "id": "ln3-pt7", "start": {"x": 500, "y": 50}, "coords": {"x": 900, "y": 50}},
        {"type": "TER", "id": "ln3-pt8", "start": {"x": 600, "y": 150}, "coords": {"x": 900, "y": 150}},
        {"type": "T", "id": "ln3-br7", "start": {"x": 150, "y": 350}, "coords": {"x": 200, "y": 250}},
        {"type": "T", "id": "ln3-br8", "start": {"x": 400, "y": 250}, "coords": {"x": 450, "y": 350}},
        {"type": "T", "id": "ln3-pt10", "start": {"x": 0, "y": 150}, "coords": {"x": 25, "y": 150}},
        {"type": "T", "id": "ln3-br9", "start": {"x": 25, "y": 150}, "coords": {"x": 50, "y": 250}},
        {"type": "T", "id": "ln3-br9", "start": {"x": 50, "y": 250}, "coords": {"x": 75, "y": 350}},
        {"type": "T", "id": "ln4-br1", "start": {"x": 75, "y": 350}, "coords": {"x": 100, "y": 450}},
        {"type": "T", "id": "ln4-br2", "start": {"x": 100, "y": 450}, "coords": {"x": 125, "y": 550}},
        {"type": "T", "id": "ln4-br3", "start": {"x": 125, "y": 550}, "coords": {"x": 150, "y": 650}},
        {"type": "T", "id": "ln4-br4", "start": {"x": 150, "y": 650}, "coords": {"x": 175, "y": 750}},
        {"type": "T", "id": "ln4-pt1", "start": {"x": 175, "y": 750}, "coords": {"x": 200, "y": 750}},
        {"type": "T", "id": "ln4-pt2", "start": {"x": 200, "y": 750}, "coords": {"x": 375, "y": 750}},
        {"type": "T", "id": "ln4-br5", "start": {"x": 375, "y": 750}, "coords": {"x": 400, "y": 650}},
        {"type": "T", "id": "ln4-br6", "start": {"x": 400, "y": 650}, "coords": {"x": 425, "y": 550}},
        {"type": "T", "id": "ln4-br7", "start": {"x": 425, "y": 550}, "coords": {"x": 450, "y": 450}},
        {"type": "T", "id": "ln4-br8", "start": {"x": 450, "y": 450}, "coords": {"x": 475, "y": 350}},
        {"type": "T", "id": "ln4-pt9", "start": {"x": 100, "y": 450}, "coords": {"x": 200, "y": 450}},
        {"type": "TER", "id": "ln4-pt3", "start": {"x": 200, "y": 450}, "coords": {"x": 300, "y": 450}},
        {"type": "T", "id": "ln4-pt4", "start": {"x": 125, "y": 550}, "coords": {"x": 250, "y": 550}},
        {"type": "T", "id": "ln4-br10", "start": {"x": 200, "y": 450}, "coords": {"x": 250, "y": 550}},
        {"type": "T", "id": "ln4-pt5", "start": {"x": 250, "y": 550}, "coords": {"x": 425, "y": 550}},
        {"type": "T", "id": "ln4-br11", "start": {"x": 200, "y": 750}, "coords": {"x": 250, "y": 650}},
        {"type": "TER", "id": "ln4-pt10", "start": {"x": 250, "y": 650}, "coords": {"x": 300, "y": 650}},
        {"type": "TER", "id": "ln4-pt6", "start": {"x": 375, "y": 750}, "coords": {"x": 900, "y": 750}},
        {"type": "TER", "id": "ln4-pt7", "start": {"x": 400, "y": 650}, "coords": {"x": 900, "y": 650}},
        {"type": "TER", "id": "ln4-pt8", "start": {"x": 450, "y": 450}, "coords": {"x": 900, "y": 450}},
        {"type": "T", "id": "ln4-br12", "start": {"x": 700, "y": 350}, "coords": {"x": 800, "y": 250}}
        
];

var test7Info = {
	"name": "Кузьмино",
	"direction": "Тест",
	"type": "Пассажирская станция",
	"code": "000007",
	"platforms": "3",
	"paths": "3",
	"toMoscow": "-",
	"additionalInfo": "Данная схема является частью проекта. Используется для тестирования системы и не является реальной станцией.",
	"owner": "Проскурин Максим Вадимович",
	"ownerPhone": "8-916-592-41-66",
	"ownerEmail": "newowner@mail.ru"
};

var test7Trains = [
	{"number": "#0073",
	 "contains": "Груз фонда SCP",
	 "driver": "Алексей Ковров",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 40, "track": "ln1-pt1", "timeMins": 8, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "ln1-pt2", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "ln1-pt3", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln1-pt4", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "4", "track": "ln1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "5", "track": "ln1-pt6", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
		
	},
        {"number": "#0847",
	 "contains": "Тропические фрукты",
	 "driver": "Сергей Петров",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "ln3-pt1", "timeMins": 8, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "ln3-br1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "ln3-pt9", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln3-br4", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
                {"name": "4", "track": "ln3-pt3", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "5", "track": "ln3-br5", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
                {"name": "6", "track": "ln3-br6", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
                {"name": "7", "track": "ln1-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "8", "track": "ln1-pt6", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
		
	},
        {"number": "#1980",
	 "contains": "MP3 Диски",
	 "driver": "Николай Басков",
	 "cars": 1,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "ln2-pt1", "timeMins": 8, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "ln4-br1", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "ln4-br2", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln4-pt4", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "4", "track": "ln4-pt5", "timeMins": 8, "timeSecs": 0, "toPercent": 100},
                {"name": "2", "track": "ln4-br7", "timeMins": 6, "timeSecs": 0, "toPercent": 100},
                {"name": "3", "track": "ln4-pt8", "timeMins": 8, "timeSecs": 0, "toPercent": 100}
		]
		
	}
];


/*Горьковское направление*/
var serpimolot = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 250}, "coords": {"x": 1000, "y": 250}},
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 1000, "y": 300}},
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 350}, "coords": {"x": 1000, "y": 350}},
	{"type": "T", "id": "mn4-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 250, "y": 400}},
		{"type": "T", "id": "mn4-pt2", "start": {"x": 250, "y": 400}, "coords": {"x": 300, "y": 450}},
		{"type": "T", "id": "mn4-pt3", "start": {"x": 300, "y": 450}, "coords": {"x": 700, "y": 450}},
		{"type": "T", "id": "mn4-pt4", "start": {"x": 700, "y": 450}, "coords": {"x": 750, "y": 400}},
		{"type": "T", "id": "mn4-pt5", "start": {"x": 750, "y": 400}, "coords": {"x": 1000, "y": 400}},
	{"type": "T", "id": "mn5-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 250, "y": 450}},
		{"type": "T", "id": "mn5-pt2", "start": {"x": 250, "y": 450}, "coords": {"x": 300, "y": 500}},
		{"type": "T", "id": "mn5-pt3", "start": {"x": 300, "y": 500}, "coords": {"x": 700, "y": 500}},
		{"type": "T", "id": "mn5-pt4", "start": {"x": 700, "y": 500}, "coords": {"x": 750, "y": 450}},
		{"type": "T", "id": "mn5-pt5", "start": {"x": 750, "y": 450}, "coords": {"x": 1000, "y": 450}},
	
	{"type": "PL", "corner": {"x": 300, "y": 357}, "size": {"x": 400, "y": 50}},
	{"type": "PL", "corner": {"x": 400, "y": 507}, "size": {"x": 300, "y": 30}}
];

var serpimolotInfo = {
	"name": "Серп и Молот",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "193735",
	"platforms": "2",
	"paths": "5",
	"toMoscow": "2 км",
	"additionalInfo": "Состоит из двух боковых платформ, соединённых пешеходным мостом. При входе на мост располагаются кассы и турникеты. Платформа находится в границах станции Москва-Товарная-Курская. Платформа находится на небольшой насыпи.",
	"owner": "Криптов Петр Филиппович",
	"ownerPhone": "8-926-109-22-12",
	"ownerEmail": "kript@rzd.ru"
};

var serpimolotTrains = [	
	
];



var karacharovo = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 350}, "coords": {"x": 150, "y": 350}},
		{"type": "T", "id": "mn1-pt2", "start": {"x": 150, "y": 350}, "coords": {"x": 250, "y": 250}},
		{"type": "T", "id": "mn1-pt3", "start": {"x": 250, "y": 250}, "coords": {"x": 750, "y": 250}},
		{"type": "T", "id": "mn1-pt4", "start": {"x": 750, "y": 250}, "coords": {"x": 850, "y": 350}},
		{"type": "T", "id": "mn1-pt5", "start": {"x": 850, "y": 350}, "coords": {"x": 1000, "y": 350}},
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 1000, "y": 400}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 0, "y": 450}, "coords": {"x": 1000, "y": 450}},
	
	{"type": "PL", "corner": {"x": 300, "y": 363}, "size": {"x": 400, "y": 30}},
	{"type": "PL", "corner": {"x": 200, "y": 457}, "size": {"x": 600, "y": 30}}
	
];

var karacharovoInfo = {
	"name": "Карачарово",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "193720",
	"platforms": "2",
	"paths": "3",
	"toMoscow": "6 км",
	"additionalInfo": "Состоит из двух боковых платформ, соединённых подземным переходом. Турникетами остановочный пункт не оборудован. Касса расположена на платформе на Москву, работает по будням по сокращённому режиму.",
	"owner": "Криптов Петр Филиппович",
	"ownerPhone": "8-926-109-22-12",
	"ownerEmail": "kript@rzd.ru"
};

var karacharovoTrains = [	
	
];


var chukhlinka = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 1000, "y": 300}},
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 1000, "y": 400}},
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 1000, "y": 450}},
	
	{"type": "PL", "corner": {"x": 250, "y": 307}, "size": {"x": 500, "y": 86}},
	{"type": "PL", "corner": {"x": 350, "y": 457}, "size": {"x": 400, "y": 30}}
	
];

var chukhlinkaInfo = {
	"name": "Чухлинка",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "",
	"platforms": "",
	"paths": "",
	"toMoscow": "",
	"additionalInfo": "",
	"owner": "",
	"ownerPhone": "",
	"ownerEmail": ""
};

var chukhlinkaTrains = [	
	
];


var kuskovo = [
	{"type": "TEL", "id": "br1-pt1", "start": {"x": 100, "y": 450}, "coords": {"x": 250, "y": 450}},
		{"type": "T", "id": "br2-pt1", "start": {"x": 320, "y": 400}, "coords": {"x": 1070, "y": 400}},
	{"type": "T", "id": "br1-pt2", "start": {"x": 250, "y": 450}, "coords": {"x": 700, "y": 450}},
	{"type": "T", "id": "br1-pt3", "start": {"x": 700, "y": 450}, "coords": {"x": 1000, "y": 450}},

	{"type": "TER", "id": "sd1-pt1", "start": {"x": 1920, "y": 150}, "coords": {"x": 2200, "y": 150}},
	
	{"type": "T", "id": "sd2-pt1", "start": {"x": 1850, "y": 200}, "coords": {"x": 2700, "y": 200}},
	{"type": "T", "id": "sd2-pt2", "start": {"x": 2700, "y": 200}, "coords": {"x": 2770, "y": 250}},
	{"type": "T", "id": "sd2-pt3", "start": {"x": 2770, "y": 250}, "coords": {"x": 2910, "y": 350}},
	
	{"type": "T", "id": "sd3-pt1", "start": {"x": 1780, "y": 250}, "coords": {"x": 2770, "y": 250}},
	
	{"type": "T", "id": "sd4-pt1", "start": {"x": 1710, "y": 300}, "coords": {"x": 2700, "y": 300}},
	{"type": "T", "id": "sd4-pt2", "start": {"x": 2700, "y": 300}, "coords": {"x": 2770, "y": 350}},
	
	{"type": "T", "id": "ln1-pt1", "start": {"x": 1140, "y": 350}, "coords": {"x": 1260, "y": 350}},
	{"type": "T", "id": "ln1-pt2", "start": {"x": 1260, "y": 350}, "coords": {"x": 1500, "y": 350}},
		{"type": "T", "id": "br3", "start": {"x": 1010, "y": 0}, "coords": {"x": 1500, "y": 350}},
	{"type": "T", "id": "ln1-pt3", "start": {"x": 1500, "y": 350}, "coords": {"x": 1640, "y": 350}},
	{"type": "T", "id": "ln1-pt4", "start": {"x": 1640, "y": 350}, "coords": {"x": 2770, "y": 350}},
	{"type": "T", "id": "ln1-pt5", "start": {"x": 2770, "y": 350}, "coords": {"x": 2910, "y": 350}},
	{"type": "T", "id": "ln1-pt6", "start": {"x": 2910, "y": 350}, "coords": {"x": 2990, "y": 350}},
	{"type": "T", "id": "ln1-pt7", "start": {"x": 2990, "y": 350}, "coords": {"x": 3060, "y": 400}},
	
	{"type": "T", "id": "ln2-pt1", "start": {"x": 1190, "y": 400}, "coords": {"x": 2910, "y": 400}},
	{"type": "T", "id": "ln2-pt2", "start": {"x": 2910, "y": 400}, "coords": {"x": 3060, "y": 400}},
	{"type": "T", "id": "ln2-pt3", "start": {"x": 3060, "y": 400}, "coords": {"x": 3160, "y": 400}},
		{"type": "TER", "id": "br4", "start": {"x": 3160, "y": 400}, "coords": {"x": 3300, "y": 400}},
	{"type": "T", "id": "ln2-pt4", "start": {"x": 3160, "y": 400}, "coords": {"x": 3300, "y": 500}},
	
	{"type": "T", "id": "ln3-pt1", "start": {"x": 1120, "y": 450}, "coords": {"x": 2840, "y": 450}},
	{"type": "T", "id": "ln3-pt2", "start": {"x": 2840, "y": 450}, "coords": {"x": 2910, "y": 400}},
	
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 500}, "coords": {"x": 450, "y": 500}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 450, "y": 500}, "coords": {"x": 770, "y": 500}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 770, "y": 500}, "coords": {"x": 920, "y": 500}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 920, "y": 500}, "coords": {"x": 1050, "y": 500}},
	{"type": "T", "id": "mn1-pt5", "start": {"x": 1050, "y": 500}, "coords": {"x": 1190, "y": 500}},
	{"type": "T", "id": "mn1-pt6", "start": {"x": 1190, "y": 500}, "coords": {"x": 3300, "y": 500}},
	{"type": "T", "id": "mn1-pt6", "start": {"x": 3300, "y": 500}, "coords": {"x": 4000, "y": 500}},
	
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 550}, "coords": {"x": 350, "y": 550}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 350, "y": 550}, "coords": {"x": 520, "y": 550}},
	{"type": "T", "id": "mn2-pt3", "start": {"x": 520, "y": 550}, "coords": {"x": 750, "y": 550}},
	{"type": "T", "id": "mn2-pt4", "start": {"x": 750, "y": 550}, "coords": {"x": 850, "y": 550}},
	{"type": "T", "id": "mn2-pt5", "start": {"x": 850, "y": 550}, "coords": {"x": 1260, "y": 550}},
	{"type": "T", "id": "mn2-pt6", "start": {"x": 1260, "y": 550}, "coords": {"x": 1640, "y": 550}},
	{"type": "T", "id": "mn2-pt6", "start": {"x": 1640, "y": 550}, "coords": {"x": 4000, "y": 550}},
	
	{"type": "T", "id": "sd5-pt1", "start": {"x": 1710, "y": 600}, "coords": {"x": 1850, "y": 600}},
	{"type": "T", "id": "sd5-pt2", "start": {"x": 1850, "y": 600}, "coords": {"x": 4000, "y": 600}},
	
	{"type": "T", "id": "sd6-pt1", "start": {"x": 1920, "y": 650}, "coords": {"x": 4000, "y": 650}},
	
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 600}, "coords": {"x": 280, "y": 600}},
	{"type": "T", "id": "mn3-pt2", "start": {"x": 280, "y": 600}, "coords": {"x": 350, "y": 600}},
	{"type": "T", "id": "mn3-pt3", "start": {"x": 350, "y": 600}, "coords": {"x": 680, "y": 600}},
	
	{"type": "T", "id": "mn4-pt1", "start": {"x": 0, "y": 650}, "coords": {"x": 420, "y": 650}},
	{"type": "T", "id": "mn4-pt2", "start": {"x": 420, "y": 650}, "coords": {"x": 550, "y": 650}},
	{"type": "T", "id": "mn4-pt3", "start": {"x": 550, "y": 650}, "coords": {"x": 610, "y": 650}},
	{"type": "T", "id": "mn4-pt4", "start": {"x": 610, "y": 650}, "coords": {"x": 850, "y": 650}},
	{"type": "T", "id": "mn4-pt5", "start": {"x": 850, "y": 650}, "coords": {"x": 1850, "y": 650}},
	{"type": "T", "id": "mn4-pt6", "start": {"x": 1850, "y": 650}, "coords": {"x": 1920, "y": 700}},
	{"type": "T", "id": "mn4-pt7", "start": {"x": 1920, "y": 700}, "coords": {"x": 4000, "y": 700}},
	
	{"type": "T", "id": "mn5-pt1", "start": {"x": 0, "y": 750}, "coords": {"x": 350, "y": 750}},
	{"type": "T", "id": "mn5-pt2", "start": {"x": 350, "y": 750}, "coords": {"x": 410, "y": 750}},
	{"type": "T", "id": "mn5-pt3", "start": {"x": 410, "y": 750}, "coords": {"x": 990, "y": 750}},
	{"type": "T", "id": "mn5-pt4", "start": {"x": 990, "y": 750}, "coords": {"x": 1280, "y": 750}},
	{"type": "T", "id": "mn5-pt5", "start": {"x": 1280, "y": 750}, "coords": {"x": 1350, "y": 700}},
	{"type": "T", "id": "mn5-pt6", "start": {"x": 1350, "y": 700}, "coords": {"x": 1850, "y": 700}},
	{"type": "T", "id": "mn5-pt7", "start": {"x": 1850, "y": 700}, "coords": {"x": 1920, "y": 750}},
	{"type": "T", "id": "mn5-pt7", "start": {"x": 1920, "y": 750}, "coords": {"x": 4000, "y": 750}},
	
	{"type": "T", "id": "mn6-pt1", "start": {"x": 0, "y": 800}, "coords": {"x": 280, "y": 800}},
	{"type": "T", "id": "mn6-pt2", "start": {"x": 280, "y": 800}, "coords": {"x": 4000, "y": 800}},
	
	
	
	{"type": "T", "id": "sw1", "start": {"x": 280, "y": 600}, "coords": {"x": 350, "y": 550}},
	{"type": "T", "id": "sw2", "start": {"x": 350, "y": 600}, "coords": {"x": 420, "y": 650}},
	{"type": "T", "id": "sw3", "start": {"x": 280, "y": 800}, "coords": {"x": 350, "y": 750}},
	{"type": "T", "id": "sw4", "start": {"x": 250, "y": 450}, "coords": {"x": 320, "y": 400}},
	{"type": "T", "id": "sw5", "start": {"x": 700, "y": 450}, "coords": {"x": 770, "y": 500}},
	{"type": "T", "id": "sw6", "start": {"x": 1000, "y": 450}, "coords": {"x": 1070, "y": 400}},
	{"type": "T", "id": "sw7", "start": {"x": 450, "y": 500}, "coords": {"x": 520, "y": 550}},
	{"type": "T", "id": "sw8", "start": {"x": 410, "y": 750}, "coords": {"x": 550, "y": 650}},
	{"type": "T", "id": "sw9", "start": {"x": 610, "y": 650}, "coords": {"x": 680, "y": 600}},
	{"type": "T", "id": "sw10", "start": {"x": 680, "y": 600}, "coords": {"x": 750, "y": 550}},
	{"type": "T", "id": "sw11", "start": {"x": 850, "y": 550}, "coords": {"x": 920, "y": 500}},
	{"type": "T", "id": "sw12", "start": {"x": 850, "y": 650}, "coords": {"x": 990, "y": 750}},
	{"type": "T", "id": "sw13", "start": {"x": 1050, "y": 500}, "coords": {"x": 1120, "y": 450}},
	{"type": "T", "id": "sw14", "start": {"x": 1120, "y": 450}, "coords": {"x": 1190, "y": 400}},
	{"type": "T", "id": "sw15", "start": {"x": 1190, "y": 400}, "coords": {"x": 1260, "y": 350}},
	{"type": "T", "id": "sw16", "start": {"x": 1070, "y": 400}, "coords": {"x": 1140, "y": 350}},
	{"type": "T", "id": "sw17", "start": {"x": 1190, "y": 500}, "coords": {"x": 1260, "y": 550}},
	{"type": "T", "id": "sw18", "start": {"x": 1640, "y": 350}, "coords": {"x": 1710, "y": 300}},
	{"type": "T", "id": "sw19", "start": {"x": 1710, "y": 300}, "coords": {"x": 1780, "y": 250}},
	{"type": "T", "id": "sw20", "start": {"x": 1780, "y": 250}, "coords": {"x": 1850, "y": 200}},
	{"type": "T", "id": "sw21", "start": {"x": 1850, "y": 200}, "coords": {"x": 1920, "y": 150}},
	{"type": "T", "id": "sw22", "start": {"x": 1640, "y": 550}, "coords": {"x": 1710, "y": 600}},
	{"type": "T", "id": "sw23", "start": {"x": 1850, "y": 600}, "coords": {"x": 1920, "y": 650}},
	
	{"type": "PL", "corner": {"x": 1355, "y": 707}, "size": {"x": 490, "y": 86}},
	{"type": "PL", "corner": {"x": 1500, "y": 807}, "size": {"x": 400, "y": 30}}
	
];

var kuskovoInfo = {
	"name": "Кусково",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "193701",
	"platforms": "1",
	"paths": "7",
	"toMoscow": "10 км",
	"additionalInfo": "Станция оборудована системой видеонаблюдения. На станции работает квалифицированный персонал.",
	"owner": "Ковалев Дмитрий Илларионович",
	"ownerPhone": "8-926-472-43-11",
	"ownerEmail": "kovalev1970@mail.ru"
};

var kuskovoTrains = [	
	{"number": "#3281",
	 "contains": "Дрова",
	 "driver": "Филипп Тимофеев",
	 "cars": 6,
	 "part": [
		{"name": "0", "hours": 8, "mins": 30, "track": "mn1-pt1", "timeMins": 8, "timeSecs": 0, "fromPercent": 0, "toPercent": 100},
		{"name": "1", "track": "sw7", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
		{"name": "2", "track": "mn2-pt3", "timeMins": 4, "timeSecs": 0, "toPercent": 100},
        {"name": "3", "track": "mn2-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
        {"name": "4", "track": "sw11", "timeMins": 2, "timeSecs": 0, "toPercent": 100},
        {"name": "5", "track": "mn1-pt4", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
        {"name": "5", "track": "sw13", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
        {"name": "5", "track": "sw14", "timeMins": 3, "timeSecs": 0, "toPercent": 100},
        {"name": "5", "track": "ln2-pt1", "timeMins": 18, "timeSecs": 0, "toPercent": 80},
        {"name": "5", "track": "ln2-pt1", "timeMins": 120, "timeSecs": 0, "toPercent": 80}
		]
		
	}
];


var novogireevo = [
	{"type": "T", "id": "sd1-pt1", "start": {"x": 0, "y": 200}, "coords": {"x": 140, "y": 200}},
	{"type": "T", "id": "sd1-pt2", "start": {"x": 140, "y": 200}, "coords": {"x": 210, "y": 250}},
	{"type": "T", "id": "sd1-pt3", "start": {"x": 210, "y": 250}, "coords": {"x": 280, "y": 300}},
	{"type": "T", "id": "sd1-pt4", "start": {"x": 280, "y": 300}, "coords": {"x": 350, "y": 350}},
	
	{"type": "T", "id": "sd2-pt1", "start": {"x": 0, "y": 250}, "coords": {"x": 210, "y": 250}},
	
	{"type": "T", "id": "sd3-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 280, "y": 300}},
	
	{"type": "T", "id": "sd4-pt1", "start": {"x": 0, "y": 350}, "coords": {"x": 350, "y": 350}},
	{"type": "T", "id": "sd4-pt2", "start": {"x": 350, "y": 350}, "coords": {"x": 430, "y": 350}},
	{"type": "TER", "id": "sd4-pt3", "start": {"x": 430, "y": 350}, "coords": {"x": 800, "y": 350}},
	
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 500, "y": 400}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 500, "y": 400}, "coords": {"x": 870, "y": 400}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 870, "y": 400}, "coords": {"x": 1200, "y": 400}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 1200, "y": 400}, "coords": {"x": 1500, "y": 400}},
	
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 500}, "coords": {"x": 870, "y": 500}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 940, "y": 450}, "coords": {"x": 1000, "y": 450}},
	{"type": "T", "id": "mn2-pt3", "start": {"x": 1000, "y": 450}, "coords": {"x": 1130, "y": 450}},
	{"type": "T", "id": "mn2-pt4", "start": {"x": 1130, "y": 450}, "coords": {"x": 1500, "y": 450}},
	
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 550}, "coords": {"x": 800, "y": 550}},
	{"type": "T", "id": "mn3-pt2", "start": {"x": 800, "y": 550}, "coords": {"x": 1140, "y": 550}},
	{"type": "T", "id": "mn3-pt2", "start": {"x": 1140, "y": 550}, "coords": {"x": 1500, "y": 550}},
	
	{"type": "T", "id": "sw1", "start": {"x": 430, "y": 350}, "coords": {"x": 500, "y": 400}},
	{"type": "T", "id": "sw2", "start": {"x": 800, "y": 550}, "coords": {"x": 870, "y": 500}},
	{"type": "T", "id": "sw3", "start": {"x": 870, "y": 500}, "coords": {"x": 940, "y": 450}},
	{"type": "T", "id": "sw4", "start": {"x": 870, "y": 400}, "coords": {"x": 940, "y": 450}},
	{"type": "T", "id": "sw5", "start": {"x": 1000, "y": 450}, "coords": {"x": 1140, "y": 550}},
	{"type": "T", "id": "sw6", "start": {"x": 1130, "y": 450}, "coords": {"x": 1200, "y": 400}},
	
	{"type": "PL", "corner": {"x": 390, "y": 407}, "size": {"x": 410, "y": 86}},
	{"type": "PL", "corner": {"x": 450, "y": 557}, "size": {"x": 300, "y": 30}}
];

var novogireevoInfo = {
	"name": "Новогиреево",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "",
	"platforms": "",
	"paths": "",
	"toMoscow": "",
	"additionalInfo": "",
	"owner": "",
	"ownerPhone": "",
	"ownerEmail": ""
};

var novogireevoTrains = [	
	
];


var reutovo = [
	{"type": "T", "id": "sd3-pt1", "start": {"x": 1500, "y": 0}, "coords": {"x": 1920, "y": 300}},
	{"type": "T", "id": "sd3-pt2", "start": {"x": 1920, "y": 300}, "coords": {"x": 2070, "y": 300}},
	{"type": "TER", "id": "sd3-pt3", "start": {"x": 2070, "y": 300}, "coords": {"x": 2200, "y": 300}},

	{"type": "TEL", "id": "ln1-pt1", "start": {"x": 1250, "y": 350}, "coords": {"x": 1430, "y": 350}},
	{"type": "T", "id": "ln1-pt2", "start": {"x": 1430, "y": 350}, "coords": {"x": 1500, "y": 400}},
	
	{"type": "TEL", "id": "ln2-pt1", "start": {"x": 1250, "y": 200}, "coords": {"x": 1500, "y": 200}},
	{"type": "T", "id": "ln2-pt2", "start": {"x": 1500, "y": 200}, "coords": {"x": 1570, "y": 250}},
	{"type": "T", "id": "ln2-pt3", "start": {"x": 1570, "y": 250}, "coords": {"x": 1640, "y": 300}},
	{"type": "T", "id": "ln2-pt4", "start": {"x": 1640, "y": 300}, "coords": {"x": 1710, "y": 350}},
	{"type": "T", "id": "ln2-pt5", "start": {"x": 1710, "y": 350}, "coords": {"x": 1850, "y": 350}},
		{"type": "TEL", "id": "ln3", "start": {"x": 1250, "y": 250}, "coords": {"x": 1570, "y": 250}},
		{"type": "TEL", "id": "ln4", "start": {"x": 1250, "y": 300}, "coords": {"x": 1640, "y": 300}},
	{"type": "T", "id": "ln2-pt6", "start": {"x": 1850, "y": 350}, "coords": {"x": 2000, "y": 350}},	
	{"type": "T", "id": "ln2-pt7", "start": {"x": 2000, "y": 350}, "coords": {"x": 2080, "y": 350}},
	{"type": "T", "id": "ln2-pt8", "start": {"x": 2080, "y": 350}, "coords": {"x": 2250, "y": 350}},
	{"type": "TER", "id": "ln2-pt9", "start": {"x": 2250, "y": 350}, "coords": {"x": 2450, "y": 350}},
		{"type": "TER", "id": "sd4", "start": {"x": 2320, "y": 300}, "coords": {"x": 2450, "y": 300}},

	{"type": "TEL", "id": "br1-pt1", "start": {"x": 50, "y": 400}, "coords": {"x": 320, "y": 400}},
	{"type": "T", "id": "br1-pt2", "start": {"x": 320, "y": 400}, "coords": {"x": 1280, "y": 400}},
	{"type": "T", "id": "br1-pt3", "start": {"x": 1280, "y": 400}, "coords": {"x": 1500, "y": 400}},
	{"type": "T", "id": "br1-pt4", "start": {"x": 1500, "y": 400}, "coords": {"x": 1650, "y": 400}},
	{"type": "T", "id": "br1-pt5", "start": {"x": 1650, "y": 400}, "coords": {"x": 1780, "y": 400}},
	{"type": "T", "id": "br1-pt6", "start": {"x": 1780, "y": 400}, "coords": {"x": 2150, "y": 400}},
	{"type": "T", "id": "br1-pt7", "start": {"x": 2150, "y": 400}, "coords": {"x": 2500, "y": 400}},
	{"type": "T", "id": "br1-pt8", "start": {"x": 2500, "y": 400}, "coords": {"x": 2710, "y": 250}},
	{"type": "T", "id": "br1-pt9", "start": {"x": 2710, "y": 250}, "coords": {"x": 3000, "y": 250}},

	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 200, "y": 450}},
	{"type": "T", "id": "mn1-pt2", "start": {"x": 200, "y": 450}, "coords": {"x": 250, "y": 450}},
	{"type": "T", "id": "mn1-pt3", "start": {"x": 250, "y": 450}, "coords": {"x": 330, "y": 450}},
	{"type": "T", "id": "mn1-pt4", "start": {"x": 330, "y": 450}, "coords": {"x": 1350, "y": 450}},
	{"type": "T", "id": "mn1-pt5", "start": {"x": 1350, "y": 450}, "coords": {"x": 1500, "y": 450}},
	{"type": "T", "id": "mn1-pt6", "start": {"x": 1500, "y": 450}, "coords": {"x": 1580, "y": 450}},
	{"type": "T", "id": "mn1-pt7", "start": {"x": 1580, "y": 450}, "coords": {"x": 1650, "y": 450}},
	{"type": "T", "id": "mn1-pt8", "start": {"x": 1650, "y": 450}, "coords": {"x": 3000, "y": 450}},
	
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 500}, "coords": {"x": 130, "y": 500}},
	{"type": "T", "id": "mn2-pt2", "start": {"x": 130, "y": 500}, "coords": {"x": 400, "y": 500}},
	{"type": "T", "id": "mn2-pt3", "start": {"x": 400, "y": 500}, "coords": {"x": 450, "y": 500}},
		{"type": "TER", "id": "sd1", "start": {"x": 520, "y": 550}, "coords": {"x": 600, "y": 550}},
	{"type": "T", "id": "mn2-pt4", "start": {"x": 450, "y": 500}, "coords": {"x": 740, "y": 500}},
	{"type": "T", "id": "mn2-pt5", "start": {"x": 740, "y": 500}, "coords": {"x": 1350, "y": 500}},
	{"type": "T", "id": "mn2-pt6", "start": {"x": 1350, "y": 500}, "coords": {"x": 1430, "y": 500}},
	{"type": "T", "id": "mn2-pt7", "start": {"x": 1430, "y": 500}, "coords": {"x": 1720, "y": 500}},
	{"type": "T", "id": "mn2-pt8", "start": {"x": 1720, "y": 500}, "coords": {"x": 1850, "y": 500}},
	{"type": "T", "id": "mn2-pt9", "start": {"x": 1850, "y": 500}, "coords": {"x": 3000, "y": 500}},
	
	{"type": "T", "id": "sd2", "start": {"x": 1170, "y": 550}, "coords": {"x": 1280, "y": 550}},
	
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 600}, "coords": {"x": 600, "y": 600}},
	{"type": "T", "id": "mn3-pt2", "start": {"x": 600, "y": 600}, "coords": {"x": 1100, "y": 600}},
	{"type": "T", "id": "mn3-pt3", "start": {"x": 1100, "y": 600}, "coords": {"x": 1300, "y": 600}},
	{"type": "T", "id": "mn3-pt4", "start": {"x": 1300, "y": 600}, "coords": {"x": 1370, "y": 550}},
	{"type": "T", "id": "mn3-pt4", "start": {"x": 1370, "y": 550}, "coords": {"x": 1920, "y": 550}},
	{"type": "T", "id": "mn3-pt4", "start": {"x": 1920, "y": 550}, "coords": {"x": 3000, "y": 550}},
	
	{"type": "T", "id": "sw1", "start": {"x": 130, "y": 500}, "coords": {"x": 200, "y": 450}},
	{"type": "T", "id": "sw2", "start": {"x": 250, "y": 450}, "coords": {"x": 320, "y": 400}},
	{"type": "T", "id": "sw3", "start": {"x": 330, "y": 450}, "coords": {"x": 400, "y": 500}},
	{"type": "T", "id": "sw4", "start": {"x": 450, "y": 500}, "coords": {"x": 520, "y": 550}},
	{"type": "T", "id": "sw5", "start": {"x": 600, "y": 600}, "coords": {"x": 740, "y": 500}},
	{"type": "T", "id": "sw6", "start": {"x": 1100, "y": 600}, "coords": {"x": 1170, "y": 550}},
	{"type": "T", "id": "sw7", "start": {"x": 1280, "y": 550}, "coords": {"x": 1350, "y": 500}},
	{"type": "T", "id": "sw8", "start": {"x": 1280, "y": 400}, "coords": {"x": 1350, "y": 450}},
	{"type": "T", "id": "sw9", "start": {"x": 1430, "y": 500}, "coords": {"x": 1500, "y": 450}},
	{"type": "T", "id": "sw10", "start": {"x": 1580, "y": 450}, "coords": {"x": 1650, "y": 400}},
	{"type": "T", "id": "sw11", "start": {"x": 1650, "y": 450}, "coords": {"x": 1720, "y": 500}},
	{"type": "T", "id": "sw12", "start": {"x": 1780, "y": 400}, "coords": {"x": 1850, "y": 350}},
	{"type": "T", "id": "sw13", "start": {"x": 1850, "y": 500}, "coords": {"x": 1920, "y": 550}},
	{"type": "T", "id": "sw14", "start": {"x": 2000, "y": 350}, "coords": {"x": 2070, "y": 300}},
	{"type": "T", "id": "sw15", "start": {"x": 2080, "y": 350}, "coords": {"x": 2150, "y": 400}},
	{"type": "T", "id": "sw16", "start": {"x": 2250, "y": 350}, "coords": {"x": 2320, "y": 300}},
	
	{"type": "PL", "corner": {"x": 615, "y": 363}, "size": {"x": 480, "y": 30}},
	{"type": "PL", "corner": {"x": 745, "y": 507}, "size": {"x": 350, "y": 86}},
	{"type": "PL", "corner": {"x": 745, "y": 607}, "size": {"x": 400, "y": 30}}
];

var reutovoInfo = {
	"name": "Реутово",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "",
	"platforms": "",
	"paths": "",
	"toMoscow": "",
	"additionalInfo": "",
	"owner": "",
	"ownerPhone": "",
	"ownerEmail": ""
};

var reutovoTrains = [	
	
];


var nikolskoye = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 1000, "y": 300}},
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 350}, "coords": {"x": 1000, "y": 350}},
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 200, "y": 400}},
		{"type": "T", "id": "mn3-pt2", "start": {"x": 200, "y": 400}, "coords": {"x": 270, "y": 450}},
		{"type": "T", "id": "mn3-pt3", "start": {"x": 270, "y": 450}, "coords": {"x": 730, "y": 450}},
		{"type": "T", "id": "mn3-pt4", "start": {"x": 730, "y": 450}, "coords": {"x": 800, "y": 400}},
		{"type": "T", "id": "mn3-pt5", "start": {"x": 800, "y": 400}, "coords": {"x": 1000, "y": 400}},
	{"type": "T", "id": "mn4-pt1", "start": {"x": 0, "y": 500}, "coords": {"x": 1000, "y": 500}},
	
	{"type": "PL", "corner": {"x": 275, "y": 357}, "size": {"x": 450, "y": 86}},
	{"type": "PL", "corner": {"x": 275, "y": 457}, "size": {"x": 450, "y": 36}}
];

var nikolskoyeInfo = {
	"name": "Никольское",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "",
	"platforms": "",
	"paths": "",
	"toMoscow": "",
	"additionalInfo": "",
	"owner": "",
	"ownerPhone": "",
	"ownerEmail": ""
};

var nikolskoyeTrains = [	
	
];


var saltykovskaya = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 300}, "coords": {"x": 400, "y": 300}},
		{"type": "T", "id": "mn1-pt2", "start": {"x": 400, "y": 300}, "coords": {"x": 470, "y": 350}},
		{"type": "T", "id": "mn1-pt3", "start": {"x": 470, "y": 350}, "coords": {"x": 1000, "y": 350}},
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 1000, "y": 400}},
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 1000, "y": 450}},
	
	{"type": "PL", "corner": {"x": 100, "y": 363}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 120, "y": 457}, "size": {"x": 300, "y": 30}},
	{"type": "PL", "corner": {"x": 500, "y": 457}, "size": {"x": 350, "y": 30}}
];

var saltykovskayaInfo = {
	"name": "Салтыковская",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "",
	"platforms": "",
	"paths": "",
	"toMoscow": "",
	"additionalInfo": "",
	"owner": "",
	"ownerPhone": "",
	"ownerEmail": ""
};

var saltykovskayaTrains = [	
	
];


var kuchino = [
	{"type": "T", "id": "mn1-pt1", "start": {"x": 0, "y": 350}, "coords": {"x": 1000, "y": 350}},
	{"type": "T", "id": "mn2-pt1", "start": {"x": 0, "y": 400}, "coords": {"x": 1000, "y": 400}},
	{"type": "T", "id": "mn3-pt1", "start": {"x": 0, "y": 450}, "coords": {"x": 1000, "y": 450}},
	
	{"type": "PL", "corner": {"x": 200, "y": 357}, "size": {"x": 350, "y": 36}},
	{"type": "PL", "corner": {"x": 150, "y": 457}, "size": {"x": 450, "y": 50}}
];

var kuchinoInfo = {
	"name": "Кучино",
	"direction": "Горьковское направление",
	"type": "Пассажирская станция",
	"code": "",
	"platforms": "",
	"paths": "",
	"toMoscow": "",
	"additionalInfo": "",
	"owner": "",
	"ownerPhone": "",
	"ownerEmail": ""
};

var kuchinoTrains = [	
	
];