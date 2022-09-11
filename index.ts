var a:number;
a=123;
console.log(a);

var b:number;
b=234;
console.log(b);

var c:number;
c=456;
console.log(c);

var d:string;
d="i am the string datatype";
document.write(d);

class person{

    firstName;
    lastName;
    setName(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;

    }
    getName(){
        return this.firstName+"  "+this.lastName;
    }
}

var p1=new person();
console.log(p1.firstName);
console.log(p1.setName('virat','kohli'));
console.log(p1.firstName);
console.log(p1.getName());

class laptop{
    name:string;
    price:number;
    processor:string;
    screenType:string;
    constructor(name,price,processor,screenType){
        this.name=name;
        this.price=price;
        this.processor=processor;
        this.screenType=screenType;
    }
}

var lap1=new laptop("DELL",23000,"Intel","LED")
console.log(lap1.name);
console.log(lap1.price);
console.log(lap1.processor);


const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car.mileage = 2000;
  console.log(car);

  interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  console.log(coloredRectangle);
  
////  
  
  interface antiVirus{
    name:string;
    price:number;
    version?:string;
    installation():string
  }

  class desktop implements antiVirus{
    name:string;
    price:number;
    version:string;
    constructor(name,price,version){
        this.name=name;
        this.price=price;
        this.version=version;
    }
    installation(): string {
        return "Antivirus is installed";
    }
  }
  var desk1=new desktop('dell',24000,"v.1.0.0");
  console.log(desk1.version);
  console.log(desk1.installation());
  console.log(desk1.name);
  console.log(desk1.price)

  var x:antiVirus={
    name:"avf",
    price:1200,
    version:"3.0",
    installation(){
        return "antivirus is installed"
    }
  }

  console.log(x.installation());
  console.log(x.name);
  console.log(x.price);
  console.log(x.version);

  //enumetration
enum books{
    book1 = 12,
    book2 = 34,
    book3 = 45
}

function displayBooks(bookName:string){
    if(bookName=="abc"){
        return books.book3
    }
    
    else{
        return books.book1
    }
}

console.log(displayBooks("abc"));

////union of types in typescript

interface antiSpyWare{
    name:string,
    price:number,
    version:string,
    displayStatus():string

}
type security= antiVirus & antiSpyWare
var s:security={
    name:"avg",
    version:"4.0",
    price:1500,
    installation(){
       
        return "antivirus is installed"
    },
    displayStatus(){
        return "is is is"
}
}
console.log(s.name);

