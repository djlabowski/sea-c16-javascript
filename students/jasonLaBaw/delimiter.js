var sampleInput, seperator;

function sampleDelimiter(sampleInput, seperator) {
	myArray = [];
	var holdingval ='';

	if (!!sampleInput) {
		for (var i = 0; i < sampleInput.length; i++) {
			if (sampleInput.charAt([i]) === seperator && !!holdingval) {
				myArray.push(holdingval);
				holdingval = '';
			} else if(sampleInput.charAt([i]) != seperator){
				holdingval += sampleInput.charAt([i]);
			};
		};
		return myArray;
	} else{
		console.log('Please input a value')
	};
};

