let sodien = prompt("Nhập số điện");
let tienDien = 0;
const giaDien1 = 1.678, giaDien2 = 1.734, giaDien3 = 2.014,
    giaDien4 = 2.536, giaDien5 = 2.834, giaDien6 = 2.927;


if (sodien <= 50) {
    tienDien = sodien * giaDien1;
} else if (sodien <= 100) {
    tienDien = 50 * giaDien1 + (sodien - 50) * giaDien2;
} else if (sodien <= 200) {
    tienDien = 50 * giaDien1 + 50 * giaDien2 + (sodien - 100) * giaDien3;
} else if (sodien <= 300) {
    tienDien = 50 * giaDien1 + 50 * giaDien2 + 100 * giaDien3 + (sodien - 200) * giaDien4;
} else if (sodien <= 400) {
    tienDien = tienDien = 50 * giaDien1 + 50 * giaDien2 + 100 * giaDien3 + 200 * giaDien4 + (sodien - 300) * giaDien5;

} else {
    tienDien = tienDien = 50 * giaDien1 + 50 * giaDien2 + 100 * giaDien3 + 200 * giaDien4 + 300 * giaDien5 + (sodien - 400) * giaDien6;
}
alert("Tổng giá điện là: " + tienDien.toFixed(3))