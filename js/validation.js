
function validateFieldOnEmpty(fieldName){
    var field = document.getElementById(fieldName);
    if(field.value==null||field.value==""){
        field.parentNode.className +=(" has-error");
        return false;
    } else{
        return true;
    }
}
