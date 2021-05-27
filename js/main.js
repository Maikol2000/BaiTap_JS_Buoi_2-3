



//bài 1: Tính lương nhân viên

/**
 * b1: Input: nhập số tiền, số ngày
 * b2: Handle: tạo luongMotNgay, soNgayLam
 * - luonNhanVien = luongMotNgay * soNgayLam
 * b3: Output: xuất số tiền
 */




var so_luong = document.getElementById('so_luong');

var luonNhanVien;

bnt_soluong.onclick = function() {
    var so_tien = document.getElementById('so_tien').value;

    var so_ngay = document.getElementById('so_ngay').value;

    var luonNhanVien = so_tien * so_ngay;

    so_luong.innerHTML =  luonNhanVien + ' có cơm'
    console.log(so_luong);
}


//bài 2: Tính giá trị TB

/**
 * b1: Input: nhập 5 số thực
 * b2: Handle: tạo so_1, so_2, so_3, so_4, so_5
 * - (so_1 + so_2 + so_3 + so_4 + so_5)/5
 * b3: Output: xuất giá trị TB
 */


var giaTriTB;
var so_tb = document.getElementById('so_tb');

bnt_TB.onclick = function() {

    var so_1 = parseInt(document.getElementById('so_1').value);

    var so_2 = parseInt(document.getElementById('so_2').value);

    var so_3 = parseInt(document.getElementById('so_3').value);

    var so_4 = parseInt(document.getElementById('so_4').value);

    var so_5 = parseInt(document.getElementById('so_5').value);

    var giaTriTB = (so_1 + so_2 + so_3 + so_4 + so_5)/5;

    so_tb.innerHTML = giaTriTB;

    console.log(giaTriTB);
}


//bài 3: Quy đổi tiền


/**
 * b1: Input: nhập số tiền
 * b2: Handle: tạo soTien, soUSD
 * - soTienUsd = soTien * soTienQuyDoi
 * b3: Output: xuất số tiền
 */



var bnt_sotien = document.getElementById('bnt_sotien')

bnt_sotien.onclick = function() {
    var so_tien_quy_doi = document.getElementById('so_tien_quy_doi').value;
    var soTienQuyDoi = 23500;
    var soTienUsd = so_tien_quy_doi*soTienQuyDoi;

    alert('Số tiền quy đổi ' + soTienUsd + ' VNĐ')
}

//bài 4: tính diện tích, chu vi HCN

/**
 * b1: nhập dữ liệu chiều dài chiều rộng HCN
 * b2: khai báo: chieuDai, chieuRong
 *   - dienTich = chieuDai*chieuRong;
 *   - chuVi = (chieuDai+chieuRong)*2;
 * b3: xuất kết quả
 */

var bnt_CM = document.getElementById('bnt_CM')

bnt_CM.onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai*1 + chieuRong*1)*2
    alert('Diện tích: ' + dienTich + 'CM^2')
    alert('Chu vi: ' + chuVi + 'CM')
}


//Bài 5: Tính tổng 2 ký số

/**
 * b1: cho hai ký số bắt kỳ vd: 22, 23,..
 * b2: khai báo: so_hang_dv, so_hang_chuc, so
 *   - so_hang_dv = so % 10
 *   - so_hang_chuc = so / 10
 *  - sum = so_hang_dv + so_hang_chuc
 * b3: xuất giá trị
 */

var bnt_So = document.getElementById('bnt_So')

bnt_So.onclick = function() {
    var so = document.getElementById('so').value;

    var so_hang_dv = so % 10;
    var so_hang_chuc = so / 10;
    console.log(so)
    var sum = Number(so_hang_dv) + Number(so_hang_chuc);
    console.log(sum)
    alert(sum);
}

