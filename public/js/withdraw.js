function checkinput(){
    if($("#withdraw").val() == "") {
        alert("Bạn chưa nhập số tiền gửi!")
        return false;
    }
    if(parseInt($("#withdraw").val()) > parseInt($("#bookdeposit").val())) {
        alert("Số tiền trong sổ không đủ")
        return false;
    }
    if($("#withdraw").val() == $("#bookdeposit").val()) {
        alert("Sau khi rút hết số tiền hiện có trong sổ, sổ sẽ tự động đóng!")
        return true;
    }
    return true;
}
var confirmMSG = "Xác nhận rút tiền khỏi sổ";
var succeedMSG = "Đã rút thành công!"
var redirectURL = "/passbook"