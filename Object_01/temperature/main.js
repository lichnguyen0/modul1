class Temperature{
    constructor(celsius){
        this.celsius = celsius;
    }
    fahrenheit(){
        return 9/5 * this.celsius +32;
    }
    kelvins(){
        return this.celsius+ 273.15;
    }
}
let temperature = new Temperature(25);
let my_fahrenheit = temperature.fahrenheit();
let my_kelvins = temperature.kelvins();
document.write("Nhiet Do K: " + my_kelvins + "<br>"
    + "Nhiet Do F: " + my_fahrenheit)
