$(document).ready(function(){
    $("#startForm").submit(validateStartAutomationForm);
    $("#demoForm").submit(validateRequestDemoForm);
    $("#labForm").submit(validateLabForm);
});


function validateStartAutomationForm(){
    var validationResult = validateFieldOnEmpty("autoFNAME") && validateFieldOnEmpty("autoLNAME")
        && validateFieldOnEmpty("autoEMAIL") && validateFieldOnEmpty("autoOTHERCONT");
    if(!validationResult){
        $("#startAlert").show();
        return false;
    }else{
        return true;
    }
}
function validateFieldOnEmpty(fieldName){
    var field = document.getElementById(fieldName);
    if(field.value==null||field.value==""){
        field.parentNode.className +=(" has-error");
        return false;
    } else{
        return true;
    }
}
function validateRequestDemoForm(){
    var validationResult = validateFieldOnEmpty("demoFNAME") && validateFieldOnEmpty("demoLNAME")
    && validateFieldOnEmpty("demoEMAIL") && validateFieldOnEmpty("demoOTHERCONT");
    if(!validationResult){
        $("#demoAlert").show();
        return false;
    }else{
        return true;
    }
}
function validateLabForm(){
    var validationResult = validateFieldOnEmpty("labEMAIL") && validateFieldOnEmpty("labCont")
    && validateFieldOnEmpty("labFeatureSum") && validateFieldOnEmpty("labFeatureDetails");
    if(!validationResult){
        $("#labAlert").show();
        return false;
    }else{
        return true;
    }
}