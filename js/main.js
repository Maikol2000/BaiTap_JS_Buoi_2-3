



//bài 1: Tính lương nhân viên

/**
 * b1: Input: nhập số tiền, số ngày
 * b2: Handle: tạo luongMotNgay, soNgayLam
 * - luonNhanVien = luongMotNgay * soNgayLam
 * b3: Output: xuất số tiền
 */



var soLuong = document.getElementById('soLuong');


var luonNhanVien;

bnt_soLuong.onclick = function() {
    var soTien = document.getElementById('soTien').value;
    var soNgay = document.getElementById('soNgay').value;
    var luonNhanVien = soTien * soNgay;

    soLuong.innerHTML = luonNhanVien + " VNĐ"

}


//bài 2: Tính giá trị TB

/**
 * b1: Input: nhập 5 số thực
 * b2: Handle: tạo so_1, so_2, so_3, so_4, so_5
 * - (so_1 + so_2 + so_3 + so_4 + so_5)/5
 * b3: Output: xuất giá trị TB
 */


var giaTriTrungBinh;
var so_trungBinh = document.getElementById('so_trungBinh');

bnt_trungBinh.onclick = function() {

    var so_1 = parseInt(document.getElementById('so_1').value);

    var so_2 = parseInt(document.getElementById('so_2').value);

    var so_3 = parseInt(document.getElementById('so_3').value);

    var so_4 = parseInt(document.getElementById('so_4').value);

    var so_5 = parseInt(document.getElementById('so_5').value);

    var giaTriTrungBinh = (so_1 + so_2 + so_3 + so_4 + so_5)/5;

    so_trungBinh.innerHTML =' Giá trị Trung Bình: ' + giaTriTrungBinh;
}


//bài 3: Quy đổi tiền


/**
 * b1: Input: nhập số tiền
 * b2: Handle: tạo soTien, soUSD
 * - soTienUsd = soTien * soTienQuyDoi
 * b3: Output: xuất số tiền
 */



var bnt_soTien = document.getElementById('bnt_soTien')

bnt_soTien.onclick = function() {
    var soTienCanQuyDoi = document.getElementById('soTienCanQuyDoi').value;
    var soTienQuyDoi = 23500;
    var soTienUsd = soTienCanQuyDoi*soTienQuyDoi;

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

var bnt_giaTri = document.getElementById('bnt_giaTri')

bnt_giaTri.onclick = function() {
    var chieuDai = parseInt(document.getElementById('chieuDai').value);
    var chieuRong = parseInt(document.getElementById('chieuRong').value);

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong)*2
    alert('Diện tích: ' + dienTich + 'CM^2')
    alert('Chu vi: ' + chuVi + ' CM')
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

var bnt_So = document.getElementById('bnt_so')

bnt_so.onclick = function() {
    var so = document.getElementById('so').value;
    var so_hang_dv = Math.abs(so % 10);
    var so_hang_chuc = parseInt(so / 10);
    var sum = so_hang_dv + so_hang_chuc;
    alert(sum);
}

