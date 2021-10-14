$(".guestCounter li").on("click", function (element) {
    var operationType = $(this).attr("data-btn-type");
    //console.log(operationType);
    var oldValue = $(this).parent().find("input").val();
    //console.log(oldValue);

    let newVal;
    if (operationType == "increment") {
         newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
             newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $(this).parent().find("input").val(newVal);
});