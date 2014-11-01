// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Show/Hide Calendar
$(document).on('click', '#checkAvail', function {
	$('#checkAvail').toggleClass('.hidden')
})

// Form Data
function testResults (form) {
    var TestVar = form.checkIn.value;
    alert ("You typed: " + TestVar);
}