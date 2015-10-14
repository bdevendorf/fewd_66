$('a').on('click', jump);

function jump () {
	event.preventDefault();
	console.log('currentTarget');
	alert('jump');
}