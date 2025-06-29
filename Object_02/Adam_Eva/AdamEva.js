
function createApple(weight) {
    return {
        weight: weight,

        getWeight: function () {
            return this.weight;
        },

        setWeight: function (weight) {
            this.weight = weight;
        },

        isEmpty: function () {
            return this.weight <= 0;
        },

        decreaseApple: function () {
            if (this.isEmpty()) {
                alert("Táo đã hết rồi");
            } else {
                this.weight--;
            }
        }
    };
}


function createHuman(name, gender, weight) {
    return {
        name: name,
        gender: gender,
        weight: weight,

        getName: function () {
            return this.name;
        },

        setName: function (name) {
            this.name = name;
        },

        getWeight: function () {
            return this.weight;
        },

        setWeight: function (weight) {
            this.weight = weight;
        },

        isMale: function () {
            return this.gender === 1;
        },

        getGender: function () {
            return this.isMale() ? "Male" : "Female";
        },

        say: function (string) {
            console.log(string);
        },

        checkApple: function (apple) {
            return apple.isEmpty();
        },

        eat: function (apple) {
            if (apple.getWeight() > 0) {
                apple.decreaseApple();
                this.weight++;
            } else {
                alert("Táo đã hết");
            }
        },

        getInfo: function (human) {
            alert(human.name + " " + human.weight + " " + human.getGender());
        }
    };
}

let adam = createHuman("adam", 1, 65);
let eva = createHuman("eva", 2, 55);
let apple_1 = createApple(10);

adam.say("I am Adam");
eva.say("I am Eva");

while (!apple_1.isEmpty()) {
    document.write("Adam ăn táo<br>");
    adam.eat(apple_1);

    document.write("Quả táo còn:<br>");
    document.write(apple_1.getWeight() + " đơn vị<br>");
    document.write("Cân nặng của Adam là: " + adam.getWeight() + " đơn vị<br><br>");

    document.write("Eva ăn táo<br>");
    eva.eat(apple_1);

    document.write("Quả táo còn:<br>");
    document.write(apple_1.getWeight() + " đơn vị<br>");
    document.write("Cân nặng là: " + eva.getWeight() + " đơn vị<br><br>");
}
