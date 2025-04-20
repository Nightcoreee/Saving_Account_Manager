var nameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
var emailRegex = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,}){1,3}$/;
var phoneRegex = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
var idRegex = /([1-9]{1})+([0-9]{8,11})\b/
var editable = false;
const fullnameOrigin =  $("#fullname").val();
const addressOrigin = $("#address").val();
const citizenIDOrigin = $("#citizenID").val();
const phonenumberOrigin = $("#phonenumber").val();
const emailOrigin = $("#email").val();
function checkinput() {
    if($("#fullname").val() == '') {
        alert("Bạn chưa nhập tên!");
        return false;
    }
    if($("#email").val() == '') {
        alert("Bạn chưa nhập email!");
        return false;
    }
    if($("#phonenumber").val() == '') {
        alert("Bạn chưa nhập số điện thoại!");
        return false;
    }
    if($("#address").val() == "") {
        alert("Bạn chưa nhập địa chỉ!");
        return false;
    }
    if($("#citizenID").val() == "") {
        alert("Bạn chưa nhập số CMND/CCCD!");
        return false;
    }
    if($("#fullname").val() != '' && nameRegex.test($("#fullname").val()) == false) {
        alert("Tên không hợp lệ!");
        return false;
    }
    if($("#citizenID").val() != '' && idRegex.test($("#citizenID").val()) == false) {
        alert("Số CMND/CCCD không hợp lệ!");
        return false;
    }
    if($("#phonenumber").val() != '' && phoneRegex.test($("#phonenumber").val()) == false) {
        alert("Số điện thoại không hợp lệ!");
        return false;
    }
    if($("#email").val() != '' && emailRegex.test($("#email").val()) == false) {
        alert("Email không hợp lệ!");
        return false;
    }
    return true;
}
$(".editProfileBtn").click(()=>{
    if(!editable) {
        editable = true;
        $("#fullname").removeAttr('readonly');
        $("#address").removeAttr('readonly');
        $("#citizenID").removeAttr('readonly');
        $("#phonenumber").removeAttr('readonly');
        $("#email").removeAttr('readonly');
    }
    else {
        editable = false;
        $("#fullname").attr('readonly', 'readonly').val(fullnameOrigin);
        $("#address").attr('readonly', 'readonly').val(addressOrigin);
        $("#citizenID").attr('readonly', 'readonly').val(citizenIDOrigin);
        $("#phonenumber").attr('readonly', 'readonly').val(phonenumberOrigin);
        $("#email").attr('readonly', 'readonly').val(emailOrigin);
    }
    
})

var confirmMSG = "Xác nhận cập nhật thông tin?";
var succeedMSG = "Cập nhật thành công!"
var redirectURL = "/profile"

// $("#form").submit(function(e) {
//     e.preventDefault();
//     if(checkinput()){
//         if(confirm("are you sure?")) {
//             var form = $(this);
//             var actionUrl = form.attr('action');
//             $.ajax({
//                 type: "POST",
//                 url: actionUrl,
//                 data: form.serialize(), // serializes the form's elements.
//                 success: function(data)
//                 {
//                 if(data.msg !== "succeed") alert(data.msg); 
//                 else {
//                     alert("Cập nhật thành công!")
//                     window.location.replace("/profile");
//                 }
//                 }
//             });
//         }
//         else {

//         }
//     };
// })
