$(document).ready(function () {
    $("#allCheck").click(function () {
        if ($("#allCheck").is(":checked")) {
            $(".chk").prop("checked", true);
        } else {
            $(".chk").prop("checked", false);
        }
    });
})