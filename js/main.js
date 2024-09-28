// ------------------------------------ CONSOLE -----------------------------------

// Console: Để kiểm tra và debug giá trị trong lúc code

console.log("hello");

console.warn("this is message wanning");

console.error("this is message error");

// --------------------------------------- BIẾN ----------------------------------------

// Biến dùng để khai báo, để lưu và truy suất giá trị của biến, có thể đem đi sử dụng nhiều nơi
// KHAI BÁO BIẾN

/* Kiểu 1 - khai báo biến, sau đó mới gán giá trị cho biến
  let tenbien;
  tenbien = "abc"
*/
let user1;
user1 = "Nguyễn Thị Đen";
console.log("user1: ", user1);
user1 = "Đén Đen";
console.log("user1: ", user1);

/*
Kiểu 2 - vừa khai báo biến, vừa gán giá trị cho biến 
let tenbien = giatri;
*/
let user2 = "Nguyễn Như Mướp";
console.log("user2: ", user2);

// => khi khao báo biến vs từ khóa let, có thể đè giá trị theo thứ tự giống như css (chiều thác đổ)

// Khai báo với const thì ko đè dc, vì const là hằng số ko dc gán lại giá trị, sử dụng khi giá trị ko bị thay đổi
// const tenbien = giatri;

const PI = 3.14;
console.log("PI: ", PI);
// PI = 2;
// console.log("PI: ", PI);

const HANG_SO = 2;

// quy tắc đặt tên biến - camelCace
// Không bắt đầu bằng số, tên biến phải có ý nghĩa

let userName;
let luongCoBan;

// Các kiểu dữ liệu thông dụng:
// 1. number: 1, 2, 3, 3.14; (dùng cho số nguyên lẫn số thực, dùng để tính toán)
let birthday = 29;
console.log("birthday: ", birthday);

// 2. string: kiểu chuỗi, ký tự thường dùng để diễn tả tên, địa chỉ, email, sdt...
let fristName = "Xuan";
console.log("fristName: ", fristName);

// 3. Boolean: true/false thường kết hợp với toán tử so sánh
let isAprove = true;
console.log("isAprove: ", isAprove);

// 4. undefined: khi 1 biến được khai báo nhưng chưa gán giá trị thì giá trị của nó sẽ là undefined
let lastName;
console.log("lastName: ", lastName);

// 5. null: biểu thị 1 giá trị không tồn
let shoppingCart = null;
console.log("shoppingCart: ", shoppingCart);

// --------------- CÁC LOẠI TOÁN TỬ ----------------------
// 1. TOÁN TỬ SỐ HỌC
let number1 = 30;
let number2 = 20;
let number3 = "10";

// phép cộng
let sum = number1 + number2;
console.log("sum: ", sum);

// phép trừ
let minus = number2 - number1;
console.log("minus: ", minus);

// phép nhân
let multi = number1 * number2;
console.log("multi: ", multi);

// phép chia
let divi = number1 / number2;
console.log("divi: ", divi);

// phép chia lấy dư %
let mod = number1 % number2;
console.log("mod: ", mod);

// cộng 1 number với 1 string
let result = number1 + number3;
console.log("result: ", result); // =>3010 chỉ xảy ra với phép cộng

// typeof dùng để kiểm tra kiểu dữ liệu của biến
console.log("đây là kiểu dữ liệu của number3: ", typeof number3);

let result2 = number1 * number3;
console.log("result2: ", result2); // =>300

let result3 = number1 / number3;
console.log("result3: ", result3); // =>3

// cách để convert từ string về number: parseInt (), variable * 1, +variable
// let number3Convert = parseInt(number3);
// let number3Convert = number3 * 1;
let number3Convert = +number3;
console.log("đây là kiểu dữ liệu của number3Cover: ", typeof number3Convert);

// Chuỗi + chuỗi
let string1 = "Hello";
let string2 = "BC77";
let string3 = "Anya";

let totalString = string1 + " " + string2 + " " + string3;
console.log("totalstring: ", totalString);

let totalstring2 = "Hello " + "BC77";
console.log("totalstring2: ", totalstring2);

// 2. TOÁN TỬ ++/-- : TĂNG 1 HOẶC GIẢM 1
let number4 = 10;
let number5 = 3;

// let inscrese = number4 + 1; // => = 2
// number4++;
console.log("number4++: ", number4++);
/* => dấu cộng nằm đằng sau, tính toán chung xong ms tăng đơn vị của nó (tương tự với --)
=> dấu cộng nằm đằng trước, tăng đơn vị của bản thân nó trước rồi mới vào tính toán chung (tương tự với --)
tự kiếm thêm ví dụ xem để hiểu thêm
*/
console.log("number4 sau khi chạy ++: ", number4);

console.log("++number4: ", ++number4);

number5--;
console.log("number5--: ", number5--);

let numberA = 1;
let numberB = 3;
let numbersum = numberA++ + --numberB;
// numberA++ = 1, --numberB=2 => tổng sẽ bằng 3
console.log("numbersum: ", numbersum);
// khi đi đến dòng này thì A = 2 và B = 2;
let numbersum2 = numberA++ + numberB--;
// numberA++ = 2, numberB-- = 2  => tổng sẽ bằng 4, vì -- ở phía sau nên A,B ko có thay đổi giá trị
console.log("numbersum2: ", numbersum2);
//  khi đi đến dòng này thì A = 3 và B = 1, có thể xuất kết quả ra để check coi đúng ko
console.log("numberA: ", numberA, "numberB: ", numberB);

// 3. TOÁN TỬ GÁN
// a = a + b => a += b;
// a = a - b => a -= b;
// a = a % b => a %= b;

let number6 = 10;
// number6 = number6 + 10;
number6 += 10;
console.log("number6: ", number6);

// 4. BÀI TẬP

// bài tập 1
let a, b, c;

a = 10;
a += a; // => a = a + a = 10 + 10 = 20
console.log(a); // a = 20

b = ++a + 5; // b = 21 + 5 = 26
c = a++ + 5; // c = 21 + 5 = 26
console.log(a); // a = 22

a = 0;
console.log(b); //26
console.log(c); //26

// prompt
// let name = prompt("hãy nhập tên của bạn vào đây: ");
// alert("bạn đã nhập thành công");
// console.log("tên bạn đã nhập: ", name);

// Khi nhận đề bài: input(dữ liệu đầu vào) => các bước xử lý(công thức tính toán) => output(kết quả trả ra)

// ------------------------------------------- BÀI TẬP VỀ NHÀ --------------------------------------------------

/* Bài 1: Tính lương nhân viên
    Bước 1: xác định input: số ngày làm, lương cơ bản
    Bước 2: xử lý: lương nhân viên = số ngày làm * lương cơ bản
    Bước 3: xác định output: tên nhân viên và lương nhân viên */

let tenNV = prompt("Nhập tên nhân viên");
console.log("tenNV: ", tenNV);
let soNgayLamViec = prompt("Nhập số ngày làm");
// console.log("số Ngày Làm: ", parseInt(soNgayLamViec));
let luongCB = prompt("Nhập lương cơ bản");
// console.log("lương CB: ", parseInt(luongCB));

let luong = soNgayLamViec * +luongCB;

console.log("tên nhân viên: ", tenNV, "lương: ", luong);

// Bài 2: Tính điểm trung bình
// Viết chương trình nhập vào 5 số thực bằng promt.
// Tính giá trị trung bình của 5 số này và xuất ra màn hình.
// Gợi ý: Giá trị trung bình là tổng của 5 số người dùng nhập chia cho 5.

// Bài 3: Quy đổi tiền tệ
// Viết chương trình nhập vào giá USD hiện nay đang có và số lượng USD cần quy đổi bằng promt
// Tính tổng số tiền việt nhận được sau khi người dùng quy đổi
// Gợi ý: tổng số tiền nhận được sẽ được tính bằng công thức giá USD * số lượng

// Bài 4: Tính chu vi và diện tích hình chữ nhật
// Viết chương trình nhập vào chiều dài và chiều rộng của hình chữ nhật bằng promt
// Tính toán chu vi và diện tích hình chữ nhật từ các giá trị người dùng cung cấp
// Gợi ý: công thức tính chu vi là : (dài + rộng) *2 và diện tích sẽ bằng dài * rộng
