
var trainProps = { //trainProps - Train Properties
    height: 8,
    width: 15,
	colour: 'red'
};

var timeInfo = { 
    hours: 8,
    mins: 30
};


var s = Snap("#tr_svgArea");
var slider = $('#tr_slider');

var svgMaxWidth = parseInt($('#tr_svgArea-wrapper').css('width')) - 20;
var svgMaxHeight = parseInt($('#tr_svgArea-wrapper').css('height')) - 20;

var tracksArray = [];
var trackNumber = 0;
	var tracksEnd = [];
	var tracksEndNumber = 0;
var platformsArray = [];
var platformNumber = 0;
	
var trackID = []

var moveParts = [];
var coordX = [];
var coordY = [];
	

var trains = [];

var intStart = [];
var intTime = [];
var leng = [];
var speedX = [];
var speedY = [];
var speed = [];
var speed0;
var alpha = [];

var rotateAngle = [];
var rotateAngleNumber = 0;

var copyVar = 1;


var plPattern = '<pattern id="tr_platformPattern" patternUnits="userSpaceOnUse" width="4" height="4"><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="black" stroke-width="1.5px"/></pattern>';
$('#tr_svgArea').html(plPattern);

var broken = s.path('M 400 450 L 500 300').attr({stroke: "red", strokeWidth: "11px", fill: "none", opacity: "1"});

//Changing directions

formDirections();
var track = eval(document.getElementById("tr_stationSelect").value);
var trainInfo = eval(document.getElementById("tr_stationSelect").value + 'Trains');
var stationInfo = eval(document.getElementById("tr_stationSelect").value + 'Info');

function formDirections() {
	var directionsList = '';
	stations.forEach(function(item, i){
		directionsList = directionsList + '<option value="' + stations[i].value + '">' + stations[i].direction + '</option>';
	});
	$('#tr_directionSelect').html(directionsList);
	formStations(0)
};

function formStations(dir) { //'dir' stands for 'Direction value'
	var stationsList = '';
	stations[dir].stops.forEach(function(item, j){
		stationsList = stationsList + '<option value="' + stations[dir].stops[j].value + '">' + stations[dir].stops[j].name + '</option>';
	});
	$('#tr_stationSelect').html(stationsList);
	
	onStationChange();
};

$('#tr_directionSelect').on('change', function(){
	var directionNumber;
	stations.forEach(function(item, i){
		if ($('#tr_directionSelect').val() == stations[i].value) {
			directionNumber = i;
		};
	});
	//console.log(directionNumber);
	formStations(directionNumber);
});



//Drawing map
drawMap();

function drawMap() {
	
	if (($('#tr_stationSelect').val() == 'test2') || ($('#tr_stationSelect').val() == 'test3')) {
		broken.attr({'opacity': 1});
	} else {
		broken.attr({'opacity': 0});
	};
		
	track.forEach(function(item, i){
		
		//Drawing lines
		
		if ((track[i].type == 'T') || (track[i].type == 'TER') || (track[i].type == 'TEL') ) {
			tracksArray[trackNumber] = s.path('M ' + track[i].start.x + ' ' + track[i].start.y + ' L ' + track[i].coords.x + ' ' + track[i].coords.y)
					.attr({stroke: "black", strokeWidth: "3px", fill: "none", opacity: "1"});
				trackNumber = trackNumber + 1; 
				
			//Setting custom size of SVG Area.
			if (track[i].type == 'TER') {
				if (track[i].coords.x + 100 > svgMaxWidth) {
					svgMaxWidth = track[i].coords.x + 100;
				};
				if (track[i].start.x + 100 > svgMaxWidth) {
					svgMaxWidth = track[i].start.x + 100;
				};
			} else {
				if (track[i].coords.x > svgMaxWidth) {
					svgMaxWidth = track[i].coords.x;
				};
				if (track[i].start.x > svgMaxWidth) {
					svgMaxWidth = track[i].start.x;
				};
			};
			
			if (track[i].coords.y + 50> svgMaxHeight) {
				svgMaxHeight = track[i].coords.y + 80;
			};
			if (track[i].start.y + 50> svgMaxHeight) {
				svgMaxHeight = track[i].start.y + 80;
			};
			
			if (track[i].type == 'TER') {
				tracksEnd[tracksEndNumber] = [];
				tracksEnd[tracksEndNumber][0] = s.path('M ' + track[i].coords.x + ' ' + track[i].coords.y + ' L ' + (track[i].coords.x + 15) + ' ' + track[i].coords.y)
					.attr({stroke: "black", strokeWidth: "3px", fill: "none", opacity: "1"});
				tracksEnd[tracksEndNumber][1] = s.path('M ' + (track[i].coords.x + 15) + ' ' + (track[i].coords.y - 5) + ' L ' + (track[i].coords.x + 15) + ' ' + (track[i].coords.y + 5))
					.attr({stroke: "black", strokeWidth: "3px", fill: "none", opacity: "1"});
				tracksEndNumber = tracksEndNumber + 1; 
			};
			
			if (track[i].type == 'TEL') {
				tracksEnd[tracksEndNumber] = [];
				tracksEnd[tracksEndNumber][0] = s.path('M ' + track[i].start.x + ' ' + track[i].start.y + ' L ' + (track[i].start.x - 15) + ' ' + track[i].start.y)
					.attr({stroke: "black", strokeWidth: "3px", fill: "none", opacity: "1"});
				tracksEnd[tracksEndNumber][1] = s.path('M ' + (track[i].start.x - 15) + ' ' + (track[i].start.y - 5) + ' L ' + (track[i].start.x - 15) + ' ' + (track[i].start.y + 5))
					.attr({stroke: "black", strokeWidth: "3px", fill: "none", opacity: "1"});
				tracksEndNumber = tracksEndNumber + 1; 
			};
		};
		
		//Drawing platforms
		
		if (track[i].type == "PL") {
			platformsArray[platformNumber] = s.rect(track[i].corner.x , track[i].corner.y , track[i].size.x , track[i].size.y)
				.attr({'stroke': '#470D0D', 'strokeWidth': '2px', 'fill': 'url(#tr_platformPattern)'});
			platformNumber = platformNumber + 1;
		};
		
		
	});

		
	//Writing IDs
	track.forEach(function(item, i){
		//console.log(i);
		if ((track[i].type == 'T') || (track[i].type == 'TER') || (track[i].type == 'TEL') ) {writeTrackID(i);};
	});
	
	svgAreaSetSize();
};

function writeTrackID(par1) {
	if ((track[par1].coords.y - track[par1].start.y) == 0) {
		if (track[par1].type == 'TER') {
			trackID[par1] = s.text((track[par1].coords.x - 40), (track[par1].start.y-8), track[par1].id).attr({'font-size': '11px', 'opacity': 0});
		} else {
			trackID[par1] = s.text((track[par1].start.x + 10), (track[par1].start.y-5), track[par1].id).attr({'font-size': '11px', 'opacity': 0});
		};
	} else {
		rotateAngle[rotateAngleNumber] = 57.2958*Math.atan( (track[par1].coords.y - track[par1].start.y)/(track[par1].coords.x - track[par1].start.x) );
		if (rotateAngle[rotateAngleNumber] < 0) {
			trackID[par1] = s.text((track[par1].start.x + 25), (track[par1].start.y-5), track[par1].id).attr({'font-size': '11px', 'opacity': 0})
				.transform('R' + rotateAngle[rotateAngleNumber] + ',' + (track[par1].start.x + 5) + ',' + (track[par1].start.y+10));
		} else {
			trackID[par1] = s.text((track[par1].start.x + 25), (track[par1].start.y-5), track[par1].id).attr({'font-size': '11px', 'opacity': 0})
				.transform('R' + rotateAngle[rotateAngleNumber] + ',' + (track[par1].start.x + 5) + ',' + (track[par1].start.y-10));
		};		
	};
}; 


//Checkbox function

document.getElementById('tr_IDcheckbox').addEventListener('click', function() {
	if (document.getElementById('tr_IDcheckbox').checked) {
		//console.log('yes');
		for (var k2 = 0; k2 < trackID.length; k2++) {
			//console.log(k2)
			trackID[k2].attr({'opacity': 1});
		};
	} else {
		//console.log('no');
		for (var k3 = 0; k3 < trackID.length; k3++) {
			trackID[k3].attr({'opacity': 0});
		};
	}
});

$('#tr_coordsOutput').hide();
$('#tr_coordsCheckbox').on('click', function(){
	if (document.getElementById('tr_coordsCheckbox').checked) {
		$('#tr_coordsOutput').show();
	} else {
		$('#tr_coordsOutput').hide();
	};
});


	//Setting coordinates
	$('#tr_svgArea').on('mousemove', function (e) {
		$('#tr_outputX').text(e.offsetX);
		$('#tr_outputY').text(e.offsetY);
	});

$('#tr_platformsCheckbox').on('click', function(){
	if (document.getElementById('tr_platformsCheckbox').checked) {
		for (var k4 = 0; k4 < platformsArray.length; k4++) {
			platformsArray[k4].attr({'opacity': 1});
		};
	} else {
		for (var k5 = 0; k5 < platformsArray.length; k5++) {
			console.log(k5);
			platformsArray[k5].attr({'opacity': 0});
		};
	};
});
	
	

//Drawing train's path
drawTrainPath();
trainMove(0);
statsPopUp();
infoPopUp();

function drawTrainPath() {
	trainInfo.forEach(function(item, i){
		moveParts[i] = [];
		coordX[i] = [];
		coordY[i] = [];
		trainInfo[i].part.forEach(function(item1, j){
			
			if (trainInfo[i].part.length == 1) {
				for (var i1 = 0; i1 < track.length; i1++) {
					if (track[i1].id == trainInfo[i].part[j].track) {
						//console.log(track[i1].id);
						coordX[i][j] = track[i1].start.x + (track[i1].coords.x - track[i1].start.x)*((trainInfo[i].part[j].fromPercent)/100);
						coordY[i][j] = track[i1].start.y + (track[i1].coords.y - track[i1].start.y)*((trainInfo[i].part[j].fromPercent)/100);
						coordX[i][j+1] = track[i1].start.x + (track[i1].coords.x - track[i1].start.x)*((trainInfo[i].part[j].toPercent)/100);
						coordY[i][j+1] = track[i1].start.y + (track[i1].coords.y - track[i1].start.y)*((trainInfo[i].part[j].toPercent)/100);
					};
				};
				moveParts[i][j] = s.path('M ' + coordX[i][j] + ' ' + coordY[i][j] + ' L ' + coordX[i][j+1] + ' ' + coordY[i][j+1])
					.attr({stroke: "#FF8000", strokeWidth: "6.5px", fill: "none", opacity: "0"});
			} else {
				
				if (j == 0) {
					for (var i2 = 0; i2 < track.length; i2++) {
						if (track[i2].id == trainInfo[i].part[j].track) {
							coordX[i][j] = track[i2].start.x + (track[i2].coords.x - track[i2].start.x)*((trainInfo[i].part[j].fromPercent)/100);
							coordY[i][j] = track[i2].start.y + (track[i2].coords.y - track[i2].start.y)*((trainInfo[i].part[j].fromPercent)/100);
							coordX[i][j+1] = track[i2].start.x + (track[i2].coords.x - track[i2].start.x)*((trainInfo[i].part[j].toPercent)/100);
							coordY[i][j+1] = track[i2].start.y + (track[i2].coords.y - track[i2].start.y)*((trainInfo[i].part[j].toPercent)/100);
							//console.log(coordX[i][j] + ' ' + coordY[i][j] + ' ' + coordX[i][j+1] + ' ' + coordY[i][j+1]);
						};
					};
					moveParts[i][j] = s.path('M ' + coordX[i][j] + ' ' + coordY[i][j] + ' L ' + coordX[i][j+1] + ' ' + coordY[i][j+1])
						.attr({stroke: "#FF8000", strokeWidth: "5px", fill: "none", opacity: "0"});
					
				};
				
				
				
				if ((j > 0) && ((j+1) < trainInfo[i].part.length)) {
					for (var i1 = 0; i1 < track.length; i1++) {
						if (track[i1].id == trainInfo[i].part[j].track) {
							//console.log('part[' + j + '] = ' + track[i1].id);
							
							if (trainInfo[i].part[j].track == trainInfo[i].part[j-1].track) {
								for (var k1 = (j-1); k1 >= 0; k1--) {
									if (trainInfo[i].part[j].track == trainInfo[i].part[k1].track) {
										if (coordX[i][k1] == track[i1].coords.x) {
											//console.log(j + ' = option 1');
											coordX[i][j+1] = coordX[i][k1] + (track[i1].start.x - coordX[i][k1])*((trainInfo[i].part[j].toPercent)/100);
											coordY[i][j+1] = coordY[i][k1] + (track[i1].start.y - coordY[i][k1])*((trainInfo[i].part[j].toPercent)/100);
										} else {
											//console.log(j + ' =  option 2');
											coordX[i][j+1] = coordX[i][k1] + (track[i1].coords.x - coordX[i][k1])*((trainInfo[i].part[j].toPercent)/100);
											coordY[i][j+1] = coordY[i][k1] + (track[i1].coords.y - coordY[i][k1])*((trainInfo[i].part[j].toPercent)/100);
										};
									};
								};
							} else {
								if (coordX[i][j] == track[i1].coords.x) {
									//console.log(track[i1].id + ' =  option 1');
									coordX[i][j+1] = coordX[i][j] + (track[i1].start.x - coordX[i][j])*((trainInfo[i].part[j].toPercent)/100);
									coordY[i][j+1] = coordY[i][j] + (track[i1].start.y - coordY[i][j])*((trainInfo[i].part[j].toPercent)/100);
								} else {
									//console.log(track[i1].id + ' =  option 2');
									coordX[i][j+1] = coordX[i][j] + (track[i1].coords.x - coordX[i][j])*((trainInfo[i].part[j].toPercent)/100);
									coordY[i][j+1] = coordY[i][j] + (track[i1].coords.y - coordY[i][j])*((trainInfo[i].part[j].toPercent)/100);
								};

							};
							
						};
					};
					moveParts[i][j] = s.path('M ' + coordX[i][j] + ' ' + coordY[i][j] + ' L ' + coordX[i][j+1] + ' ' + coordY[i][j+1])
						.attr({stroke: "#FF8000", strokeWidth: "5px", fill: "none", opacity: "0"});
				};
				
				
				if ((j+1) == trainInfo[i].part.length) {
					for (var i1 = 0; i1 < track.length; i1++) {
						if (track[i1].id == trainInfo[i].part[j].track) {
							//console.log(coordX[i][j] + ' ' + coordY[i][j]);
							if (trainInfo[i].part[j].track == trainInfo[i].part[j-1].track) {
								for (var k1 = (j-1); k1 >= 0; k1--) {
									if (trainInfo[i].part[j].track == trainInfo[i].part[k1].track) {
										if (coordX[i][k1] == track[i1].coords.x) {
											//console.log(j + ' = option 1');
											coordX[i][j+1] = coordX[i][k1] + (track[i1].start.x - coordX[i][k1])*((trainInfo[i].part[j].toPercent)/100);
											coordY[i][j+1] = coordY[i][k1] + (track[i1].start.y - coordY[i][k1])*((trainInfo[i].part[j].toPercent)/100);
										} else {
											//console.log(j + ' =  option 2');
											coordX[i][j+1] = coordX[i][k1] + (track[i1].coords.x - coordX[i][k1])*((trainInfo[i].part[j].toPercent)/100);
											coordY[i][j+1] = coordY[i][k1] + (track[i1].coords.y - coordY[i][k1])*((trainInfo[i].part[j].toPercent)/100);
										};
									};
								};
							} else {
								if (coordX[i][j] == track[i1].coords.x) {
									//console.log(track[i1].id + ' =  option 1');
									coordX[i][j+1] = coordX[i][j] + (track[i1].start.x - coordX[i][j])*((trainInfo[i].part[j].toPercent)/100);
									coordY[i][j+1] = coordY[i][j] + (track[i1].start.y - coordY[i][j])*((trainInfo[i].part[j].toPercent)/100);
								} else {
									//console.log(track[i1].id + ' =  option 2');
									coordX[i][j+1] = coordX[i][j] + (track[i1].coords.x - coordX[i][j])*((trainInfo[i].part[j].toPercent)/100);
									coordY[i][j+1] = coordY[i][j] + (track[i1].coords.y - coordY[i][j])*((trainInfo[i].part[j].toPercent)/100);
								};

							};
						};
					};
					moveParts[i][j] = s.path('M ' + coordX[i][j] + ' ' + coordY[i][j] + ' L ' + coordX[i][j+1] + ' ' + coordY[i][j+1])
						.attr({stroke: "#FF8000", strokeWidth: "5px", fill: "none", opacity: "0"});
				}
				
			
			}
			
		});
	});
};

//var broken = s.path('M 400 450 L 500 300').attr({stroke: "red", strokeWidth: "4px", fill: "none", opacity: "1"});
var train = s.rect(0,0,trainProps.width,trainProps.height).attr({strokeWidth: '2px', stroke: 'black', fill: trainProps.colour, opacity: '0'});

function copyTrainToCoords(){
    trainInfo.forEach(function(item, i){
		for (var c = 0; c < trainInfo[i].cars; c++) {
			trains[i][c] = train.clone().addClass('trainClick').attr({opacity: '1', onclick: 'tableAction('+ i + ')'});
		};
        //console.log(i);
    });
	copyVar = 0;
};


/*for (var m = 0; m < coordX[3].length; m++) {
	console.log('coordX[' + 3 + ']['+ m + '] = ' + coordX[3][m]);
	};

for (var l = 0; l < coordY[3].length; l++) {
	console.log('coordY[' + 3 + ']['+ l + '] = ' + coordY[3][l]);
	};
	*/




	
	
for (var i = 0; i < trainInfo.length; i++) {
	trains[i] = [];
};	
	
slider.on("input change keyup paste click", function () {
	if (copyVar == 1) {
		//console.log('here');
        copyTrainToCoords();
    };
    var sliderValue = $(this).val();
	var TSecs = timeInfo.hours*3600 + timeInfo.mins*60 + sliderValue*5;
	var THours = Math.floor(TSecs/3600);
	var TMins = Math.floor((TSecs - THours*3600)/60);
	TSecs = TSecs - THours*3600 - TMins*60;
	if (TMins<10) {
		TMins = '0' + TMins;
	};
	if (TSecs<10) {
		TSecs = '0' + TSecs;
	};
	if (THours>23) {
		THours = THours - 24;
	};
	var sliderValueTime = THours + ':' + TMins + '  <span style="font-size: 15px;">' + TSecs + '</span>';
    $('#tr_sliderValueText').html(sliderValueTime);
    
    trainMove(sliderValue);
});


function calcProperties(i) {
	leng[i] = [];
	trainInfo[i].part.forEach(function(item0, j){
		leng[i][j] = Math.sqrt( Math.pow(( coordX[i][j+1] - coordX[i][j] ),2) + Math.pow(( coordY[i][j+1] - coordY[i][j] ),2) );
		//console.log('leng[' + i + ']['+ j + '] = ' + leng[i][j]);
	});
	
	speedX[i] = [];
	speedY[i] = [];
	speed[i] = [];
	trainInfo[i].part.forEach(function(item0, j){
		speedX[i][j] = (coordX[i][j+1] - coordX[i][j])/(intTime[i][j+1][0] - intTime[i][j][0]);
		speedY[i][j] = (coordY[i][j+1] - coordY[i][j])/(intTime[i][j+1][0] - intTime[i][j][0]);
		
		if (speedX[i][j] >= 0) {
			speed[i][j] = Math.sqrt(speedX[i][j]*speedX[i][j] + speedY[i][j]*speedY[i][j]);
		} else {
			speed[i][j] = -1*Math.sqrt(speedX[i][j]*speedX[i][j] + speedY[i][j]*speedY[i][j]);
		};
		//console.log('speed[' + i + ']['+ j + '] = ' + speed[i][j]);
	});
	
	alpha[i] = [];
	trainInfo[i].part.forEach(function(item0, j){
		if ((coordX[i][j+1] - coordX[i][j]) == 0) {
			if ((coordY[i][j+1] - coordY[i][j]) == 0) {
				alpha[i][j] = Math.atan((coordY[i][j] - coordY[i][j-1])/(coordX[i][j] - coordX[i][j-1]));
			} else {
				alpha[i][j] = Math.pi/2;
			};
		} else {
			alpha[i][j] = Math.atan((coordY[i][j+1] - coordY[i][j])/(coordX[i][j+1] - coordX[i][j]));
		};
			
		//console.log('alpha[' + i + ']['+ j + '] = ' + 57.2958*alpha[i][j]);
	});
}


function trainMove(sliderValue){
	trainInfo.forEach(function(item, i){
		//console.log('works');
		intTime[i] = [];
		intStart[i] = (trainInfo[i].part[0].hours*3600 + trainInfo[i].part[0].mins*60 - timeInfo.hours*3600 - timeInfo.mins*60)/5;
		//console.log(intStart[i]);
		
		intTime[i][0] = [];	
		trainInfo[i].part.forEach(function(item1, j){
			for (var c = 0; c < trainInfo[i].cars; c++) {
				intTime[i][j+1] = [];
			};
		});
		
		intTime[i][0][0] = intStart[i];
		
		trainInfo[i].part.forEach(function(item1, j){
			intTime[i][j+1][0] = intTime[i][j][0] + (trainInfo[i].part[j].timeMins*60 + trainInfo[i].part[j].timeSecs)/5;
			//console.log('intTime[' + i + ']['+ (j+1) + ']['+ 0 + '] = ' + intTime[i][j+1][0]);
		});

		calcProperties(i);

		if (trainInfo[i].cars > 1) {
			for (var c = 1; c < trainInfo[i].cars; c++) {
				intTime[i][0][c] = intTime[i][0][0] + c*21*(intTime[i][1][0] - intTime[i][0][0])/leng[i][0];
				//console.log('intTime[' + i + ']['+ 0 + ']['+ c + '] = ' + intTime[i][0][c]);
			};
		
			trainInfo[i].part.forEach(function(item1, j){
				for (var c = 1; c < trainInfo[i].cars; c++) { 
					
					if ( ((j+2) > trainInfo[i].part.length) || (leng[i][j+1] == 0) ) {
						if ( ((j+2) > trainInfo[i].part.length) && (leng[i][j+1] == 0) ) {
							intTime[i][j+1][c] = intTime[i][j+1][0];
							//console.log('fixed intTime[' + i + ']['+ (j+1) + ']['+ c + '] = ' + intTime[i][j+1][c]);
						};
						
						if ( ((j+2) <= trainInfo[i].part.length) && (leng[i][j+1] == 0) ) {
							intTime[i][j+1][c] = intTime[i][j+1][0];
						};
						
					} else {
						intTime[i][j+1][c] = intTime[i][j+1][0] + c*21*(intTime[i][j+2][0] - intTime[i][j+1][0])/leng[i][j+1];
					};
					
					//console.log('intTime[' + i + ']['+ j + ']['+ c + '] = ' + intTime[i][j][c]);
				};
			});
		};
		
		if (sliderValue != 0) {
		
			trainInfo[i].part.forEach(function(item1, j){
				for (var c = 0; c < trainInfo[i].cars; c++) {	
					if ( (sliderValue < intTime[i][0][c]) || (sliderValue > intTime[i][trainInfo[i].part.length][c]) ) {
							trains[i][c].attr({opacity: 0});
							//console.log('hide');
					} else {
						if ((sliderValue >= intTime[i][j][c]) && (sliderValue <= intTime[i][j+1][c])) {
							trains[i][c].attr({opacity: 1});
							
							if (c == 0) {
								var stepX = coordX[i][j] + speedX[i][j]*(sliderValue - intTime[i][j][0]) - trainProps.width/2;
								var stepY = coordY[i][j] + speedY[i][j]*(sliderValue - intTime[i][j][0]) - trainProps.height/2;
								
															
								if (speedX[i][j] >= 0) {
									speed0 = Math.sqrt(speedX[i][j]*speedX[i][j] + speedY[i][j]*speedY[i][j]);
								} else {
									//console.log('negative speed');
									speed0 = -1*Math.sqrt(speedX[i][j]*speedX[i][j] + speedY[i][j]*speedY[i][j]);
								};

							} else {
								if ( (sliderValue >= intTime[i][j+1][0]) && (sliderValue < intTime[i][j+1][c]) ) {
									//console.log('here');
									var stepX = coordX[i][j] + speedX[i][j]*(intTime[i][j+1][0]-intTime[i][j][c]) 
										+ speed0*Math.cos(Math.atan((coordY[i][j+1] - coordY[i][j])/(coordX[i][j+1] - coordX[i][j])))*(sliderValue - intTime[i][j+1][0]) - trainProps.width/2;
									var stepY = coordY[i][j] + speedY[i][j]*(intTime[i][j+1][0]-intTime[i][j][c]) 
										+ speed0*Math.sin(Math.atan((coordY[i][j+1] - coordY[i][j])/(coordX[i][j+1] - coordX[i][j])))*(sliderValue - intTime[i][j+1][0]) - trainProps.height/2;
								} else {
									//console.log('here2');
									
									if ((coordX[i][j+1] - coordX[i][j]) == 0) {
										if ((coordY[i][j+1] - coordY[i][j]) == 0) {
											//console.log('ooo');
											var stepX = coordX[i][j] + speed0*Math.cos(Math.atan((coordY[i][j] - coordY[i][j-1])/(coordX[i][j] - coordX[i][j-1])))*(sliderValue - intTime[i][j][c]) - trainProps.width/2;
											var stepY = coordY[i][j] + speed0*Math.sin(Math.atan((coordY[i][j] - coordY[i][j-1])/(coordX[i][j] - coordX[i][j-1])))*(sliderValue - intTime[i][j][c]) - trainProps.height/2;
											//console.log(c + ': ' + stepX + ' ; ' + stepY);
										} else {
											var stepX = coordX[i][j] - trainProps.width/2;
											var stepY = coordY[i][j] + speed0*(sliderValue - intTime[i][j][c]) - trainProps.height/2;
										};
									} else {
										var stepX = coordX[i][j] + speed0*Math.cos(Math.atan((coordY[i][j+1] - coordY[i][j])/(coordX[i][j+1] - coordX[i][j])))*(sliderValue - intTime[i][j][c]) - trainProps.width/2;
										var stepY = coordY[i][j] + speed0*Math.sin(Math.atan((coordY[i][j+1] - coordY[i][j])/(coordX[i][j+1] - coordX[i][j])))*(sliderValue - intTime[i][j][c]) - trainProps.height/2;
									};
									
								};
							};
							//var stepX = coordX[i][j] + (coordX[i][j+1] - coordX[i][j])*((sliderValue - intTime[i][j][c])/(intTime[i][j+1][c] - intTime[i][j][c])) - trainProps.width/2;
							//var stepY = coordY[i][j] + (coordY[i][j+1] - coordY[i][j])*((sliderValue - intTime[i][j][c])/(intTime[i][j+1][c] - intTime[i][j][c])) - trainProps.height/2;

							
							//Move + Rotation
							if ((coordX[i][j+1] - coordX[i][j]) == 0) {
								if ((coordY[i][j+1] - coordY[i][j]) == 0) {
									trains[i][c].transform('T' + stepX + ',' + stepY + 'R' + (57.2958*Math.atan((coordY[i][j] - coordY[i][j-1])/(coordX[i][j] - coordX[i][j-1])))
										+ ',' + (stepX + trainProps.width/2) + ',' + (stepY + trainProps.height/2));
								} else {
									trains[i][c].transform('T' + stepX + ',' + stepY + 'R90,' + (stepX + trainProps.width/2) + ',' + (stepY + trainProps.height/2));
								};
							} else {
								trains[i][c].transform('T' + stepX + ',' + stepY + 'R' + (57.2958*Math.atan((coordY[i][j+1] - coordY[i][j])/(coordX[i][j+1] - coordX[i][j])))
									+ ',' + (stepX + trainProps.width/2) + ',' + (stepY + trainProps.height/2));
							};
									
						};
					};
				};	
			});
		};	
				
    });
};




//Functions that are not related with train movement

//Showing table information
var iMemory = null;

$(document).ready(function(){
	$('#tr_table').hide();
});

function tableAction(i) {
	tableAction.called = true;
	if (iMemory !== null) {
		for (var c0 = 0; c0 < trains[iMemory].length; c0++) {
			trains[iMemory][c0].attr({fill: 'red'});
		};
		for (var j0 = 0; j0 < moveParts[iMemory].length; j0++) {
			moveParts[iMemory][j0].attr({'opacity': 0});
		};
	};
	
	//console.log(i);		
	var T_Secs = 5*(intTime[i][trainInfo[i].part.length][0] - intStart[i]);
	//console.log(T_Secs);
	var T_Hours = Math.floor(T_Secs/3600);
	var T_Mins = Math.round((T_Secs - T_Hours*3600)/60);
	
	if (T_Mins<10) {
		T_Mins = '0' + T_Mins;
	};
	//console.log(T_Hours + ':' + T_Mins);
	for (var c = 0; c < trains[i].length; c++) {
		trains[i][c].attr({fill: 'lightgreen'});
	}; 
	for (var j = 0; j < moveParts[i].length; j++) {
		moveParts[i][j].attr({'opacity': 1});
	};
		
	$('#tr_table').show();
	$('#tr_T_number').text(trainInfo[i].number);
	$('#tr_T_cont').text(trainInfo[i].contains);
	$('#tr_T_driver').text(trainInfo[i].driver);
	$('#tr_T_cars').text(trainInfo[i].cars);
	$('#tr_T_time').text(T_Hours + ':' + T_Mins);
	
	iMemory = i;
	switchVar = 0;
	setTimeout(function(){tableAction.called = false;}, 1); 
};

$(document).ready(function(){
	$("#tr_svgArea").click(function(){
		if (tableAction.called) {
			//console.log('nothing');
		} else {
			if (iMemory != null) {
				for (var c0 = 0; c0 < trains[iMemory].length; c0++) {
					trains[iMemory][c0].attr({fill: 'red'});
				};
				for (var j0 = 0; j0 < moveParts[iMemory].length; j0++) {
					moveParts[iMemory][j0].attr({'opacity': 0});
				};
			};
			$('#tr_table').hide();
		};
	});
});



//Changing maps
var select = $('#tr_stationSelect');

var stationSelectValue = $('option[value="' + document.getElementById("tr_stationSelect").value + '"]').html();
$('#tr_statsHeading').text('Станция ' + stationSelectValue + ' - Расписание');
$('#tr_statsInfoHeading').text('Станция ' + stationSelectValue + '');


function onStationChange() {
	clearMap();
		track = eval(document.getElementById("tr_stationSelect").value);
		trainInfo = eval(document.getElementById("tr_stationSelect").value + 'Trains');
		stationInfo = eval(document.getElementById("tr_stationSelect").value + 'Info');
		resetAllArrays();
		stationSelectValue = $('option[value="' + document.getElementById("tr_stationSelect").value + '"]').html();
		//console.log(platformsArray.length);
		$('#tr_statsHeading').text('Станция ' + stationSelectValue + ' - Расписание');
		$('#tr_statsInfoHeading').text('Станция ' + stationSelectValue + '');
		$('#tr_IDcheckbox').removeAttr('checked');
		$('#tr_coordsCheckbox').removeAttr('checked');
		$('#tr_platformsCheckbox').prop({'checked': 'checked'});
		$('#tr_findInput').val('');
		$('#tr_chooseTimeHours').val('');
		$('#tr_chooseTimeMins').val('');
		$('#tr_chooseTimeError').hide();
		$('#tr_coordsOutput').hide();
		trackNumber = 0;
		tracksEndNumber = 0;
		platformNumber = 0;
		svgMaxWidth = parseInt($('#tr_svgArea-wrapper').css('width')) - 20;
		svgMaxHeight = parseInt($('#tr_svgArea-wrapper').css('height')) - 20;
		drawMap();
		drawTrainPath();
		trainMove(0);
		statsPopUp();
		infoPopUp();
		copyVar = 1;
		iMemory = null;
		
		
		//console.log(trains[0]);
		train = s.rect(0,0,trainProps.width,trainProps.height).attr({strokeWidth: '2px', stroke: 'black', fill: trainProps.colour, opacity: '0'});
};

$(document).ready(function(){
	select.on('change', function(){
		onStationChange();
	});
});

function resetAllArrays() {
	tracksArray = [];
	tracksEnd = [];
	platformsArray = [];
	trains = [];
	trackID = [];
	moveParts = [];
	intStart = [];
	intTime = [];
	coordX = [];
	coordY = [];
	leng = [];
	speed = [];
	alpha = [];
	
	
	trainInfo.forEach(function(item, i){
		//console.log(i);
		trains[i] = [];
	});
};
	
function clearMap() {
	tracksArray.forEach(function(item, i){
		//console.log(i);
		tracksArray[i].attr({'opacity': 0});
		//tracksArray[i] = null;
	});
	
	tracksEnd.forEach(function(item, i){
		tracksEnd[i][0].attr({'opacity': 0});
		tracksEnd[i][1].attr({'opacity': 0});
		//tracksEnd[i][0] = null;
		//tracksEnd[i][1] = null;	
	});
	
	platformsArray.forEach(function(item, i){
		platformsArray[i].attr({'opacity': 0});
	});
	
	trains.forEach(function(item, i){
		trains[i].forEach(function(item0, c){
			trains[i][c].attr({'opacity': 0});
			//trains[i][c] = null;
		});
	});
	
	moveParts.forEach(function(item, i){
		moveParts[i].forEach(function(item0, j){
			moveParts[i][j].attr({'opacity': 0});
		});
	});
	
	
	trackID.forEach(function(item, i){
		trackID[i].attr({'opacity': 0});
	});
	$('#tr_table').hide();
	train = null;
};


//Train search with input
$(document).ready(function(){
	$('#tr_noMatches').hide();
});

var inpFind = $('#tr_findInput');
var findValue;
var findSwitch = 0;

inpFind.on('input', function(){
	findValue = '#' + this.value;
	//console.log(findValue);
	
	if (findValue == '#') {
		$('#tr_noMatches').hide();
	} else {
		if (trains.length > 0) {
			trainInfo.forEach(function(item, i){
				if (trainInfo[i].number == findValue) {
					for (var c = 0; c < trains[i].length; c++) {
						if (trains[i][c].attr('opacity') == 1) {
							tableAction(i);
							findSwitch = 1;
							$('#tr_noMatches').hide();
							setTimeout(function(){findSwitch = 0;}, 1);
							break;
						};
					};
				};
			});
			if (findSwitch == 0) {
				//console.log('show');
				$('#tr_noMatches').show();
				resetHighlight();
			};
		} else {
			//console.log('show');
			$('#tr_noMatches').show();
			resetHighlight();
		};
	};
});

function resetHighlight() {
	moveParts.forEach(function(item, i){
		moveParts[i].forEach(function(item0, j){
			moveParts[i][j].attr({'opacity': 0});
		});
	});
	
	trains.forEach(function(item, i){
		trains[i].forEach(function(item0, c){
			trains[i][c].attr({'fill': 'red'});
		});
	});
	$('#tr_table').hide();
}


//Changing starting time
$(document).ready(function(){
	$('#tr_chooseTimeError').hide();
});

$('#tr_chooseTimeButton').on('click', function(){
	if (($('#tr_chooseTimeHours').val() < 24) && ($('#tr_chooseTimeHours').val() >= 0) && ($('#tr_chooseTimeMins').val() < 60) && ($('#tr_chooseTimeMins').val() >= 0) && 
		($('#tr_chooseTimeHours').val() != '') && ($('#tr_chooseTimeMins').val() != '')) {
		
		if (copyVar == 1) {
			//console.log('here');
			copyTrainToCoords();
		};
		
		if ($('#tr_chooseTimeMins').val() < 30) {
			if ($('#tr_chooseTimeHours').val() == 0) {
				timeInfo.hours = 1*$('#tr_chooseTimeHours').val() + 23;
				timeInfo.mins = 1*$('#tr_chooseTimeMins').val() + 30;
				slider.val(360);
			} else {
				timeInfo.hours = 1*$('#tr_chooseTimeHours').val() - 1;
				timeInfo.mins = 1*$('#tr_chooseTimeMins').val() + 30; 
				slider.val(360);
			};			
		} else {
			timeInfo.hours = 1*$('#tr_chooseTimeHours').val();
			timeInfo.mins = 1*$('#tr_chooseTimeMins').val() - 30; 
			slider.val(360);
		};
				
		
		if ( ($('#tr_chooseTimeMins').val()<10) && (String($('#tr_chooseTimeMins').val()) == String(1*$('#tr_chooseTimeMins').val())) ) {
			var sliderValueTime = $('#tr_chooseTimeHours').val() + ':' + '0' + $('#tr_chooseTimeMins').val() + '  <span style="font-size: 15px;">' + '00' + '</span>';
		} else {
			var sliderValueTime = $('#tr_chooseTimeHours').val() + ':' + $('#tr_chooseTimeMins').val() + '  <span style="font-size: 15px;">' + '00' + '</span>';
		}
		
		$('#tr_sliderValueText').html(sliderValueTime);
		resetHighlight();
		
		trainMove(360);

	} else {
		$('#tr_chooseTimeError').show();
	}
});

$('#tr_chooseTimeHours').on('input', function(){$('#tr_chooseTimeError').hide();});
$('#tr_chooseTimeMins').on('input', function(){$('#tr_chooseTimeError').hide();});









