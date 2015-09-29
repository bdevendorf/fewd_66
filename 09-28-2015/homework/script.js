		//$('#result').css('color','red');

		var score = 0;

		$('#reset').on('click', reset);
		$('#add5').on('click', addFive);
		$('#add10').on('click', addTen);
		$('#min1').on('click', minOne);

		function reset() {
			score = 0;
			updateResult(score);
			//console.log(score);
		}


		function addFive() {
			//console.log('addFive');
			score = score + 5;
			updateResult(score);
			//console.log(score); 
		}

		function addTen() {
			score = score + 10;
			updateResult(score);
			//console.log(score); 
		}


		function minOne() {
			score = score - 1;
			updateResult(score);
			//console.log(score); 
		}

		function updateResult (score) {
			$('#result').html(score);
		}

		//anatomy of our function 
		//function nameFunction (argument) {
			//code does stuff
		//}
			//var pizza = value passed into function 
			//function updateResult (pizza) {
			//$('#result').html(pizza);
		//}

		//note - functions wont do anything until you call them or write an action for them
