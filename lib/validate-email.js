(function ($) {
	$.fn.emailValidator = function () {
		var regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/
		// console.log(this.val());
		return (regex.test(this.val()) === true) ? true : false
		// your code here
	}
})(jQuery)
