(function ($) {
	$.fn.emailValidator = function () {
		let str = this.val()
		let regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i
   	return regex.test(str)
	}
})(jQuery)
