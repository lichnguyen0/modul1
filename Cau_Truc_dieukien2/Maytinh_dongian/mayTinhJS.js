let lienket = document.getElementById("lienket");
function inputValue(value) {
    lienket.value += value;
}
function result() {
    let result = eval(lienket.value);
    lienket.value = result;
}
function xoa() {
    lienket.value="";
}