
var a = 0;
var b = 0;


var tau;
var a1;
var b1;
var k;

function initTau(){
	tau = new Array(b-1+1);
	var i;
	for(i=a; i<=b; i++ )
		tau[i] = 1;
	k = b-a-1;
};


function update(x, y, t){
	var i;
	for(i=a; i<=b; i++){
		if(t){
			if(i < x || i > y){
				tau[i] = Math.max(0, tau[i] + (k-1)/k -1.0);
			}	
		}
		else{
			if(i >=x && i <= y){
				tau[i] = Math.max(0, tau[i] + (k-1)/k -1.0);
			}	
		}

	}
}


function printX(x){
	alert("The number is" + x + "!");
}

function checkFound(){
	var i;
	var countzero = 0;
	var x = 0;
	for(i=a; i<=b; i++){
		if(tau[i] == 0)
			countzero++;
		else
			x = i;
	}
	if(countzero == (b-a)){
		printX(x);
		return 1;
	}
	return 0;
}


function printTau(){
	var i;
	for(i=a; i<=b; i++){
		document.getElementById("status").innerHTML+= tau[i];
	}	
};




function updateStatus(message){
	document.getElementById("status").innerHTML=message;
};


function validate(a, b){
	
	if(a >= b)
		return 0;
	return 1;
}


function begin(){
	document.getElementById("status").style.display="inline";
	
	a = document.getElementById("inputa").value;
	b = document.getElementById("inputb").value;
	
	if(!validate(a, b)){
		updateStatus("Wrong interval");
		return;
	}

	updateStatus("Game started");
	document.getElementById("question_button").style.display="block";
	initTau();
	// printTau();
	
};

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function question(){
	var question;

	a1 = randomIntFromInterval(parseInt(a), parseInt(b) );
	b1 = randomIntFromInterval(parseInt(a1), parseInt(b));
	
	question = "Is the number in the interval [" + a1 + ", " + b1 + "] ?";

	document.getElementById("question_button").style.display="none";
	document.getElementById("intrebare").style.display="inline";
	document.getElementById("intrebare").innerHTML=question;
	document.getElementById("DaNu").style.display="block";

		
};


function answerYes(){
	update(a1, b1, 1);
	printTau();
	checkFound()
		question();
};


function answerNo(){
	update(a1, b1, 0);
	printTau();
	checkFound()
		question();
};



