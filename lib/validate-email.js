(function ($) {$.fn.emailValidator = function () {		// your code here
    var email = this.val();
    var regex = /^.+@.+\..+$/;
    return regex.test(email);
  };
})(jQuery);
