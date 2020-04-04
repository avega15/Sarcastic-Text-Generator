function randomCapital(){
	let input = document.getElementById("input").value;
	let random = Math.floor(Math.random() * 2) + 1;
	let iterator = "";
	let final = "";

	for (let i = 0; i < input.length; i++){
	  	iterator = input.charAt(i);
	  	
	  	if(random == 1){
	  		letter = iterator.toString();
	  		letter = letter.toUpperCase();	
	  	}else{
	  		letter = iterator.toString();
	  		letter = letter.toLowerCase();
	  	}

	  	random = Math.floor(Math.random() * 2) + 1;
	  	final += letter;
	}

	document.getElementById("output").innerHTML = final;
}

document.getElementById("sarcastify").onclick = function(){
	randomCapital();
}