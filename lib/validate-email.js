(function($) {
    $.fn.emailValidator = function() {
        let str = this.val()
        let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        return regex.test(str)
    }
})(jQuery)
