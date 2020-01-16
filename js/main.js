
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var link = $('.validate-input input[name="name"]');

    $('.validate-form').on('submit',function(){
        var check = true;

        if($(link).val().trim() == ''){
            showValidate(link);
            check=false;
        }

        return check;
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);