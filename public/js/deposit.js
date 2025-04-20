function checkinput(){
    if($("#deposit").val() == "") {
        alert("Bạn chưa nhập số tiền gửi!")
        return false;
    }
    return true;
}
var confirmMSG = "Xác nhận gửi thêm tiền vào sổ";
var succeedMSG = "Đã gửi thành công!"
var redirectURL = "/passbook"