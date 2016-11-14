(function ($) {
	$.fn.emailValidator = function () {
		var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/

		return (regex.test($("input[name='invalid-email']").val()) === true) ? true : false
		// your code here
	}
})(jQuery)
