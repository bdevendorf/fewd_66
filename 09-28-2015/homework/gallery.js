var imageNames = ['fall.jpg','winter.jpg','grass.jpg','desert.jpg'];

var imageIndex = 0;

//$('.image-wrapper img').attr('src', 'images/' + imageNames[0]);

$('.change-image').on('click', changeImage); 

function changeImage () {
	console.log('changeImage');
	$('.image-wrapper img').attr('src', 'images/' + imageNames[imageIndex]);
	//every time we run this fucntion,
	//lets add 1 to our images index
	//imageIndex = imageIndex + 1;
	imageIndex ++;
	console.log(imageIndex);
	if(imageIndex == 4) {
		imageIndex = 0;
	}
}

changeImage();