(function(window){
    'use strict';

    var $ = window.jQuery;
    var PAYMENT_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(PAYMENT_SELECTOR);

    formHandler.addSubmitHandler(function(){
        var $name = $('input[name=username]').val();
        document.getElementById('message').innerHTML = 'Thank you for your payment, ' + $name + '.';
        $('#ex1').modal();
    });
})(window);