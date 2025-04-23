# 💰 ỨNG DỤNG QUẢN LÝ SỔ TIẾT KIỆM CÁ NHÂN
## 📌 Giới thiệu thành viên - Nhóm 09
|Tên thành viên | Mã số sinh viên |
|---------------|-----------------|
|Đào Ngọc Hà    | 3121411062 |
|Trần Hửu Hậu   | 3121411068 |
|Võ Khánh Linh  | 3121411122 |
|Nguyễn Ngọc Khôi | 3121411108|
## 📌 Giới Thiệu
Ứng dụng quản lý sổ tiết kiệm giúp người dùng theo dõi và quản lý các khoản tiết kiệm cá nhân một cách dễ dàng.  
Với giao diện trực quan, người dùng có thể yêu cầu nhân viên làm những điều sau:
- Mở sổ tiết kiệm
- Gửi tiền vào sổ
- Tính lãi suất
- Xem thống kê

Ứng dụng phù hợp với cá nhân muốn theo dõi tình hình tiết kiệm của mình một cách chi tiết và hiệu quả. 🚀  

---

## 🌟 Tính Năng Chính
✅ **Mở sổ tiết kiệm**: Tạo sổ tiết kiệm với thông tin về kỳ hạn, lãi suất và số tiền gửi ban đầu.  
✅ **Gửi tiền vào sổ**: Cho phép nạp thêm tiền vào tài khoản tiết kiệm theo quy định.   
✅ **Tính lãi suất**: Tự động tính lãi suất dựa trên kỳ hạn và số dư tài khoản.  
✅ **Xem thống kê**: Xem thống kê trong năm đã gửi bao tiền và lời bao nhiêu tiền.

---

## 🛠 Công Nghệ Sử Dụng
- **Front-end**: HMTL, CSS, Javascript  
- **Back-end**: NodeJS  
- **Cơ sở dữ liệu**: PostgreSQL   

---

## 📅 Kế Hoạch Phát Triển (Development Plan)

| Giai đoạn       | Công việc                             | Thời gian hoàn thành|
|-----------------|----------------------------------------------------|--------|
| **Giai đoạn 1** | Phân tích yêu cầu, xác định phạm vi dự án          | 1 tuần |
| **Giai đoạn 2** | Thiết kế giao diện ứng dụng với Tkinter            | 1 tuần |
| **Giai đoạn 3** | Xây dựng hệ thống lưu trữ với MySQL                | 1 tuần |
| **Giai đoạn 4** | Phát triển chức năng chính (mở, gửi, rút, đóng sổ) | 1 tuần |
| **Giai đoạn 5** | Kiểm thử ứng dụng, sửa lỗi                         | 1 tuần |
| **Giai đoạn 6** | Hoàn thiện tài liệu hướng dẫn sử dụng              | 1 tuần |
| **Giai đoạn 7** | Triển khai bản chính thức                          | 1 tuần |

⏳ **Tổng thời gian dự kiến**: 6-7 tuần  

---

## Sơ đồ Use Case 
![image](https://github.com/user-attachments/assets/fcfcef3e-2a9a-445f-bbcd-149919b4bc8d)


## Mô tả chi tiết sơ đồ UC
## Các Tác Nhân (Actors)
### 1. `Người dùng`
- **Mô tả:** Đại diện cho khách hàng sử dụng ứng dụng để quản lý sổ tiết kiệm của họ.
- **Tương tác với các Use Case:**
    - `Mở sổ tiết kiệm`: Thực hiện thao tác mở một sổ tiết kiệm mới.
    - `Gửi tiền vào sổ`: Thực hiện thao tác gửi tiền vào sổ tiết kiệm hiện có.
    - `Rút tiền khỏi sổ`: Thực hiện thao tác rút tiền từ sổ tiết kiệm hiện có.
    - `Đóng sổ tiết kiệm`: Thực hiện thao tác đóng một sổ tiết kiệm hiện có.
    - `Đăng nhập`: Thực hiện thao tác đăng nhập vào hệ thống để truy cập các chức năng.
    - `Đăng ký`: Thực hiện thao tác đăng ký vào hệ thống khi chưa có tài khoản

### 2. `Hệ thống`
- **Mô tả:** Đại diện cho chính ứng dụng quản lý sổ tiết kiệm, thực hiện các tác vụ tự động hoặc theo yêu cầu của tác nhân.
- **Tương tác với các Use Case:**
    - `Tính lãi suất`: Thực hiện việc tính toán lãi suất định kỳ (có thể tự động hoặc do nhân viên kích hoạt).
    - `Thông báo về Gmail`: Thực hiện việc gửi thông báo qua Gmail (thường được kích hoạt sau các giao dịch hoặc sự kiện nhất định).

## Các Use Case (Chức Năng)

### 1. `Mở sổ tiết kiệm`
- **Mô tả:** Cho phép người dùng hoặc nhân viên tạo một sổ tiết kiệm mới trong hệ thống.
- **Tác nhân chính:** `Người dùng`

### 2. `Gửi tiền vào sổ`
- **Mô tả:** Cho phép người dùng hoặc nhân viên thực hiện giao dịch gửi tiền vào một sổ tiết kiệm đã tồn tại.
- **Tác nhân chính:** `Người dùng`
- **Quan hệ:**
    - `«include»` `In biên lai`: Sau khi gửi tiền thành công, hệ thống có thể bao gồm chức năng in biên lai.
    - `«include»` `Thông báo về Gmail`: Sau khi gửi tiền thành công, hệ thống có thể bao gồm chức năng gửi thông báo qua Gmail.

### 3. `Rút tiền khỏi sổ`
- **Mô tả:** Cho phép người dùng hoặc nhân viên thực hiện giao dịch rút tiền từ một sổ tiết kiệm đã tồn tại.
- **Tác nhân chính:** `Người dùng`
- **Quan hệ:**
    - `«include»` `In biên lai`: Sau khi rút tiền thành công, hệ thống có thể bao gồm chức năng in biên lai.
    

### 4. `Xem thống kê`
- **Mô tả:** Cho phép người dùng xem thống kê đã gửi và rút bao nhiêu tiền 
- **Tác nhân chính:** `Người dùng`

---

## Cơ sở dữ liệu hệ thống
![image](https://github.com/user-attachments/assets/90525a99-90e2-4bbf-b1f7-ee95e104f705)



