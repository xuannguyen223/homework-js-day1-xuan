// BÀI TẬP JS BUỔI 1

// ---------------------------------------------- BÀI 1: Tính lương nhân viên -------------------------------------
//     Bước 1: xác định input: số ngày làm, lương cơ bản
//     Bước 2: xử lý: lương nhân viên = số ngày làm * lương cơ bản
//     Bước 3: xác định output: tên nhân viên và lương nhân viên

// let tenNV = prompt("Nhập tên nhân viên");
// console.log("tenNV: ", tenNV);
// let soNgayLamViec = prompt("Nhập số ngày làm");
// let luongCB = prompt("Nhập lương cơ bản");
// let luong = soNgayLamViec * +luongCB;
// console.log("tên nhân viên: ", tenNV, "lương: ", luong);

// ---------------------------------------------- BÀI 2: Tính điểm trung bình --------------------------------------
// Nhập vào 5 số thực bằng promt. Tính gttb của 5 số này và xuất ra màn hình
// .
//    Bước 1: xác định input: 5 số thực
//    Bước 2: xử lý: mean = (number1 + .... + number 5) / 5
//    Bước 3: xác định output: mean

// let number1 = prompt("Nhập điểm môn thứ nhất: ");
// console.log("number1: ", number1);
// let number2 = prompt("Nhập điểm môn thứ hai: ");
// console.log("number2: ", number2);
// let number3 = prompt("Nhập điểm môn thứ ba: ");
// console.log("number3: ", number3);
// let number4 = prompt("Nhập điểm môn thứ tư: ");
// console.log("number4: ", number4);
// let number5 = prompt("Nhập điểm môn thứ năm: ");
// console.log("number5: ", number5);
// let mean = (+number1 + +number2 + +number3 + +number4 + +number5) / 5;
// console.log("Điểm trung bình của bạn là: ", mean);

// ------------------------------------------ BÀi 3: Quy đổi tiền tệ ---------------------------------------------
// Viết chương trình nhập vào giá USD hiện nay đang có và số lượng USD cần quy đổi bằng promt
// Tính tổng số tiền việt nhận được sau khi người dùng quy đổi
// Gợi ý: tổng số tiền nhận được sẽ được tính bằng công thức giá USD * số lượng
// .
//    Bước 1: xác định input: tỷ giá USD hôm nay (USD/VND), số lượng USD cần quy đổi
//    Bước 2: xử lý: số tiền VND có sau khi quy đổi = tỷ giá * số lượng
//    Bước 3: xác định output: số tiền VND có sau khi quy đổi

// let exchangeRateUSD = prompt("Nhập tỷ giá USD/VND hôm nay: ");
// console.log("tỷ giá USD/VND hôm nay: ", exchangeRateUSD);
// let soLuongUSD = prompt("Số lượng USD cần quy đổi: ");
// console.log("số lượng USD cần quy đổi: ", soLuongUSD);
// let userMoney = +exchangeRateUSD * +soLuongUSD;
// console.log("Số tiền VND có được sau quy đổi: ", userMoney);

// --------------------------------- BÀi 4: Tính chu vi và diện tích hình chữ nhật -------------------------------
// Viết chương trình nhập vào chiều dài và chiều rộng của hình chữ nhật bằng promt
// Tính toán chu vi và diện tích hình chữ nhật từ các giá trị người dùng cung cấp
// Gợi ý: công thức tính chu vi là : (dài + rộng) *2 và diện tích sẽ bằng dài * rộng
// .
//    Bước 1: xác định input: chiều dài, chiều rộng của hình chữ nhật
//    Bước 2: xử lý: chu vi = (dài + rộng)/2 ; diện tích = dài * rộng
//    Bước 3: xác định output: chu vi, diện tích hình chữ nhật

let length = prompt("Nhập vào chiều dài của hình chữ nhật: ");
console.log("chiều dài của hình chữ nhật: ", length);
let width = prompt("Nhập vào chiều rộng của hình chữ nhật: ");
console.log("chiều rộng của hình chữ nhật: ", width);
let perimeter = (+length + +width) * 2;
let area = +length * +width;
console.log("Chu vi của hình chữ nhật là: ", perimeter);
console.log("Diện tích của hình chữ nhật là: ", area);
