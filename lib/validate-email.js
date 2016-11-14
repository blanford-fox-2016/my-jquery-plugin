(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		let inputEmail = $('input[name="invalid-email"]').val()
		let regexPatt = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
		let result = regexPatt.test(inputEmail)

		if (result) return true
	}
})(jQuery)
