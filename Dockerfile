# Sử dụng Node.js base image
FROM node:18

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép file cấu hình
COPY package*.json ./

# Cài đặt phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn
COPY . .

# Expose cổng (cần đúng với app, ví dụ 3000)
EXPOSE 3000

# Chạy app
CMD ["npm", "start"]
