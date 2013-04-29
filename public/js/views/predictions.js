var initView = function (formValidationAlertMessage) {
    $('form').submit(function () {
        var validate = true;
        $('form input').each(function () {
            var inputValue = $(this).val();
            if ($.trim(inputValue).length <= 0) {
                validate = false;
            }
        });
        $('form select').each(function () {
            var selectValue = $(this).val();
            if ($.trim(selectValue).length <= 0) {
                validate = false;
            }
        });
        if ($("form input:radio").length / $("form input:radio:checked").length != 2) {
            validate = false;
        }
        if (!validate) {
            alert(formValidationAlertMessage);
            return false;
        }
    });
};