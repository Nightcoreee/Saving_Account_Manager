var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var repassword = document.getElementById("repassword");
var fname = document.getElementById("name");
var phone = document.getElementById("phone");

var registerBtn = document.querySelector("#registerBtn");

var usernameWarn = document.getElementById('username_warning');
var passwordWarn = document.getElementById('pass_warning');
var emailWarn = document.getElementById('email_warning');
var repasswordWarn = document.getElementById('repass_warning');
var nameWarn = document.getElementById('name_warning');
var phoneWarn = document.getElementById('phone_warning');

var usernameRegex = /^([a-z0-9]*[a-z]){3}[a-z0-9]*$/i;
var nameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
var emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/;
var phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

function getDatabase() { return JSON.parse(localStorage.getItem('userDatabase')); }

function saveDatabase(userDatabase = []) { localStorage.setItem('userDatabase', JSON.stringify(userDatabase)); }

function checkUserInfo(userInfo) {
    var checkRegister = true;
    if(userInfo.usernameData == "") { usernameWarn.innerHTML = 'Username must be filled'; checkRegister = false; }
    if(userInfo.passData == "") { passwordWarn.innerHTML = 'Password must be filled'; checkRegister = false; }
    if(userInfo.emailData == "") { emailWarn.innerHTML = 'Email must be filled'; checkRegister = false; }
    if(userInfo.repassData == "") { repasswordWarn.innerHTML = 'Re-enter password must be filled'; checkRegister = false; }
    if(userInfo.nameData == "") { nameWarn.innerHTML = 'Name must be filled'; checkRegister = false; }
    if(userInfo.phoneData == "") { phoneWarn.innerHTML = 'Username must be filled'; checkRegister = false; }

    if(userInfo.usernameData != "" && usernameRegex.test(userInfo.usernameData) == false) { usernameWarn.innerHTML = 'Username format at least 3 characters'; checkRegister = false; }
    if(userInfo.nameData != "" && nameRegex.test(userInfo.nameData) == false) { nameWarn.innerHTML = 'Name format is invalid'; checkRegister = false; }
    if(userInfo.emailData != "" && emailRegex.test(userInfo.emailData) == false) { emailWarn.innerHTML = 'Email format is invalid'; checkRegister = false; }
    if(userInfo.phoneData != "" && phoneRegex.test(userInfo.phoneData) == false) { phoneWarn.innerHTML = 'Phone format is invalid'; checkRegister = false; }

    return checkRegister;
}

function resetInput() {
    username.value = '';
    password.value = '';
    email.value = '';
    repassword.value = '';
    fname.value = '';
    phone.value = '';
}

function resetWarning() {
    usernameWarn.innerHTML = '';
    passwordWarn.innerHTML = '';
    emailWarn.innerHTML = '';
    repasswordWarn.innerHTML = '';
    nameWarn.innerHTML = '';
    phoneWarn.innerHTML = '';
}

$("#form").submit(function(e) {
    e.preventDefault(); 
    resetWarning();
    var userInfo = {
        usernameData: username.value,
        passData: password.value,
        emailData: email.value,
        repassData: repassword.value,
        nameData: fname.value,
        phoneData: phone.value,
    };
    var checkStep1 = checkUserInfo(userInfo);
    if(checkStep1 == true) {
        var checkStep2 = true;
        if(userInfo.passData != userInfo.repassData) {
            alert('Password and re-enter password do not match');
            checkStep2 = false;
        }

        var form = $(this);
        var actionUrl = form.attr('action');
        
        $.ajax({
            type: "POST",
            url: actionUrl,
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
            if(data.msg !== "succeed") alert(data.msg); 
            else {
                alert("Đăng ký thành công!")
                window.location.replace("/dashboard");
            }
            }
        });
    }    
});
