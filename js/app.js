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
	var fullDate = new Date(form.checkIn.value.substring(0,4), form.checkIn.value.substring(5,7)-1, form.checkIn.value.substring(8,10));
	// console.log(form.checkIn.value.substring(0,4));
	// console.log(form.checkIn.value.substring(5,7));
	// console.log(form.checkIn.value.substring(8,10));
	// console.log(form.checkIn.value);
	// console.log(fullDate);
	var firstDay = fullDate.getDay();
	console.log("Day of the week is " + firstDay);
	// var startDay = firstDay(this.form);
	var d1 = new Date (form.checkIn.value);
	var d2 = new Date (form.checkOut.value);
	var numDays = (d2 - d1)/(60*24*60*1000);
	console.log("The stay is " + numDays + " nights");
	// var stayLength = numDays;
	// console.log("stayLength is" + stayLength);
	for(i = firstDay; i <= numDays; i++) {
		if(i % 6 === 0 || i % 5 === 0) {
			// rentalPrice = rentalPrice + 10
			console.log(i)
		}
		else {
			// rentalPrice = rentalPrice +1;
			console.log("Running")
		}
		console.log(rentalPrice);
	}
}
