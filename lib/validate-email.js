(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var str = this.val();
    var RXPEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return RXPEmail.test(str);
	}
})(jQuery)
