var num = 1; // number that we are increasing
var abbv = " "; // abbreviation according to AAS
var countdown = 0; // counter for the button cooldown
//var notationList1 = [" ", "U", "D", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "N"];
//var notationList2 = ["D", "Vg", "Tg", "Qg", "Qq", "Sg", "Su", "Og", "Ng"];
function update(set,get){ // for updating display
	document.getElementById(set).innerHTML=get;
}
function step() { // clicks button
	if(countdown==0) {
		num = Math.round(num*1.5*100)/100; // updates number
		//num = num*1.5;
		//if(number>1000) shorten(num, abbv);
		//update("numDisplay",num);
		update("numDisplay",""+num+" "+abbv); // update number on the page
		countdown = 3000; // reset cooldown timer
	}
	else return 0;
}
	
function updateCountdown() { // updates the cooldown timer
	if(countdown>50) countdown = countdown-50;
	if(countdown<=50&&countdown>=0) countdown = 0;
	update("mainButton", "Milliseconds remaining:" + countdown);
}
	
function shorten(number, abbv) {
	number/=1000;
	abbv = notationList1[notationList1.indexOf(abbv)+1];
}

setInterval(updateCooldown,50);
