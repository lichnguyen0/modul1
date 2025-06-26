class Mobile {
    // khai bao thuoc tinh
    _pin;
    _message;
    _inbox;
    _outbox;
    _status;

    //constructor
    constructor() {
        this._pin = 100;
        this._message = "";
        this._inbox = [];
        this._outbox = [];
        this._status = false;

        //khaibao checkStatus
        //contructor(){

    }

    checkStatus() {

        if (this._status === true) {
            document.write("Dien thoai da bat");
        } else {
            document.write("dang tat")
        }
    }

    turnOnOrOff() {
        this._status = !this._status;
    }

    chargePin() {

    }

    writeMessage(text) {
        this._message = text;

    }

    sendMessage(mobile) {
        this._outbox.push(this._message);
        mobile._inbox.push(this._message);
    }

    readInbox() {
        for (let i = 0; i < this._inbox.length; i++) {
            document.write("Tin nhan da nhan so:" + i + "noi dung" + this._inbox[i]);
        }
    }

    readOutBox() {
        for (let i = 0; i < this._outbox.length; i++) {
            document.write("tin nhan da gui" + i + "noi dung:" + this._outbox[i]);
        }
    }
}
