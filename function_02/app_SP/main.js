// Buoc 2
const products = ['Samsung', 'Oppo', 'Apple', 'Xiaomi'];

// Buoc 3
function displayProducts() {
    // Hien thi so san pham
    document.getElementById("countProduct").innerHTML = '<b style="color: lightcoral">' + products.length + ' products</b>';
    // Hien thi du lieu
    const body = document.getElementById("listProducts");
    body.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        // backtick `${expression}`
        // body.innerHTML += '<tr>' +
        //     '<td>' + products[i] + '</td>' +
        //     '<td><button>Edit</button></td>' +
        //     '<td><button>Delete</button></td>' +
        //     '<td></td>' +
        //     '</tr>';
        body.innerHTML += `<tr>
                                <td>${products[i]}</td>
                                <td><button onclick="editProduct(${i})">Edit</button></td>
                                <td><button onclick="deleteProduct(${i})">Delete</button></td>
                                <td></td>
                            </tr>`;
    }
}

// Buoc 4
displayProducts();

function createProduct() {
    products.push(document.getElementById("tenSanPham").value);
    displayProducts();
}

function editProduct(index) {
    products[index] = prompt("Nhập lại tên cần sửa: ", products[index]);
    displayProducts();
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProducts();
}