


for (let i = 0; i < myImages.length; i++){

	console.log(myImages[i]);

	var img = new Image ();
	img.src = myImages[i].filename;
	let objects = myImages[i].features[0];
	let confidences = myImages[i].features[1];

	
	// adds the class grid-item to every img
	img.classList.add('grid-item');

	if(objects.includes('person')) {
		console.log('person');
		img.classList.add('person');

	}

	if(objects.includes('boat')) {
		console.log('boat');
		img.classList.add('boat');
	}

	if(objects.includes('bench')) {
		console.log('bench');
		img.classList.add('bench');
	}

	if(objects.includes('elephant')) {
		console.log('elephant');
		img.classList.add('elephant');
	}

	if(objects.includes('bird')) {
		console.log('bird');
		img.classList.add('bird');
	}

	if(objects.includes('dog')) {
		console.log('dog');
		img.classList.add('dog');
	}

	if(objects.includes('cat')) {
		console.log('cat');
		img.classList.add('cat');
	}

	if(objects.includes('horse')) {
		console.log('horse');
		img.classList.add('horse');
	}

	if(objects.includes('sheep')) {
		console.log('sheep');
		img.classList.add('sheep');
	}

	if(objects.includes('cow')) {
		console.log('cow');
		img.classList.add('cow');
	}

	if(objects.includes('bottle')) {
		console.log('bottle');
		img.classList.add('bottle');
	}

	if(objects.includes('wine glass')) {
		console.log('wine glass');
		img.classList.add('wine-glass');
	}

	if(objects.includes('cup')) {
		console.log('cup');
		img.classList.add('cup');
	}

	if(objects.includes('fork')) {
		console.log('fork');
		img.classList.add('cutlery');
	}

	if(objects.includes('knife')) {
		console.log('knife');
		img.classList.add('cutlery');
	}

	if(objects.includes('spoon')) {
		console.log('spoon');
		img.classList.add('cutlery');
	}

	if(objects.includes('bowl')) {
		console.log('bowl');
		img.classList.add('bowl');
	}

	if(objects.includes('apple')) {
		console.log('apple');
		img.classList.add('apple');
	}

	if(objects.includes('orange')) {
		console.log('orange');
		img.classList.add('orange');
	}

	if(objects.includes('carrot')) {
		console.log('carrot');
		img.classList.add('carrot');
	}

	if(objects.includes('cake')) {
		console.log('cake');
		img.classList.add('cake');
	}

	if(objects.includes('chair')) {
		console.log('chair');
		img.classList.add('chair');
	}

	if(objects.includes('sofa')) {
		console.log('sofa');
		img.classList.add('sofa');
	}

	if(objects.includes('pottedplant')) {
		console.log('pottedplant');
		img.classList.add('pottedplant');
	}

	if(objects.includes('bed')) {
		console.log('bed');
		img.classList.add('bed');
	}

	if(objects.includes('diningtable')) {
		console.log('diningtable');
		img.classList.add('diningtable');
	}

	if(objects.includes('book')) {
		console.log('book');
		img.classList.add('book');
	}

	if(objects.includes('clock')) {
		console.log('clock');
		img.classList.add('clock');
	}

	if(objects.includes('vase')) {
		console.log('vase');
		img.classList.add('vase');
	}



// for(let j = 0; j < confidences.length; j++){

// 		if (confidences[j] > 0.8) {
// 			img.classList.add('highconfidence');
// 		}
// 	}

	document.querySelector('.grid').appendChild(img);



}
