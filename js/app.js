// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Show/Hide Calendar
$(document).on('click', '#checkAvail', function() {
	$('#checkAvail').toggleClass('.hidden');
})

var fullPrice = (rentalPrice + 125)*1.15;
var rentalPrice = 0
// var extraGuests = this.form.numGuests.value

// function firstDay (form) {
// var fullDate = new Date(form.checkIn.value);
// console.log(fullDate);
// var d = fullDate.getDay();
// return(d);
// }

// function numDays(form) {
// 	var d1 = new Date (form.checkIn.value);
// 	var d2 = new Date (form.checkOut.value);
// 	return((d2 - d1)/(60*24*60*1000));
// }

function getQuote(form) {
	var fullDate = new Date(form.checkIn.value);
	console.log(fullDate);
	var firstDay = fullDate.getDay();
	// var startDay = firstDay(this.form);
	var d1 = new Date (form.checkIn.value);
	var d2 = new Date (form.checkOut.value);
	var numDays =(d2 - d1)/(60*24*60*1000);
	console.log((d2 - d1)/(60*24*60*1000));
	console.log(firstDay);
	var stayLength = numDays(this.form);
	console.log(stayLength);
	for(i === startDay; i <= stayLength; i++) {
		if(i % 6 === 0 || i % 5 === 0) {
			rentalPrice = rentalPrice + 10;
		}
		else {
			rentalPrice = rentalPrice +1;
		}
		console.log(rentalPrice);
	}
}
