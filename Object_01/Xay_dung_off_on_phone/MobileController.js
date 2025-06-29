let samsung = new Mobile();
let iphone = new Mobile();

samsung.writeMassage("xin chao toi sam sung");
samsung.sendMessage(iphone);

iphone.writeMessage(" hi im iphone");
iphone.sendMessage(samsung);

iphone.writeMessage(" nice to meet you");
iphone.sendMessage(samsung);

samsung.readOutbox() // so tin nhan gui di
iphone.readOutbox() // so tin nhan gui di