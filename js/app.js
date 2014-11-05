// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Show/Hide Calendar
$(document).on('click', '#checkAvail', function() {
	$('#checkAvail').toggleClass('.hidden');
})


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
	// Remove Old Quotes
	$('.quoteWrapper').remove();
	// Find Rental Rate
	rentalPrice = 0;
	var fullDate = new Date(form.checkIn.value.substring(6,10), form.checkIn.value.substring(0,2)-1, form.checkIn.value.substring(3,5));
	// console.log(form.checkIn.value.substring(3,5));
	// console.log(form.checkIn.value.substring(5,7));
	// console.log(form.checkIn.value.substring(8,10));
	// console.log(form.checkIn.value);
	// console.log(fullDate);
	var firstDay = fullDate.getDay();
	// console.log("Day of the week is " + firstDay);
	var d1 = new Date (form.checkIn.value);
	var d2 = new Date (form.checkOut.value);
	var numDays = (d2 - d1)/(60*24*60*1000);
	// console.log("The stay is " + numDays + " nights");
	// console.log("stayLength is" + stayLength);
	// console.log(firstDay);
	// console.log(typeof(firstDay));
	for(i = firstDay; i <= numDays+firstDay-1; i++) {
		if(i === 0) {
			rentalPrice = rentalPrice +1
		}
		else if(i % 6 === 0 || i % 5 === 0) {
			rentalPrice = rentalPrice + 10
			// console.log(rentalPrice)
		}
		else {
			rentalPrice = rentalPrice +1
			// console.log(rentalPrice)
		}
		console.log("Rental Price is " + rentalPrice);
	}
	// Find Extra Guests
	var extraGuests = form.numGuests.value;
	// console.log(extraGuests);
	// console.log(form.checkIn.value);
	// console.log(form.checkOut.value);
	var fullPrice = rentalPrice + 125 + ((extraGuests)*20);
	// console.log("The full price is $" + fullPrice.toFixed(2));
	$('.button').after('<div class="quoteWrapper"><p>The full price is $' + fullPrice.toFixed(2) + '</p></div>');
	
}


