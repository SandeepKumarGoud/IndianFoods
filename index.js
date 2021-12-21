let usernameNode = document.getElementById("username")
let passwordNode = document.getElementById("password")
let error1Node = document.getElementById("error1")
let error2Node = document.getElementById("error2")



function usernameCheck() {
    console.log("username function.....");
    let usernameValue = usernameNode.value;
    let regexp =new RegExp("^[A-Za-z]*$")
    if (usernameValue == "") {
        error1Node.textContent = "* this field is required"
        return false
    }else if(regexp.test(usernameValue)==false) {
        error1Node.textContent = "*username is not valid"
        return false
    }else {
        error1Node.textContent = ""
        return true
    }
}

function passwordCheck() {
    let passwordValue = passwordNode.value
    let regexp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if (passwordValue == ""){
        error2Node.textContent = ("* this field is required")
        return false
    }else if (regexp.test(passwordValue) == false){
        error2Node.textContent = ("* password and username not matched")
        return false
    }else {
        error2Node.textContent = ""
        return true
    }
}

function formSubmit() {
    let v1 = usernameCheck()
    let v2 = passwordCheck()
    return v1 && v2
}