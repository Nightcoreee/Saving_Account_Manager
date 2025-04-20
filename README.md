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
![image](https://github.com/user-attachments/assets/ab4c8154-ff6e-47f8-87ff-215a34b9b38c)

## Mô tả chi tiết sơ đồ UC
## Các Tác Nhân (Actors)
### 1. `Người dùng`
- **Mô tả:** Đại diện cho khách hàng sử dụng ứng dụng để quản lý sổ tiết kiệm của họ.
- **Tương tác với các Use Case:**
    - `Mở sổ tiết kiệm`: Thực hiện thao tác mở một sổ tiết kiệm mới.
    - `Gửi tiền vào sổ`: Thực hiện thao tác gửi tiền vào sổ tiết kiệm hiện có.
    - `Rút tiền khỏi sổ`: Thực hiện thao tác rút tiền từ sổ tiết kiệm hiện có.
    - `Đóng sổ tiết kiệm`: Thực hiện thao tác đóng một sổ tiết kiệm hiện có.
    - `Xem lịch sử giao dịch`: Xem lại các giao dịch đã thực hiện trên sổ tiết kiệm.
    - `Đăng nhập`: Thực hiện thao tác đăng nhập vào hệ thống để truy cập các chức năng.

### 2. `Nhân viên`
- **Mô tả:** Đại diện cho nhân viên ngân hàng sử dụng ứng dụng để thực hiện các nghiệp vụ liên quan đến quản lý sổ tiết kiệm.
- **Tương tác với các Use Case:**
    - `Mở sổ tiết kiệm`: Thực hiện thao tác mở sổ tiết kiệm cho khách hàng.
    - `Gửi tiền vào sổ`: Thực hiện thao tác gửi tiền vào sổ tiết kiệm cho khách hàng.
    - `Rút tiền khỏi sổ`: Thực hiện thao tác rút tiền từ sổ tiết kiệm cho khách hàng.
    - `Đóng sổ tiết kiệm`: Thực hiện thao tác đóng sổ tiết kiệm cho khách hàng.
    - `In biên lai`: Thực hiện thao tác in biên lai giao dịch cho khách hàng.
    - `Thông báo về Gmail`: Thực hiện thao tác gửi thông báo giao dịch hoặc thông tin liên quan đến sổ tiết kiệm qua Gmail cho khách hàng.
    - `Tính lãi suất`: Thực hiện thao tác tính toán lãi suất cho các sổ tiết kiệm.
    - `Xem lịch sử giao dịch`: Xem lịch sử giao dịch của các sổ tiết kiệm.
    - `Đăng nhập`: Thực hiện thao tác đăng nhập vào hệ thống để truy cập các chức năng nghiệp vụ.

### 3. `Hệ thống`
- **Mô tả:** Đại diện cho chính ứng dụng quản lý sổ tiết kiệm, thực hiện các tác vụ tự động hoặc theo yêu cầu của tác nhân.
- **Tương tác với các Use Case:**
    - `Tính lãi suất`: Thực hiện việc tính toán lãi suất định kỳ (có thể tự động hoặc do nhân viên kích hoạt).
    - `Thông báo về Gmail`: Thực hiện việc gửi thông báo qua Gmail (thường được kích hoạt sau các giao dịch hoặc sự kiện nhất định).

## Các Use Case (Chức Năng)

### 1. `Mở sổ tiết kiệm`
- **Mô tả:** Cho phép người dùng hoặc nhân viên tạo một sổ tiết kiệm mới trong hệ thống.
- **Tác nhân chính:** `Người dùng`, `Nhân viên`

### 2. `Gửi tiền vào sổ`
- **Mô tả:** Cho phép người dùng hoặc nhân viên thực hiện giao dịch gửi tiền vào một sổ tiết kiệm đã tồn tại.
- **Tác nhân chính:** `Người dùng`, `Nhân viên`
- **Quan hệ:**
    - `«include»` `In biên lai`: Sau khi gửi tiền thành công, hệ thống có thể bao gồm chức năng in biên lai.
    - `«include»` `Thông báo về Gmail`: Sau khi gửi tiền thành công, hệ thống có thể bao gồm chức năng gửi thông báo qua Gmail.

### 3. `Rút tiền khỏi sổ`
- **Mô tả:** Cho phép người dùng hoặc nhân viên thực hiện giao dịch rút tiền từ một sổ tiết kiệm đã tồn tại.
- **Tác nhân chính:** `Người dùng`, `Nhân viên`
- **Quan hệ:**
    - `«include»` `In biên lai`: Sau khi rút tiền thành công, hệ thống có thể bao gồm chức năng in biên lai.
    - `«include»` `Thông báo về Gmail`: Sau khi rút tiền thành công, hệ thống có thể bao gồm chức năng gửi thông báo qua Gmail.

### 4. `Đóng sổ tiết kiệm`
- **Mô tả:** Cho phép người dùng hoặc nhân viên thực hiện thao tác đóng một sổ tiết kiệm hiện có.
- **Tác nhân chính:** `Người dùng`, `Nhân viên`
- **Quan hệ:**
    - `«include»` `In biên lai`: Sau khi đóng sổ thành công, hệ thống có thể bao gồm chức năng in biên lai (ví dụ: biên lai tất toán).
    - `«include»` `Thông báo về Gmail`: Sau khi đóng sổ thành công, hệ thống có thể bao gồm chức năng gửi thông báo qua Gmail.

### 5. `In biên lai`
- **Mô tả:** Cho phép nhân viên in biên lai cho các giao dịch như gửi tiền, rút tiền, đóng sổ.
- **Tác nhân chính:** `Nhân viên`
- **Quan hệ:**
    - Được `«include»` bởi `Gửi tiền vào sổ`, `Rút tiền khỏi sổ`, `Đóng sổ tiết kiệm`.

### 6. `Thông báo về Gmail`
- **Mô tả:** Cho phép hệ thống gửi thông báo về các giao dịch hoặc thông tin liên quan đến sổ tiết kiệm cho người dùng qua Gmail.
- **Tác nhân chính:** `Hệ thống`, `Nhân viên` (nhân viên có thể kích hoạt trong một số trường hợp)
- **Quan hệ:**
    - Được `«include»` bởi `Gửi tiền vào sổ`, `Rút tiền khỏi sổ`, `Đóng sổ tiết kiệm`.

### 7. `Tính lãi suất`
- **Mô tả:** Chức năng để hệ thống tự động hoặc nhân viên kích hoạt việc tính toán lãi suất cho các sổ tiết kiệm dựa trên kỳ hạn và số dư.
- **Tác nhân chính:** `Hệ thống`, `Nhân viên`

### 8. `Xem lịch sử giao dịch`
- **Mô tả:** Cho phép người dùng hoặc nhân viên xem lại lịch sử các giao dịch đã thực hiện trên một sổ tiết kiệm cụ thể.
- **Tác nhân chính:** `Người dùng`, `Nhân viên`

### 9. `Đăng nhập`
- **Mô tả:** Cho phép người dùng và nhân viên xác thực thông tin đăng nhập để truy cập vào hệ thống và các chức năng tương ứng.
- **Tác nhân chính:** `Người dùng`, `Nhân viên`

---

## Sơ đồ Class Diagram
![image](https://github.com/user-attachments/assets/c2951d2e-959e-4597-a664-065d5d6f112a)
# Mô tả chi tiết sơ đồ CD
## Các Lớp (Classes)

### 1. `System`
- **Mô tả:** Đại diện cho toàn bộ hệ thống ngân hàng, chịu trách nhiệm cho các chức năng cấp cao.
- **Thuộc tính:**
    - `calculateInterest()`: Phương thức để tính toán lãi suất cho các tài khoản.
    - `generateStatement()`: Phương thức để tạo báo cáo giao dịch (tùy chọn).
- **Mối quan hệ:**
    - Phụ thuộc vào `User` (để mở tài khoản, v.v.).
    - Phụ thuộc vào `Employee` (để thực hiện các tác vụ quản trị).
    - Phụ thuộc vào `Notification` (để gửi thông báo).
    - Phụ thuộc vào `InterestRateTerm` (để áp dụng lãi suất).

### 2. `User`
- **Mô tả:** Đại diện cho người dùng (khách hàng) của hệ thống ngân hàng.
- **Thuộc tính:**
    - `User ID`: Mã định danh duy nhất của người dùng.
    - `Name`: Tên đầy đủ của người dùng.
    - `Email`: Địa chỉ email của người dùng.
    - `Gender`: Giới tính của người dùng.
    - `Address`: Địa chỉ cư trú của người dùng.
    - `Phone`: Số điện thoại liên lạc của người dùng.
    - `AC Open`: Ngày mở tài khoản đầu tiên (lưu ý: có thể nên di chuyển thông tin này vào lớp `Saving Account`).
- **Phương thức:**
    - `Open Account()`: Cho phép người dùng yêu cầu mở một tài khoản mới.
    - `Deposit()`: Cho phép người dùng gửi tiền vào một tài khoản.
    - `Withdraw()`: Cho phép người dùng rút tiền khỏi một tài khoản.
    - `View Transaction History()`: Cho phép người dùng xem lịch sử giao dịch của một tài khoản.
- **Mối quan hệ:**
    - Kết hợp (một-nhiều) với `Saving Account`: Một người dùng có thể sở hữu nhiều tài khoản tiết kiệm.

### 3. `Employee`
- **Mô tả:** Đại diện cho nhân viên của ngân hàng, có quyền thực hiện các tác vụ quản trị và nghiệp vụ.
- **Thuộc tính:**
    - `Employ ID`: Mã định danh duy nhất của nhân viên.
    - `Name`: Tên đầy đủ của nhân viên.
    - `Gender`: Giới tính của nhân viên.
    - `Email`: Địa chỉ email của nhân viên.
    - `Password`: Mật khẩu đăng nhập của nhân viên vào hệ thống.
- **Phương thức:**
    - `VerifyTransaction()`: Cho phép nhân viên xác minh các giao dịch (ví dụ: giao dịch lớn).
    - `Login()`: Cho phép nhân viên đăng nhập vào hệ thống.
- **Mối quan hệ:**
    - Phụ thuộc vào `Transaction` (để xác minh giao dịch).
    - Tương tác với `Receipt` (thông qua chú thích "quyền lại", có thể là quyền xem, in, hoặc quản lý biên lai).

### 4. `Saving Account`
- **Mô tả:** Đại diện cho một tài khoản tiết kiệm cụ thể của người dùng.
- **Thuộc tính:**
    - `Account ID`: Mã định danh duy nhất của tài khoản.
    - `User ID`: Mã định danh của người sở hữu tài khoản (khóa ngoại, liên kết với lớp `User`).
    - `Account Number`: Số tài khoản ngân hàng.
    - `Date`: Ngày tạo tài khoản.
    - `Balance`: Số dư hiện tại trong tài khoản.
    - `InterestRate`: Lãi suất hiện tại áp dụng cho tài khoản.
    - `CreateDate`: Ngày tạo tài khoản (có thể trùng lặp với `Date`).
    - `Status`: Trạng thái của tài khoản (ví dụ: `active`, `inactive`, `closed`).
- **Phương thức:**
    - `CalculateInterest()`: Tính toán lãi suất tích lũy cho tài khoản.
    - `AddTransaction()`: Thêm một giao dịch mới vào lịch sử giao dịch của tài khoản.
- **Mối quan hệ:**
    - Kết hợp (một-nhiều) với `Transaction`: Một tài khoản có thể có nhiều giao dịch.
    - Kết hợp (một-một) với `InterestRateTerm`: Mỗi tài khoản được liên kết với một kỳ hạn và lãi suất cụ thể tại một thời điểm.

### 5. `Transaction`
- **Mô tả:** Đại diện cho một giao dịch tài chính được thực hiện trên một tài khoản.
- **Thuộc tính:**
    - `Transaction ID`: Mã định danh duy nhất của giao dịch.
    - `Account ID`: Mã định danh của tài khoản liên quan đến giao dịch (khóa ngoại, liên kết với lớp `Saving Account`).
    - `Date`: Ngày và thời gian thực hiện giao dịch.
    - `Amount`: Số tiền giao dịch.
    - `Type`: Loại giao dịch (ví dụ: `deposit`, `withdrawal`, `transfer`).
- **Phương thức:**
    - `generateReceipt()`: Tạo một biên lai liên quan đến giao dịch này.
- **Mối quan hệ:**
    - Kết hợp (một-một) với `Receipt`: Mỗi giao dịch có thể có một biên lai đi kèm.

### 6. `Receipt`
- **Mô tả:** Đại diện cho một biên lai hoặc hóa đơn ghi nhận thông tin chi tiết của một giao dịch.
- **Thuộc tính:**
    - `Receipt ID`: Mã định danh duy nhất của biên lai.
    - `Transaction ID`: Mã định danh của giao dịch mà biên lai này tham chiếu đến (khóa ngoại, liên kết với lớp `Transaction`).
    - `Content`: Nội dung chi tiết của biên lai (ví dụ: thông tin giao dịch, số tiền, thời gian).
    - `IssuedDate`: Ngày phát hành biên lai.
- **Phương thức:**
    - `print()`: Cho phép in biên lai (tượng trưng cho việc hiển thị hoặc lưu trữ biên lai).
- **Mối quan hệ:**
    - Kết hợp (một-một) với `Transaction`: Mỗi biên lai liên quan đến một giao dịch.

### 7. `InterestRateTerm`
- **Mô tả:** Đại diện cho các kỳ hạn gửi tiết kiệm và mức lãi suất tương ứng mà ngân hàng cung cấp.
- **Thuộc tính:**
    - `Term ID`: Mã định danh duy nhất của kỳ hạn.
    - `Term (D)`: Thời gian của kỳ hạn (đơn vị: ngày).
    - `Interest Rate`: Mức lãi suất áp dụng cho kỳ hạn này.
    - `Effective Date`: Ngày mà mức lãi suất này bắt đầu có hiệu lực.
- **Phương thức:**
    - `isValid()`: Kiểm tra xem kỳ hạn và lãi suất này có còn hiệu lực tại một thời điểm nhất định hay không.
- **Mối quan hệ:**
    - Kết hợp (một-một) với `Saving Account`: Mỗi tài khoản tiết kiệm được liên kết với một kỳ hạn lãi suất tại một thời điểm.

### 8. `Notification`
- **Mô tả:** Đại diện cho các thông báo được gửi từ hệ thống đến người dùng (ví dụ: thông báo giao dịch, thông báo lãi suất).
- **Thuộc tính:**
    - `Noti ID`: Mã định danh duy nhất của thông báo.
    - `To Email`: Địa chỉ email của người nhận thông báo.
    - `Date`: Ngày tạo thông báo.
    - `Message`: Nội dung của thông báo.
    - `sendDate`: Ngày gửi thông báo (có thể trùng lặp với `Date`).
- **Phương thức:**
    - `Send Email()`: Phương thức để gửi thông báo qua email.
- **Mối quan hệ:**
    - Phụ thuộc vào `User` (để xác định người nhận).
      
### 9. `Tài khoản`
- **Mô tả:** Đại diện cho username và password để người dùng có thể đăng nhập vào hệ thống
- **Thuộc tính:**
    - `Username`: Tên tài khoản
    - `Password`: Mật khẩu của tài khoản

## Mối Quan Hệ Giữa Các Lớp

- **Kết hợp (Association):** Biểu thị mối quan hệ sử dụng hoặc biết đến giữa các đối tượng.
    - `User` **1..n** -- **1..1** `Saving Account`: Một người dùng có thể có nhiều tài khoản tiết kiệm, và mỗi tài khoản tiết kiệm thuộc về một người dùng.
    - `Saving Account` **1..1** -- **1..n** `Transaction`: Một tài khoản tiết kiệm có thể có nhiều giao dịch, và mỗi giao dịch thuộc về một tài khoản tiết kiệm.
    - `Transaction` **1..1** -- **1..1** `Receipt`: Mỗi giao dịch có thể có một biên lai liên quan, và mỗi biên lai liên quan đến một giao dịch.
    - `Saving Account` **1..1** -- **1..1** `InterestRateTerm`: Mỗi tài khoản tiết kiệm được liên kết với một kỳ hạn và lãi suất cụ thể.
    - `Employee` **1..1** -- **1..1** `Tài khoản`: Mỗi nhân viên chỉ có 1 tài khoản duy nhất dùng để đăng nhập vào hệ thống quản lý
      
- **Phụ thuộc (Dependency):** Biểu thị một lớp sử dụng một lớp khác nhưng không sở hữu nó. Thường là một lớp gọi phương thức của lớp khác.
    - `User` sử dụng `System` (ví dụ: để gọi `Open Account()`).
    - `Employee` sử dụng `System` (ví dụ: để gọi `calculateInterest()`, `generateStatement()`).
    - `Employee` phụ thuộc vào `Transaction` (để gọi `VerifyTransaction()`).
    - `System` phụ thuộc vào `Notification` (để gọi `Send Email()`).
    - `Transaction` phụ thuộc vào `Receipt` (để gọi `generateReceipt()`).
    - `System` và `Saving Account` phụ thuộc vào `InterestRateTerm` (để xác định và áp dụng lãi suất).
    - `System` phụ thuộc vào `User` (ví dụ: để lấy thông tin người dùng khi mở tài khoản).

---

## Cơ sở dữ liệu hệ thống
![image](https://github.com/user-attachments/assets/05c1e2b4-3bea-4a48-8151-9c9fc3fe468d)


