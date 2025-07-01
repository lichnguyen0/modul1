function SanPham(ma, ten, gia) {
    this.ma = ma;
    this.ten = ten;
    this.gia = gia;
}

const danhSachSanPham = [];
let indexSanPhamHienTai;
const apple = new SanPham("P0001", "Mac Mini M2", 1000);
danhSachSanPham.push(apple);
danhSachSanPham.push(new SanPham("P0002", "Macbook Pro M2", 2000));
danhSachSanPham.push(new SanPham("P0003", "Macbook Pro M4", 2000));
danhSachSanPham.push(new SanPham("P0004", "Macbook Mini M4", 2000));

function hienThiSanPham() {
    const bangSanPham = document.getElementById("bangSanPham");
    bangSanPham.innerHTML = '';
    for (let i = 0; i < danhSachSanPham.length; i++) {
        bangSanPham.innerHTML += `<tr>
<td>${danhSachSanPham[i].ma}</td>
<td>${danhSachSanPham[i].ten}</td>
<td>${danhSachSanPham[i].gia}</td>
<td>
<button onclick="suaSanPham(${i})">Sua</button>
<button onclick="xoaSanPham(${i})">Xoa</button>
</td>
</tr>`;
    }
}

function xoaSanPham(index) {
    if (confirm("Ban co chac muon xoa san pham nay")) {
        danhSachSanPham.splice(index, 1);
        hienThiSanPham();
    }
}

function luuSanPham() {
    const tenSanPham = document.getElementById("tenSanPham").value;
    const maSanPham = document.getElementById("maSanPham").value;
    const giaSanPham = document.getElementById("giaSanPham").value;
    if (indexSanPhamHienTai) {
        // Viet logic sua
        danhSachSanPham[indexSanPhamHienTai].ma = maSanPham;
        danhSachSanPham[indexSanPhamHienTai].ten = tenSanPham;
        danhSachSanPham[indexSanPhamHienTai].gia = giaSanPham;
    } else {
        // Viet logic them moi
        danhSachSanPham.push(new SanPham(maSanPham, tenSanPham, giaSanPham));
    }
    hienThiSanPham();
}

function suaSanPham(index) {
    indexSanPhamHienTai = index;
    document.getElementById("maSanPham").value = danhSachSanPham[index].ma;
    document.getElementById("tenSanPham").value = danhSachSanPham[index].ten;
    document.getElementById("giaSanPham").value = +danhSachSanPham[index].gia;
}