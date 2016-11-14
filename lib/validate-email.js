(function ($) {
	$.fn.emailValidator = function () {
		// your code here
		if(($(this).val()).match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i)){
			console.log('email is correct')
			return $(this)
		} else {
			console.log('email is incorrect')
			return false
		}
	}
})(jQuery)