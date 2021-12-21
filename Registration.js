let fnameEle = document.getElementById("fname")
let lnameEle = document.getElementById("lname")
let dobEle = document.getElementById("dob")
let pwdEle = document.getElementById("pwd")
let cnfPwdEle = document.getElementById("cnfPwd")
let emailEle = document.getElementById("email")
let mobileEle = document.getElementById("number")
let countryEle = document.getElementById("countryName")

let error1Ele = document.getElementById("error1")
let error2Ele = document.getElementById("error2")
let error3Ele = document.getElementById("error3")
let error4Ele = document.getElementById("error4")
let error5Ele = document.getElementById("error5")
let error6Ele = document.getElementById("error6")
let error7Ele = document.getElementById("error7")
let error8Ele = document.getElementById("error8")

const borderStyle1 = "1.5px solid #EE0820"
const borderStyle2 = "1.5px solid #047BD5"

function validate1() {
    let fnameValue = fnameEle.value
    let regexp = new RegExp("^[A-Za-z]*$")
    if (fnameValue == ""){
        error1Ele.textContent = "* this field is required"
        fnameEle.style.borderBottom = borderStyle1
        return false
    }else if(regexp.test(fnameValue) == false){
        error1Ele.textContent = "* please enter valid username"
        fnameEle.style.borderBottom = borderStyle1
        return false
    }else {
        error1Ele.textContent = ""
        fnameEle.style.borderBottom = borderStyle2
        return true
    }
}

function validate2() {
    let lnameValue = lnameEle.value
    let regexp = new RegExp("^[A-Za-z]*$")
    if (lnameValue == ""){
        error2Ele.textContent = "* this field is required"
        lnameEle.style.borderBottom = borderStyle1
        return false
    }else if(regexp.test(lnameValue) == false){
        error2Ele.textContent = "* please enter valid username"
        lnameEle.style.borderBottom = borderStyle1
        return false
    }else {
        error2Ele.textContent = ""
        lnameEle.style.borderBottom = borderStyle2
        return true
    }
}

function validate3() {
    let dobEleValue = dobEle.value
    if (dobEleValue == ""){
        error3Ele.textContent = "* this field is required"
        dobEle.style.borderBottom = borderStyle1
        return false
    }else {
        error3Ele.textContent = ""
        dobEle.style.borderBottom = borderStyle2
        return true
    }
}

function validate4() {
    error4Ele.textContent = ""
    let pwdEleValue = pwdEle.value
    let regexp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if (pwdEleValue == "") {
        error4Ele.textContent = "this field is required"
        pwdEle.style.borderBottom = borderStyle1
        return false
    }else if(regexp.test(pwdEleValue)==false) {
        let spanNode = document.createElement("span")
        spanNode.textContent = "password should contain atleast one"
        let ulNode = document.createElement('ul')
        let liNode1 = document.createElement('li')
        liNode1.textContent = "Capital Letter"
        let liNode2 = document.createElement('li')
        liNode2.textContent = "Small Letter"
        let liNode3 = document.createElement('li')
        liNode3.textContent = "Digit"
        let liNode4 = document.createElement('li')
        liNode4.textContent = "Speacial character"
        ulNode.append(liNode1, liNode2, liNode3, liNode4)
        error4Ele.append(spanNode, ulNode)
        pwdEle.style.borderBottom = borderStyle1
        return false
    }else if(pwdEleValue.length<5 || pwdEleValue.length> 12) {
        error4Ele.textContent = "length atleast 5 and atmost 12"
        pwdEle.style.borderBottom = borderStyle1
        error4Ele.style.paddingLeft = "25px"
        return false
    } else {
        pwdEle.style.borderBottom = borderStyle2
        return true
    }
}

 function validate5() {
    error5Ele.textContent= ""
    let cnfPwdEleValue = cnfPwdEle.value
    if (cnfPwdEleValue == "") {
        error5Ele.textContent = "* this field is required"
        cnfPwdEle.style.borderBottom= borderStyle1
        return false
    }else if(pwdEle.value != cnfPwdEleValue) {
        error5Ele.textContent = "password not matched"
        cnfPwdEle.style.borderBottom= borderStyle1
        return false
    }else {
        cnfPwdEle.style.borderBottom= borderStyle2
        return true
        
    }
}

function validate6() {
    error6Ele.textContent=""
    let emailEleValue = emailEle.value
    let index = emailEleValue.substring(emailEleValue.indexOf('@')+1);
    console.log(index);
    if (emailEleValue == "") {
        error6Ele.textContent = "this field is required"
        emailEle.style.borderBottom= borderStyle1
        return false
    }else if(!emailEleValue.includes('@') || index == '') {
        error6Ele.textContent = "please enter valid email"
        emailEle.style.borderBottom= borderStyle1
        return false
    }else {
        emailEle.style.borderBottom= borderStyle2
        return true
    }
}

 function validate7() {
    error7Ele.textContent= ""
    let mobileEleValue = mobileEle.value
    let regexp = new RegExp("^[0-9]*$")
    if (mobileEleValue == "") {
        error7Ele.textContent = "this field is required"
        console.log(regexp.test(mobileEleValue));
        mobileEle.style.borderBottom= borderStyle1
        return false
    }else if (regexp.test(mobileEleValue)==false){
        error7Ele.textContent=("mobile number must be numeric only")
        mobileEle.style.borderBottom= borderStyle1
        return false
    }else if (mobileEleValue.length!==10){
        console.log(mobileEleValue.length!==10);
        error7Ele.textContent=("mobile number contains 10 digits")
        mobileEle.style.borderBottom= borderStyle1
        return false
    } else {
        mobileEle.style.borderBottom= borderStyle2
        return true
    }
} 

function validate8() {
    error8Ele.textContent = ""
    let countryEleValue = countryEle.value
    let regexp = new RegExp("^[A-Za-z]*$")
    if (countryEleValue == ""){
        error8Ele.textContent = "* this field is required"
        countryEle.style.borderBottom = borderStyle1
        return false
    }else if(regexp.test(countryEleValue) == false){
        error8Ele.textContent = "* please enter valid country name"
        countryEle.style.borderBottom = borderStyle1
        return false
    }else {
        countryEle.style.borderBottom = borderStyle2
        return true
    }
}

function formValidate() {
    let v1 = validate1()
    let v2 = validate2()
    let v3 = validate3()
    let v4 = validate4()
    let v5 = validate5()
    let v6 = validate6()
    let v7 = validate7()
    let v8 = validate8()
    return v1 && v2 && v3 && v4 && v5 && v6 && v7 && v8
}