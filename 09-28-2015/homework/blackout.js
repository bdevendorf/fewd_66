
var lightSwitch = 'on';


$('#lightSwitch').on('click', updateLight)

function updateLight (){
	if(lightSwitch == 'on') {
		$('body').css('backgroundColor','red');
		lightSwitch = 'off';
	}
	else {
		$('body').css('backgroundColor','blue');
		lightSwitch = 'on';
	}
}
