var user = {
	number:1,
	clickMult:1.5,
	currentMaxNumber:1e33,
	lastClick: new Time().getTime(),
	clickTime:3000
	
}





var num = 1; // number that we are increasing
var abbv = " "; // abbreviation according to AAS
var countdown = 0; // counter for the button cooldown
var notationList1 = [" " ,"K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "N"];
//var notationList2 = ["D", "Vg", "Tg", "Qg", "Qq", "Sg", "Su", "Og", "Ng"];
function update1(set,get){ // for updating display
	document.getElementById(set).innerHTML=get;
}




function step() { // clicks button
	if (user.number > user.currentMaxNumber) return
	if(user.clickTime+user.lastClick <= new Time().getTime()) {
		user.number = Math.round(user.number*user.clickMult*100)/100; // updates number
		if(user.number>1000) shorten(num, abbv);/////////THIS ONE/////////
		//update("numDisplay",num);
		update("numDisplay",shorten(user.number)); // update number on the page
		user.lastClick = new Time().getTime(); // reset cooldown timer
	}
	else return ;
}
	
function updateCountdown() { // updates the cooldown timer
	var msDiff = Math.max(user.lastClick+user.clickTime-new Time().getTime(),0)
	update1("mainButton", "Milliseconds remaining:" + msDiff);
}
	
function shorten(number) {
    	number = Math.log10(number);
    	var abbv = notationList1[Math.floor(number/3)];
    	var numberPiece = Math.round(Math.pow(10,number%3)*100)/100;
    	return numberPiece+" "+abbv;
}

setInterval(updateCountdown,50);
