//Display the schedule of the station

function statsPopUp() {
	$('#tr_tableStats').html(
		'<thead> <tr> <th>Номер поезда</th> <th>Количество вагонов</th> <th>Машинист</th> <th>Время прибытия</th> <th>Время отбытия</th> <th style="width: 166px;">Время на станции</th> </tr> </thead> <tbody> </tbody>'
	);

	trainInfo.forEach(function(item, i){
		
		var TbSt_S = 5*(intTime[i][trainInfo[i].part.length][0] - intStart[i]);
		var TbSt_H = Math.floor(TbSt_S/3600);
		var TbSt_M = Math.round((TbSt_S - TbSt_H*3600)/60);
		
		var TbSt_H2 = 1*trainInfo[i].part[0].hours + 1*TbSt_H;
		var TbSt_M2 = 1*trainInfo[i].part[0].mins + 1*TbSt_M;
		if (TbSt_M2 > 59) {
			TbSt_M2 = TbSt_M2 - 60;
			TbSt_H2 = 1*TbSt_H2 + 1;
		};
		if (TbSt_H2 > 23) {
			TbSt_H2 = TbSt_H2 - 24;
		};
		if (TbSt_M2<10) {
			TbSt_M2 = '0' + TbSt_M2;
		};
		if (TbSt_M<10) {
			TbSt_M = '0' + TbSt_M;
		};
		
		if (trainInfo[i].part[0].mins < 10) {
			var TbSt_NewMins = '0' + trainInfo[i].part[0].mins;
		} else {
			var TbSt_NewMins = trainInfo[i].part[0].mins;
		}
		
		$('#tr_tableStats tbody').append(
			'<tr> <td>' + trainInfo[i].number + '</td> <td>' + trainInfo[i].cars + '</td> <td>' + trainInfo[i].driver + '</td> <td>' 
			+ trainInfo[i].part[0].hours + ':' + TbSt_NewMins + '</td> <td>'
			+ TbSt_H2 + ':' + TbSt_M2 + '</td> <td style="width: 166px;">' + TbSt_H + ':' + TbSt_M + '</td></tr>'
			
		);
	});
	
	$('#tr_contentWrap').attr({'overflow-y': 'scroll'});
};


//Display the information about the station

function infoPopUp() {
	$('#tr_infTab_Image').attr({'src': 'images/stations/' + $('#tr_directionSelect').val() + '/' + $('#tr_stationSelect').val() +'.jpg'})
	
	$('#tr_infTab_Name').text(stationInfo.name);
	$('#tr_infTab_Direction').text(stationInfo.direction);
	$('#tr_infTab_Type').text(stationInfo.type);
	$('#tr_infTab_Code').text(stationInfo.code);
	$('#tr_infTab_Platforms').text(stationInfo.platforms);
	$('#tr_infTab_Paths').text(stationInfo.paths);
	$('#tr_infTab_Moscow').text(stationInfo.toMoscow);
	$('#tr_infTab_AddInfo').text(stationInfo.additionalInfo);
	$('#tr_infTab_Owner').text(stationInfo.owner);
	$('#tr_infTab_OwnerPhone').text(stationInfo.ownerPhone);
	$('#tr_infTab_OwnerEmail').text(stationInfo.ownerEmail);
};


//Custom SVG Area size
function svgAreaSetSize() {
	//console.log(svgMaxWidth + '; ' + svgMaxHeight);
	$('#tr_svgArea-container').css({'width': svgMaxWidth + 'px'});
	$('#tr_svgArea').attr({'width': svgMaxWidth + 'px'});
	$('#tr_svgArea-container').css({'height': svgMaxHeight + 'px'});
	$('#tr_svgArea').attr({'height': svgMaxHeight + 'px'});
};

