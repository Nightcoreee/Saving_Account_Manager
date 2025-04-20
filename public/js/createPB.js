var nameRegex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;
var idRegex = /([1-9]{1})+([0-9]{8,11})\b/

function checkinput(){
    var type = $("input[name = 'type']:checked").val();
    if($('#fullname').val() == "" || nameRegex.test($('#fullname').val()) == false) {
        alert("Tên không hợp lệ!");
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
    if($("#citizenID").val() != '' && idRegex.test($("#citizenID").val()) == false) {
        alert("Số CMND/CCCD không hợp lệ!");
        return false;
    }
    if($("#bookname").val() == "") {
        alert("Bạn chưa nhập tên sổ!");
        return false;
    }
    if($("#deposit").val() == "") {
        alert("Bạn chưa nhập số tiền gửi!")
        return false;
    }
    if(!($("#NO").is(':checked') || $("#3M").is(':checked') || $("#6M").is(':checked'))){
        alert("Bạn chưa chọn loại sổ!");
        return false;
    }
    return true;
}
var confirmMSG = "Xác nhận mở số tiết kiệm mới?";
var succeedMSG = "Mở sổ thành công!"
var redirectURL = "/passbook"