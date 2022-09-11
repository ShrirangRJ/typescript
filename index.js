var a;
a = 123;
console.log(a);
var b;
b = 234;
console.log(b);
var c;
c = 456;
console.log(c);
var d;
d = "i am the string datatype";
document.write(d);
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.setName = function (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    };
    person.prototype.getName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return person;
}());
var p1 = new person();
console.log(p1.firstName);
console.log(p1.setName('virat', 'kohli'));
console.log(p1.firstName);
console.log(p1.getName());
var laptop = /** @class */ (function () {
    function laptop(name, price, processor, screenType) {
        this.name = name;
        this.price = price;
        this.processor = processor;
        this.screenType = screenType;
    }
    return laptop;
}());
var lap1 = new laptop("DELL", 23000, "Intel", "LED");
console.log(lap1.name);
console.log(lap1.price);
console.log(lap1.processor);
var car = {
    type: "Toyota"
};
car.mileage = 2000;
console.log(car);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(coloredRectangle);
var desktop = /** @class */ (function () {
    function desktop(name, price, version) {
        this.name = name;
        this.price = price;
        this.version = version;
    }
    desktop.prototype.installation = function () {
        return "Antivirus is installed";
    };
    return desktop;
}());
var desk1 = new desktop('dell', 24000, "v.1.0.0");
console.log(desk1.version);
console.log(desk1.installation());
console.log(desk1.name);
console.log(desk1.price);
var x = {
    name: "avf",
    price: 1200,
    version: "3.0",
    installation: function () {
        return "antivirus is installed";
    }
};
console.log(x.installation());
console.log(x.name);
console.log(x.price);
console.log(x.version);
//enumetration
var books;
(function (books) {
    books[books["book1"] = 12] = "book1";
    books[books["book2"] = 34] = "book2";
    books[books["book3"] = 45] = "book3";
})(books || (books = {}));
function displayBooks(bookName) {
    if (bookName == "abc") {
        return books.book3;
    }
    else {
        return books.book1;
    }
}
console.log(displayBooks("abc"));
var s = {
    name: "avg",
    version: "4.0",
    price: 1500,
    installation: function () {
        return "antivirus is installed";
    },
    displayStatus: function () {
        return "is is is";
    }
};
console.log(s.name);
