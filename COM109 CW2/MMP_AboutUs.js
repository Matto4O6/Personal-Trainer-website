// This JS function uses jquery to fade in images when a button is clicked

$(document).ready(function(){
    $(".imagebutton").click(function(){
        $("#sauna").fadeIn(250);
        $("#dumbbell").fadeIn(500);
        $("#PersonalTrainer").fadeIn(750);
        $("#Cookstown").fadeIn(1000);
    });
});
